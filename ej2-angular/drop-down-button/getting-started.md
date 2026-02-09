---
layout: post
title: Getting Started with Angular DropDownButton Component | Syncfusion
description: Check out how to get started with the Syncfusion Angular DropDownButton component (Essential JS 2), including installation, setup, and a basic example.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular DropDownButton component

This section explains how to create a simple DropDownButton and demonstrate the basic usage of the DropDownButton component in an Angular environment.

## Dependencies

The list of dependencies required to use the DropDownButton component in your application is given below:

 ```typescript
|-- @syncfusion/ej2-angular-splitbuttons
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-splitbuttons
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Set up Angular environment

You can use [Angular CLI](https://angular.io/cli) to set up your Angular applications. Use the following command to install Angular CLI.

```
npm install -g @angular/cli
```

## Create an Angular application

Use the following Angular CLI commands to create a new application.

```
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> DropDownButton package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed on npm as `@syncfusion` scoped packages. Find all Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages on npm: [Angular packages on npm](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. The Angular compatibility compiler (Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (`>=20.2.36`) have been moved to the Ivy distribution to support the Angular [Ivy](https://angular.io/guide/ivy) rendering engine, and the packages are compatible with Angular versions 12 and above. Use the following command to install the package.

Add [`@syncfusion/ej2-angular-splitbuttons`](https://www.npmjs.com/package/@syncfusion/ej2-angular-splitbuttons/v/32.1.19) package to the application.

```bash
npm install @syncfusion/ej2-angular-splitbuttons --save
```

### Angular compatibility compiled package (ngcc)

For Angular versions below 12, use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. Use the following command to install the `ngcc` package.

Add [`@syncfusion/ej2-angular-splitbuttons@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-splitbuttons/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-splitbuttons@ngcc --save
```

To reference the ngcc package in the `package.json` file, add the suffix `-ngcc` to the package version as shown below.

```bash
@syncfusion/ej2-angular-splitbuttons:"32.1.19-ngcc"
```

> Note: If the ngcc tag is not specified when installing the package, the Ivy package will be installed and it will emit a warning.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> DropDownButton component

Use the following snippet in the `src/app/app.ts` file to import the DropDownButton component.

```ts
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    imports: [DropDownButtonModule],
    standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
        <!-- To render DropDownButton. -->
        <button ejs-dropdownbutton [items]='items' content='Clipboard'></button></div>`
})

export class AppComponent {
    public items: ItemModel[] = [
        { text: 'Cut' },
        { text: 'Copy' },
        { text: 'Paste' }
    ];
}
```

## Adding CSS reference

Add the DropDownButton component styles in `styles.css` as shown below.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a basic DropDownButton component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/drop-down-button/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/drop-down-button/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/drop-down-button/default-cs1" %}
