---
layout: post
title: Resolve Content Security Policy in ##Platform_Name## | Syncfusion
description: Learn here all about Content Security Policy in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# How to resolve Content Security Policy (CSP) errors

The integration of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components into your application can sometimes encounter issues when implementing a strict Content Security Policy (CSP). Resolving these issues is essential to ensuring both the security of your application and the full functionality of the components.

## Why CSP Matters

Content Security Policy is a security feature that helps prevent a variety of attacks, such as Cross-Site Scripting (XSS) and data injection attacks. CSP works by allowing you to define which dynamic resources are allowed to load. This can sometimes block resources that are essential for the functioning of third-party libraries, such as Syncfusion<sup style="font-size:70%">&reg;</sup> components.

## Image loading

 One of the common challenges with enabling a strict CSP in your application is the loading of images, particularly with Syncfusion<sup style="font-size:70%">&reg;</sup>'s licensing banner. This banner leverages images in **base64** format for its display, which is often disallowed under a stringent CSP due to security policies.

### Resolution

To allow base64 images and resolve CSP-related issues, you can do the following:

1. **Adjust CSP Rules in Meta Tag**: You need to update your CSP rules to permit images in base64 format. This can be achieved by adding the `img-src data:` directive to the CSP settings in your `<meta>` tags. 

2. **Register License Key**: Consider registering the Syncfusion<sup style="font-size:70%">&reg;</sup> license key in your application to ensure compliance and additional support. You can learn more about the process [here](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-registration).
