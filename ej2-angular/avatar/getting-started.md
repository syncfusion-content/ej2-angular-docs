---
layout: post
title: Getting started with Angular Avatar component | Syncfusion
description: Learn how to create and configure the Angular Avatar component with initials, icons, and images using Syncfusion Essential JS 2.
platform: ej2-angular
control: Avatar 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Avatar component

The following section explains the steps required to create a simple **Avatar** component using styles and its basic usage.

## Setting up Angular project

Angular provides an efficient way to create new projects using the Angular CLI tool.

Install the CLI application globally using the following command:

```sh
npm install -g @angular/cli
```

Create a new Angular application:

```sh
ng new syncfusion-angular-app
```

Navigate to the created project folder:

```sh
cd syncfusion-angular-app
```

>Refer to the [Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Getting Started](../getting-started/angular-cli) section for detailed information about setting up Angular CLI projects.

## Avatar component dependencies

The `Avatar` component is pure CSS component which doesn't need specific dependencies to render.

The component requires the following Syncfusion<sup style="font-size:70%">&reg;</sup> package:

```javascript
|-- @syncfusion/ej2-layouts
```

This package provides the essential styles and utilities needed for the Avatar component.

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Layouts package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can find all Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages on [npm](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components:
1. Ivy library distribution package [format](https://v17.angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular's legacy compilation and rendering pipeline) package:

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-layouts`](https://www.npmjs.com/package/@syncfusion/ej2-angular-layouts/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-layouts --save
```

### Angular compatibility compiled package (ngcc)

For Angular versions below 12, use the legacy (ngcc) package of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components.

Add the [`@syncfusion/ej2-angular-layouts@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-layouts/v/20.2.38-ngcc) package:

```bash
npm install @syncfusion/ej2-angular-layouts@ngcc --save
```

To specify the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-layouts:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified during installation, the Ivy Library Package will be installed and may display warnings for incompatible Angular versions.

## Adding style sheet to the application

To render the Avatar component, import the required stylesheets in the `[src/styles.css]` file:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-layouts/styles/material.css';
```

Alternatively, import the styles directly relative to the **node_modules** folder based on your CSS file's location, as shown below:

```css
@import 'node_modules/@syncfusion/ej2-base/styles/material.css';
@import 'node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import 'node_modules/@syncfusion/ej2-angular-layouts/styles/material.css';
```

>Note: To use combined component styles, refer to Syncfusion<sup style="font-size:70%">&reg;</sup> [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) for your application.

## Adding Avatar to the application

The Avatar component uses CSS classes to display user representations. Modify the `template` in the `app.component.ts` file to render the Avatar component.

`[src/app/app.component.ts]`

```typescript
import { Component } from '@angular/core';

@Component({
    imports: [
    ],
    standalone: true,
    selector: 'app-root',
    template: `<div id='element'><span class="e-avatar">GR</span></div>`
})

export class AppComponent {}
```

## Run the application

Run the application in the browser using the following command:

```html
npm start
```

The following example demonstrates a basic Avatar component with initials:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/avatar/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/avatar/getting-started-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/avatar/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/avatar/getting-started-cs1" %}

> Refer to the [Angular Avatar](https://www.syncfusion.com/angular-components/angular-avatar) feature tour page for comprehensive feature demonstrations. Explore the [Angular Avatar example](https://ej2.syncfusion.com/angular/demos/#/material/avatar/default) to learn data presentation and manipulation techniques.