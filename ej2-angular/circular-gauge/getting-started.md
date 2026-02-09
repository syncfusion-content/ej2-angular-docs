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

This article describes the steps to create a simple Circular Gauge and demonstrates its basic usage.

## Setup Angular Environment

Prerequisites: Node.js (LTS) and npm must be installed before creating an Angular project.

Use the [`Angular CLI`](https://github.com/angular/angular-cli) to create and manage Angular applications. Install the CLI with one of the following approaches depending on preference.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Create a new Angular application with the Angular CLI:

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion® Circular Gauge package

Syncfusion® packages are published on npm under the `@syncfusion` scope. The Angular distribution is available in two package formats:

1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler (ngcc) package for legacy compilation and rendering

### Ivy library distribution package

Syncfusion® Angular packages (>= 20.2.36) use the Ivy distribution to support the Angular Ivy rendering engine. These packages are compatible with Angular version 21 and other latest angular versions. Install the Ivy package with the following command:

Add [`@syncfusion/ej2-angular-circulargauge`](https://www.npmjs.com/package/@syncfusion/ej2-angular-circulargauge/v/32.1.19) to the application:

```bash
npm install @syncfusion/ej2-angular-circulargauge --save
```

### Angular compatibility compiled package (ngcc)

For Angular versions earlier than 12, use the legacy ngcc package of the Syncfusion® Angular components. Install the ngcc package with:

Add [`@syncfusion/ej2-angular-circulargauge@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-circulargauge/v/32.1.19-ngcc) to the application:

```bash
npm install @syncfusion/ej2-angular-circulargauge@ngcc --save
```

To reference the ngcc package in `package.json`, add the `-ngcc` suffix to the package version, for example:

```bash
@syncfusion/ej2-angular-circulargauge:"32.1.19-ngcc"
```

> Note: If the `-ngcc` suffix is not specified, the Ivy package will be installed and a compatibility warning may appear when using older Angular versions.

## Add Circular Gauge component

Register and render the Circular Gauge component in the application root component. Update `app.component.ts` to include the `ej2-angular-circulargauge` module and render the control as shown in the sample below (`src/app/app.component.ts`).

```javascript

import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge'
import { GaugeTooltipService } from '@syncfusion/ej2-angular-circulargauge'
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
         CircularGaugeModule
    ],
    providers: [ GaugeTooltipService ],
    standalone: true,
    selector: 'app-container',
    // specifies the template string for the Charts component
    template: `<ejs-circulargauge id='circular-container'></ejs-circulargauge>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }

```


Replace the default root element in `index.html` with the component selector:

```
<app-container></app-container>
```

Run the application using the Angular development server. If the project provides an `npm start` script, that command may be used; otherwise run the development server directly:

```bash
ng serve --open
```

The following example shows a basic Circular Gauge.

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

Set a pointer value using the `value` property on a pointer. See the pointer API reference for details: [`value`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer#value) in [`pointers`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/getting-started-cs2" %}
