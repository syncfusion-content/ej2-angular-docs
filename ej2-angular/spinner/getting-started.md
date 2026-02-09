---
layout: post
title: Getting started with the Angular Spinner component | Syncfusion
description: Learn how to get started with the Angular Spinner component in Syncfusion, including basic usage with createSpinner, showSpinner, and hideSpinner.
platform: ej2-angular
control: Getting Started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with the Angular Spinner component

This section explains how to create a simple **Spinner** and configure its functionality in Angular.

## Getting Started with Angular CLI

The following steps show how to create an Angular CLI application and configure the `Spinner`.

### Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement).

### Setting up an Angular project

Angular provides an easy way to set up a project using the [Angular CLI](https://github.com/angular/angular-cli).

Install the CLI globally:

```bash
npm install -g @angular/cli
```

### Create a new application

```bash
ng new syncfusion-angular-app
```

After running the above command, the CLI prompts for the following options:
* Would you like to add Angular routing?
* Which stylesheet format would you like to use?

By default, it installs a CSS-based application. To use SCSS, pass the `--style=SCSS` option when creating the project.

Example:

```bash
ng new syncfusion-angular-app --style=SCSS
```

Navigate into the created project folder:

```bash
cd syncfusion-angular-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Spinner package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed on npm as `@syncfusion` scoped packages. Browse all Angular packages on npm: https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two package formats for Angular components:
1. Ivy library distribution package ([Angular package format](https://v17.angular.io/guide/angular-package-format#angular-package-format))
2. Angular compatibility compiler (Angular’s legacy compilation and rendering pipeline) package

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (`>= 20.2.36`) use the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and are compatible with Angular version 12 and above. Install the package using the following command:

Add [`@syncfusion/ej2-angular-popups`](https://www.npmjs.com/package/@syncfusion/ej2-angular-popups) package to the application.

```bash
npm install @syncfusion/ej2-angular-popups --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. Install the `ngcc` package using the following command:

```bash
npm install @syncfusion/ej2-angular-popups@ngcc --save
```

To reference the ngcc package in `package.json`, add the `-ngcc` suffix to the package version as shown below:

```bash
@syncfusion/ej2-angular-popups:"32.1.19-ngcc"
```

> Note: If the `ngcc` tag is not specified while installing the package, the Ivy library package will be installed, which may produce a warning in non-Ivy projects.

## Adding CSS reference

Reference the following CSS file in `src/styles.css`:

```css
@import '../node_modules/@syncfusion/ej2-angular-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

## Adding Spinner component

Use the following snippet in the `src/app/app.ts` file to import the Spinner component.

```typescript
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div #spinnerHost
         style="height: 200px; position: relative; border: 1px solid #ddd; overflow: hidden;">
      <p style="padding: 12px;">Loading content...</p>
    </div>
  `
})
export class App implements AfterViewInit {
  @ViewChild('spinnerHost', { static: true }) spinnerHost!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    const target = this.spinnerHost.nativeElement;
    createSpinner({ target });
    setTimeout(() => showSpinner(target));
    setTimeout(() => hideSpinner(target), 10000);
  }
}
```

## Running the application

After completing the configuration required to render a basic Spinner, run the following command to display the output in your default browser.

```
ng serve
```

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spinner/intro-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spinner/intro-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spinner/intro-cs1" %}