---
layout: post
title: Getting started with Angular Radio button component | Syncfusion
description:  Checkout and learn about Getting started with Angular Radio button component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Radio button component

This section explains how to create a simple RadioButton, and demonstrate the basic usage of the RadioButton module in an Angular environment.

## Dependencies

The following list of dependencies are required to use the RadioButton module in your application.

 ```typescript
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

## Installing Syncfusion RadioButton package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-buttons`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-buttons@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-buttons:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Syncfusion RadioButton component

Modify the template in `app.component.ts` file to render the RadioButton component.

```typescript

import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons'
import { Component } from '@angular/core';

@Component({
imports: [        
        RadioButtonModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render RadioButton. -->
              <ejs-radiobutton label="Default"></ejs-radiobutton>`
})
export class AppComponent  { }

```

## Adding CSS reference

Add RadioButton component's styles as given below in `style.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The below example shows a basic RadioButton component,

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/radio-button/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/radio-button/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/radio-button/getting-started-cs1" %}

## Change the RadioButton state

The Essential JS 2 RadioButton contains 2 different states visually, they are as follows:
* Checked
* Unchecked

The RadioButton [`checked`](https://ej2.syncfusion.com/angular/documentation/api/radio-button#checked) property is used to handle the checked and unchecked state.
In the checked state an inner circle will be added to the visualization of RadioButton.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/radio-button/label-and-size-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/radio-button/label-and-size-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/radio-button/label-and-size-cs1" %}