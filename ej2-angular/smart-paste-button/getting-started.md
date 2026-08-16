---
layout: post
title: Getting Started with Angular Smart Paste Button | Syncfusion
description: Learn how to get started with the Syncfusion Angular Smart Paste Button component. Explore setup, features, examples, and customization options.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Smart Paste Button

The `Smart Paste Button` is a user interface component designed to simplify and improve the experience of pasting text into form fields. It comes with smart features such as automatic text formatting, validation, and integration with various form controls. It is especially useful in applications where users frequently paste text from other sources and where data consistency is important.

This section explains how to create a simple Smart Paste Button and demonstrates its basic usage in an Angular environment.

## Prerequisites

* [OpenAI](https://github.com/syncfusion/smart-ai-samples/blob/master/typescript/README.md#openai) or [Azure OpenAI Account](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource)
* [System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI components](https://ej2.syncfusion.com/angular/documentation/system-requirement)

## Dependencies

The list of dependencies required to use the SmartPasteButton module in your application is given below:

 ```typescript
|-- @syncfusion/ej2-angular-buttons
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
```

## Setup Angular environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to set up your Angular applications. To install Angular CLI, use the following command.

```
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using the following Angular CLI command.

```
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Button package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler (Angular's legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (`>=20.2.36`) have been moved to the Ivy distribution to support the Angular [Ivy](https://angular.dev/tools/libraries/angular-package-format) rendering engine, and the packages are compatible with Angular version 12 and above. To download the package, use the following command.

Add [`@syncfusion/ej2-angular-buttons`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons/v/27.1.50) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package, use the following command.

Add [`@syncfusion/ej2-angular-buttons@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons/v/27.1.50-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-buttons:"27.1.50-ngcc"
```

> Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Smart Paste Button component

Modify the template in the `app.component.ts` file to render the SmartPasteButtonModule module.

 ```typescript

import { SmartPasteButtonModule } from '@syncfusion/ej2-angular-buttons'
import { Component } from '@angular/core';

@Component({
imports: [
      SmartPasteButtonModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <!-- To render Smart Paste Button. -->
               <button ejs-smart-paste-button>Smart Paste Button</button></div>`
})

export class AppComponent { }

```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/angular/documentation/appearance/overview#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/angular/documentation/appearance/overview).

This example uses the `Tailwind 3` theme for the Smart Paste Button from the theme package. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% endtabs %}

Add Smart Paste Button component's styles as given below in `style.css`.

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/button/index.css";

{% endhighlight %}
{% endtabs %}

## Running the application

Run the application in the browser using the following command:

```
ng serve
```
  
The following is the output of the featured sample:

![Angular-smart-paste-button](images/smartpaste.gif)

> [Angular Smart Paste Button Sample in github](https://github.com/syncfusion/smart-ai-samples/tree/master/angular/src/app/smart-paste)
