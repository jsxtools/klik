# Klik <img src="https://jonneal.dev/js-logo.svg" alt="" width="90" height="90" align="right">

[![NPM Version][npm-img]][npm-url]

**Klik** lets you add keyboard `click` events to any element.

Use this when you make clickable divs in JavaScript.

```js
// 😭
div = document.createElement("div")
div.role = "button"
div.tabIndex = 0

// 🤩
klik.on(div)
```

[**Open this example on CodePen**](https://codepen.io/jonneal/pen/QWmvYpz?editors=1010)

What will it cost you?
The script contributes up to 345 bytes, 228 bytes minified, or 163 bytes gzipped.

### Usage

Include **Klik** in your project.

```js
import "https://unpkg.com/klik"
```

Alternatively, use it as a global `klik` object.

```html
<script src="https://unpkg.com/klik/global"></script>
```

Alternatively, use it with npm:

```js
// npm install klik
import "klik"
```

That’s it. Now give your clickable things proper keyboard click behavior.

### How it works

**Klik** adds a shared event listener to the `keydown` and `keyup` events on a given element. This listener fires the `click` event when any correct keyboard “click” occurs, which is:

- A `keydown` event triggered by the **Enter** key.
- A `keyup` event triggered by the **Space** key, but only without the **Alt** key.

**Klik** uses the same event listener on all given elements and events to maximize memory efficiency.

[npm-img]: https://img.shields.io/npm/v/klik.svg
[npm-url]: https://www.npmjs.com/package/klik