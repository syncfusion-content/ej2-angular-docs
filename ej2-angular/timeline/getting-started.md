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

This section explains how to create a simple Timeline, and demonstrate the basic usage of the Timeline module in an Angular environment.

To get start quickly with Angular Timeline using CLI and Schematics, you can check on this video:
{% youtube "https://www.youtube.com/watch?v=7CHPsUJESMc&t=26s" %}

## Dependencies

The list of dependencies required to use the Timeline module in your application is given below:

```javascript
|-- @syncfusion/ej2-angular-layouts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-angular-base

```

## Setup Angular environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to setup your Angular applications. To install Angular CLI use the following command.

```
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using below Angular CLI command.

```
ng new my-app
cd my-app
```

## Installing Syncfusion Timeline Package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://v17.angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [@syncfusion/ej2-angular-layouts](https://www.npmjs.com/package/@syncfusion/ej2-angular-layouts/v/21.1.35) package to the application.

```bash
npm install @syncfusion/ej2-angular-layouts --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [@syncfusion/ej2-angular-layouts@ngcc](https://www.npmjs.com/package/@syncfusion/ej2-angular-layouts/v/21.1.35-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-layouts@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-layouts:"21.1.35-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Timeline module

Import Timeline module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-layouts`.

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

Add Timeline component's styles as given below in `style.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
```

## Adding Syncfusion Timeline component

Modify the template in `app.component.ts` file with `ejs-timeline` to render the Timeline component.

```javascript
import { Component } from "@angular/core";
import { StepModel, Timeline } from '@syncfusion/ej2-angular-layouts';

@Component({
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
import { Component } from "@angular/core";

@Component({
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
