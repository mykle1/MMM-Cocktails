# MMM-Cocktails
A MagicMirror module that teaches you how to make mixed drinks

## How we look - from 1,000,000 miles away!

![](pix/7.gif)
##
Every day you get a new drink with instructions on how to make it, including the ingredients, the glass it should be served in, and a picture of what it should look like

## Dependencies

* An installation of [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)
* npm
* [request](https://www.npmjs.com/package/request)


## Info

* No API key is necessary but these limits apply.
* 30 requests per IP address per hour
* 50 requests per IP address per day.

## Installation

* Clone this repo into `~/MagicMirror/modules` directory.
* `cd MMM-Cocktails`
* `npm install` in ~/MagicMirror/modules/MMM-Cocktails directory.

## Add to Config.js

    {
        module: "MMM-Cocktails",
        position: "bottom_center",
        config: {
            rotateInterval: 5000,
            MaxWidth: "50%",
            MaxHeight: "50%",
        }
    },

## Config Options

| **Option** | **Default** | **Description** |
| --- | --- | --- |
| `updateInterval` | `1800000` | Every 30 minutes = 48. DO NOT exceed 50 per day. |
| `animationSpeed` | `0` | The speed at which each image loads in ms. |
| `fadeSpeed` | `0` | The speed at which each image fades in ms. |
| `rotateInterval` | `3000` | The speed at which the images rotate in ms. |
| `initialLoadDelay` | `2500` | Module load delay in ms |
| `retryDelay` | `2500`  |Delay to retry fetching data. |
| `useHeader` | false | Must be set to true if you want a header |
| `header` | `"Your Header"` | Add header between the `""` if desired. |
| `MaxWidth` | `"50%"`|  Choose width of image between the `""` (Ex: `200px` or '12%'). |
| `MaxHeight` | `"50%"` | Choose height of image between the `""` (Ex: `200px` or '12%').. |
