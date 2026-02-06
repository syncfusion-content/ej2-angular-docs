---
layout: post
title: Getting started with Angular Stepper component | Syncfusion
description:  Learn here all about Getting started with Syncfusion Angular Stepper component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Stepper 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Stepper component

This section explains how to create and configure a simple Stepper component in an Angular environment. The Syncfusion Angular Stepper component displays a step-by-step process or workflow, ideal for wizards, Onboarding, or multi-step forms.

## Dependencies

The following dependencies are required to use the Stepper component in your application:

```javascript
|-- @syncfusion/ej2-angular-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-angular-base
```

## Setup Angular environment

Use [Angular CLI](https://github.com/angular/angular-cli) to set up your Angular application. Install Angular CLI with the following command:

```
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

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Stepper Package

Syncfusion<sup style="font-size:70%">&reg;</sup>  packages are distributed in npm as `@syncfusion` scoped packages. Find all Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages on npm [here](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Syncfusion<sup style="font-size:70%">&reg;</sup> provides two package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [@syncfusion/ej2-angular-navigations](https://www.npmjs.com/package/@syncfusion/ej2-angular-navigations/v/21.1.35) package to the application.

```bash
npm install @syncfusion/ej2-angular-navigations --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [@syncfusion/ej2-angular-navigations@ngcc](https://www.npmjs.com/package/@syncfusion/ej2-angular-navigations/v/21.1.35-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-navigations@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-navigations:"21.1.35-ngcc"
```

> Note: Without the `-ngcc` suffix, the Ivy Library Package will be installed, which may cause compatibility warnings for older Angular versions.

## Adding CSS reference

Add the Stepper component's styles to `style.css`:

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";  
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Stepper component

Modify the template in `app.component.ts` file with `ejs-stepper` to render the Stepper component.

```javascript

import { Component } from "@angular/core";
import {StepperAllModule, StepperModule} from '@syncfusion/ej2-angular-navigations'

@Component({
imports: [ StepperAllModule, StepperModule ],
standalone: true,
selector: "app-root",
template: `<!-- To Render Stepper. -->
  <div>
      <ejs-stepper id="default">
          <e-steps>
              <e-step></e-step>
              <e-step></e-step>
              <e-step></e-step>
              <e-step></e-step>
              <e-step></e-step>
          </e-steps>
      </ejs-stepper>
  </div>`,
})
export class AppComponent { }

```

## Adding Steps

You can define steps by using `<e-step>` tag directive.

```javascript
import { Component } from "@angular/core";
import { StepperAllModule, StepperModule } from '@syncfusion/ej2-angular-navigations'

@Component({
imports: [ StepperAllModule, StepperModule ],
standalone: true,
selector: "app-root",
template: `<!-- Renders a Stepper with defined steps -->
  <div>
      <ejs-stepper id="default">
          <e-steps>
              <e-step></e-step>
              <e-step></e-step>
              <e-step></e-step>
              <e-step></e-step>
              <e-step></e-step>
          </e-steps>
      </ejs-stepper>
  </div>`,
})
export class AppComponent { }
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a default Stepper component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/getting-started-cs1/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stepper/getting-started-cs1" %}

## Configure icon and label

You can define the step icon and label by setting the `iconCss` and `label` properties using `<e-step>` tag directive.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/iconWithLabel/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/iconWithLabel/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/iconWithLabel/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/stepper/iconWithLabel/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stepper/iconWithLabel" %}
