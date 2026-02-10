---
layout: post
title: Getting started with Angular Accumulation chart component | Syncfusion
description:  Checkout and learn about Getting started with Angular Accumulation chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Getting started with Angular Accumulation chart component

This section explains the steps required to create a simple Accumulation Chart and demonstrates the basic usage of the Chart component in an Angular environment.

## Setup angular environment

Use the [`Angular CLI`](https://github.com/angular/angular-cli) to set up an Angular application. For more details about Angular CLI and Node versions, please refer to this [page](https://ej2.syncfusion.com/angular/documentation/system-requirement).<br>

To install the Angular CLI, use the following command.

```bash
npm install -g @angular/cli
```

## Create an angular application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> AccumulationChart package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (>=20.2.36) have moved to the Ivy distribution to support the Angular Ivy rendering engine (see https://angular.io/guide/ivy); these packages are compatible with Angular version 21 and later. To install the package, run:

Add [`@syncfusion/ej2-angular-charts`](https://www.npmjs.com/package/@syncfusion/ej2-angular-charts/v/32.1.19) package to the application.

```bash
npm install @syncfusion/ej2-angular-charts --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To install the `ngcc` package, run:

Add [`@syncfusion/ej2-angular-charts@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-charts/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-charts@ngcc --save
```

To reference the ngcc package in `package.json`, append the suffix `-ngcc` to the package version, for example:

```bash
@syncfusion/ej2-angular-charts:"32.1.19-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Add accumulationChart component

Modify the template in `app.component.ts` file to render the Accumulation Charts component `[src/app/app.component.ts]`.

```javascript

import { AccumulationChartAllModule } from '@syncfusion/ej2-angular-charts';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    imports: [AccumulationChartAllModule],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Accumulation Charts component
    template: `<ejs-accumulationchart id="pie-container"></ejs-accumulationchart>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }

```

Now use the <code>app-container</code> in the `index.html` instead of default one.

```
  <app-container></app-container>
```

* Now use the `npm start` command to run the application in the browser.

```
npm start
```

**Pie series**

By default, a pie series is rendered when JSON data is assigned to the series [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationseries#datasource) property. Map JSON fields to the series [`xName`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationseries#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationseries#yname) properties to bind data correctly. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/pie-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/pie-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/pie-cs7" %}
