![logo](logo.png?raw=true)
# bonsoir.js [![npm version](https://badge.fury.io/js/bonsoir.js.svg)](https://badge.fury.io/js/bonsoir.js)
<a href="https://www.buymeacoffee.com/vGOXU0m" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

Ou Bonjour ? O Buenas Tardes ? Or Good evening ?

It happens to everyone. You want to greet somebody and you say "Good Day !" and they respond "Good Evening" because it's 18h30 and, yeah, it's night already. It's weird right?

Your website don't usually make this distinction when it greets people, it just goes "Hello !" and that's it. Well, with some Javascript (we all want some Javascript in our lives), you can actually get the right greeting at the right time !

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
