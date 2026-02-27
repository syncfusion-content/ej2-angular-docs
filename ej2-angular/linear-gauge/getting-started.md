---
layout: post
title: Getting started with Angular Linear gauge component | Syncfusion
description:  Checkout and learn about Getting started with Angular Linear gauge component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Linear gauge component

<!-- markdownlint-disable MD013 -->

This guide demonstrates how to set up and configure the Syncfusion Angular Linear Gauge component, from initial installation through enabling core features like axis customization, pointers, ranges, and annotations.

> **Note**: This guide supports Angular 21 and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development? Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

To get started quickly with Angular Linear Gauge, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=KHAuX1TQisU" %}

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement).

## Dependencies

Below is the list of minimum dependencies required to use the Linear Gauge component.

```
|-- @syncfusion/ej2-angular-lineargauge
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-angular-lineargauge
    |-- @syncfusion/ej2-lineargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-svg-base
```

## SetUp the Angular application

A straightforward approach to beginning with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

> **Angular 21 Standalone Architecture**: Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

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

```
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

* Select the required AI tool or 'none' if you do not need any AI tool.

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> **Note**: In Angular 19 and below, it uses `app.component.ts`, `app.component.html`, `app.component.css` etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular Linear Gauge Component](https://www.syncfusion.com/angular-components/angular-linear-gauge) for demonstration. Add the Angular Linear Gauge component with:

```bash
ng add @syncfusion/ej2-angular-lineargauge
```

This command will perform the following configurations:

* Add the `@syncfusion/ej2-angular-lineargauge` package and peer dependencies to your `package.json`.
* Import the Linear Gauge component in your application.
* Register the default Syncfusion<sup style="font-size:70%">&reg;</sup> Material theme in `angular.json`.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package structures for Angular components:

1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.

Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:

```bash
ng add @syncfusion/ej2-angular-lineargauge
```

For applications not compiled with Ivy, use the `ngcc` tagged packages:

> **The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of IVY compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility).**

```bash
npm add @syncfusion/ej2-angular-lineargauge@32.1.19-ngcc
```

## Add Linear Gauge component

Modify the template in the [src/app/app.ts] file to render the Linear Gauge component. Add the Angular Linear Gauge by using `<ejs-lineargauge>` selector in template section of the app.ts file.

```javascript
import { Component } from '@angular/core';
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge'

@Component({
    imports: [
        LinearGaugeModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the linear gauge component
    template: `<ejs-lineargauge> </ejs-lineargauge>`
})
export class AppComponent {

}
```

The below example shows a basic Linear Gauge.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/getting-started-cs1" %}

## Module injection

To create a Linear Gauge with additional features, inject the required modules. The following modules extend the Linear Gauge's basic functionality:

* `AnnotationsService` - Inject this service to enable annotation features.
* `GaugeTooltipService` - Inject this service to enable tooltip features.

These modules should be injected into the providers section of the root NgModule or component class.

```javascript
import { Component } from '@angular/core';
import { LinearGaugeModule, AnnotationsService, GaugeTooltipService } from '@syncfusion/ej2-angular-lineargauge';

@Component({
    imports: [
        LinearGaugeModule
    ],
    providers: [AnnotationsService, GaugeTooltipService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-lineargauge> </ejs-lineargauge>`
})
export class AppComponent {

}
```


## Add gauge title

The title can be added to the Linear Gauge component using the [title](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/linearGaugeModel#title-string) property in the Linear Gauge. This helps identify the gauge and provide context to users.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/getting-started-cs2" %}

## Configure axis range

The range of the axis can be set using the [minimum](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/axis#minimum-number) and [maximum](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/axis#maximum-number) properties in the Linear Gauge. This defines the start and end values displayed on the gauge scale.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/getting-started-cs3" %}

## Format axis labels

To denote the axis labels with temperature units, add the °C as suffix to each label. This can be achieved by setting the **{value}°C** to the [format](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/labelModel#format-string) property in the [labelStyle](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/axis#labelstyle-labelmodel) object of the axis. Here, **{value}** acts as a placeholder for each axis label.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/getting-started-cs4" %}

## Set pointer value

The pointer value is changed in the below sample using the [value](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointer#value-number) property in [pointers](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointer) object of the axis. The pointer indicates the current reading on the gauge scale.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/getting-started-cs5" %}

## Run the application

Use the following command to run the application in the browser.

```bash
ng serve --open
```

The output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/getting-started-cs5" %}

## See also

* [Axis Customization](https://ej2.syncfusion.com/angular/documentation/linear-gauge/axis)
* [Pointers](https://ej2.syncfusion.com/angular/documentation/linear-gauge/pointers)
* [Ranges](https://ej2.syncfusion.com/angular/documentation/linear-gauge/ranges)
* [Annotations](https://ej2.syncfusion.com/angular/documentation/linear-gauge/annotations)
* [User Interaction](https://ej2.syncfusion.com/angular/documentation/linear-gauge/user-interaction)
