/* Magic Mirror
    * Module: MMM-Cocktails
    *
    * By Mykle1/ Original code by cowboysdude - node_helper written by: strawberry 3.141
    * 
    */
const NodeHelper = require('node_helper');
const request = require('request');
const fs = require('fs');

module.exports = NodeHelper.create({

    start: function() {
        this.cocktails = {
            timestamp: null,
            data: null
        };
        this.path = "modules/MMM-Cocktails/cocktails.json";
        if (fs.existsSync(this.path)) {
            var temp = JSON.parse(fs.readFileSync(this.path, 'utf8'));
            if (temp.timestamp === this.getDate()) {
                this.cocktails = temp;
            }
            //console.log(temp);
        }

    },

    getCocktails: function(url) {
        request({
            url: url,
            method: 'GET'
        }, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                var result = JSON.parse(body).drinks[0];
                this.sendSocketNotification('COCKTAILS_RESULT', result);
                this.cocktails.timestamp = this.getDate();
                this.cocktails.data = result;
                this.fileWrite();
            }
        });
    },

    fileWrite: function() {
        fs.writeFile(this.path, JSON.stringify(this.cocktails), function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("The Cocktails file was saved!");
        });
    },

    getDate: function() {
        return (new Date()).toLocaleDateString();
    },

    //Subclass socketNotificationReceived received.
    socketNotificationReceived: function(notification, payload) {
        if (notification === 'GET_COCKTAILS') {
            if (this.cocktails.timestamp === this.getDate() && this.cocktails.data !== null) {
                this.sendSocketNotification('COCKTAILS_RESULT', this.cocktails.data);
            } else {
                this.getCocktails(payload);
            }
        }
    }

});