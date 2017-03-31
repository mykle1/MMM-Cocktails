# MMM-Cocktails
A MagicMirror module that teaches you how to make mixed drinks.

## Example 

![](pic.JPG)
##
Every day you get a new drink with instructions on how to make it, including the ingredients, the glass it should be served in, and a picture of what it should look like. Think of it as "The Drink of the Day!"

## Info

* For best results in left or right regions of your MagicMirror you can constrain the size using maxWidth
* For best results in top_bar/bottom_bar/thirds increase maxWidth to stretch across your mirror and remove header
* No API key is necessary at the moment

## Installation

* `git clone https://github.com/mykle1/MMM-Cocktails.git` into the `~/MagicMirror/modules` directory.

## Add to Config.js

    {
        module: "MMM-Cocktails",
        position: "bottom_center", // Small footprint - Fits anywhere.
        config: {
            maxWidth: "350px",
            header: "I drink to make you look better!"
        }
    },

## Config Options

| **Option** | **Default** | **Description** |
| --- | --- | --- |
| `maxWidth` | `350px` | Constrain it or stretch it across the top_bar or bottom_bar. |
| `header` | `text` | Anything that you want it to say. |
| `animationSpeed` | `3000` | The speed at which the new cocktail fades in ms. |
| `updateInterval` | `60*60*1000` | 1 hour. New cocktail at midnight. |
| `initialLoadDelay` | `1250` | Module load delay in ms |
| `retryDelay` | `2500`  |Delay to retry fetching data. |
