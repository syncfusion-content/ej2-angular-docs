---
layout: post
title: Getting started with Angular Speed dial component | Syncfusion
description:  Checkout and learn about Getting started with Angular Speed dial component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Speed dial component

This section explains how to create a simple SpeedDial and demonstrate the basic usage of the SpeedDial component in an Angular environment.

To get started quickly with Angular Speed Dial component, you can check out this video:

{% youtube "https://www.youtube.com/watch?v=B5roxHrWYIc" %}

## Dependencies

The list of dependencies required to use the SpeedDial component in your application is given as follows:

```js
|-- @syncfusion/ej2-angular-buttons
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
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

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Buttons package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format).
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-buttons`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons/v/20.3.47) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-buttons@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons/v/20.3.47-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-buttons:"20.3.0.47-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> SpeedDial component

Modify the template in `app.component.ts` file to render the SpeedDial component and define the action items using [`items`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/#items) property.

 ```typescript

import { SpeedDialModule } from '@syncfusion/ej2-angular-buttons'
import { Component } from '@angular/core';
import { SpeedDialItemModel } from '@syncfusion/ej2-angular-buttons';

@Component({
imports: [        
        SpeedDialModule// Registering EJ2 SpeedDial Module.
    ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render SpeedDial component. -->
               <button ejs-speeddial id='element' content='Edit' [items]='items'></button>`
})

export class AppComponent {
  public items: SpeedDialItemModel[] = [
    { text: 'Cut'},
    { text: 'Copy'},
    { text: 'Paste'}
  ];
}

```

## Adding CSS reference

Add SpeedDial component's styles as given below in `style.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The below example shows a basic SpeedDial component,

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speed-dial/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/speed-dial/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/speed-dial/getting-started-cs1" %}

N> You can refer to our [Angular Speed Dial](https://www.syncfusion.com/angular-components/angular-speed-dial) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Speed Dial example](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/speed-dial/default) that shows you how to render the Speed Dial in Angular.
