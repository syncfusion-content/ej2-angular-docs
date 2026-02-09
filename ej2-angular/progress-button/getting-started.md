---
layout: post
title: Getting Started with the Angular Progress Button Component | Syncfusion
description:  Check out and learn how to get started with the Angular Progress Button component of Syncfusion Essential JS 2.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Angular Progress Button Component

This section explains how to create a simple ProgressButton and demonstrates its basic usage in an Angular application.

## Dependencies

The list of dependencies required to use the ProgressButton component in the application is shown below:

```typescript
|-- @syncfusion/ej2-angular-splitbuttons
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-splitbuttons
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Setup Angular environment

Use [Angular CLI](https://github.com/angular/angular-cli) to set up Angular applications. To install the Angular CLI, run:

```bash
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using the following Angular CLI commands:

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> ProgressButton package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed on npm as `@syncfusion` scoped packages. Find Syncfusion Angular packages on npm (search results).

Syncfusion provides two package distribution types for Angular components:
1. Ivy library distribution package (Angular Package Format)
2. Angular compatibility compiled package (ngcc — legacy compilation pipeline)

### Ivy library distribution package

Syncfusion Angular packages (>= 20.2.36) have moved to the Ivy distribution to support Angular's Ivy rendering engine. These packages are compatible with Angular version 12 and later. Use the following command to install the package:

Add `@syncfusion/ej2-angular-splitbuttons` to the application:

```bash
npm install @syncfusion/ej2-angular-splitbuttons --save
```

### Angular compatibility compiled package (ngcc)

For Angular versions below 12, use the legacy `ngcc` package of the Syncfusion Angular components. Install the ngcc package with the following command:

```bash
npm install @syncfusion/ej2-angular-splitbuttons@ngcc --save
```

To reference the ngcc package in `package.json`, add the `-ngcc` suffix to the package version, for example:

```bash
"@syncfusion/ej2-angular-splitbuttons": "32.1.19-ngcc"
```

> Note: If the `-ngcc` suffix is not specified during installation, the Ivy library package will be installed and a warning may appear.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> ProgressButton component

Use the following snippet in the `src/app/app.ts` file to import the ProgressButton component.

```ts
import { ProgressButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { Component } from '@angular/core';

@Component({
  imports: [ProgressButtonModule],
  standalone: true,
  selector: 'app-root',
  template: `
    <!-- To render progress button. -->
    <button ejs-progressbutton content='Spin Left'></button>`
})

export class AppComponent { }
```

## Adding CSS reference

Add the ProgressButton component's styles to the global `styles.css` file.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
```

## Running the application

Run the application in the browser using the following command:

```bash
ng serve
```

The following example shows a basic ProgressButton component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progress-button/default-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progress-button/default-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progress-button/default-cs2" %}

> ProgressButton supports different styles, types, and sizes similar to [`Button`](https://ej2.syncfusion.com/angular/documentation/button/). In addition, it also supports `top` and `bottom` icon positions.

## Enable progress in button

You can enable the background filler UI by setting the [`enableProgress`](https://ej2.syncfusion.com/angular/documentation/api/progress-button#enableProgress) property to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progress-button/default-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progress-button/default-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progress-button/default-cs3" %}
