---
layout: post
title: Getting started with the Angular Tooltip component | Syncfusion
description: Learn how to get started with the Angular Tooltip component in Syncfusion Essential JS 2, including installation, module registration, styling, and basic usage.
platform: ej2-angular
control: Getting Started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with the Angular Tooltip component

This section explains how to create a simple **Tooltip** and configure its functionality in Angular.

## Dependencies

The following dependencies are required to use the Tooltip component in an application.

```text
|-- @syncfusion/ej2-angular-popups
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-popups
      |-- @syncfusion/ej2-base
      |-- @syncfusion/ej2-buttons
```

## Setup Angular Environment

You can use the [Angular CLI](https://github.com/angular/angular-cli) to set up Angular applications.
To install Angular CLI, use the following command:

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using the following Angular CLI commands:

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Tooltip package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed on npm as `@syncfusion` scoped packages. Browse all Angular packages on npm: https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two package structures for Angular components:
1. Ivy library distribution package ([Angular package format](https://v17.angular.io/guide/angular-package-format#angular-package-format))
2. Angular compatibility compiler (Angular’s legacy compilation and rendering pipeline) package

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (`>= 20.2.36`) use the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and are compatible with Angular version 12 and above. Install the package using the following command:

Add [`@syncfusion/ej2-angular-popups`](https://www.npmjs.com/package/@syncfusion/ej2-angular-popups/v/32.1.19) package to the application.

```bash
npm install @syncfusion/ej2-angular-popups --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. Install the `ngcc` package using the following command:

Add [`@syncfusion/ej2-angular-popups@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-popups/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-popups@ngcc --save
```

To reference the ngcc package in the `package.json` file, add the `-ngcc` suffix to the package version as shown below:

```bash
@syncfusion/ej2-angular-popups:"32.1.19-ngcc"
```

> Note: If the `ngcc` tag is not specified while installing the package, the Ivy library package will be installed, which may produce a warning in non-Ivy projects.

## Adding CSS Reference

* Add the Tooltip component styles in `styles.css`:

`[style.css]`

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-angular-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-angular-popups/styles/material.css";
```
Alternatively, based on the location of your CSS file, you can import the styles as shown below:

```css
@import "node_modules/@syncfusion/ej2-base/styles/material.css";
@import "node_modules/@syncfusion/ej2-angular-buttons/styles/material.css";
@import "node_modules/@syncfusion/ej2-angular-popups/styles/material.css";
```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) can generate combined component styles.

## Add Tooltip component

Use the following snippet in the `src/app/app.ts` file to import the Tooltip component.

```ts
import { Component, ViewEncapsulation } from '@angular/core';
import { TooltipModule } from '@syncfusion/ej2-angular-popups'

@Component({
  imports: [TooltipModule],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-tooltip id='tooltip' content='Tooltip content'>
        Hover Me
    </ejs-tooltip>`,
  encapsulation: ViewEncapsulation.None
})
export class App { }
```

## Run the application

* Run the application in the browser using the following command:

```bash
ng serve --open
```

The following example shows how to initialize a Tooltip on a single element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs7" %}

### Initialize Tooltip within a container

Create a Tooltip on multiple targets within a container by defining the `selector` property with specific target elements, so the Tooltip initializes only on those matches. In this case, the Tooltip content is taken from the target element’s `title` attribute.

Use the following example to create a Tooltip on multiple targets within a container.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tooltip/getting-started-cs8/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs8" %}

> In the above sample, `details` refers to the container's ID, and the target `.e-info` refers to the target elements available within that container.

## See Also

[Positioning Tooltip](./position)

[Tooltip Open Mode](./open-mode)

[Customize the Tooltip](./customization)
