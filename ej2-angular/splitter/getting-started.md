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

### Prerequisites

To get started with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components, make sure that you have compatible versions of Angular and TypeScript.

* Angular: 6+
* TypeScript: 2.6+

### Setting up an Angular project

Angular provides a simple way to set up a project using the [Angular CLI](https://github.com/angular/angular-cli) tool.

Install the CLI application globally in your machine.

```javascript

  npm install -g @angular/cli

```

### Create a new application

```javascript

  ng new syncfusion-angular-app

```

Once you have executed the above command you may ask for following options,
* Would you like to add Angular routing?
* Which stylesheet format would you like to use?

By default, it install the CSS style base application. To setup with SCSS, pass --style=SCSS argument on create project.

Example code snippet.

```javascript

  ng new syncfusion-angular-app --style=SCSS

```

Navigate to the created project folder.

```javascript

  cd syncfusion-angular-app

```

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

Refer to [Ng-Module](https://ej2.syncfusion.com/angular/documentation/common/ng-module) for more details.

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

      @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-icons/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-angular-layouts/styles/material.css';

```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

## Load content to the pane

You can load the pane content using either HTML element or string values via the [content](https://ej2.syncfusion.com/angular/documentation/api/splitter/panePropertiesModel/#content) property.

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