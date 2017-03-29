/* Magic Mirror
 * Module: MMM-Cocktails
 *
 * By Mykle1
 * 
 */
Module.register("MMM-Cocktails", {

    // Module config defaults.
    defaults: {
    	fadeSpeed: 0,
    	updateInterval: 60 * 60 * 1000,
        animationSpeed: 0,
        initialLoadDelay: 1250,  
        retryDelay: 2500, 
        useHeader: false, 
        header: "********Please set header txt in config.js***** see instructions",
        MaxWidth: "50%",
        MaxHeight: "50%",
        rotateInterval: 5 * 1000,
        
    },

    // Define required scripts.  The standard :)ok
    getScripts: function() {
        return ["moment.js"];
    },

    start: function() {
        Log.info("Starting module: " + this.name);
        
        // Set locale.
        this.today = "";
        this.cocktails = {};
        this.activeItem = 0;
        this.rotateInterval = null;
        this.scheduleUpdate();
    },

    getDom: function() {
    	
        var wrapper = document.createElement("div");
        wrapper.className = "wrapper";

        
        if (this.config.useHeader === true) {
            var header = document.createElement("header");
            header.className = "xsmall bright";
            header.innerHTML = this.config.header;
            wrapper.appendChild(header);
        }
        
        var hkeys = Object.keys(this.cocktails);
			if(hkeys.length > 0){
           	if(this.activeItem >= hkeys.length){
				this.activeItem = 0;
			}
         var cocktails = this.cocktails[hkeys[this.activeItem]];
        
			var cocktailsImg = cocktails.image;
	console.log(cocktailsImg+".jpg");

        var cocktailsPhoto = document.createElement("div");
        var daily = moment().subtract(0, "days").format('YYYY/MM/DD');
        cocktailsPhoto.innerHTML = '<img src="http://www.thecocktaildb.com/images/media/drink/'+cocktailsImg+'.jpg"  width="'+this.config.maxWidth+'" height="'+this.config.maxHeight+'">';
        }
        wrapper.appendChild(cocktailsPhoto);
        
        
        return wrapper;
    },

    processCocktails: function(data) {
        this.today = data.Today;
        this.cocktails = data;
        this.loaded = true;
    },
    
     scheduleCarousel: function() {
         console.log("Showing Cocktails");
         this.rotateInterval = setInterval(() => {
             this.activeItem++;
             this.updateDom(this.config.animationSpeed);
         }, this.config.rotateInterval);
     },

    scheduleUpdate: function() {
        setInterval(() => {
            this.getCocktails();
        }, this.config.updateInterval);
        this.getCocktails(this.config.initialLoadDelay);
        var self = this;
    },


    getCocktails: function() {
        this.sendSocketNotification('GET_Cocktails');

    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === "Cocktails_RESULTS") {
            this.processCocktails(payload);
            if(this.rotateInterval == null){
                 this.scheduleCarousel();
             }
            this.updateDom(this.config.fadeSpeed);
        }
        this.updateDom(this.config.initialLoadDelay);
    },

});