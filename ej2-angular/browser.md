---
layout: post
title: Browser in Angular Browser md Component | Syncfusion
description: Learn here all about Browser in Syncfusion Essential Angular Browser md component its elements, and more.
platform: ej2-angular
control: Browser 
documentation: ug
domainurl: ##DomainURL##
---

# Browser compatibility in Angular

The Syncfusion Angular UI components are supported only in modern browsers. This includes the following versions.

|    Chrome    |    Firefox    |    Opera     |    Edge    |    IE      |    Safari    |    IOS    |    Android    |    Windows   Mobile    |
|:--------------:|:---------------:|:--------------:|:------------:|:------------:|:--------------:|:-----------:|:---------------:|:--------------:|
|    63+    |    58+    |    50+    |    13+    |    11+    |    9+    |    9+    |    4.4+    |    IE 11+    |

## Required Polyfills

A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

The Syncfusion Angular UI components are supported in IE 11 browser with ES6 Promise polyfill.

## Ways to add Polyfills

There are two ways to add polyfill in application,

### Polyfill with CDN

You can add ES6 Promise polyfill using below CDN in your HTML file.

```typescript
<!-- Automatically provides/replaces `Promise` if missing or broken. -->
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script>
<!-- Minified version of `es6-promise-auto` below. -->
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>

```

### Polyfill with NPM

ES6 Promise polyfill can also be installed in npm.

You can use below command to install via npm.

```typescript
yarn add es6-promise
(or)
npm install es6-promise

```

You can use like below in your code.

```typescript
var Promise = require('es6-promise').Promise;

```

For further details, refer to the link [here](https://github.com/stefanpenner/es6-promise).