---
layout: post
title: Getting started with Angular Barcode component | Syncfusion®
description:  Checkout and learn about Getting started with Angular Barcode component of Syncfusion Essential® JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Barcode Component

This section explains how to create your first barcode and introduces the basic features of the Barcode component.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

## Prerequisites

[System requirements for Syncfusion Angular UI components](https://ej2.syncfusion.com/angular/documentation/system-requirement)

## Dependencies

The following dependencies are required to use the `Barcode` component in your application:

```typescript
|-- @syncfusion/ej2-angular-barcode-generator
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
```

## Setup Angular Environment

Use [Angular CLI](https://github.com/angular/angular-cli) to set up your Angular applications. Install Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Generate a new Angular project using the Angular CLI command below.

```bash
ng new my-barcode-app
```

When prompted, choose your preferred stylesheet format:

```bash
? Which stylesheet system would you like to use?
> CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
  Tailwind CSS    [ https://tailwindcss.com                                        ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org                                             ]
```

By default, CSS is used. For SCSS, see the [Sass guide](https://ej2.syncfusion.com/angular/documentation/common/how-to/sass).

Then navigate to the project directory:

```bash
cd my-barcode-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Barcode package

All Essential JS 2 packages are available on [npmjs.com](https://www.npmjs.com/~syncfusionorg). Install the Angular Barcode package:

```bash
npm install @syncfusion/ej2-angular-barcode-generator --save
```

N> The --save flag adds the package to the dependencies section of `package.json`.

## Registering Barcode Module

Import the Barcode modules in `src\app\app.ts` from the package `@syncfusion/ej2-angular-barcode-generator` and enable it for your component.

```typescript
import { BarcodeGeneratorModule,QRCodeGeneratorModule,DataMatrixGeneratorModule } from '@syncfusion/ej2-angular-barcode-generator'
import { Component } from "@angular/core";

@Component({
selector: 'app-root',
//Import Barcode modules
imports: [  BarcodeGeneratorModule, QRCodeGeneratorModule ,DataMatrixGeneratorModule  ],
// specifies the template string for the barcode component
template: `<ejs-barcodegenerator  id="barcode" width="200px" height="150px" value="123456789">`,
})
export class App {}
```

## Render the Barcode component

Add the `<ejs-barcodegenerator>` selector to the template in `src\app\app.ts`, and specify a width and height  to ensure the barcode renders correctly.

```typescript
import { BarcodeGeneratorModule, } from '@syncfusion/ej2-angular-barcode-generator'
import { Component } from "@angular/core";;

@Component({
selector: 'app-root',
//Import Barcode module
imports: [ BarcodeGeneratorModule ],
// specifies the template string for the barcode component
template: `<ejs-barcodegenerator  id="barcode" width="200px" height="150px" value="123456789">`,
})
export class App {}
```

## Run the Application

Start the dev server:

```bash
npm start
```

Open the browser using the printed URL to see the Barcode.

N> The selector specified in the **@Component** decorator of the **app.ts** file must match the custom element tag used in the `index.html` file. For example, if your @Component decorator includes the selector "app-root", your `index.html` file should include an element `<app-root></app-root>`.

## Adding Barcode Generator control

Start adding the Syncfusion® Angular Barcode Generator component to the application. The following code demonstrates how to create a basic linear barcode in the `app.component.ts` and corresponding template files:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/getting-started/initialize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/getting-started/initialize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/getting-started/initialize-cs1" %}

The above example creates a basic Code 128 barcode. Linear barcodes are ideal for product identification, inventory management, and retail applications.

## Adding QR Generator control

QR codes provide two-dimensional data encoding capabilities and are perfect for storing URLs, contact information, or other text data. Add a QR code to the Angular Barcode Generator component as shown below:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/getting-started/qrcode-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/getting-started/qrcode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/getting-started/qrcode-cs1" %}

QR codes are commonly used for mobile applications, marketing campaigns, and quick data sharing scenarios.

## Adding Data Matrix Generator control

Data Matrix codes offer high data density in a compact square format, making them suitable for small items and applications requiring space efficiency. Add a Data Matrix code to the Angular Barcode Generator component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/getting-started/datamatrix-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/getting-started/datamatrix-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/getting-started/datamatrix-cs1" %}
## See also

* [Angular Barcode Generator](https://www.syncfusion.com/angular-components/angular-barcode) - Feature tour and component overview
* [Angular Barcode Generator example](https://ej2.syncfusion.com/angular/demos/#/material/barcode/default-functionalities) - Live demonstration of barcode rendering capabilities