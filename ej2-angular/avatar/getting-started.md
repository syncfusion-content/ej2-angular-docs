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

## Setup Angular Environment

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

### Installing a specific version

To install a particular version of Angular CLI, use:

```bash
npm install -g @angular/cli@21.0.0
```

## Create a new application

With Angular CLI installed, execute this command to generate a new application:

```bash
ng new syncfusion-angular-app
```

* This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format.

```bash

? Which stylesheet format would you like to use? (Use arrow keys)
> CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org                                             ]

```

* By default, a CSS-based application is created. Use SCSS if required:

```bash
ng new syncfusion-angular-app --style=scss
```

* During project setup, when prompted for the Server-side rendering (SSR) option, choose the appropriate configuration.

![Initial_setup](images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![Initial_setup](images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> Note: In Angular 19 and below, it uses `app.component.ts`, `app.component.html`, `app.component.css` etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

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
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-angular-layouts/styles/material3.css';
```

Alternatively, import the styles directly relative to the **node_modules** folder based on your CSS file's location, as shown below:

```css
@import 'node_modules/@syncfusion/ej2-base/styles/material3.css';
@import 'node_modules/@syncfusion/ej2-layouts/styles/material3.css';
@import 'node_modules/@syncfusion/ej2-angular-layouts/styles/material3.css';
```

>Note: To use combined component styles, refer to Syncfusion<sup style="font-size:70%">&reg;</sup> [`CRG`](https://crg.syncfusion.com) (Custom Resource Generator) for your application.

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

> Refer to the [Angular Avatar](https://www.syncfusion.com/angular-components/angular-avatar) feature tour page for comprehensive feature demonstrations. Explore the [Angular Avatar example](https://ej2.syncfusion.com/angular/demos/#/material3/avatar/default) to learn data presentation and manipulation techniques.