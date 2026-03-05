---
layout: post
title: Getting started with Angular Splitter component | Syncfusion
description:  Checkout and learn about Getting started with Angular Splitter component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Splitter 
documentation: ug
domainurl: ##DomainURL##
---
# Getting started with Angular Splitter component

This section explains the steps required to create Syncfusion's Angular Splitter component. The Splitter enables splittable layouts by placing a separator between two panes. You can dynamically adjust the size of the panes based on the separator's position.

To get started quickly with Angular Splitter using CLI and Schematics, check out this video:
{% youtube "https://www.youtube.com/watch?v=fAWnD2lbsvQ" %}

## Getting Started with Angular CLI

Follow these steps to create and configure a basic Angular CLI application.

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

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Splitter package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed via npm as `@syncfusion` scoped packages. You can find all Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages [here]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Syncfusion<sup style="font-size:70%">&reg;</sup> provides two package formats for Angular components:

1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.  

Add [`@syncfusion/ej2-angular-layouts`](https://www.npmjs.com/package/@syncfusion/ej2-angular-layouts/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-layouts --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-layouts@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-layouts/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-layouts@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-layouts:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Splitter module

After installing the layouts package, import the required module in your application. Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages offer multiple NgModule options.

Refer to the following snippet to import the `SplitterModule` in `app.module.ts` from the `@syncfusion/ej2-angular-layouts`.

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Imported syncfusion SplitterModule from layouts package
import { SplitterModule } from '@syncfusion/ej2-angular-layouts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Registering EJ2 Splitter Module
    SplitterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Adding Splitter component

Add the Splitter component snippet in `app.component.ts` as follows.

```typescript

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id='container'>
      <ejs-splitter #horizontal height='110px' width='100%' >
          <e-panes>
            <e-pane></e-pane>
            <e-pane></e-pane>
          </e-panes>
      </ejs-splitter>
    </div>`
})
export class AppComponent {
    constructor() {
    }
}

```

## Add the following styles in `styles.css`:

```css

#container {
  margin: 50px auto;
}

```

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion` package folder. This can be referenced in [src/styles.css] using following code.

```css

      @import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
      @import '../node_modules/@syncfusion/ej2-icons/styles/material3.css';
      @import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
      @import '../node_modules/@syncfusion/ej2-angular-layouts/styles/material3.css';

```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

## Load content to the pane

You can load the pane content using either HTML element or string values via the [content](https://ej2.syncfusion.com/angular/documentation/api/splitter/panePropertiesModel#content) property.

For detailed information, refer to the [Pane Content](./pane-content) section.

## Running the application

Run the `ng serve` command in command window, it will serve your application and you can open the browser window. Output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/getting-started-cs1" %}

## See Also

* [Construct different layouts using Splitter](./different-layouts)