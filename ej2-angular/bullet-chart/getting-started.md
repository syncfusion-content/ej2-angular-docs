---
layout: post
title: Getting started with Angular Bullet Chart component | Syncfusion
description:  Checkout and learn about Getting started with Angular Bullet Chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Bullet Chart component

This section explains the steps required to create a simple [Angular Bullet Chart](https://www.syncfusion.com/angular-components/angular-bullet-chart) and demonstrates the basic usage of the Bullet Chart component in an Angular environment.

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

![Initial_setup](../images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![Initial_setup](../images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> Note: In Angular 19 and below, the CLI generates files like `app.component.ts`, `app.component.html`, `app.component.css`, etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular Bullet Chart component](https://www.syncfusion.com/angular-components/angular-bullet-chart) for demonstration. Add the Angular Bullet Chart component with:

```bash
ng add @syncfusion/ej2-angular-charts
```

The above command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-charts` package and peer dependencies to your `package.json`.
- Import the Bullet Chart component in your application.

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

## Add Bullet Chart component

Modify the template in the `app.component.ts` file to render the Bullet Chart component `[src/app/app.component.ts]`.

```typescript

import { Component, ViewEncapsulation } from '@angular/core';
import { BulletChartModule } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [BulletChartModule],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Bullet Chart component
    template: `<ejs-bulletchart id='container'></ejs-bulletchart>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }

```

Now use the `app-root` selector in the `index.html` file instead of the default one.
 
```html
<app-root></app-root>
```

* Use the `ng serve` command to run the application in the browser.

```bash
ng serve
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/initialize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/initialize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/initialize-cs1" %}

## Module injection

Bullet Chart components are segregated into individual feature-wise modules. To use a particular feature, you need to inject its feature service in the `app.component.ts` file. In the current application, we are going to use the tooltip feature of the chart.

* `BulletTooltipService` - Inject this provider to use tooltip feature.

Now import the above-mentioned modules from the chart package and inject them into the Bullet Chart component through the `providers` array.

  ```typescript
    import { Component } from '@angular/core';
    import { BulletChartModule, BulletTooltipService } from '@syncfusion/ej2-angular-charts';
    @Component({
        imports: [BulletChartModule],
        standalone: true,
        providers: [BulletTooltipService]
    })
```

## Bullet Chart with data

This section explains how to plot JSON data to the Bullet Chart.

```typescript
import { Component, OnInit } from '@angular/core';
import { BulletChartModule } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [BulletChartModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-bulletchart [dataSource]='data' valueField='value' targetField='target'></ejs-bulletchart>`
})
export class AppComponent implements OnInit {
    public data: Object[];
    ngOnInit(): void {
        // Data for Bullet Chart
        this.data = [
            { value: 100, target: 80 },
            { value: 200, target: 180 },
            { value: 300, target: 280 },
            { value: 400, target: 380 },
            { value: 500, target: 480 }
        ];
    }
}
```

Now assign the local data to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletchartmodel#datasource) property. The `value` and `target` values should be mapped with the [`valueField`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletchartmodel#valuefield) and [`targetField`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletchartmodel#targetfield) properties respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/datasource-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/datasource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/datasource-cs1" %}

## Add Bullet Chart title

You can add a title to the Bullet Chart using the [`title`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletchartmodel#title) property to provide quick information to the user about the data plotted in the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/title-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/title-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/title-cs1" %}

## Ranges

You can add a range using the [`ranges`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletchartmodel#ranges) property of the Bullet Chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs23/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs23" %}

## Enable tooltip

You can enable tooltip for the Bullet Chart by setting the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bullettooltipsettingsmodel#enable) property to `true` in the [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletchartmodel#tooltip) object and by adding the `BulletTooltipService` to the `providers` array in your component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/tooltip-cs1" %}