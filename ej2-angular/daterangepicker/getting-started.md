---
layout: post
title: Getting started with Angular Daterangepicker component | Syncfusion
description:  Checkout and learn about Getting started with Angular Daterangepicker component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular DateRangePicker component

This guide demonstrates how to set up and configure the Syncfusion Angular DateRangePicker component, from initial installation through selecting date ranges with custom formatting. The DateRangePicker component allows users to select a range of dates with support for preset ranges, globalization, and custom date validation.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

To get started quickly with Angular DateRangePicker component using CLI and Schematics, you can check this video:

{% youtube "https://www.youtube.com/watch?v=I_A5xksToN0" %}

## Dependencies

Install the below required dependency packages in order to use the `DateRangePicker` component in your application.

```javascript
|-- @syncfusion/ej2-angular-calendars
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-calendars
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-inputs
          |-- @syncfusion/ej2-splitbuttons
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
```

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion Angular UI Components](../system-requirement).

## Setup Angular environment

The easiest way to set up an Angular project is using the [Angular CLI](https://github.com/angular/angular-cli) tool. Follow these steps:

Install the CLI application globally to your machine.

```bash
npm install -g @angular/cli
```

## Create a new application

Create a new Angular application using the Angular CLI:

```bash
ng new syncfusion-angular-daterangepicker
```

By default, the CLI creates a CSS-based application. To use SCSS instead, pass the `--style=scss` option:

```bash
ng new syncfusion-angular-daterangepicker --style=scss
```

Navigate to the created project folder:

```bash
cd syncfusion-angular-daterangepicker
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> DateRangePicker package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Use the [ng add](https://angular.dev/reference/schematics) command to automatically configure the DateRangePicker package:

```bash
ng add @syncfusion/ej2-angular-calendars
```

This command will install the package (v32.1.19), add peer dependencies, and configure the Material theme automatically.

**For Manual Installation:**

```bash
npm install @syncfusion/ej2-angular-calendars --save
```

>Note: Use @syncfusion/ej2-angular-calendars@32.1.19 for Angular 12+ (Ivy format). For legacy support, see the peer dependency requirements above.

## Import Syncfusion CSS styles

When using `ng add @syncfusion/ej2-angular-calendars`, the Material theme is automatically configured in `angular.json`. The DateRangePicker component styles are included automatically.

If you need to manually add or customize the CSS, import the theme in `src/styles.css`:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-calendars/styles/material.css';
```

>If you want to use combined component styles, please use our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Adding DateRangePicker component

Now, modify the `src/app/app.ts` file to render the DateRangePicker component using the `<ejs-daterangepicker>` selector:

```javascript

import { FormsModule } from '@angular/forms'
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars'
import { Component } from '@angular/core';

@Component({
imports: [        
        FormsModule,
        DateRangePickerModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-daterangepicker></ejs-daterangepicker>`
})
export class AppComponent {
    constructor() {
    }
}
```

## Running the application

After completing the configuration required to render a DateRangePicker component, run the following command to display the output in your default browser:

```bash
ng serve --open
```

The DateRangePicker component will be rendered in your browser with default settings.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/daterangepicker/getting-started-cs5" %}

## Setting the start and end date

The start and end date in a date range can be set using the `startDate` and `endDate` properties. To learn more about range restriction in the DateRangePicker, please refer to the [range selection documentation](./range-selection).

The following example demonstrates the DateRangePicker with `startDate` and `endDate` properties:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/daterangepicker/getting-started-cs6" %}

> You can refer to our [Angular Date Range Picker](https://www.syncfusion.com/angular-ui-components/angular-daterangepicker) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Date Range Picker example](https://ej2.syncfusion.com/angular/demos/#/material/daterangepicker/default) that shows how to render the Date Range Picker in Angular.

## See Also

* [Render DateRangePicker with pre-defined ranges](./customization#preset-ranges)
* [Render DateRangePicker with specific culture](./globalization)
* [How to achieve validation with DateRangePicker](./how-to/custom-validation-using-form-validator)
* [How to achieve two-way binding with DateRangePicker](./how-to/two-way-binding)
* [Reactive forms with DateRangePicker](./how-to/reactive-form)