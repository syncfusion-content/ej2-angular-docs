---
layout: post
title: Getting started with Angular Chips component | Syncfusion
description:  Check out how to get started with the Angular Chips component in Syncfusion Essential JS 2, including installation, styling, and a basic example.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Chips component

This section explains the steps required to create a simple `Chips` instance and demonstrates the basic usage of the Chips component in an Angular environment.

## Setup Angular Environment

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to set up your Angular application.
To install Angular CLI, use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Create a new Angular application using the following Angular CLI commands.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Chips package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can find all Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages on npm: [Angular packages on npm](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler (Angular’s legacy compilation and rendering pipeline) package

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (`>=20.2.36`) have moved to the Ivy distribution to support the Angular [Ivy](https://v12.angular.io/guide/ivy) rendering engine, and the packages are compatible with Angular version 12 and above. Use the following command to install the package.

Add [`@syncfusion/ej2-angular-buttons`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. Use the following command to install the `ngcc` package.

Add [`@syncfusion/ej2-angular-buttons@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons@ngcc --save
```

To reference the ngcc package in the **package.json** file, add the suffix `-ngcc` to the package version as below.

```bash
@syncfusion/ej2-angular-buttons:"32.1.19-ngcc"
```

>Note: If the ngcc tag is not specified during installation, the Ivy library package will be installed, which may produce a warning.

## Adding CSS reference

Add `Chips` component CSS by including the following in **src/styles.css**.

```css
@import "../node_modules/@syncfusion/ej2-angular-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-angular-buttons/styles/material.css";
```

Alternatively, based on the location of your CSS file, you can import the styles as shown below:

```css
@import "node_modules/@syncfusion/ej2-angular-base/styles/material.css";
@import "node_modules/@syncfusion/ej2-angular-buttons/styles/material.css";
```

## Add Chips component

Use the following snippet in the `src/app/app.ts` file to import the Chip component.

```ts
import { ChipListModule } from '@syncfusion/ej2-angular-buttons';
import { Component } from '@angular/core';

@Component({
  imports: [ChipListModule],
  standalone: true,
  selector: 'app-root',
  // specifies the template string for the Chips component
  template: `<ejs-chiplist text="Janet Leverling"></ejs-chiplist>`
})

export class AppComponent { }
```

Now, the basic `Chips` component is included in the Angular CLI application.

## Run the application

Use the following command to run the application in the browser.

```bash
ng serve --open
```

The output appears as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/default-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/chips/default-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/default-cs1" %}
