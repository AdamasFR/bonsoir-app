# bonsoir.js [![npm version](https://badge.fury.io/js/bonsoir.js.svg)](https://badge.fury.io/js/bonsoir.js)
<a href="https://www.buymeacoffee.com/vGOXU0m" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

Ou Bonjour ? O Buenas Tardes ? Or Good evening ?

It happens to everyone. You want to greet somebody and you say "Good Day !" and they respond "Good Evening" because it's 18h30 and, yeah, it's night already. It's weird right?

Your website don't usually make this distinction when it greets people, it just goes "Hello !" and that's it. What if you could use the **ABSOLUTE POWER** of Javascript to serve the right word, in the right language, at the right time ?!! Yep, that's it, we finally did it.

## Introducing : The Absolute Power of Javascript

With the **ABSOLUTE POWER OF JAVASCRIPT** and **bonsoir.js** you can now serve the right salutation in any langage you want (as long as this langage is French (hop to your PR to add whatever you want)) at any time of the day.

Don't forget all those people that don't enable JS and use a default salutation in plain old HTML, BUT, then sprinkle some BONJOUR with that sweet sweet javascript that everybody likes!

I need to sleep.

## Usage

```html
<script src="../localization/bonsoir-fr.js"></script>
<script src="../bonsoir.js"></script>
```

```javascript
// Return "Bonjour" !
var bonsoir = new Bonsoir(bonsoirFR);
bonsoir.salutation(); // returns Bonjour
```
