---
layout: post
title: Getting started with Angular Sankey Chart component | Syncfusion
description: Checkout and learn about Getting started with Angular Sankey Chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Sankey Chart component

This section explains the steps required to create a simple [Angular Sankey Chart](https://www.syncfusion.com/angular-components/angular-sankey-chart) and demonstrates the basic usage of the Sankey Chart component in an Angular environment.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement).

## Setup Angular environment

A straightforward approach to begin with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

> **Angular 21 Standalone Architecture:**  
Standalone components are the default in Angular 21.  
If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

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

This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format:

```bash
? Which stylesheet format would you like to use? (Use arrow keys)
> CSS             [ https://developer.mozilla.org/docs/Web/CSS ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org ]
```

To directly create a project with SCSS:

```bash
ng new syncfusion-angular-app --style=scss
```

* During project setup, when prompted for the Server-side rendering (SSR) option, choose the appropriate configuration.

![SSR](../images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![AI](../images/Ai.png)

Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> Note:  
> In Angular 19 and below, the CLI generates files like `app.component.ts`, `app.component.html`, etc.  
> In Angular 20+, the CLI generates a simpler structure with `app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Installing Syncfusion® Sankey Chart package

Syncfusion’s Angular component packages are available on https://www.npmjs.com/search?q=ej2-angular.

Install using Angular CLI:

```bash
ng add @syncfusion/ej2-angular-charts
```

This command will:

- Add the `@syncfusion/ej2-angular-charts` package and its peer dependencies to your `package.json`.
- Import the required chart modules into your application automatically.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

Syncfusion® offers two package structures:

1. **Ivy library distribution package** – Recommended for Angular 12+  
2. **Angular compatibility compiler (ngcc)** – For Angular 15 and below

### Ivy library distribution package

```bash
ng add @syncfusion/ej2-angular-charts
```

### Angular compatibility compiled package (ngcc)

```bash
npm add @syncfusion/ej2-angular-charts@32.1.19-ngcc
```

> ngcc packages work only on Angular 15 and below.  
> They are not supported starting from Angular 16.  
If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility).

## Add Sankey Chart component

Modify `app.component.ts`:

```ts
import { Component, ViewEncapsulation } from '@angular/core';
import { SankeyAllModule } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [SankeyAllModule],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-sankey id="sankey-container"></ejs-sankey>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }
```

Update `index.html`:

```html
<app-container></app-container>
```

Run the app:

```bash
ng serve
```

### Basic Sankey example

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/getting-started/initialize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/getting-started/initialize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/getting-started/initialize-cs1" %}

## Add data to Sankey Chart

Nodes represent the categories, and links represent the flow between them.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/getting-started/data-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/getting-started/data-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/getting-started/data-cs1" %}

## Module injection

To enable tooltip and legend features, inject the following services:

- `SankeyTooltipService`
- `SankeyLegendService`

```ts
import { Component } from '@angular/core';
import {
  SankeyModule,
  SankeyTooltipService,
  SankeyLegendService
} from '@syncfusion/ej2-angular-charts';

@Component({
  imports: [SankeyModule],
  standalone: true,
  providers: [SankeyTooltipService, SankeyLegendService]
})
export class AppComponent {}
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/getting-started/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/getting-started/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/getting-started/tooltip-cs1" %}

> You can refer to our [Angular Sankey Chart](https://www.syncfusion.com/angular-components/angular-sankey-chart) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Sankey Chart example](https://ej2.syncfusion.com/angular/demos/#/material/sankey/default) that shows various flow visualization scenarios and how to represent complex data movements.
