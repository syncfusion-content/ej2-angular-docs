---
layout: post
title: Getting started with Angular Circular gauge component | Syncfusion
description:  Checkout and learn about Getting started with Angular Circular gauge component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Circular Gauge Component

This guide demonstrates how to set up and configure the Syncfusion Angular Circular Gauge component, from initial installation through enabling core features like pointers, ranges, and annotations.

> Note: This guide supports Angular 21 and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion® Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement).

## Setup the Angular application

A straightforward approach to beginning with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

> Angular 21 Standalone Architecture: Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

### Installing a specific version

To install a particular version of Angular CLI, use:

```bash
npm install -g @angular/cli@21.0.0
```

## Create a new application

With Angular CLI installed, execute this command to generate a new application:

```bash
ng new syncfusion-angular-app
```

* This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format.

```
? Which stylesheet format would you like to use? (Use arrow keys)
> CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org                                             ]
```

* By default, a CSS-based application is created. Use SCSS if required:

```bash
ng new syncfusion-angular-app --style=scss
```

* During project setup, when prompted for the Server-side rendering (SSR) option, choose the appropriate configuration.

![Initial_setup](./images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![Initial_setup](./images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> Note: In Angular 19 and below, it uses `app.component.ts`, `app.component.html`, `app.component.css` etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding Syncfusion® Angular packages

Syncfusion®'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion® Angular components, install the necessary package.

This guide uses the [Angular Circular Gauge Component](https://www.syncfusion.com/angular-components/angular-circular-gauge) for demonstration. Add the Angular Circular Gauge component with:

```bash
ng add @syncfusion/ej2-angular-circulargauge
```

This command will perform the following configurations:

* Add the `@syncfusion/ej2-angular-circulargauge` package and peer dependencies to your `package.json`.
* Import the Circular Gauge component in your application.
* Register the default Syncfusion® Material theme in `angular.json`.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

Syncfusion® offers two package structures for Angular components:

1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.

Syncfusion®'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:

```bash
ng add @syncfusion/ej2-angular-circulargauge
```

For applications not compiled with Ivy, use the `ngcc` tagged packages:

> The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of IVY compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility).

```bash
npm add @syncfusion/ej2-angular-circulargauge@32.1.19-ngcc
```

## Add Circular Gauge component

Modify the template in the [src/app/app.ts] file to render the Circular Gauge component. Add the Angular Circular Gauge by using `<ejs-circulargauge>` selector in template section of the app.ts file.

```typescript
import { Component, OnInit } from '@angular/core';
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';

@Component({
    imports: [CircularGaugeModule],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the CircularGauge component
    template: `<ejs-circulargauge id='circular-container'></ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
    }
}
```

## Module injection

To create a Circular Gauge with additional features, inject the required modules. The following modules extend the Circular Gauge's basic functionality:

* **GaugeTooltipService** - Inject this module to enable tooltip features.
* **AnnotationsService** - Inject this module to enable annotations features.
* **LegendService** - Inject this module to enable legend features.

These modules should be injected into the providers section of the component class.

```typescript
import { Component, OnInit } from '@angular/core';
import { CircularGaugeModule, GaugeTooltipService, AnnotationsService, LegendService } from '@syncfusion/ej2-angular-circulargauge';

@Component({
    imports: [CircularGaugeModule],
    providers: [GaugeTooltipService, AnnotationsService, LegendService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-circulargauge id='circular-container'></ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
    }
}
```

> Additional feature modules are available [here](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge).

## Run the application

Use the following command to run the application in the browser.

```bash
ng serve --open
```

The following example shows a basic Circular Gauge. By default, the Circular Gauge displays a scale from 0 to 100.

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

The Circular Gauge displays data using pointers on an axis. You can customize the pointer's appearance and position using various properties.

Set a pointer value using the [`value`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer#value) property in the [`pointers`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer) collection. The Circular Gauge uses a hierarchical structure:

* **Axes** - The circular scale containing pointers and ranges
* **Pointers** - Indicators that point to values on the axis
* **Ranges** - Colored segments that highlight specific value ranges

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/getting-started-cs2" %}

## See also

• [Circular Gauge Axes](https://ej2.syncfusion.com/angular/documentation/circular-gauge/gauge-axes)
• [Circular Gauge Pointers](https://ej2.syncfusion.com/angular/documentation/circular-gauge/gauge-pointers)
• [Circular Gauge Ranges](https://ej2.syncfusion.com/angular/documentation/circular-gauge/gauge-ranges)
• [Circular Gauge Annotations](https://ej2.syncfusion.com/angular/documentation/circular-gauge/gauge-annotations)
