---
layout: post
title: Getting started with Angular Circular gauge component | Syncfusion
description:  Checkout and learn about Getting started with Angular Circular gauge component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Circular gauge component

This section explains you the steps required to create a simple circular gauge and demonstrate the basic usage of circular gauge control.

## Setup Angular Environment

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion Circular Gauge package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-circulargauge`](https://www.npmjs.com/package/@syncfusion/ej2-angular-circulargauge/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-circulargauge --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-circulargauge@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-circulargauge/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-circulargauge@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-circulargauge:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Registering Circular Gauge Module

Import Circular Gauge module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-circulargauge` [src/app/app.module.ts].

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the CircularGaugeModule for the Circular Gauge component
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ChartModule into NgModule
  imports:      [ BrowserModule, CircularGaugeModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

* Modify the template in `app.component.ts` file to render the `ej2-angular-circulargauge` component
`[src/app/app.component.ts]`.

```javascript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-container',
  // specifies the template string for the Charts component
  template: `<ejs-circulargauge id='circular-container'></ejs-circulargauge>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }
```

<!-- markdownlint-disable MD033 -->

Now use the <code>app-container</code> in the index.html instead of default one.

```
<app-container></app-container>
```

* Now run the application in the browser using the below command.

```
npm start
```

The below example shows a basic Circular Gauge.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/getting-started-cs1" %}

## Set Pointer Value

Pointer value is used to indicate the gauge value using [`value`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#value-number) property in [`pointers`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/getting-started-cs2" %}