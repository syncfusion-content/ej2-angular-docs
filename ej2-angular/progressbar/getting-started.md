---
layout: post
title: Getting Started with Angular Progress Bar | Syncfusion
description: Check out and learn about getting started with the Angular Progress Bar component of Syncfusion Angular UI Components and more details.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Progress Bar

This section explains the steps required to create a Progress Bar and demonstrates the basic usage of the Progress Bar component. By the end of this guide, you will have a Progress Bar running in your Angular application.

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement), which covers supported Node.js, Angular, and `@syncfusion/ej2-angular-progressbar` versions.

You also need a modern code editor such as Visual Studio Code, Cursor, or Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio.

## Dependencies

Below is the list of minimum dependencies required to use the Progress Bar component. Versions reflect the latest stable release at the time of writing.

```javascript
    |-- @syncfusion/ej2-angular-progressbar
      |-- @syncfusion/ej2-base
      |-- @syncfusion/ej2-data
      |-- @syncfusion/ej2-svg-base
```

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

With Angular CLI installed, execute this command to generate a new application. When prompted, accept the default options unless you have a specific reason to change them.

```bash
ng new syncfusion-angular-app
```

* This command prompts you to configure settings like enabling Angular routing and choosing a stylesheet format. Accept the defaults (no routing, CSS) to follow this guide.

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

![Server-side rendering prompt](images/SSR.png)

* Select the required AI tool, or 'none' if you do not need any AI tool.

![AI tool selection prompt](images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> In Angular 19 and below, the CLI generates files named `app.component.ts`, `app.component.html`, `app.component.css`, and so on. In Angular 20+, the structure is simpler: `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Progress Bar package

To install the **Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Progress Bar** package, use the following command:

```bash
ng add @syncfusion/ej2-angular-progressbar
```

The `ng add` command installs the package, registers it in `package.json`, and configures the required entries in your workspace automatically.

If `ng add` is unavailable in your setup, install the package manually with:

```bash
npm install @syncfusion/ej2-angular-progressbar
```

## Add the Progress Bar component

Open `src/app/app.ts` (Angular 21) or `src/app/app.component.ts` (Angular 19 and below) in your editor, then add the `ejs-progressbar` selector to the component's `template`. The example below uses the inline `template` string approach.

```typescript
import { Component } from '@angular/core';
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar';

@Component({
    imports: [
        ProgressBarModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Progress Bar component
    template: `<ejs-progressbar id='percentage' value=50 type='Linear'></ejs-progressbar>`,
})
export class AppComponent { }
```

## Run the application

Run the development server with `ng serve`. Alternatively, `npm start` works if a `start` script is configured in `package.json`.

```bash
ng serve
```

## Module Injection

The Progress Bar component offers additional features through injectable services. To use these features, import and register the required services in the component's `providers` array.

The following service enhances the Progress Bar's functionality:

* `ProgressAnnotationService` - Inject this service to display additional information or labels within or around the Progress Bar.

This service should be injected into the `providers` section of the component.

```typescript
import { Component } from '@angular/core';
import { ProgressBarModule, ProgressAnnotationService } from '@syncfusion/ej2-angular-progressbar';

@Component({
    imports: [
        ProgressBarModule
    ],
    providers: [ProgressAnnotationService],
    standalone: true,
    selector: 'app-root',
    template: `
            <ejs-progressbar id="percentage" type="Circular" [value]="75">
                <e-progressbar-annotations>
                    <e-progressbar-annotation
                        content="<div style='font-size:18px;font-weight:bold;'>75%</div>">
                    </e-progressbar-annotation>
                </e-progressbar-annotations>
            </ejs-progressbar>`,
})
export class AppComponent { }
```

## Basic Progress Bar

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

## Troubleshooting

- **`ng add` fails with "Package not found"** - Ensure your npm registry is reachable and that `@syncfusion/ej2-angular-progressbar` is spelled correctly.
- **Standalone component errors** - Make sure `standalone: true` and the `imports: [ProgressBarModule]` array are present in the component decorator.
- **Annotation service not working** - Confirm that `ProgressAnnotationService` is added to the component's `providers` array and that the `annotation` property is bound on the component.

## See also

- [Progress Bar types](types)
- [Progress Bar customization](customization)
- [Progress Bar events](events)
- [Progress Bar API Reference](https://ej2.syncfusion.com/angular/documentation/api/progressbar)

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with the Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio, and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)