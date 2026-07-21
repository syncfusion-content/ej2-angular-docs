---
layout: post
title: Getting started with Angular Progress Bar component | Syncfusion
description: Check out and learn about getting started with the Angular Progress Bar component of Syncfusion Angular UI Components and more details.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Progress Bar Component

This section explains the steps required to create a Progress Bar and demonstrates the basic usage of the Progress Bar component. By the end of this guide, you will have a Progress Bar running in your Angular application.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement), which covers supported Node.js, Angular, and `@syncfusion/ej2-angular-progressbar` versions.

You also need a modern code editor such as Visual Studio Code, Cursor, or Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio.

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

## Dependencies

Below is the list of minimum dependencies required to use the Progress Bar component. Versions reflect the latest stable release at the time of writing.

```javascript
    |-- @syncfusion/ej2-angular-progressbar
      |-- @syncfusion/ej2-base
      |-- @syncfusion/ej2-data
      |-- @syncfusion/ej2-svg-base
```

## Install the Angular CLI

A straightforward approach to begin with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

### Install a specific version

To install a particular version of Angular CLI, use:

```bash
npm install -g @angular/cli@21.0.0
```

## Create a new application

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

> Note: In Angular 19 and below, the CLI generates files named `app.component.ts`, `app.component.html`, `app.component.css`, and so on. In Angular 20+, the structure is simpler: `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular Progress Bar Component](https://www.syncfusion.com/angular-components/angular-progressbar) for demonstration. Add the Angular Progress Bar component with:

```bash
ng add @syncfusion/ej2-angular-progressbar
```

The above command performs the following configurations:

- Adds the `@syncfusion/ej2-angular-progressbar` package and its peer dependencies to your `package.json`.
- Imports the Progress Bar component in your application.
- Registers the default Syncfusion<sup style="font-size:70%">&reg;</sup> Material theme in `angular.json`.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.

The latest packages are Ivy-compatible and supported on Angular 12 and above. For Angular 16+, use the `ng add` command shown above. The `ngcc` option is only relevant for older projects — see the legacy note below.

### Legacy ngcc packages (Angular 15 and below only)

If you are on Angular 15 or below, Syncfusion<sup style="font-size:70%">&reg;</sup> also distributes `ngcc`-tagged packages. The `ngcc` packages are still compatible with Angular CLI versions 15 and below, but they may generate warnings suggesting the use of Ivy-compiled packages. Starting from Angular 16, support for the `ngcc` package has been completely removed. For more information, see the [ngcc compatibility FAQ](https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility).

```bash
npm install @syncfusion/ej2-angular-progressbar@32.1.19-ngcc
```

## Add the Progress Bar component

Open `src/app/app.ts` (Angular 21) or `src/app/app.component.ts` (Angular 19 and below) in your editor, then add the `ejs-progressbar` selector to the component's `template`. The example below uses the inline `template` string approach.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar';

@Component({
    imports: [
        ProgressBarModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Progress Bar component
    template: `<ejs-progressbar id='percentage' value=50 type='Linear'></ejs-progressbar>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }
```

Key properties of the `<ejs-progressbar>` selector:

| Property | Type | Description |
| -------- | ---- | ----------- |
| `value` | `number` | The current progress value (between `min` and `max`). |
| `type` | `progresstype` | The Progress Bar type: `Linear` or `Circular`. |
| `minimum ` | `number` | The minimum value. Defaults to `0`. |
| `maximum ` | `number` | The maximum value. Defaults to `100`. |
| `height` | `string` | The height of the Progress Bar (e.g., `'50px'`). |
| `width` | `string` | The width of the Progress Bar (e.g., `'100%'`). |

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

The Progress Bar component offers additional features through injectable services. To use these features, import and register the required services in the component's `providers` array.

The following service enhances the Progress Bar's functionality:

* **ProgressAnnotationService** - Enables adding annotations (text or custom content) to the Progress Bar at specific positions. Inject this service to display additional information or labels within or around the Progress Bar.

This service should be injected into the `providers` section of the component.

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
    template: `
            <ejs-progressbar id="percentage" type="Circular" [value]="75">
                <e-progressbar-annotations>
                    <e-progressbar-annotation
                        content="<div style='font-size:18px;font-weight:bold;'>75%</div>">
                    </e-progressbar-annotation>
                </e-progressbar-annotations>
            </ejs-progressbar>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }
```

> **Note:** For basic Progress Bar functionality without annotations, no service injection is required. The annotation feature is optional and should only be injected when needed.

## Troubleshooting

- **`ng add` fails with "Package not found"** - Ensure your npm registry is reachable and that `@syncfusion/ej2-angular-progressbar` is spelled correctly.
- **Standalone component errors** - Make sure `standalone: true` and the `imports: [ProgressBarModule]` array are present in the component decorator.
- **Annotation service not working** - Confirm that `ProgressAnnotationService` is added to the component's `providers` array and that the `annotation` property is bound on the component.

## See also

- [Progress Bar types](types.md)
- [Progress Bar customization](customization.md)
- [Progress Bar events](events.md)
- [Progress Bar API reference](api.md)

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with the Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio, and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)