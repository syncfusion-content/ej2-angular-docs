---
layout: post
title: Angular Grid Getting Started (Quick Setup Guide) | Syncfusion
description: Learn how to install and configure the Syncfusion Angular Grid. Set up a new Angular app and enable paging, sorting, filtering, and grouping.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Grid Component

This guide demonstrates how to set up and configure the Syncfusion Angular Grid component, from initial installation through enabling core features like paging, sorting, filtering, and grouping.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

To get started quickly with Angular Grid using CLI and Schematics, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=gdOUcWO9-ME" %}

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement).

## Setup the Angular application

A straightforward approach to beginning with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

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

> Note: In Angular 19 and below, it uses `app.component.ts`, `app.component.html`, `app.component.css` etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid packages

To install the Grid component, use the following command:

```bash
npm install @syncfusion/ej2-angular-grids --save

```
## Adding CSS reference

The following CSS files are available in the **../node_modules/@syncfusion** package folder. Add these as references in **src/styles.css**

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/material3.css';
```

> Ensure that the import order aligns with the component's dependency sequence.

For using SCSS styles, refer to [this guide](https://ej2.syncfusion.com/angular/documentation/common/how-to/sass).

## Add Grid component

Modify the template in the **src/app/app.ts** file to render the grid component. Add the Angular Grid by using `<ejs-grid>` selector in `template` section of the **app.ts** file.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/grid/getting-started/src/app.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/getting-started/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging-cs1" %}

## Run the application

```bash
ng serve --open
```

## See also

* [Grid Feature Modules](./module)
* [How to get current query in Angular Grid](https://www.syncfusion.com/forums/147454/how-to-get-current-query-in-angular-grid)
* [Apply Grid Localization from external JSON file in Angular Grid](https://www.syncfusion.com/forums/144844/apply-grid-localization-from-external-json-file-in-angular-grid)
* [How to render the Syncfusion Grid in jHipster spring boot Angular App](https://www.syncfusion.com/forums/156933/how-to-render-the-syncfusion-grid-in-jhipster-spring-boot-angular-app)
* [Calculate Height of Angular Grid](https://www.syncfusion.com/forums/151191/calculate-height-of-angular-grid)
* [How to set tabindex for input element and NumericTextBox in Angular Grid](https://www.syncfusion.com/forums/145969/how-to-prevent-columns-from-persisting-in-asp-net-mvc-grid)
* [How to toggle between List and Grid View in Angular?](https://support.syncfusion.com/kb/article/11667/how-to-toggle-between-list-and-grid-view-in-angular)
* [How to get started easily with an example of Syncfusion angular 6 data grid/datatable?](https://support.syncfusion.com/kb/article/10068/how-to-get-started-easily-with-an-example-of-syncfusion-angular-6-data-grid-datatable)
* [How to render Angular Grid with material theme](https://support.syncfusion.com/kb/article/11617/how-to-render-angular-grid-with-material-theme)
* [Getting Started ASP.NET Core with Angular using Project Template](https://ej2.syncfusion.com/angular/documentation/getting-started/aspnet-core)
* [Getting Started with Angular CLI as Front end in ASP.NET MVC](https://ej2.syncfusion.com/angular/documentation/getting-started/aspnet-mvc)
* [Getting Started with Ionic and Angular](https://ej2.syncfusion.com/angular/documentation/frameworks-and-feature/ionic)
* [Getting Started with Angular and Electron](https://ej2.syncfusion.com/angular/documentation/frameworks-and-feature/electron)
* [How to get started easily with Syncfusion angular 9 data grid?](https://support.syncfusion.com/kb/article/9726/how-to-get-started-easily-with-syncfusion-angular-9-data-grid)
* [How to get started easily with Syncfusion angular 8 data grid?](https://support.syncfusion.com/kb/article/9761/how-to-get-started-easily-with-syncfusion-angular-8-data-grid)
* [How to handle errors in Angular Grid component?](https://support.syncfusion.com/kb/article/11649/how-to-handle-errors-in-angular-grid-component)
* [How to get started easily with Syncfusion Angular 7 Data Grid/DataTable?](https://support.syncfusion.com/kb/article/11603/how-to-get-started-easily-with-syncfusion-angular-7-data-grid-datatable)
* [How to get started easily with an example of Syncfusion angular 5 data grid?](https://support.syncfusion.com/kb/article/8578/how-to-get-started-easily-with-an-example-of-syncfusion-angular-5-data-grid)
* [How to get started easily with Syncfusion angular 4 data grid?](https://support.syncfusion.com/kb/article/11670/how-to-get-started-easily-with-syncfusion-angular-4-data-grid)
