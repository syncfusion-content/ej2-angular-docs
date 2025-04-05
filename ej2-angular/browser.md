---
layout: post
title: Browser in Angular Browser md component | Syncfusion
description: Learn here all about Browser in Syncfusion Angular Browser md component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Browser 
documentation: ug
domainurl: ##DomainURL##
---

# Browser Compatibility in Angular

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI components are compatible with modern browsers. The following versions are supported:

|    Chrome    |    Firefox    |    Opera     |    Edge    |    IE      |    Safari    |    iOS    |    Android    |    Windows Mobile    |
|:--------------:|:---------------:|:--------------:|:------------:|:------------:|:--------------:|:-----------:|:---------------:|:--------------:|
|    63+    |    58+    |    50+    |    13+    |    11+    |    9+    |    9+    |    4.4+    |    IE 11+    |

## Required Polyfills

A polyfill is code that provides modern functionality on older browsers that lack native support.

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI components are compatible with Internet Explorer 11 (IE 11) when using the ES6 Promise polyfill.

## Ways to Add Polyfills

There are two primary methods to integrate polyfills into your application:

### Polyfill with CDN

Add the ES6 Promise polyfill to your HTML file using the following CDN links:

```html
<!-- Automatically provides/replaces `Promise` if missing or broken. -->
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script>
<!-- Minified version of `es6-promise-auto` below. -->
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
```

### Polyfill with NPM

You can also install the ES6 Promise polyfill using npm.

To install via npm, use the following command:

```bash
yarn add es6-promise
# or
npm install es6-promise
```

Incorporate it into your code as shown below:

```typescript
var Promise = require('es6-promise').Promise;
```

For additional details, refer to [this link](https://github.com/stefanpenner/es6-promise).