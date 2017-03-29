/* Magic Mirror
 * Module: MMM-Cocktails
 *
 * By Mykle1  
 * 
 */
const NodeHelper = require('node_helper');
const request = require('request');


module.exports = NodeHelper.create({

    start: function() {
        console.log("Starting module: " + this.name);
    },


    getCocktails: function(url) {
        request({
            url: "http://www.thecocktaildb.com/images/media/drink",
            method: 'GET'
        }, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                var result = JSON.parse(body);
                this.sendSocketNotification('Cocktails_RESULTS', result);
               
            }
        });
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === 'GET_Cocktails') {
            this.getCocktails(payload);
        }
    }
});