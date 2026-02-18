---
layout: post
title: Getting started with Angular 3D Chart component | Syncfusion
description:  Checkout and learn about Getting started with Angular 3D Chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular 3D Chart component

This section explains the steps required to create a simple [Angular 3D Chart](https://www.syncfusion.com/angular-components/angular-3d-chart) and demonstrates the basic usage of the 3D Chart component in an Angular environment.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement).

## Setup Angular environment

A straightforward approach to begin with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

### Installing a specific version

To install a particular version of Angular CLI, use:

```bash
npm install -g @angular/cli@21.0.0
```

## Create an Angular application

With Angular CLI installed, execute this command to generate a new application:

```bash
ng new syncfusion-angular-app
```

* This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format.

```bash

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

![Initial_setup](../images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![Initial_setup](../images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> Note: In Angular 19 and below, the CLI generates files like `app.component.ts`, `app.component.html`, `app.component.css`, etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> 3D Chart package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular 3D Chart component](https://www.syncfusion.com/angular-components/angular-3d-chart) for demonstration. Add the Angular 3D Chart component with:

```bash
ng add @syncfusion/ej2-angular-charts
```

The above command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-charts` package and peer dependencies to your `package.json`.
- Import the 3D Chart component in your application.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package structures for Angular components:		
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)		
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:	
	
```bash		
ng add @syncfusion/ej2-angular-charts		
```	

### Angular compatibility compiled package(ngcc)

For applications not compiled with Ivy, use the `ngcc` tagged packages:		

> The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of Ivy compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility).	

```bash		
npm add @syncfusion/ej2-angular-charts@32.1.19-ngcc		
```

## Add 3D Chart component

Modify the template in `app.component.ts` file to render the 3D Charts component `[src/app/app.component.ts]`.

```javascript
import { Component, ViewEncapsulation } from '@angular/core';
import { Chart3DAllModule } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [Chart3DAllModule],
    standalone: true,
    selector: 'app-container',
    // specifies the template string for the 3D Charts component
    template: `<ejs-chart3d id='chart-container'></ejs-chart3d>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }
```

Now use the `app-container` selector in the `index.html` file instead of the default one.
 
```html
<app-container></app-container>
```

Use the `ng serve` command to run the application in the browser.

```bash
ng serve
```

The below example shows a basic 3D Chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/getting-started/getting-started-cs1" %}

## Module injection

3D Chart components are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the `app.component.ts`. In the current application, we are going to modify the above basic 3D Chart to visualize sales data for a particular year. For this application we are going to use column series, tooltip, data label, category axis and legend feature of the 3D Chart. Please find relevant feature service name and description as follows.

* `ColumnSeries3DService` - Inject this provider to use column series.
* `Legend3DService` - Inject this provider to use legend feature.
* `Tooltip3DService` - Inject this provider to use tooltip feature.
* `DataLabel3DService` - Inject this provider to use datalabel feature.
* `Category3DService`  - Inject this provider to use category feature.

Now import the above-mentioned modules from the chart package and inject them into the Chart3D component through the `provider` section.

 ```javascript
    import { Chart3DModule, ColumnSeries3DService, Legend3DService, Tooltip3DService, DataLabel3DService, Category3DService } from '@syncfusion/ej2-angular-charts';
    import { Component } from '@angular/core';

    @Component({
        imports: [Chart3DModule],
        standalone: true,
        providers: [ ColumnSeries3DService, Legend3DService, Tooltip3DService, DataLabel3DService, Category3DService ]
    })
 ```

## Populate chart with data

This section explains how to plot the following JSON data to the 3D Chart.

```javascript
    export class AppComponent implements OnInit {
    public chartData: Object[];
    ngOnInit(): void {
        // Data for chart series
        this.chartData = [
            { x: 'Tesla', y: 137429 },
            { x: 'Aion', y: 80308 },
            { x: 'Wuling', y: 76418 },
            { x: 'Changan', y: 52849 },
            { x: 'Geely', y: 47234 },
            { x: 'Nio', y: 31041 },
            { x: 'Neta', y: 22449 },
            { x: 'BMW', y: 18733 }
        ];
    }
}
```

Add [`series`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dseriesdirective) to the 3D Chart in the component template using the `<e-chart3d-series-collection>` and `<e-chart3d-series>` child directives. Map the JSON fields `x` and `y` to the series [`xName`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dseriesdirective#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dseriesdirective#yname) properties, and set the JSON array as the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dseriesdirective#datasource) property. 

Since the JSON contains category data, set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3daxismodel#valuetype) for the horizontal axis (primaryXAxis) to `Category`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/getting-started/getting-started-cs2" %}

## Add 3D Chart title

You can add a title using the [`title`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dmodel#title) property to the 3D Chart to provide quick information to the user about the data plotted in the 3D Chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/getting-started/getting-started-cs3" %}

## Enable legend

You can use legend for the 3D Chart by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dlegendsettingsmodel#visible) property to `true` in [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dmodel#legendsettings) object and by injecting the `Legend3DService` into the component's `providers` array.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/getting-started/getting-started-cs4/" %}

## Add data label

You can add data labels to improve the readability of the 3D Chart. This can be achieved by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3ddatalabelsettingsmodel#visible) property to `true` in the [`dataLabel`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dseriesdirective#datalabel) object and by injecting `DataLabel3DService` into the component's `providers` array. Now, the data labels are arranged smartly based on series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/getting-started/getting-started-cs5" %}

## Enable tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dtooltipsettingsmodel#enable) property as `true` in [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dmodel#tooltip) object and by injecting `Tooltip3DService` into the component's `providers` array.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/getting-started/getting-started-cs6" %}

> You can refer to our [Angular 3D Charts](https://www.syncfusion.com/angular-components/angular-3d-chart) feature tour page for its groundbreaking feature representations. You can also explore our [Angular 3D Charts example](https://ej2.syncfusion.com/angular/demos/#/material3/three-dimension-chart/column) that shows various 3D Chart types and how to represent time-dependent data, showing trends in data at equal intervals.