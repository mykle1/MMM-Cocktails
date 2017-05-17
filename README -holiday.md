## MMM-Holiday
A MagicMirror module that displays the holidays for your country.

## Examples

![](Picture1.JPG)

![](Picture2.JPG)

![](Picture3.JPG)

## Info

* The .css file included helps you modify color of the text.
* Need a color chart? - http://htmlcolorcodes.com/color-picker/
* No API key is necessary.

## Simple Installation!

* `git clone https://github.com/cowboysdude/MMM-Holiday` into the `~/MagicMirror/modules` directory.
* `cd ~MagicMirror/modules/MMM-Holiday`
* type `npm install`

## Config.js entry and options

    {
        module: 'MMM-Holiday',
        position: 'top_left',
        config: {
            maxWidth: "55%",
            useHeader: true,
            header: "Upcoming Holidays",
            updateInterval: 60 * 60 * 1000, // 60 minutes
            animationSpeed: 6000,
            countryCode: "jpn",
            days: "365"  // Days to look forward for holidays (1 to 365)
        }
    },

## Select your country code for config.js from the list below.

* Angola - ago
* Australia - aus
* Austria - aut
* Belgium - bel
* Brazil - bra
* Canada - can
* China - chn
* Colombia - col
* Croatia - hrv
* Czech Republic - cze
* Denmark - dnk
* England - eng
* Estonia - est
* Finland - fin
* France - fra
* Germany - deu
* Greece - grc
* Hong Kong - hkg
* Hungary - hun
* Iceland - isl
* Ireland - irl
* Isle of Man - imn
* Israel - isr
* Italy - ita
* Japan - jpn
* Latvia - lva
* Lithuania - ltu
* Luxembourg - lux
* Mexico - mex
* Netherlands - nld
* New Zealand - nzl
* Northern Ireland - nir
* Norway - nor
* Poland - pol
* Portugal - prt
* Romania - rou
* Russia - rus
* Serbia - srb
* Slovakia - svk
* Slovenia - svn
* South Africa - zaf
* South Korea - kor
* Scotland - sct
* Sweden - swe
* Ukraine - ukr
* United States of America - usa
* Wales - wls

