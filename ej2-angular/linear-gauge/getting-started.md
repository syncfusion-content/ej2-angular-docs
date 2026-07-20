---
layout: post
title: Getting started with Angular Linear gauge component | Syncfusion
description: Learn how to get started with the Angular Linear Gauge component of Syncfusion Essential JS 2  and more details.
platform: ej2-angular
control: Getting Started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Linear gauge component

<!-- markdownlint-disable MD013 -->

This section explains the steps required to create a simple Linear Gauge and demonstrate the basic usage of the Linear Gauge component.

{% youtube "https://www.youtube.com/watch?v=KHAuX1TQisU" %}

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement), which covers supported Node.js, Angular, and `@syncfusion/ej2-angular-lineargauge` versions.

You also need a modern code editor such as Visual Studio Code, Cursor, or Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio.

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

## Dependencies

Below is the list of minimum dependencies required to use the Linear Gauge component.

```javascript
|-- @syncfusion/ej2-angular-lineargauge
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-angular-lineargauge
    |-- @syncfusion/ej2-lineargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-svg-base
```

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

## Install the Syncfusion<sup style="font-size:70%">&reg;</sup> Linear Gauge package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are published on npm under the `@syncfusion` scope. Angular distributions are available in two package formats:

1. [Ivy library distribution package](https://angular.dev/tools/libraries/angular-package-format) (recommended)
2. Angular compatibility compiler (ngcc) package (legacy)

### Ivy library distribution package

From package version `20.2.36` onwards, the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components are published as Ivy partial-compilation packages and are compatible with Angular 13 and later, including the latest Angular versions (such as Angular 21).

Install the [`@syncfusion/ej2-angular-lineargauge`](https://www.npmjs.com/package/@syncfusion/ej2-angular-lineargauge/v/32.1.19) package using the following command.

```bash
npm install @syncfusion/ej2-angular-lineargauge
```

### Angular compatibility compiled package (ngcc)

Use the legacy `@ngcc`-tagged package only for projects that still rely on the Angular View Engine (typically Angular 12 and earlier). Angular 13 and later do not require ngcc.

Install the [`@syncfusion/ej2-angular-lineargauge@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-lineargauge/v/32.1.19-ngcc) package using the following command.

```bash
npm install @syncfusion/ej2-angular-lineargauge@ngcc
```

To reference the ngcc package in `package.json`, add the `-ngcc` suffix to the package version, for example:

```bash
"@syncfusion/ej2-angular-lineargauge": "32.1.19-ngcc"
```

> Note: If the `-ngcc` suffix is not specified, the Ivy package will be installed and a compatibility warning may appear when using older Angular versions.

## Add the Linear Gauge component

1. Open `src/app/app.component.ts` and replace its contents with the following code to render the Linear Gauge component.

```typescript

import { Component } from '@angular/core';
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge';

@Component({
    imports: [LinearGaugeModule],
    standalone: true,
    selector: 'app-container',
    // specifies the template string for the Linear Gauge component
    template: `<ejs-lineargauge id="gauge-container"></ejs-lineargauge>`
})
export class AppComponent { }

```

2. Replace the default selector in `src/index.html` so the new standalone component is bootstrapped.

    ```html
    <app-container></app-container>
    ```

3. Run the application in the browser with the following command.

    ```bash
    npm start
    ```

    By default, the dev server opens at `http://localhost:4200/`.

The following example renders a basic Linear Gauge.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/getting-started-cs1" %}

## Module Injection

The Linear Gauge component is segregated into individual feature-wise services. To use a particular feature, register the matching service in the `providers` array of the component as shown below.

* `AnnotationsService` – Required to use the [Annotation](./annotations) feature.
* `GaugeTooltipService` – Required to use the [Tooltip](./user-interaction#tooltip) feature.

Inject the services you need in the `providers` section of the `app.component.ts` file as shown below.

```typescript
import { Component } from '@angular/core';
import {
    LinearGaugeModule,
    AnnotationsService,
    GaugeTooltipService
} from '@syncfusion/ej2-angular-lineargauge';

@Component({
    imports: [LinearGaugeModule],
    standalone: true,
    selector: 'app-container',
    providers: [AnnotationsService, GaugeTooltipService],
    template: `<ejs-lineargauge id="gauge-container"></ejs-lineargauge>`
})
export class AppComponent { }
```

> Note: Inject only the services required for the features you use. Injecting all services is not required and can increase the bundle size slightly.

## Add a gauge title

A title can be added to the Linear Gauge component by setting the [`title`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/linearGaugeModel#title-string) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/getting-started-cs2" %}

## Configure the axis range

The range of the axis is configured using the [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/axis#minimum-number) and [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/axis#maximum-number) properties of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/getting-started-cs3" %}

### Add a unit suffix to axis labels

To display the axis labels with a unit suffix such as `°C`, set the **{value}°C** pattern on the [`format`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/labelModel#format-string) property of the [`labelStyle`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/axis#labelstyle-labelmodel) object on the axis. The token `{value}` is replaced with the corresponding axis label value at runtime.

### Set the pointer value

To change the pointer value from the default, set the [`value`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointer#value-number) property of the corresponding entry in the [`pointers`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointerModel) collection of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/getting-started-cs4" %}

## Update the pointer value dynamically

The pointer value is updated in the following sample using the [`value`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointer#value-number) property of the entry in the [`pointers`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointerModel) collection of the axis. This example changes the value at runtime through a button click, which is useful for scenarios such as live data monitoring.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/getting-started-cs5" %}

## Troubleshooting

* Feature not working (annotations, tooltip) - Ensure the matching service (`AnnotationsService`, `GaugeTooltipService`) is registered in the `providers` array of the host component.
* `Can't bind to 'minimum'` or `ejs-lineargauge is not a known element` - Make sure `LinearGaugeModule` is imported in the `imports` array of every standalone component that uses the gauge.
* `npm start` does not work - Run `npx ng serve` instead, or use `npm run start`.
* Compatibility warning about ngcc on Angular 12 or earlier - Install the legacy package: `npm install @syncfusion/ej2-angular-lineargauge@ngcc`.

## See also

* [Axis configuration](./axis)
* [Pointers](./pointers)
* [Ranges](./ranges)
* [Annotations](./annotations)
* [Appearance](./appearance)
* [User interaction (tooltips, events)](./user-interaction)
* [Print and export](./print-and-export)
* [Methods](./methods)
* [Events](./events)
* [Accessibility](./accessibility)
* [EJ1 API migration](./ej1-api-migration)
* [Angular CLI documentation](https://angular.dev/tools/cli)
* [Standalone components in Angular](https://angular.dev/guide/components/importing)
