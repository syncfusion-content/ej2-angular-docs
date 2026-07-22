---
layout: post
title: Getting started with Angular Tree Grid component | Syncfusion
description: Learn how to get started with the Angular Tree Grid component in Syncfusion Essential JS 2, including installation, configuration, and basic usage.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started With Angular Tree Grid Component

This section outlines the steps required to create an Essential<sup style="font-size:70%">&reg;</sup> JS 2 Tree Grid and demonstrates basic usage of the [Angular Tree Grid control](https://www.syncfusion.com/angular-components/angular-tree-grid) within an Angular CLI application.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

To get started quickly with the Angular Tree Grid using CLI and Schematics, refer to the following video:

{% youtube "https://www.youtube.com/watch?v=2LJKv7rao6Y" %}

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Angular | 12 and above |
| Node.js | 14.0.0 or above, Recommended: Latest Version |

### Angular supported versions

| Angular Version | Minimum Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Tree Grid Version |
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

## Setup Angular environment

Use the [Angular CLI](https://github.com/angular/angular-cli) to set up Angular applications. To install Angular CLI, execute:

```bash
npm install -g @angular/cli
```
> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. For more information about the standalone architecture, refer to the [Standalone Guide](./angular-standalone).

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

* This command will prompt to configure settings like enabling Angular routing and choosing a stylesheet format.

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Tree Grid packages

To install the Tree Grid component, use the following command:

```bash
npm install @syncfusion/ej2-angular-treegrid --save

```
## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Tree Grid components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/angular/documentation/appearance/overview) documentation.

Install the Material 3 theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme --save

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the **src/styles.css** file:

{% tabs %}
{% highlight css tabtitle="styles.css" %}

@import "../node_modules/@syncfusion/ej2-material3-theme/styles/treegrid/index.css";

{% endhighlight %}
{% endtabs %}


## Add Tree Grid component

Modify the template in the **src/app/app.ts** file to render the tree grid component. Add the Angular Tree Grid by using `<ejs-treegrid>` selector in `template` section of the **app.ts** file.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/treegrid/getting-started/src/app.ts %}
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

@import "../node_modules/@syncfusion/ej2-material3-theme/styles/treegrid/index.css";

{% endraw %}
{% endhighlight %}

{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/getting-started-cs1" %}

## Run the application

```bash
ng serve --open
```

Then open the URL displayed in the terminal.

## Registering Syncfusion license

The Syncfusion® Angular Tree Grid requires a valid license key to be registered in the application. To prevent license validation warnings, refer to the [Syncfusion licensing](https://ej2.syncfusion.com/angular/documentation/licensing/overview) documentation.

## Troubleshooting

- **Grid styles are not applied:** Ensure the required Syncfusion theme CSS is imported in `src/styles.css`.
- **Trial license warning message:** Register a valid Syncfusion license key using the `registerLicense()` method from `@syncfusion/ej2-base`.

N> Looking for the full Angular Tree Grid component overview, features, pricing, and documentation? Visit the [Angular Tree Grid](https://www.syncfusion.com/angular-components/angular-tree-grid) page.

## See also

* [Grid Feature Modules](./module)