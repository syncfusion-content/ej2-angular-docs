---
layout: post
title: Getting started with Angular FAB component | Syncfusion
description:  Checkout and learn about Getting started with Angular Floating action button component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Floating action button component

This section explains how to create a simple Floating Action Button and demonstrate the basic usage of the Floating Action Button component in an Angular environment.

To get started quickly with Angular Floating Action Button component, you can check out this video:

{% youtube "https://www.youtube.com/watch?v=Ok7F9jm6DrU" %}

## Dependencies

The list of dependencies required to use the Floating Action Button component in your application is given as follows:

```js
|-- @syncfusion/ej2-angular-buttons
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
```

## Setup Angular Environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to setup your Angular applications. To install Angular CLI use the following command.

```
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```
ng new my-app
cd my-app
```

## Installing Syncfusion Buttons package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy Library Distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-buttons`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons/v/20.3.47) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons --save
```

### Angular Compatibility Compiled Package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-buttons@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons/v/20.3.47-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-buttons:"20.3.0.47-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Floating Action Button module

Import Floating Action Button module into Angular application(app.module.ts) from the package
`@syncfusion/ej2-angular-buttons`.

 ```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imported Syncfusion Floating Action Button module from buttons package.
import { FabModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, FabModule], // Registering EJ2 Floating Action Button Module.
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

## Adding Syncfusion Floating Action Button Component

Modify the template in `app.component.ts` file to render the Floating Action Button component.

 ```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render Floating Action Button -->
               <button ejs-fab id='fab'></button>`
})

export class AppComponent { }
```

## Adding CSS reference

Add Floating Action Button component's styles as given below in `style.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The below example shows a basic Floating Action Button component,

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/floating-action-button/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/floating-action-button/getting-started-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/floating-action-button/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/floating-action-button/getting-started-cs1" %}

## Click event

The floating action button control triggers the `onclick` event when you click on the floating action button. You can use this event to perform the required action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/floating-action-button/events-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/floating-action-button/events-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/floating-action-button/events-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/floating-action-button/events-cs2" %}
