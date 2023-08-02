---
layout: post
title: Getting started with Angular Rating component | Syncfusion
description:  Checkout and learn about Getting started with Angular Rating component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Rating component

This section explains how to create a default Rating and demonstrate the basic usage of the Rating module.

## Dependencies

The list of dependencies required to use the Rating module in your application is given below:

```javascript
|-- @syncfusion/ej2-angular-inputs
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
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

## Installing Syncfusion Rating package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-inputs`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs/v/20.4.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-inputs --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-inputs@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs/v/20.4.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-inputs@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-inputs:"20.4.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Rating module

Import Rating module into Angular application(app.module.ts) from the package
`@syncfusion/ej2-angular-inputs`.

```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importing Rating module from Syncfusion ej2-angular-inputs package.
import { RatingModule } from '@syncfusion/ej2-angular-inputs';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, RatingModule ], // Declaration of RatingModule into NgModule.
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

## Adding Syncfusion Rating component

Modify the template in `app.component.ts` file to render the Rating component.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!-- To render Rating. -->
             <input ejs-rating id="rating" />`
})
export class AppComponent  { }
```

## Adding CSS reference

Add Rating component's styles as given below in `style.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a default Rating component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/getting-started/default-cs/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rating/getting-started/default-cs/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/getting-started/default-cs/app/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/getting-started/default-cs" %}

## Value

You can set the rating value by using the [`value`](https://ej2.syncfusion.com/angular/documentation/api/rating#value) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/getting-started/value-cs/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rating/getting-started/value-cs/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/getting-started/value-cs/app/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/getting-started/value-cs" %}
