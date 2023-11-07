---
layout: post
title: Getting started with Angular Barcode Component | Syncfusion
description: Learn here all about getting started with Syncfusion Essential Angular Barcode component, it's elements and more.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Barcode Component

This section explains you the steps required to create a simple barcode and demonstrate the basic usage of the barcode control.

## Setup Angular Environment

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion Barcode Generator package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-barcode-generator`](https://www.npmjs.com/package/@syncfusion/ej2-angular-barcode-generator/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-barcode-generator --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-barcode-generator@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-barcode-generator/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-barcode-generator@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-barcode-generator:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Syncfusion Barcode Generator package

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

To install Barcode Generator component, use the following command.

```bash
npm install @syncfusion/ej2-angular-barcode-generator --save
```

> The **--save** will instruct NPM to include the barcode generator package inside of the `dependencies` section of the `package.json`.

## Registering Barcode Generator Module

Import Barcode Generator module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-barcode-generator` [src/app/app.module.ts].

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BarcodeGeneratorAllModule,QRCodeGeneratorAllModule,DataMatrixGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ej2-angular-Barcode Generator module into NgModule
  imports:      [ BrowserModule, BarcodeGeneratorAllModule, QRCodeGeneratorAllModule ,DataMatrixGeneratorAllModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

## Adding Barcode Generator control

You can start adding Essential JS 2 barcode-generator component to the application. To get started, add the Angular Barcode component in `app.ts` and `index.html` files using the following code.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/getting-started/initialize-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/barcode/getting-started/initialize-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/getting-started/initialize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/getting-started/initialize-cs1" %}

## Adding QR Generator control

You can add the QR code in our Angular Barcode Generator component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/getting-started/qrcode-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/barcode/getting-started/qrcode-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/getting-started/qrcode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/getting-started/qrcode-cs1" %}

## Adding Datamatrix Generator control

You can add the datamatrix code in our Angular Barcode Generator component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/getting-started/datamatrix-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/barcode/getting-started/datamatrix-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/getting-started/datamatrix-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/getting-started/datamatrix-cs1" %}

> You can refer to our [Angular Barcode Generator](https://www.syncfusion.com/angular-components/angular-barcode) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Barcode Generator example](https://ej2.syncfusion.com/angular/demos/#/material/barcode/default-functionalities) that shows how to render the Barcode in Angular.