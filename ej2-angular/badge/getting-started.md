---
layout: post
title: Getting started with Angular Badge component | Syncfusion
description: Get started with the Angular Badge component in Syncfusion. Learn how to set up an Angular project, install packages, add styles, and run a basic badge.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Badge component

The following section explains the steps required to create a simple **Badge** component using styles and demonstrate its basic usage.

## Setting up Angular project

Angular provides an easy way to set up Angular CLI projects using the Angular CLI tool.

Install the CLI application globally by using the following command.

```sh
npm install -g @angular/cli
```

Create a new Angular application.

```sh
ng new syncfusion-angular-app
```

Navigate to the created project folder by using the following command.

```sh
cd syncfusion-angular-app
```

> Note: Refer to the [Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Getting Started](../getting-started/angular-cli) section to learn more about setting up an `angular-cli` project.

## Dependencies

The `Badge` component is a pure CSS component and does not require additional dependencies to render.

```javascript
|-- @syncfusion/ej2-angular-notifications
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-notifications
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-button
        |-- @syncfusion/ej2-popups
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Notifications package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed on npm as `@syncfusion` scoped packages. See the npm page for [Syncfusion Angular packages](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (`>=20.2.36`) have moved to the Ivy distribution to support the Angular [Ivy](https://v12.angular.io/guide/ivy) rendering engine, and the packages are compatible with Angular version 12 and above. To download the package, use the following command.

Add the [`@syncfusion/ej2-angular-notifications`](https://www.npmjs.com/package/@syncfusion/ej2-angular-notifications) package to the application.

```bash
npm install @syncfusion/ej2-angular-notifications --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package, use the following.

Add [`@syncfusion/ej2-angular-notifications@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-notifications/v/32.1.19-ngcc) to the application.

```bash
npm install @syncfusion/ej2-angular-notifications@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```json
"@syncfusion/ej2-angular-notifications": "32.1.19-ngcc"
```

> Note: If the ngcc tag is not specified while installing the package, the Ivy library package will be installed and this package may throw a warning.

## Adding stylesheet to the application

To render the Badge component, import the Badge and its dependent components' styles as shown below in `src/styles.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-angular-notifications/styles/material3.css';
```

Alternatively, based on the location of your CSS file, you can import the styles as shown below:

```css
@import 'node_modules/@syncfusion/ej2-base/styles/material3.css';
@import 'node_modules/@syncfusion/ej2-notifications/styles/material3.css';
@import 'node_modules/@syncfusion/ej2-angular-notifications/styles/material3.css';
```

> Note: To reference the combined component styles, use the Syncfusion<sup style="font-size:70%">&reg;</sup> [CRG](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Add the Badge to the application

Use the following snippet in the `src/app/app.ts` file to import the Badge component.

```typescript
import { Component } from '@angular/core';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-root',
  template: `<div id='element'><h1>Badge Component <span class="e-badge">New</span></h1></div>`
})

export class App { }
```

## Run the application

Run the application in the browser using the following command.

```bash
ng serve
```

The following example shows a basic badge component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/badge/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/badge/getting-started-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/getting-started-cs1" %}

> You can refer to the [Angular Badge](https://www.syncfusion.com/angular-components/angular-badge) feature tour page for its key features. You can also explore the [Angular Badge example](https://ej2.syncfusion.com/angular/demos/#/material3/badge/default) to learn how to present and manipulate data.
