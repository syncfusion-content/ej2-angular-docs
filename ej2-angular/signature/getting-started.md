---
layout: post
title: Getting started with Angular Signature component | Syncfusion
description:  Checkout and learn about Getting started with Angular Signature component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Signature component

This guide demonstrates how to set up and configure the Syncfusion Angular Signature component for capturing and managing digital signatures. The component provides smooth stroke rendering on a canvas, undo/redo operations, and export functionality for saving signatures in multiple formats.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion Angular UI Components](../system-requirement).

## Dependencies

The list of dependencies required to use the Signature module in your application is given below:

```javascript
|-- @syncfusion/ej2-angular-inputs
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
        |-- @syncfusion/ej2-splitbuttons
```

## Set up the Angular application

The fastest way to start with Angular is to use the [Angular CLI](https://github.com/angular/angular-cli). Install Angular CLI globally with the following command:

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

With Angular CLI installed, execute the following command to generate a new application:

```bash
ng new syncfusion-angular-app
```

* This command prompts you to configure settings such as enabling Angular routing and selecting a stylesheet format.

```bash

? Which stylesheet format would you like to use? (Use arrow keys)
> CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org                                             ]

```

* By default, a CSS-based application is created. To use SCSS instead, run:

```bash
ng new syncfusion-angular-app --style=scss
```

* During project setup, configure Server-side rendering (SSR) if needed.

![Initial_setup](images/SSR.png)

* Select an AI tool or choose 'none' if not needed.

![Initial_setup](images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> **Note**: Angular 19 and below use `app.component.ts`, `app.component.html`, and `app.component.css`. Angular 20+ generates a simpler structure: `src/app/app.ts`, `app.html`, and `app.css` (without `.component.` suffixes).

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Signature Package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular Signature component](https://www.syncfusion.com/angular-components/angular-signature) for demonstration. Install the package with:

```bash
ng add @syncfusion/ej2-angular-inputs
```

This command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-inputs` package and peer dependencies to your `package.json`.
- Import the Signature component component in your application.
- Register the default Syncfusion<sup style="font-size:70%">&reg;</sup> material theme in `angular.json`.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> provides two package distributions for Angular components:

1. **Ivy library format** ([Angular package format](https://angular.dev/tools/libraries/angular-package-format)) - Recommended
2. **Angular compatibility compiler (ngcc)** - Legacy compilation pipeline

Latest Syncfusion<sup style="font-size:70%">&reg;</sup> packages are Ivy-compatible and recommended for Angular 12+. Install using:

```bash
ng add @syncfusion/ej2-angular-inputs
```

For legacy projects using ngcc:

> **Note**: ngcc packages are compatible with Angular CLI 15 and below but may generate deprecation warnings. Starting from Angular 16, ngcc support has been removed. Refer to the [FAQ](https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility) for more information.

```bash
npm add @syncfusion/ej2-angular-inputs@32.1.19-ngcc
```

## Import Syncfusion CSS styles

Apply Syncfusion<sup style="font-size:70%">&reg;</sup> themes via CSS/SCSS from npm packages, CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio).

The `Material` theme is automatically added to `styles.css` when you run `ng add`.

To import only the styles required for the Signature component, add these imports:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
```

> **Important**: Maintain the import order to respect component dependencies.

For SCSS styles, refer to [this guide](https://ej2.syncfusion.com/angular/documentation/common/how-to/sass).

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Signature component

Modify the template in `app.ts` file with the Signature component to render the Signature component.

```typescript
import { Component, OnInit } from '@angular/core';
import { SignatureModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [SignatureModule],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render Signature. -->
             <canvas ejs-signature #signature id="signature" ></canvas>`
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
    }
}
```

## Running the application

Run the application in the browser using the following command:

```bash
ng serve --open
```

The following example shows a basic `Signature` component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/signature/getting-started/default-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/signature/getting-started/default-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/signature/getting-started/default-cs2" %}
