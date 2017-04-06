   /* Magic Mirror
    * Module: MMM-Cocktails
    *
    * By Mykle1
    * 
    */
   
Module.register("MMM-Cocktails", {

       // Module config defaults.
       defaults: {
           updateInterval: 60*60*1000, // every hour
           animationSpeed: 1000,
           initialLoadDelay: 1250, // ms seconds delay
           retryDelay: 2500,
           header: "I drink so other people seem interesting",
           maxWidth: "400px",
       },

       // Define required scripts.
       getScripts: function() {
           return ["moment.js"];
       },
       
       getStyles: function() {
           return ["MMM-Cocktails.css", "font-awesome.css"];
       },

       // Define start sequence.
       start: function() {
           Log.info("Starting module: " + this.name);

           // Set locale.
           moment.locale(config.language);

           this.today = "";
           this.Cocktails = [];
           this.url = "http://www.thecocktaildb.com/api/json/v1/1/random.php";        
           this.scheduleUpdate();
       },

      getDom: function() {

         var cocktails = this.cocktails;

         var wrapper = document.createElement("div");
         wrapper.className = "wrapper";
         wrapper.style.maxWidth = this.config.maxWidth;
         

         if (!this.loaded) {
             wrapper.innerHTML = "Mixing your drink...";
             wrapper.className = "bright light small";
             return wrapper;
         }
         if (this.config.header != "" ){
         var header = document.createElement("header");
         header.className = "header";
         header.innerHTML = this.config.header;
         wrapper.appendChild(header);
		 }
		 
         var top = document.createElement("div");
         top.classList.add("content");

         var newsLogo = document.createElement("div");
         var newsIcon = document.createElement("img");
         newsIcon.src = cocktails.strDrinkThumb;
         newsIcon.classList.add("imgDes");
         newsLogo.appendChild(newsIcon);
         top.appendChild(newsLogo);

         var title = document.createElement("h3");
         title.classList.add("small");
	 if (cocktails.strGlass === 'vote' || " "){
	 title.innerHTML = cocktails.strDrink+ " ~ Use your favorite glass";	
	 } else {	
         title.innerHTML = cocktails.strDrink + "  ~  " + cocktails.strGlass;
	 }
         top.appendChild(title);


         var des = document.createElement("p");
         //des..classList.add("dimmed", "light", "small");
         des.classList.add("xsmall", "bright");
         //var str = cocktails.strInstructions;
         //if(str.length > 10) str = str.substring(0,190);
         des.innerHTML = cocktails.strIngredient1 + " " + cocktails.strMeasure1 + " - " + cocktails.strIngredient2 + " " + cocktails.strMeasure2 + " - " + cocktails.strIngredient3 + " " + cocktails.strMeasure3 + " - " + cocktails.strIngredient4 + " " + cocktails.strMeasure4 + "  " + cocktails.strIngredient5 + "  " + cocktails.strMeasure5 + "  " + cocktails.strInstructions;
         //des.innerHTML = str + "...";
         top.appendChild(des);

         wrapper.appendChild(top);
         return wrapper;

     },

     processCocktails: function(data) {
         //	console.log(data);
         this.today = data.Today;
         this.cocktails = data;
         this.loaded = true;
     },

     scheduleUpdate: function() {
         setInterval(() => {
             this.getCocktails();
         }, this.config.updateInterval);

         this.getCocktails(this.config.initialLoadDelay);
     },


     getCocktails: function() {
         this.sendSocketNotification('GET_COCKTAILS', this.url);
     },

     socketNotificationReceived: function(notification, payload) {
         if (notification === "COCKTAILS_RESULT") {
             this.processCocktails(payload);
             this.updateDom(this.config.fadeSpeed);
         }
         this.updateDom(this.config.initialLoadDelay);
     },

 });
