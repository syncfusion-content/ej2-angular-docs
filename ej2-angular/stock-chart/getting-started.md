---
layout: post
title: Getting Started with Angular Stock Chart component | Syncfusion
description:  Check out and learn about Getting Started with Angular Stock Chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting Started 
documentation: ug
domainurl: https://ej2.syncfusion.com
---

# Getting Started with Angular Stock Chart Component

This section explains the steps required to create a simple [stock chart](https://www.syncfusion.com/angular-components/angular-stock-chart) and demonstrates the basic usage of the Angular Stock Chart component.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/mcp-server/ai-coding-assistant/getting-started)

To get started quickly with Angular Stock Chart using CLI and Schematics, view the following video:

{% youtube "https://www.youtube.com/watch?v=ge_uQtqNZMA" %}

## Prerequisites

Before getting started, ensure that your environment meets the [system requirements for Syncfusion® Angular UI components](https://ej2.syncfusion.com/angular/documentation/system-requirement), which covers supported Node.js, Angular, and `@syncfusion/ej2-angular-charts` versions.

## Setup the Angular application

A straightforward approach to begin with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

Verify the installation:

```bash
ng version
```

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

### Installing a specific version

To install a particular version of Angular CLI, use:

```bash
npm install -g @angular/cli@21.0.0
```

## Create an Angular application

With Angular CLI installed, execute the following command to generate a new application:

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

![SSR](../images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![AI](../images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> In Angular 19 and below, the CLI generates files like `app.component.ts`, `app.component.html`, `app.component.css`, etc. In Angular 20+, the CLI generates a similar structure with `src/app/app.component.ts`, `app.component.html`, and `app.component.css`. This guide uses the modern standalone architecture and follows the `app.component.ts` convention throughout.

## Adding the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Stock Chart package

To install the **Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Stock Chart** package, use the following command:

```bash
ng add @syncfusion/ej2-angular-charts
```

The `ng add` command installs the package, registers it in `package.json`, and configures the required entries in your workspace automatically.

If `ng add` is unavailable in your setup, install the package manually with:

```bash
npm install @syncfusion/ej2-angular-charts
```

## Add CSS References

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Stock Chart component themes can be applied using CSS or SASS from the [npm theme packages](https://ej2.syncfusion.com/angular/documentation/appearance/overview#theme-packages). Themes can also be applied via CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio). For more information, refer to the [themes documentation](https://ej2.syncfusion.com/angular/documentation/appearance/overview).

This example uses the [Material 3](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme) theme for the Stock Chart component. To install the theme package, use the following command:

```bash
npm install @syncfusion/ej2-material3-theme
```

Reference the theme CSS in `src/styles.css` as follows:

```css
@import "@syncfusion/ej2-material3-theme/styles/stock-chart/index.css";
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Stock Chart component

Modify the template in `src/app/app.component.ts` (or `src/app/app.ts` in Angular 20+) to render the Stock Chart component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## Module Injection

Stock Chart components are segregated into individual feature-wise modules. To use a particular feature, you need to inject its feature service in `src/app/app.ts` (Angular 20+) or `src/app/app.component.ts` (Angular 19 and below). This example will use the candle series feature of the stock chart.

* `DateTimeService` - Inject this provider to use the date-time axis.
* `CandleSeriesService` - Inject this provider to render the candle series.

Replace the contents of `src/app/app.component.ts` (or `src/app/app.ts` on Angular 20+ and below) with the following:

```typescript
import { Component } from '@angular/core';
import { StockChartModule, DateTimeService, CandleSeriesService } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [StockChartModule],
    providers: [DateTimeService, CandleSeriesService],
    template: `<ejs-stockchart id="stock-chart-container"></ejs-stockchart>`
})
export class App {
}
```

## Bind data to the Stock Chart

This section explains how to plot financial data to the Stock Chart. Replace the contents of `src/app/app.ts` (Angular 20+) or `src/app/app.component.ts` (Angular 19 and below) with the following:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/getting-started-cs2" %}

![Candle stock chart showing weekly price data from April to June 2012](../images/stock-chart-getting-started.png)

## Run the application

Run the application using the following command:

```bash
npm start
```

Open the generated local URL (for example, `http://localhost:4200/`) from the terminal in the browser.

## Troubleshooting

If the stock chart does not render as expected, check for these common issues:

* **"No provider for DateTimeService" error**: Confirm that `DateTimeService` and `CandleSeriesService` are added to the component's `providers` array. Each stock chart series type requires its corresponding service.
* **Chart not visible**: Verify that the `<ejs-stockchart>` element has a unique `id` and that the component's `selector` matches the root element used in `src/index.html` (commonly `<app-root>`).
* **Date axis not displaying correctly**: Confirm that `primaryXAxis.valueType` is set to `DateTime` and that the `date` field in your data source is a valid JavaScript `Date` object.
* **Data not displayed**: Check that the `xName`, `high`, `low`, `open`, `close`, and `volume` values match the field names in your data source exactly.
* **Build errors**: Run `ng version` to confirm that Node.js, Angular CLI, and `@syncfusion/ej2-angular-charts` are on supported versions, and check the terminal output for the specific error.
* **Port already in use**: If `npm start` fails because port `4200` is in use, run `ng serve --port 4201` (or another free port) instead.

## See also

* [Configure the period selector below the chart](period-selector)
* [Add a range selector for interactive zoom and pan](range-selector)
* [Add technical indicators such as RSI, MACD, and Bollinger Bands](technical-indicators)
* [Add trendlines to the stock chart](trend-lines)
* [Stock Chart API reference](https://ej2.syncfusion.com/angular/documentation/api/stock-chart)