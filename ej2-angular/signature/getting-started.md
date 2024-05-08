---
layout: post
title: Getting started with Angular Signature component | Syncfusion
description:  Checkout and learn about Getting started with Angular Signature component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Signature component

This section explains how to create a simple Signature, and demonstrate the basic usage of the Signature module in an Angular environment.

## Dependencies

The list of dependencies required to use the Signature module in your application is given below:

```javascript
|-- @syncfusion/ej2-angular-inputs
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-base
```

## Setup Angular environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to setup your Angular applications. To install Angular CLI use the following command.

```
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using below Angular CLI command.

```
ng new my-app
cd my-app
```

## Installing Syncfusion Signature  Package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-inputs`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-inputs --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-inputs@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-inputs@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-inputs:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Signature module

Import Signature module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-inputs`.

```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Imported Syncfusion Signature module from inputs package.
import { SignatureModule } from '@syncfusion/ej2-angular-inputs';
import { AppComponent } from './app.component';
@NgModule({
    imports: [BrowserModule, SignatureModule], // Registering EJ2 Signature Module.
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

## Adding Syncfusion Signature component

Modify the template in `app.component.ts` file with `ejs-signature` to render the Signature component.

```javascript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render Signature. -->
             <canvas ejs-signature #signature id="signature" ></canvas>`
})
export class AppComponent {}
```

## Adding CSS reference

Add Signature component's styles as given below in `style.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a basic `Signature` component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/signature/getting-started/default-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/signature/getting-started/default-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/signature/getting-started/default-cs2" %}
