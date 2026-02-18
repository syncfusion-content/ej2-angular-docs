---
layout: post
title: Getting started with Angular Smith Chart component | Syncfusion
description:  Checkout and learn about Getting started with Angular Smith Chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Smith Chart component

This section explains the steps required to create an [Angular Smith Chart](https://www.syncfusion.com/angular-components/angular-smith-chart) and demonstrates the basic usage of the Smith Chart component in an Angular environment.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement).

## Setup the Angular application

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

## Create a new application

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

![Initial_setup](images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![Initial_setup](images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> Note: In Angular 19 and below, the CLI generates files like `app.component.ts`, `app.component.html`, `app.component.css`, etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Smith Chart package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular Smith Chart component](https://www.syncfusion.com/angular-components/angular-smith-chart) for demonstration. Add the Angular Smith Chart component with:

```bash
ng add @syncfusion/ej2-angular-charts
```

The above command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-charts` package and peer dependencies to your `package.json`.
- Import the Smith Chart component in your application.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package structures for Angular components:		
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)		
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.		
Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:		
```bash		
ng add @syncfusion/ej2-angular-charts		
```		
For applications not compiled with Ivy, use the `ngcc` tagged packages:		
> The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of Ivy compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility).	

```bash		
npm add @syncfusion/ej2-angular-charts@32.1.19-ngcc		
```

## Add Smith Chart component

Modify the template in `app.component.ts` file to render the `ej2-angular-charts` component
`[src/app/app.component.ts]`.

```javascript

import { SmithchartModule } from '@syncfusion/ej2-angular-charts'
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
      SmithchartModule
    ],
    standalone: true,
    selector: 'app-root',
    // Specifies the template string for the Smith Chart component
    template: `<ejs-smithchart style='display: block;' id='container'></ejs-smithchart>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }

```

<!-- markdownlint-disable MD033 -->

Now use the <code>app-root</code> in the index.html instead of default one.

```html
<app-root></app-root>
```

Now run the application in the browser using the below command.

  ```
    npm start
  ```

The below example shows a basic Smith Chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs1" %}

## Module Injection

Smith Chart components are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the `app.component.ts`. In the current application, we are going to modify the above basic Smith Chart to visualize transmission lines.
For this application, we are going to use tooltip and legend features of the Smith Chart. Please find the relevant feature service name and description as follows.

* SmithchartLegendService - Inject this provider to use legend feature.
* TooltipRenderService - Inject this provider to use tooltip feature.

These modules should be injected to the provider section as follows,

 ```javascript

    import { Component } from '@angular/core';
    import { SmithchartModule } from '@syncfusion/ej2-angular-charts'
    import { SmithchartLegendService, TooltipRenderService } from '@syncfusion/ej2-angular-charts';

    @Component({
        imports: [
            SmithchartModule
        ],
        standalone: true,
        providers: [ SmithchartLegendService, TooltipRenderService ]
    })

 ```

## Add series to Smith Chart

Smith Chart has two types of specification for adding series.
* [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesModel#datasource) - Using this, a data object can bind directly by specifying the [`resistance`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesModel#resistance) and [`reactance`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesModel#reactance) values to add series to Smith Chart.
* [`points`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesModel#points) - Using this, a collection of resistance and reactance values can bind directly to render series.

The below sample demonstrates adding two series to Smith Chart both ways.
* First series Transmission1 shows [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesModel#datasource) bound series.
* Second series Transmission2 shows [`points`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesModel#points) bound series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs2" %}

## Add title to Smith Chart

The Smith Chart [`title`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartModel#title) API is used to add a title for Smith Chart. The [`text`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/titleModel#text) API is used to set the text of the title.
The [`visible`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/titleModel#visible) API is used to toggle the title.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs3" %}

## Enable marker to Smith Chart

To use series marker and its customization in Smith Chart, use the series [`marker`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesModel#marker). To display marker for a particular series, you need to specify [`visible`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesMarkerModel#visible) as `true`. The below sample shows marker enabled for the first series only.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs4" %}

## Enable data label to Smith Chart marker

To use marker data label and its customization in Smith Chart, use the marker [`dataLabel`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesMarkerModel#datalabel). To display data label for a particular series marker, you need to specify [`visible`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesDatalabelModel#visible) as `true` in that series [`marker`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesModel#marker). The below sample shows data label enabled for the first series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs5" %}

## Enable legend for Smith Chart

Smith Chart has a legend feature, which is used to denote the corresponding series. To enable the legend, you need to inject the `SmithchartLegendService` module and set Smith Chart [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartModel#legendsettings) [`visible`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartLegendSettingsModel#visible) property to `true`. The following example shows how to enable legend for Smith Chart. The series name can be customized using the series [`name`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesModel#name) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs6" %}

## Enable tooltip for Smith Chart series

Smith Chart has a tooltip feature, which is used to show the current point's values. To enable the tooltip, you need to inject the `TooltipRenderService` module and set the Smith Chart series [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesModel#tooltip) [`visible`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesTooltipModel#visible) property to `true`. The following example shows how to enable tooltip for Smith Chart series collection.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs7" %}