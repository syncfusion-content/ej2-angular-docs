---
layout: post
title: Getting started with the Angular Switch component | Syncfusion
description: Learn how to get started with the Angular Switch component in Syncfusion Essential JS 2, including installation, setup, and basic usage.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with the Angular Switch component

This section explains how to create a simple Switch and demonstrates the basic usage of the Switch component in an Angular application.

## Dependencies

The following list of dependencies is required to use the Switch component in your application.

 ```typescript
|-- @syncfusion/ej2-angular-buttons
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-buttons
        |-- @syncfusion/ej2-base
```

## Set up Angular environment

Use the [Angular CLI](https://github.com/angular/angular-cli) to set up the Angular application. Install Angular CLI with the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using the following Angular CLI commands.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Switch package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed on npm as `@syncfusion` scoped packages. You can find all Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages on npm using the search page (https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler (Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (>= 20.2.36) have moved to the Ivy distribution to support the Angular [Ivy](https://angular.io/guide/ivy) rendering engine and are compatible with Angular version 12 and above. Install the package with the following command.

Add [`@syncfusion/ej2-angular-buttons`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. Install the `ngcc` package with the following command.

Add [`@syncfusion/ej2-angular-buttons@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
"@syncfusion/ej2-angular-buttons": "32.1.19-ngcc"
```

> Note: If the ngcc tag is not specified when installing the package, the Ivy library package will be installed, which may show a warning in Angular versions below 12.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Switch component

Use the following snippet in the `src/app/app.ts` file to import the Switch component.

 ```ts
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { Component } from '@angular/core';

@Component({
  imports: [SwitchModule],
  standalone: true,
  selector: 'app-root',
  template: `<div class="e-section-control">
    <!-- To Render Switch with checked state. -->
    <ejs-switch [checked]="true"></ejs-switch></div>`
})

export class AppComponent { }
```

## Adding CSS reference

Add Switch component's styles as given below in `style.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The below example shows a basic Switch component,

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/switch/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/switch/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/switch/getting-started-cs1" %}

## Set text on Switch

This section explains how to set [`onLabel`](https://ej2.syncfusion.com/angular/documentation/api/switch#onlabel)
and [`offLabel`](https://ej2.syncfusion.com/angular/documentation/api/switch#offlabel) texts on Switch. In the following example, `onLabel` is set as
`ON` and `offLabel` is set as `OFF`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/switch/text-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/switch/text-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/switch/text-cs1" %}

> Switch does not have text support for material themes, and does not support long custom text.
