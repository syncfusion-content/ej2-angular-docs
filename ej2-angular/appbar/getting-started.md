---
layout: post
title: Getting started with Angular Appbar component | Syncfusion
description:  Checkout and learn about Getting started with Angular Appbar component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Appbar component

This section explains how to create a simple AppBar, and demonstrate the basic usage of the AppBar module in an Angular environment.

## Dependencies

The list of dependencies required to use the AppBar module in your application is given below:

```javascript
|-- @syncfusion/ej2-angular-navigations
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-navigations
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

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> AppBar Package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-navigations`](https://www.npmjs.com/package/@syncfusion/ej2-angular-navigations/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-navigations --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-navigations@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-navigations/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-navigations@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-navigations:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> AppBar component

Modify the template in `app.component.ts` file with `ejs-appbar` to render the AppBar component.

```javascript

import { AppBarModule } from '@syncfusion/ej2-angular-navigations'
import { Component } from "@angular/core";

@Component({
imports: [ AppBarModule],
standalone: true,
selector: "app-root",
template: `<!-- To Render AppBar. -->
    <div class="control-container">
      <ejs-appbar colorMode="Primary">
        <button #regularBtn ejs-button cssClass="e-inherit menu" iconCss="e-icons e-menu"></button>
        <span class="regular">Angular AppBar</span>
        <div class="e-appbar-spacer"></div>
        <button ejs-button cssClass="e-inherit login">FREE TRIAL</button>
      </ejs-appbar>
    </div>`
})
export class AppComponent { }

```

## Adding CSS reference

Add AppBar component's styles as given below in `style.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a basic `AppBar` component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/getting-started-cs1" %}
