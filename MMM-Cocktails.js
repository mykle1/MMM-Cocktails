   /* Magic Mirror
    * Module: MMM-Cocktails
    *
    * By Mykle1
    * 
    */
   Module.register("MMM-Cocktails", {

       // Module config defaults.
       defaults: {
           updateInterval: 10 * 60 * 1000, // every ten minutes
           fadeSpeed: 3000,
           initialLoadDelay: 1250, // ms seconds delay
           retryDelay: 2500,
           header: "",
           maxWidth: "100%",
       },
	   

       getStyles: function() {
           return ["MMM-Cocktails.css"];
       },

       // Define start sequence.
       start: function() {
           Log.info("Starting module: " + this.name);

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
           if (this.config.header != "") {
               var header = document.createElement("header");
               header.className = "header";
               header.innerHTML = this.config.header;
               wrapper.appendChild(header);
           }

           var top = document.createElement("div");
           top.classList.add("content");

           var drinkLogo = document.createElement("div");
           var drinkIcon = document.createElement("img");
           drinkIcon.src = cocktails.strDrinkThumb;
           drinkIcon.classList.add("imgDes");
           drinkLogo.appendChild(drinkIcon);
           top.appendChild(drinkLogo);

           var title = document.createElement("h3");
           title.classList.add("small");
           if (cocktails.strGlass === 'vote' || " ") {
               title.innerHTML = cocktails.strDrink + " ";
           } else {
               title.innerHTML = cocktails.strDrink + "  ~  " + cocktails.strGlass;
           }
           top.appendChild(title);


           var des = document.createElement("p");
           des.classList.add("xsmall", "bright");
           des.innerHTML = cocktails.strIngredient1 + " " + cocktails.strMeasure1 + " - " + cocktails.strIngredient2 + " " + cocktails.strMeasure2 + " - " + cocktails.strIngredient3 + " " + cocktails.strMeasure3 + " - " + cocktails.strIngredient4 + " " + cocktails.strMeasure4 + "  " + cocktails.strIngredient5 + "  " + cocktails.strMeasure5 + "  " + cocktails.strInstructions;
           top.appendChild(des);

           wrapper.appendChild(top);
           return wrapper;

       },

       processCocktails: function(data) {
       //  console.log(data); // for checking
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