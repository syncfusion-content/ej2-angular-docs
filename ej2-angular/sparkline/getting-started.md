---
layout: post
title: Getting started with Angular Sparkline component | Syncfusion
description: Check out and learn about Getting started with the Angular Sparkline component of Syncfusion Essential JS 2 and more details.
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

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. For more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

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

* By default, the CLI creates a CSS-based application. Use SCSS if preferred:

```bash
ng new syncfusion-angular-app --style=scss
```

* During project setup, when prompted for the Server-side rendering (SSR) option, choose the appropriate configuration.

![Server-side rendering prompt](../images/SSR.png)

* Select the required AI tool or `none` if you do not need any AI tool.

![AI tool selection prompt](../images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> Note: In Angular 19 and below, the CLI generates files like `app.component.ts`, `app.component.html`, `app.component.css`, etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes). The remaining steps in this guide target the Angular 19 and below file layout; for Angular 20+, rename the file references accordingly (for example, `app.component.ts` -> `app.ts`).

## Adding Syncfusion Sparkline Package

After the Angular application is created, navigate to its directory and add the Syncfusion<sup style="font-size:70%">&reg;</sup> Charts package, which also includes the Sparkline component.

```bash
cd syncfusion-angular-app
ng add @syncfusion/ej2-angular-charts
```

The `ng add` command performs the following configurations:

- Adds the `@syncfusion/ej2-angular-charts` package and its peer dependencies to `package.json`.
- Imports the Sparkline component in your application.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package structures for Angular components:

1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format).
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.

### Ivy Library Distribution Package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are Ivy-compatible and suited for Angular 12 and above. Use the `ng add` command shown above to install the package.

### Angular Compatibility Compiled Package (ngcc)

For applications not compiled with Ivy, use the `ngcc`-tagged packages:

> The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of Ivy compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility).

```bash
npm install @syncfusion/ej2-angular-charts@32.1.19-ngcc
```

## Add Sparkline Component

Open `src/app/app.component.ts` (Angular 19 and below) or `src/app/app.ts` (Angular 20+) and replace its contents with the following to render the Sparkline component (`ejs-sparkline`). Setting `width` and `height` ensures the Sparkline is visible; without them and without a `dataSource`, an empty SVG is rendered.

```typescript
import { SparklineModule } from '@syncfusion/ej2-angular-charts';
import { Component } from '@angular/core';

@Component({
    imports: [SparklineModule],
    standalone: true,
    selector: 'app-container',
    // specifies the template string for the Sparkline component
    template: `<ejs-sparkline id='sparkline-container'></ejs-sparkline>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }
```

The component's `selector` (`app-container` in this example) must match the element used in `src/index.html` so the root component mounts correctly.

```html
<app-container></app-container>
```

Run the development server with `ng serve`. Alternatively, `npm start` works if a `start` script is configured in `package.json`.

```bash
npm start
```

The example above shows a basic Sparkline. Because no [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/sparklinemodel#datasource) is specified, the Sparkline renders an empty SVG element. To render a Sparkline, provide a `dataSource` (an array of numbers or an array of objects) and map fields using [`xName`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/sparklinemodel#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/sparklinemodel#yname). For example, when using an array of objects such as `{ x: 'Jan', y: 10 }`, set `xName='x'` and `yName='y'`.

## Injecting Sparkline Services

Sparkline features are provided by optional services. To enable a feature, register its service either in the application module `providers` (module-based applications) or in a standalone component's `providers` array. The available service is:

- `SparklineTooltipService` - Enables tooltip support for the Sparkline.

The following example demonstrates enabling tooltip support. Import `SparklineTooltipService` from `@syncfusion/ej2-angular-charts` and add it to the component's `providers` array.

```typescript
import { SparklineModule, SparklineTooltipService } from '@syncfusion/ej2-angular-charts';
import { Component } from '@angular/core';

@Component({
    imports: [SparklineModule],
    standalone: true,
    selector: 'app-container',
    providers: [SparklineTooltipService],
    template: `<ejs-sparkline id='sparkline-container'></ejs-sparkline>`
})
export class AppComponent { }
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

## Change the Type of Sparkline

Change the Sparkline type by setting the [`type`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/sparklinemodel#type) property to one of `Line`, `Column`, `WinLoss`, `Pie`, or `Area`. This example sets the type to `Area` and binds an array of `{ xval, yval }` objects.

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

## Enable Tooltip for Sparkline

The Sparkline displays a tooltip with point details when the mouse hovers over it. Enable the tooltip by setting the `visible` property to `true` on the [`tooltipSettings`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/sparklinemodel#tooltipsettings) object and by injecting `SparklineTooltipService` into the component's `providers` array. Use the `format` property to customize the tooltip text (for example, `'${xval} : ${yval}'`).

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

## Troubleshooting

| Issue | Likely Cause | Resolution |
| --- | --- | --- |
| `ejs-sparkline is not a known element` at build time | `SparklineModule` is not imported into the standalone component. | Add `imports: [SparklineModule]` to the component's `@Component` decorator. |
| Tooltip does not appear on hover | `SparklineTooltipService` is not registered. | Add `providers: [SparklineTooltipService]` to the component (or to the application module for module-based apps). |
| Sparkline renders as an empty SVG | `dataSource` is missing, or `width`/`height` are not set. | Bind a `dataSource` and set `width` and `height` on `<ejs-sparkline>`. |
| `npm install` fails with peer-dependency warnings on Angular 16+ | The installed package uses the legacy `ngcc` distribution. | Install the Ivy distribution with `ng add @syncfusion/ej2-angular-charts` instead of the `-ngcc` tagged version. |
| Build fails on Angular 20+ with `app.component.ts` not found | The CLI generates `src/app/app.ts` (no `.component.` suffix) from Angular 20 onwards. | Rename references in the steps above to `src/app/app.ts`, `app.html`, and `app.css`. |
| `ejs-sparkline` selector is unrecognized after upgrade | Stale module references after upgrading `@syncfusion/ej2-angular-charts`. | Re-run `ng add @syncfusion/ej2-angular-charts` to refresh schematics, then restart the dev server. |

## See Also

- [Sparkline Dimensions](sparkline-dimension.md)
- [Sparkline Types](sparkline-types.md)
- [Axis Customization](axis-customization.md)
- [Special Points Customization](special-points-customization.md)
- [Range Band](range-band.md)
- [Markers](marker.md)
- [Data Labels](data-labels.md)
- [User Interaction](user-interaction.md)
- [Appearance](appearance.md)
- [Localization](localization.md)
- [Accessibility](accessibility.md)
- [Migration from Essential JS 1](ej1-api-migration.md)
- [Sparkline API Reference](https://ej2.syncfusion.com/angular/documentation/api/sparkline)