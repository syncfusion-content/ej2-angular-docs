---
layout: post
title: Getting started with Angular Sparkline component | Syncfusion
description:  Checkout and learn about Getting started with Angular Sparkline component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Sparkline component

This section explains the steps required to create a simple [Angular Sparkline](https://www.syncfusion.com/angular-components/angular-sparkline) and demonstrates the basic usage of the Sparkline component in an Angular environment.

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

## Adding Syncfusion Sparkline package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular Sparkline component](https://www.syncfusion.com/angular-components/angular-sparkline) for demonstration. Add the Angular Sparkline component with:

```bash
ng add @syncfusion/ej2-angular-charts
```

The above command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-charts` package and peer dependencies to your `package.json`.
- Import the Sparkline component in your application.

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

## Add Sparkline component

Modify the `app.component.ts` file to render the Sparkline component (`ejs-sparkline`). Ensure the component selector used in `index.html` matches the `selector` value defined in the component (for example `<app-container>` when `selector: 'app-container'`).
  
```typescript

import { SparklineModule } from '@syncfusion/ej2-angular-charts'
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    imports: [SparklineModule],
    standalone: true,
    selector: 'app-container',
    // specifies the template string for the Sparkline component
    template: `<ejs-sparkline id='sparkline-container'></ejs-sparkline>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }

```

Use the component selector defined in `app.component.ts` (for example `<app-container>`) in `index.html` so the root component mounts correctly.

```html
<app-container></app-container>
```

Run the development server. Use `ng serve` for the Angular dev server. Alternatively, `npm start` works if a `start` script is configured in `package.json`.

```
npm start
```

The below example shows a basic Sparkline.

```typescript

import { SparklineModule } from '@syncfusion/ej2-angular-charts'
import { Component } from '@angular/core';

@Component({
    imports: [SparklineModule],
    standalone: true,
    selector: 'app-container',
    // specifies the template string for the Sparkline component
    template: `<ejs-sparkline id='sparkline-container'></ejs-sparkline>`
})
export class AppComponent  { }

```

Because no [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/sparklinemodel#datasource) is specified, the Sparkline renders an empty SVG element. To render a Sparkline provide a `dataSource` (an array of numbers or an array of objects) and map fields using [`xName`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/sparklinemodel#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/sparklinemodel#yname). For example, when using an array of objects such as `{ x: 'Jan', y: 10 }`, set `xName='x'` and `yName='y'`.

## Module injection

Sparkline features are provided by optional services. To enable a feature, register its service either in the application module `providers` (module-based applications) or in a standalone component's `providers` array. Relevant services include:

* SparklineTooltipService - Inject this provider to enable tooltip support for the Sparkline.

The following examples demonstrate enabling tooltip support and other feature services. Import `SparklineTooltipService` from `@syncfusion/ej2-angular-charts` and provide it according to the application architecture (module providers or component `providers`).

  ```typescript

    import { SparklineModule, SparklineTooltipService } from '@syncfusion/ej2-angular-charts'
    import { Component } from '@angular/core';

    @Component({
      imports: [SparklineModule],
      standalone: true,
      providers: [ SparklineTooltipService ]
    })

  ```

## Bind data source to Sparkline

The [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/sparklinemodel#datasource) property binds data to the Sparkline. This property accepts an array of primitive values or an array of objects. For object arrays, set [`xName`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/sparklinemodel#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/sparklinemodel#yname) to map object fields to the Sparkline's X and Y values. Example data shape: `{ x: 'Jan', y: 10 }` with `xName='x'` and `yName='y'`.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs14" %}

## Change the type of Sparkline

We can change the Sparkline types by setting the [`type`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/sparklinemodel#type) property as [`Line`], [`Column`], [`WinLoss`], [`Pie`], [`Area`]. Here, we have given the Sparkline type as [`Area`].

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs15" %}

## Enable tooltip for Sparkline

The Sparkline displays the sparkline details through tooltip, when the mouse is moved over the sparkline. You can enable tooltip by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/sparklinetooltipsettingsmodel#visible) property as true in [`tooltipSettings`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/sparklinemodel#tooltipsettings) object and by injecting `SparklineTooltipService` into the component's `providers` array. 

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs16" %}