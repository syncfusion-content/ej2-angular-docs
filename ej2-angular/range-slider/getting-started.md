---
layout: post
title: Getting started with Angular Range Slider component | Syncfusion
description: Learn how to add and configure the Angular Range Slider component from Syncfusion Essential JS 2, including setup, configuration, and basic usage.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Range Slider component

The Range Slider is available in the `@syncfusion/ej2-angular-inputs` package. Use this package to render the Slider component.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

To get started quickly with the Angular Range Slider, watch this video:

{% youtube "https://www.youtube.com/watch?v=_PInU4vTumk" %}

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion Angular UI Components](../system-requirement).

## SetUp the Angular application

A straightforward approach to beginning with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install Angular CLI globally with the following command:

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

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Range Slider package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular Slider component](https://www.syncfusion.com/angular-components/angular-slider) for demonstration. Add the Angular Slider component component with:

```bash
ng add @syncfusion/ej2-angular-inputs
```

This command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-inputs` package and peer dependencies to your `package.json`.
- Import the Slider component component in your application.
- Register the default Syncfusion<sup style="font-size:70%">&reg;</sup> material theme in `angular.json`.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package structures for Angular components:		
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)		
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.		
Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:		
```bash		
ng add @syncfusion/ej2-angular-inputs
```		
For applications not compiled with Ivy, use the `ngcc` tagged packages:		
> The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of IVY compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility).	
```bash		
npm add @syncfusion/ej2-angular-inputs@32.1.19-ngcc		
```

## Adding Slider CSS reference

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component themes can be added in various ways: via CSS or SCSS styles from npm packages, CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio).

The `Material` theme is added to your `styles.css` when you run `ng add` (this happens automatically by default).

To stylize only specific Syncfusion<sup style="font-size:70%">&reg;</sup> components, import the necessary styles. For example, to style only the Slider component:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-angular-inputs/styles/material3.css';
```

Alternatively, based on the location of your CSS file, you can import the styles as shown below:

```css
@import 'node_modules/@syncfusion/ej2-base/styles/material3.css';
@import 'node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import 'node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import 'node_modules/@syncfusion/ej2-angular-inputs/styles/material3.css';
```

> Ensure that the import order aligns with the component's dependency sequence.

For using SCSS styles, refer to [this guide](https://ej2.syncfusion.com/angular/documentation/common/how-to/sass).

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Slider Component

Use the following snippet in the `src/app/app.ts` file to import the Slider component.

```typescript
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import { Component } from '@angular/core';

@Component({
  imports: [SliderModule],
  standalone: true,
  selector: 'app-root',
  template: `
    <div id='container'>
        <div class='wrap'>
            <ejs-slider id='slider' [value]=30></ejs-slider>
        </div>
    </div>`
})

export class App { }
```

## Running the application

After configuring the Slider, run the application with:

```bash
ng serve
```

The following shows a basic `Slider` example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/getting-started-01-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/getting-started-01-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/getting-started-01-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/getting-started-01-cs1" %}

## Types

The Slider supports the following types:

| **Types** | **Usage** |
| --- | --- |
| Default | Select a single value. |
| MinRange | Shows a selection from the start value to the current value. |
| Range | Select a range of values; shows the selection between handles. |

> Both Default and MinRange types select a single value. In MinRange, the selection is shown from the start value to the current handle position. The Range type uses two handles to select a range, and the selection is shown between them.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/getting-started-02-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/getting-started-02-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/getting-started-02-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/getting-started-02-cs1" %}

## Customization

### Orientation

Display the Slider in horizontal or vertical orientation. By default, it renders horizontally.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/getting-started-03-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/getting-started-03-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/getting-started-03-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/getting-started-03-cs1" %}

### Tooltip

The Slider displays a tooltip to indicate the current value when clicking the bar or dragging the handle. Customize tooltip position using the `placement` property. Control when the tooltip appears (hover, focus, or click) and whether it remains visible.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/getting-started-04-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/getting-started-04-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/getting-started-04-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/getting-started-04-cs1" %}

### Buttons

Change the Slider value using the Increase and Decrease buttons. In a Range Slider, the first handle value changes by default when clicking the buttons. Move focus to a handle to change that handle’s value.

> After enabling slider buttons, pressing the Tab key moves focus to the handle, not the button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/getting-started-05-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/getting-started-05-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/getting-started-05-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/getting-started-05-cs1" %}

## See Also

[Slider Types](#types)

[Slider Formatting](./format)

[Orientation Slider](#orientation)

[Ticks in Slider](./ticks)

[Tooltip in Slider](#tooltip)
