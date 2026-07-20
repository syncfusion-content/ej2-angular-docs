---
layout: post
title: Getting started with Angular Circular gauge component | Syncfusion
description:  Check out and learn about the Getting started with Angular Circular gauge component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting Started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Circular gauge component

This article describes the steps to create a simple Circular Gauge and demonstrates its basic usage.

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement), which covers supported Node.js, Angular, and `@syncfusion/ej2-angular-circulargauge` versions.

You also need a modern code editor such as Visual Studio Code, Cursor, or Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio.

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone). 

## Set Up the Angular Environment

Use the [`Angular CLI`](https://github.com/angular/angular-cli) to create and manage Angular applications. Install the CLI globally:

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Create a new Angular application with the Angular CLI:

```bash
ng new my-app
cd my-app
```

## Install the Syncfusion<sup style="font-size:70%">&reg;</sup> Circular Gauge package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are published on npm under the `@syncfusion` scope. Angular distributions are available in two package formats:

1. [Ivy library distribution package](https://angular.dev/tools/libraries/angular-package-format) (recommended)
2. Angular compatibility compiler (ngcc) package (legacy)

### Ivy library distribution package

From package version `20.2.36` onwards, the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components are published as Ivy partial-compilation packages and are compatible with Angular 13 and later, including the latest Angular versions (such as Angular 21).

Install the [`@syncfusion/ej2-angular-circulargauge`](https://www.npmjs.com/package/@syncfusion/ej2-angular-circulargauge/v/32.1.19) package using the following command.

```bash
npm install @syncfusion/ej2-angular-circulargauge
```

### Angular compatibility compiled package (ngcc)

Use the legacy `@ngcc`-tagged package only for projects that still rely on the Angular View Engine (typically Angular 12 and earlier). Angular 13 and later do not require ngcc.

Install the [`@syncfusion/ej2-angular-circulargauge@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-circulargauge/v/32.1.19-ngcc) package using the following command.

```bash
npm install @syncfusion/ej2-angular-circulargauge@ngcc
```

To reference the ngcc package in `package.json`, add the `-ngcc` suffix to the package version, for example:

```bash
"@syncfusion/ej2-angular-circulargauge": "32.1.19-ngcc"
```

> Note: If the `-ngcc` suffix is not specified, the Ivy package will be installed and a compatibility warning may appear when using older Angular versions.

## Add the Circular Gauge component

1. Open `src/app/app.component.ts` and replace its contents with the following code to render the Circular Gauge component.

```typescript

import { Component } from '@angular/core';
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';

@Component({
    imports: [CircularGaugeModule],
    standalone: true,
    selector: 'app-container',
    // specifies the template string for the Circular Gauge component
    template: `<ejs-circulargauge id="circular-container"></ejs-circulargauge>`
})
export class AppComponent { }

```

2. Replace the default selector in `src/index.html` so the new standalone component is bootstrapped.

    ```html
    <app-container></app-container>
    ```

3. Run the application in the browser with the following command.

    ```bash
    ng serve --open
    ```

    By default, the dev server opens at `http://localhost:4200/`.

The following example renders a basic Circular Gauge.

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

Set a pointer value using the `value` property on a pointer. See the pointer API reference for details: [`value`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer#value) in [`pointers`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/axisdirective#pointers).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/getting-started-cs2" %}

## Troubleshooting

- **Module not found: @syncfusion/ej2-angular-circulargauge** – The package is not installed. Run `npm install @syncfusion/ej2-angular-circulargauge`.
- **Compatibility warning about Ivy/Angular version** – The ngcc suffix is missing for legacy Angular. Install with `@syncfusion/ej2-angular-circulargauge@ngcc`.
- **`ejs-circulargauge` is not a known element** – The module import is missing. Confirm `CircularGaugeModule` is imported in the `imports` array of the standalone component.
- **`ng serve` fails with port already in use** – The default port `4200` is occupied. Run `ng serve --port 4300` to use a different port.

## See also

* [Axis configuration](./gauge-axes)
* [Pointers](./gauge-pointers)
* [Ranges](./gauge-ranges)
* [Annotations](./gauge-annotations)
* [Appearance](./gauge-appearance)
* [User interaction (tooltips, events)](./gauge-user-interaction)
* [Print and export](./gauge-print-and-export)
* [Animation](./gauge-animation)
* [Legend](./gauge-legend)
* [Dimensions](./gauge-dimensions)
* [Internationalization](./internationalization)
* [Accessibility](./accessibility)
* [EJ1 API migration](./ej1-api-migration)
* [Angular CLI documentation](https://angular.dev/tools/cli)
* [Standalone components in Angular](https://angular.dev/guide/components/importing)
