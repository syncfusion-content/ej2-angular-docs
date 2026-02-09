---
layout: post
title: Getting started with Angular Button group component | Syncfusion
description:  Check out and learn about getting started with the Angular Button Group component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Button group component

This section explains how to create a simple ButtonGroup and demonstrates the basic usage of the ButtonGroup component in an Angular environment.

## Dependencies

The following dependency is required to use the ButtonGroup component in your application.

```typescript
|-- @syncfusion/ej2-angular-splitbuttons
  |-- @syncfusion/ej2-angular-base
  |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
```

## Set up Angular environment

You can use the [Angular CLI](https://github.com/angular/angular-cli) to set up Angular applications. Use the following command to install the Angular CLI:

```
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using the following Angular CLI commands.

```
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> ButtonGroup package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed on npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages from npm at the following [link](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (`>=20.2.36`) have moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine, and the packages are compatible with Angular version 12 and above. Use the following command to install the package.

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

To specify the ngcc package in the `package.json` file, add the suffix `-ngcc` to the package version as shown below.

```bash
@syncfusion/ej2-angular-buttons:"32.1.19-ngcc"
```

> Note: If the `ngcc` tag is not specified while installing the package, the Ivy library package will be installed and the package manager will display a warning.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> ButtonGroup component

Use the following snippet in the `src/app/app.ts` file to import the ButtonGroup component.

 ```typescript
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Component } from '@angular/core';

@Component({
  imports: [ButtonModule],
  standalone: true,
  selector: 'app-root',
  template: `<div class="e-section-control">
    <!-- To render ButtonGroup. -->
      <div class='e-btn-group'>
        <button ejs-button>HTML</button>
        <button ejs-button>CSS</button>
        <button ejs-button>JavaScript</button>
      </div>
    </div>`
})

export class AppComponent { }
```

> To render buttons in the ButtonGroup component, import `ButtonModule` into your Angular application (either in a standalone component's `imports` array or in an NgModule) from the package `@syncfusion/ej2-angular-buttons`, and include the component styles in `styles.css`.

## Adding CSS reference

Add the ButtonGroup component styles in `styles.css` as shown below.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a basic ButtonGroup component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/button-group/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/button-group/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/button-group/default-cs1" %}

## Orientation

ButtonGroup can be arranged in either vertical or horizontal orientation. By default, it is horizontal.

### Vertical Orientation

Apply the built-in `e-vertical` class to the target element to align the ButtonGroup vertically.

The following example illustrates how to achieve vertical orientation in ButtonGroup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/button-group/default-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/button-group/default-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/button-group/default-cs2" %}

> ButtonGroup does not support nesting the SplitButton component in a vertical orientation.
