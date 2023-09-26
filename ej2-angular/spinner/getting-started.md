---
layout: post
title: Getting started with Angular Spinner component | Syncfusion
description:  Checkout and learn about Getting started with Angular Spinner component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Spinner component

This section explains the steps to create a simple **Spinner** and configure its functionalities in Angular.

## Getting Started with Angular CLI

The following section explains the steps required to create a simple angular-cli application and how to configure the `Spinner'.

### Prerequisites

To get started with Syncfusion Angular UI Components, make sure that you have compatible versions of Angular and TypeScript.

* Angular : 6+
* TypeScript : 2.6+

### Setting up an Angular project

Angular provides an easiest way to setup project using Angular CLI [Angular CLI](https://github.com/angular/angular-cli) tool.

Install the CLI application globally in your machine.

```javascript

  npm install -g @angular/cli

```

### Create a new application

```javascript

  ng new syncfusion-angular-app

```

Once you have executed the above command you may ask for following options,
* Would you like to add Angular routing?
* Which stylesheet format would you like to use?

By default, it install the CSS style base application. To setup with SCSS, pass --style=SCSS argument on create project.

Example code snippet.

```javascript

  ng new syncfusion-angular-app --style=SCSS

```

Use below command to Navigate into the created project folder.

```javascript

  cd syncfusion-angular-app

```

## Installing Syncfusion Popups package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-popups`](https://www.npmjs.com/package/@syncfusion/ej2-angular-popups/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-popups --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-popups@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-popups/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-popups@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-popups:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding CSS reference

The following CSS files can be referenced in [src/styles.css] file.

```css

       @import '../node_modules/@syncfusion/ej2-angular-popups/styles/material.css';

```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

## Adding Spinner

Initialize the Spinner using "createSpinner" method and show/hide the spinner using "showSpinner" and "hideSpinner" methods accordingly. Set the target to the spinner to render it based on specific target.

The following steps explains you on how to create and how to show/hide your Spinner.

* Import the "createSpinner" method from "ej2-popups" library into your file as shown in below.

```typescript
import { createSpinner } from '@syncfusion/ej2-angular-popups';
```

* Show and hide this spinner by using "showSpinner" and "hideSpinner" methods for loading in your page and import them in your file as shown in below.

```typescript
import { showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
```

## Create the Spinner globally

The Spinner can be render globally in a page using public exported functions of the "ej2-popups" package.

```typescript
import { showSpinner, hideSpinner } from '@syncfusion/ej2-angular-popups';
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spinner/intro-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/spinner/intro-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spinner/intro-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spinner/intro-cs1" %}