# MMM-Cocktails
A MagicMirror module that teaches you how to make all kinds of mixed drinks.

## Examples

maxWidth: 400px, colored title text. Good for left and right regions.

![](pic.JPG)

maxWidth: 1050px, colored title text. Increased text sizes. top/bottom_bar, upper/lower_third, middle_center.

![](stretch.JPG)

##
Every day you get a new drink with instructions on how to make it, including the ingredients, the glass it should be served in, and a picture of what it should look like. Think of it as "The Drink of the Day!"

## Info

* Completely configurable. The .css file included helps you modify size of image, text, color, any way you like it.
* For best results in left or right regions constrain the size using maxWidth and the .css examples provided.
* For best results in top_bar/bottom_bar/thirds increase maxWidth to stretch across your mirror and modify css.
* Need a color chart? No problem. http://htmlcolorcodes.com/color-picker/
* No API key is necessary at the moment.

## Installation

* `git clone https://github.com/mykle1/MMM-Cocktails.git` into the `~/MagicMirror/modules` directory.

## Add to Config.js

    {
        module: "MMM-Cocktails",
        position: "bottom_center", // Editable footprint - Fits anywhere.
        config: {
            maxWidth: "400px",
            header: ""
        }
    },

## Config Options

| **Option** | **Default** | **Description** |
| --- | --- | --- |
| `maxWidth` | `400px` | Constrain, or stretch across top_bar,bottom_bar, thirds. |
| `header` | `text` | I'm not a fan of headers but the option is yours. |
| `animationSpeed` | `3000` | The speed at which the new cocktail fades in ms. |
| `updateInterval` | `60*60*1000` | 1 hour. New cocktail at midnight. |
| `initialLoadDelay` | `1250` | Module load delay in ms. |
| `retryDelay` | `2500`  |Delay to retry fetching data. |
