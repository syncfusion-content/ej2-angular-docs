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

This section explains how to create a simple Stepper, and demonstrate the basic usage of the Stepper module in an Angular environment.

## Dependencies

The list of dependencies required to use the Stepper module in your application is given below:

```javascript
|-- @syncfusion/ej2-angular-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-navigations
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

## Installing Syncfusion Stepper Package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [@syncfusion/ej2-angular-navigations](https://www.npmjs.com/package/@syncfusion/ej2-angular-navigations/v/21.1.35) package to the application.

```bash
npm install @syncfusion/ej2-angular-navigations --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [@syncfusion/ej2-angular-navigations@ngcc](https://www.npmjs.com/package/@syncfusion/ej2-angular-navigations/v/21.1.35-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-navigations@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-navigations:"21.1.35-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Stepper module

Import Stepper module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-navigations`.

```javascript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// Import Syncfusion Stepper module from stepper package.
import { StepperModule, StepperAllModule } from '@syncfusion/ej2-angular-navigations';

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, StepperAllModule, StepperModule], // Registering EJ2 Stepper Module.
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Adding CSS reference

Add Stepper component's styles as given below in `style.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
```

## Adding Syncfusion Stepper component

Modify the template in `app.component.ts` file with `ejs-stepper` to render the Stepper component.

```javascript
import { Component } from "@angular/core";
import { StepModel, Stepper } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: "app-root",
  template: `<!-- To Render Stepper. -->
    <div>
        <ejs-stepper id="default"></ejs-stepper>
    </div>`,
})
export class AppComponent {
}
```

## Adding Steps

You can define steps by using `<e-step>` tag directive.

```javascript
import { Component } from "@angular/core";

@Component({
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
export class AppComponent {
}
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
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/stepper/getting-started-cs1/src/app.module.ts %}
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
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/stepper/iconWithLabel/src/app.module.ts %}
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
