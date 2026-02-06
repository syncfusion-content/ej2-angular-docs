---
layout: post
title: Getting started with Angular Timeline component | Syncfusion
description:  Learn here all about Getting started with Syncfusion Angular Timeline component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Timeline 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Timeline component

This section explains how to create a simple Timeline and demonstrates the basic usage of the Timeline module in an Angular environment.

To get started quickly with Angular Timeline using CLI and Schematics, you can check this video:
{% youtube "https://www.youtube.com/watch?v=7CHPsUJESMc&t=26s" %}

## Dependencies

The list of dependencies required to use the Timeline module in your application is given below:

```javascript
@syncfusion/ej2-angular-layouts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-angular-base
```
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

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Timeline Package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components:
1. Ivy library distribution package [format](https://v17.angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular's legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [@syncfusion/ej2-angular-layouts](https://www.npmjs.com/package/@syncfusion/ej2-angular-layouts/v/21.1.35) package to the application.

```bash
npm install @syncfusion/ej2-angular-layouts --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [@syncfusion/ej2-angular-layouts@ngcc](https://www.npmjs.com/package/@syncfusion/ej2-angular-layouts/v/21.1.35-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-layouts@ngcc --save
```

To mention the ngcc package in the **package.json** file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-layouts:"21.1.35-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Timeline module

Import Timeline module into Angular application **app.module.ts** from the package `@syncfusion/ej2-angular-layouts`.

```javascript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// Import Syncfusion Timeline module from Timeline package.
import { TimelineModule, TimelineAllModule } from '@syncfusion/ej2-angular-layouts';

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, TimelineAllModule, TimelineModule], // Registering EJ2 Timeline Module.
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Adding CSS reference

Add Timeline component's styles as given below in **src/styles.css**.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import '../node_modules/@syncfusion/ej2-layouts/styles/material3.css';
```

Alternatively, based on the location of your CSS file, you can import the styles as shown below:

```css
@import 'node_modules/@syncfusion/ej2-base/styles/material3.css';
@import 'node_modules/@syncfusion/ej2-angular-layouts/styles/material3.css';
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Timeline component

Modify the template in **app.component.ts** file with `ejs-timeline` to render the Timeline component.

```javascript
import { TimelineModule, TimelineAllModule } from '@syncfusion/ej2-angular-layouts'
import { Component } from '@angular/core';

@Component({
    imports: [ TimelineModule, TimelineAllModule ],
    standalone: true,
    selector: "app-root",
    template: `<!-- To Render Timeline. -->
      <div>
          <ejs-timeline id="timeline"></ejs-timeline>
      </div>`,
  })
export class AppComponent {
}
```

## Adding Items

You can define Timeline items by using `<e-item>` tag directive.

```javascript
import { TimelineModule, TimelineAllModule } from '@syncfusion/ej2-angular-layouts'
import { Component } from '@angular/core';

@Component({
  imports: [ TimelineModule, TimelineAllModule ],
  standalone: true,
  selector: "app-root",
  template: `<!-- To Render Timeline. -->
    <div>
        <ejs-timeline id="timeline">
            <e-items>
                <e-item></e-item>
                <e-item></e-item>
                <e-item></e-item>
                <e-item></e-item>
            </e-items>
        </ejs-timeline>
    </div>`,
})
export class AppComponent {
}
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a default Timeline component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/getting-started/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/getting-started/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/getting-started/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/getting-started" %}