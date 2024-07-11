---
layout: post
title: Getting started with Angular Progress button component | Syncfusion
description:  Checkout and learn about Getting started with Angular Progress button component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Progress button component

This section explains how to create a simple ProgressButton and demonstrate the basic usage of the ProgressButton component in an Angular environment.

## Dependencies

The list of dependencies required to use the ProgressButton component in your application is given as follows:

 ```typescript
|-- @syncfusion/ej2-angular-splitbuttons
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-splitbuttons
        |-- @syncfusion/ej2-popups
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

## Installing Syncfusion ProgressButton package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-splitbuttons`](https://www.npmjs.com/package/@syncfusion/ej2-angular-splitbuttons/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-splitbuttons --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-splitbuttons@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-splitbuttons/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-splitbuttons@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-splitbuttons:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Syncfusion ProgressButton component

Modify the template in `app.component.ts` file to render the ProgressButton component.

```typescript

import { ProgressButtonModule } from '@syncfusion/ej2-angular-splitbuttons'
import { Component } from '@angular/core';

@Component({
imports: [        
        ProgressButtonModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `
                <!-- To render progress button. -->
               <button ejs-progressbutton content='Spin Left'></button>`
})

export class AppComponent {
}

```

## Adding CSS reference

Add ProgressButton component's styles as given below in `style.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The below example shows a basic ProgressButton component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progress-button/default-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progress-button/default-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progress-button/default-cs2" %}

> ProgressButton supports different styles, types and sizes like [`Button`](https://ej2.syncfusion.com/angular/documentation/button/). In addition, it also supports `top` and `bottom` icon positions.

## Enable progress in button

You can enable the background filler UI by setting the [`enableProgress`](https://ej2.syncfusion.com/angular/documentation/api/progress-button#enableProgress) property to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progress-button/default-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progress-button/default-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progress-button/default-cs3" %}
