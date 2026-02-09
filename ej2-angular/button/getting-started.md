---
layout: post
title: Getting started with Angular Button component | Syncfusion
description: Check out how to get started with the Syncfusion Angular Button component (Essential JS 2), including installation, setup, and a basic example.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Button component

This section explains how to create a simple Button and demonstrate the basic usage of the Button component in an Angular environment.

## Dependencies

The list of dependencies required to use the Button component in your application is given below:

 ```typescript
|-- @syncfusion/ej2-angular-buttons
  |-- @syncfusion/ej2-angular-base
  |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-base
```

## Set up Angular environment

You can use [Angular CLI](https://v17.angular.io/cli) to set up your Angular applications. Use the following command to install Angular CLI.

```
npm install -g @angular/cli
```

## Create an Angular application

Use the following Angular CLI commands to create a new application.

```
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Button package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed on npm as `@syncfusion` scoped packages. Find all Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages on npm: [Angular packages on npm](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. The Angular compatibility compiler (Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (`>=20.2.36`) have been moved to the Ivy distribution to support the Angular [Ivy](https://v12.angular.io/guide/ivy) rendering engine, and the packages are compatible with Angular versions 12 and above. Use the following command to install the package.

Add [`@syncfusion/ej2-angular-buttons`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons/v/32.1.19) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons --save
```

### Angular compatibility compiled package (ngcc)

For Angular versions below 12, use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. Use the following command to install the `ngcc` package.

Add [`@syncfusion/ej2-angular-buttons@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons@ngcc --save
```

To reference the ngcc package in the `package.json` file, add the suffix `-ngcc` to the package version as shown below.

```bash
@syncfusion/ej2-angular-buttons:"32.1.19-ngcc"
```

> Note: If the ngcc tag is not specified when installing the package, the Ivy package will be installed and it will emit a warning.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Button component

Use the following snippet in the `src/app/app.ts` file to import the Button component.

 ```typescript
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Component } from '@angular/core';

@Component({
  imports: [ButtonModule],
  standalone: true,
  selector: 'app-root',
  template: `<div class="e-section-control">
    <!-- To render Button. -->
    <button ejs-button>Button</button></div>`
})

export class AppComponent { }
```

## Adding CSS reference

Add the Button component styles in `styles.css` as shown below.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a basic Button component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/button/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/button/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/button/default-cs1" %}

## Change Button type

To use a flat button, set the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/button/index-default#cssclass) property to `e-flat`. Set the button text using the [`content`](https://ej2.syncfusion.com/angular/documentation/api/button/index-default#content) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/button/default-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/button/default-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/button/default-cs2" %}
