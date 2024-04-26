---
layout: post
title: Getting started with Angular Skeleton component | Syncfusion
description:  Checkout and learn about Getting started with Angular Skeleton component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Skeleton component

This section explains how to create a simple Skeleton and demonstrate the basic usage of the Skeleton component in an Angular environment.

## Dependencies

The list of dependencies required to use the Skeleton component in your application is given as follows:

```js
|-- @syncfusion/ej2-angular-notifications
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

## Installing Syncfusion Notifications package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-notifications`](https://www.npmjs.com/package/@syncfusion/ej2-angular-notifications/v/20.3.47) package to the application.

```bash
npm install @syncfusion/ej2-angular-notifications --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-notifications@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-notifications/v/20.3.47-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-notifications@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-notifications:"20.3.0.47-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Skeleton module

After installing the package, the component modules are ready to configure in your application from installed syncfusion package. Syncfusion Angular package provides two different types of ngModules.

Refer to [Ng-Module](https://ej2.syncfusion.com/angular/documentation/common/ng-module/) to learn about `ngModules`.

Refer the following snippet to import the `SkeletonModule` in `app.module.ts` from the `@syncfusion/ej2-angular-notifications`.

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Imported syncfusion SkeletonModule from ej2-angular-notifications package
import { SkeletonModule } from '@syncfusion/ej2-angular-notifications';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        // Registering EJ2 Skeleton Module
        SkeletonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

```

## Add Skeleton into application

Modify the `template` in `app.component.ts` file to render the Skeleton component.

`[src/app/app.component.ts]`

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<ejs-skeleton height='15px'></ejs-skeleton>`
})

export class AppComponent { }
```

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion` package folder. This can be referenced in [src/styles.css] using following code.

```css

      @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-angular-notifications/styles/material.css';

```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a basic Skeleton component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/skeleton/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/skeleton/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/skeleton/getting-started-cs1" %}
