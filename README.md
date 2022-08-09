# Klik <img src="https://jonneal.dev/js-logo.svg" alt="" width="90" height="90" align="right">

[![npm version][npm-img]][npm-url]
[![npm usage][usage-img]][npm-url]
[![bundle size][bundlejs-img]][bundlejs-url]

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

[npm-url]: https://www.npmjs.com/package/klik
[bundlejs-url]: https://bundlejs.com/?bundle&q=klik

[npm-img]: https://img.shields.io/npm/v/klik?color=%23444&label=&labelColor=%23CB0000&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjE1MCAxNTAgNDAwIDQwMCIgZmlsbD0iI0ZGRiI+PHBhdGggZD0iTTE1MCA1NTBoMjAwVjI1MGgxMDB2MzAwaDEwMFYxNTBIMTUweiIvPjwvc3ZnPg==&style=for-the-badge
[bundlejs-img]: https://img.shields.io/badge/dynamic/json?url=https://bundlejs.com/api?q=klik@1.0.0/global&query=size.totalCompressedSize&color=%23444&labelColor=%233B82F6&label=&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3MDAgNzAwIiBmaWxsPSIjRkZGIj4KCTxwYXRoIGQ9Ik0xNDYgMkExNzEgMTcxIDAgMCAwIDMgMTM5bC0yIDExdjQwMmwyIDExYzE1IDcyIDcxIDEyNSAxNDMgMTM2bDIwOSAxIDE5OS0xIDktMmM3MC0xNiAxMTktNjYgMTM0LTEzNWwyLTEwVjE1MGwtMi0xMkExNzEgMTcxIDAgMCAwIDU2MiAzbC0xMC0yLTE5OS0xQzE4NyAwIDE1MyAwIDE0NiAyem0xODEgMjUxdjM2bDctM2MxMy02IDMzLTkgNTAtNyA0MSA1IDcwIDM0IDgwIDc4IDIgMTIgMiA0MSAwIDUzLTUgMjItMTMgMzgtMjcgNTJhODIgODIgMCAwIDEtNjMgMjZjLTE1IDAtMTkgMC0yNS0yLTEwLTItMTctNi0yNC0xMGwtNS0zdjExaC00NVYyMTdoNTJ2MzZ6bTI5IDcxYy0yMCAzLTMyIDE5LTM1IDQ4LTMgMjUgMyA0OCAxNCA2MCA1IDYgMTMgMTAgMjMgMTEgMjUgNCA0NC05IDUxLTM2bDMtMTljMC0xNy0xLTI3LTctMzktOS0xOS0yNi0yOC00OS0yNXoiLz4KPC9zdmc+&style=for-the-badge
[usage-img]: https://img.shields.io/badge/dynamic/json?url=https://api.npmjs.org/downloads/point/last-week/klik&query=downloads&label=⇓+week&color=%23444&labelColor=%23EEd100&style=for-the-badge
