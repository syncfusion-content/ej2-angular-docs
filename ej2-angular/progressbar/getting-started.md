---
layout: post
title: Getting started with Angular Progress Bar component | Syncfusion
description:  Checkout and learn about Getting started with Angular Progress Bar component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Progress Bar Component

This section explains the steps required to create a Progress Bar and demonstrates the basic usage of the Progress Bar component. By the end of this guide, you will have a fully functional Progress Bar running in your Angular application.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

## Dependencies

Below is the list of minimum dependencies required to use the Progress Bar component.

```javascript
    |-- @syncfusion/ej2-angular-progressbar
      |-- @syncfusion/ej2-base
      |-- @syncfusion/ej2-data
      |-- @syncfusion/ej2-svg-base
```

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

> Note: In Angular 19 and below, it uses `app.component.ts`, `app.component.html`, `app.component.css` etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular Progress Bar Component](https://www.syncfusion.com/angular-components/angular-progressbar) for demonstration. Add the Angular Progress Bar component with:

```bash
ng add @syncfusion/ej2-angular-progressbar
```

The above command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-progressbar` package and peer dependencies to your `package.json`.
- Import the Progress Bar component in your application.
- Register the default Syncfusion<sup style="font-size:70%">&reg;</sup> Material theme in `angular.json`.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package structures for Angular components:		
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)		
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.		
Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:		
```bash		
ng add @syncfusion/ej2-angular-progressbar		
```		
For applications not compiled with Ivy, use the `ngcc` tagged packages:		
> The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of Ivy compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility).	

```bash		
npm add @syncfusion/ej2-angular-progressbar@32.1.19-ngcc		
```

## Add Progress Bar component

Modify the template in the [src/app/app.component.ts] file to render the `ejs-progressbar` component. Add the Angular Progress Bar by using the `<ejs-progressbar>` selector in the template section of the app.component.ts file.

File: `src/app/app.component.ts`

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar'

@Component({
    imports: [
        ProgressBarModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Progress Bar component
    template: `<ejs-progressbar id='percentage'></ejs-progressbar>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }
```

Now run the application in the browser using the following command.

```bash
ng serve
```

After the development server starts, open your browser and navigate to `http://localhost:4200/`. You should see the basic Progress Bar component displayed on the page.

The following example demonstrates a basic Progress Bar component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progressbar/getting-started-cs1" %}

## Module injection

The Progress Bar component offers additional features through injectable modules. To use these features, import and register the required service modules in the component's `providers` array.

The following services enhance the Progress Bar's functionality:

* **ProgressAnnotationService** - Enables adding annotations (text or custom content) to the Progress Bar at specific positions. Inject this service to display additional information or labels within or around the Progress Bar.

These services should be injected into the `providers` section of the component.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { ProgressBarModule, ProgressAnnotationService } from '@syncfusion/ej2-angular-progressbar';

@Component({
    imports: [
        ProgressBarModule
    ],
    providers: [ProgressAnnotationService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-progressbar id='percentage'></ejs-progressbar>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }
```

> **Note:** For basic Progress Bar functionality without annotations, no service injection is required. The annotation feature is optional and should only be injected when needed.