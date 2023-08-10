---
layout: post
title: How to resolve the Content Security Policy in  ##Platform_Name## Common control | Syncfusion
description: Learn here all about Content Security Policy in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# How to resolve Content Security Policy (CSP) errors

Enabling the strict Content Security Policy (CSP) may cause the following issue with the Syncfusion Angular components in your application.

## Image loading

Syncfusion license banner utilize the image from **base64**, which is not allowed on strict CSP-enabled sites. To overcome this restriction, it is necessary to add the [`img-src data:`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) directive in the meta tag or consider [registering the license key](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-registration).