---
layout: post
title: Angular Data Grid Getting Started (Quick Setup Guide) | Syncfusion
description: Learn how to install and configure the Angular Data Grid. Set up a new Angular app and enable paging, sorting, filtering, and grouping.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Data Grid Component

This guide demonstrates how to set up and configure the Angular Data Grid component, from initial installation through enabling core features like paging, sorting, filtering, and grouping.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

To get started quickly with Angular Data Grid using CLI and Schematics, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=gdOUcWO9-ME" %}

{% tabcontents %}

{% tabcontent Syncfusion CLI %}

## Prerequisites

- [Node.js 24+](https://nodejs.org/en) (LTS recommended).
- Syncfusion CLI.

## Install the Syncfusion CLI 

Install the Syncfusion CLI globally using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm install -g @syncfusion/syncfusion-cli
{% endhighlight %}
{% endtabs %}

## Create a new Angular application using Syncfusion CLI

You can create a Angular application using the Syncfusion CLI. The CLI provides two ways to create a project:

### Non-interactive mode

Non-interactive mode allows you to create a project directly using a single command with the required command-line arguments.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf new syncfusion-angular-app --framework angular --template grid
{% endhighlight %}
{% endtabs %}

In this mode, the project configuration is passed directly in the command. The above command creates a Angular application configured with the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component.

### Interactive mode

Interactive mode guides you through the project creation process with step-by-step prompts.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf
{% endhighlight %}
{% endtabs %}

When you run the `sf` command, the CLI prompts you to select the required project configuration. To create a Angular application with the Syncfusion<sup style="font-size:70%">&reg;</sup> `Grid` component, select the following options:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ Project name? ... syncfusion-angular-app
√ Choose Framework: » Angular
√ Choose Template: » Grid
√ Choose Theme: » Material3
√ Choose Style Format: » CSS
√ Would you like to integrate the Syncfusion MCP Server (AI Assistant) into this project? ... no
√ Would you like to install Syncfusion Component Skills for AI-powered development? ... no
√ Install dependencies and start app now? ... no

{% endhighlight %}
{% endtabs %}

The above selections generate a Angular application configured with the Syncfusion<sup style="font-size:70%">&reg;</sup> `Grid` component. You can choose different values for language, theme, style format, MCP setup, and skills installation based on your project requirements.

The Syncfusion<sup style="font-size:70%">&reg;</sup> CLI creates the project with a predefined template. After the project is generated, you can customize or replace the component code based on your application requirements.

## Run the project

Once the project is created, navigate to the project directory and run the following commands in your terminal.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
cd syncfusion-angular-app
npm install
ng serve
{% endhighlight %}
{% endtabs %}

The output will appear as follows:

![Grid Component](./images/cli-grid.png)

{% endtabcontent %}

{% tabcontent Angular CLI %}

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Angular | 12 and above |
| Node.js | 14.0.0 or above, Recommended: Latest Version |

### Angular supported versions

| Angular Version | Minimum Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid Version |
|-----------------|-----------------------------------------------|
|[Angular v22](https://blog.angular.dev/announcing-angular-v22-c52bb83a4664) | 34.1.29 |
|[Angular v21](https://www.syncfusion.com/blogs/post/angular-21-updates-syncfusion-support) | 31.1.17 |
|[Angular v20](https://www.syncfusion.com/blogs/post/whats-new-in-angular-20)| 29.2.8|
|[Angular v19](https://blog.angular.dev/meet-angular-v19-7b29dfd05b84/)| 26.1.35 |
| [Angular v18](https://blog.angular.dev/angular-v18-is-now-available-e79d5ac0affe/) | 25.2.3 |
| [Angular v17](https://blog.angular.io/introducing-angular-v17-4d7033312e4b/)| 23.2.4 |
| [Angular v16](https://blog.angular.io/angular-v16-is-here-4d7a28ec680d/)| 21.1.39 |
| [Angular v15](https://blog.angular.io/angular-v15-is-now-available-df7be7f2f4c8/) | 20.4.38 |
|[Angular v14](https://blog.angular.io/angular-v14-is-now-available-391a6db736af/)| 20.2.36 |
| [Angular v13](https://blog.angular.io/angular-v13-is-now-available-cce66f7bc296/) | 19.4.38 and above |
| [Angular v12](https://blog.angular.io/angular-v12-is-now-available-32ed51fbfd49/)| 19.3.43 |

### Browser support

| Browser | Supported Versions |
|:--------|:-------------------|
| Google Chrome, including Android & iOS  | Latest 2 versions |
| Mozilla Firefox	 | Latest version |
| Microsoft Edge	    | Latest 2 versions |
| Apple Safari, including iOS	  | Latest 2 versions |

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grids package

To install the Grids package, use the following command:

```bash
npm install @syncfusion/ej2-angular-grids --save

```
## Adding CSS reference

Themes for Syncfusion® Data Grid components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/angular/documentation/appearance/overview) documentation.

Install the Material 3 theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme --save

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the **src/styles.css** file:

{% tabs %}
{% highlight css tabtitle="styles.css" %}

@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";

{% endhighlight %}
{% endtabs %}

## Add Data Grid component

Modify the template in the **src/app/app.ts** file to render the Data Grid component. Add the Angular Data Grid by using `<ejs-grid>` selector in `template` section of the **app.ts** file.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/grid/getting-started/src/app.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% raw %}

@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";

{% endraw %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging-cs1" %}

## Run the application

```bash
ng serve --open
```

Then open the URL displayed in the terminal.

## Registering Syncfusion license

The Syncfusion® Angular Data Grid requires a valid license key to be registered in the application. To prevent license validation warnings, refer to the [Syncfusion licensing](https://ej2.syncfusion.com/angular/documentation/licensing/overview) documentation.

{% endtabcontent %}

{% endtabcontents %}

## Troubleshooting

- **Grid styles are not applied:** Ensure the required Syncfusion theme CSS is imported in `src/styles.css`.
- **Trial license warning message:** Register a valid Syncfusion license key using the `registerLicense()` method from `@syncfusion/ej2-base`.


N> Looking for the full Angular Data Grid component overview, features, pricing, and documentation? Visit the [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) page.

## See also

* [Data Grid Feature Modules](./module)
* [Data Binding](./data-binding)
* [How to get current query in Angular Data Grid](https://www.syncfusion.com/forums/147454/how-to-get-current-query-in-angular-grid)
* [Apply Data Grid Localization from external JSON file in Angular Data Grid](https://www.syncfusion.com/forums/144844/apply-grid-localization-from-external-json-file-in-angular-grid)
* [How to render the Syncfusion Data Grid in jHipster spring boot Angular App](https://www.syncfusion.com/forums/156933/how-to-render-the-syncfusion-grid-in-jhipster-spring-boot-angular-app)
* [Calculate Height of Angular Data Grid](https://www.syncfusion.com/forums/151191/calculate-height-of-angular-grid)
* [How to set tabindex for input element and NumericTextBox in Angular Data Grid](https://www.syncfusion.com/forums/145969/how-to-prevent-columns-from-persisting-in-asp-net-mvc-grid)
* [How to toggle between List and Data Grid View in Angular?](https://support.syncfusion.com/kb/article/11667/how-to-toggle-between-list-and-grid-view-in-angular)
* [How to get started easily with an example of Angular 6 data grid/datatable?](https://support.syncfusion.com/kb/article/10068/how-to-get-started-easily-with-an-example-of-syncfusion-angular-6-data-grid-datatable)
* [How to render Angular Data Grid with material theme](https://support.syncfusion.com/kb/article/11617/how-to-render-angular-grid-with-material-theme)
* [Getting Started ASP.NET Core with Angular using Project Template](https://ej2.syncfusion.com/angular/documentation/getting-started/aspnet-core)
* [Getting Started with Angular CLI as Front end in ASP.NET MVC](https://ej2.syncfusion.com/angular/documentation/getting-started/aspnet-mvc)
* [Getting Started with Ionic and Angular](https://ej2.syncfusion.com/angular/documentation/frameworks-and-feature/ionic)
* [Getting Started with Angular and Electron](https://ej2.syncfusion.com/angular/documentation/frameworks-and-feature/electron)
* [How to get started easily with Angular 9 data grid?](https://support.syncfusion.com/kb/article/9726/how-to-get-started-easily-with-syncfusion-angular-9-data-grid)
* [How to get started easily with Angular 8 data grid?](https://support.syncfusion.com/kb/article/9761/how-to-get-started-easily-with-syncfusion-angular-8-data-grid)
* [How to handle errors in Angular Data Grid component?](https://support.syncfusion.com/kb/article/11649/how-to-handle-errors-in-angular-grid-component)
* [How to get started easily with Angular 7 Data Grid/DataTable?](https://support.syncfusion.com/kb/article/11603/how-to-get-started-easily-with-syncfusion-angular-7-data-grid-datatable)
* [How to get started easily with an example of Angular 5 data grid?](https://support.syncfusion.com/kb/article/8578/how-to-get-started-easily-with-an-example-of-syncfusion-angular-5-data-grid)
* [How to get started easily with Angular 4 data grid?](https://support.syncfusion.com/kb/article/11670/how-to-get-started-easily-with-syncfusion-angular-4-data-grid)