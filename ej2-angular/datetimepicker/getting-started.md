---
layout: post
title: Getting started with Angular Datetimepicker component | Syncfusion
description:  Checkout and learn about Getting started with Angular Datetimepicker component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular DateTimePicker component

This guide demonstrates how to set up and configure the Syncfusion Angular DateTimePicker component, from initial installation through selecting dates and times with range restrictions. The DateTimePicker component allows users to select both date and time values with support for globalization, custom formats, and time zones.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

To get started quickly with Angular DateTimePicker component using CLI and Schematics, you can check this video:

{% youtube "https://www.youtube.com/watch?v=I_A5xksToN0" %}

## Dependencies

Install the below required dependency package in order to use the `DateTimePicker` component in your application.

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
ng new syncfusion-angular-datetimepicker
```

By default, the CLI creates a CSS-based application. To use SCSS instead, pass the `--style=scss` option:

```bash
ng new syncfusion-angular-datetimepicker --style=scss
```

Navigate to the created project folder:

```bash
cd syncfusion-angular-datetimepicker
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> DateTimePicker package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Use the [ng add](https://angular.dev/reference/schematics) command to automatically configure the DateTimePicker package:

```bash
ng add @syncfusion/ej2-angular-calendars
```

This command will install the package (v32.1.19), add peer dependencies, and configure the Material theme automatically.

**For Manual Installation:**

```bash
npm install @syncfusion/ej2-angular-calendars --save
```

>Note: Use @syncfusion/ej2-angular-calendars@32.1.19 for Angular 12+ (Ivy format). For legacy support, see the peer dependency requirements above.

## Adding CSS reference

The following CSS files are available in  `../node_modules/@syncfusion`  package folder.
This can be referenced in [src/styles.css] using following code.

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

>If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Adding DateTimePicker component

Modify the template in [src/app/app.component.ts] file to render the Angular DateTime Picker component.
Add the Angular DateTimePicker by using `<ejs-datetimepicker>` selector in `template` section of the app.component.ts file.

```javascript

import { FormsModule } from '@angular/forms'
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { Component } from "@angular/core";

@Component({
imports: [        
        DateTimePickerModule,
        FormsModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-datetimepicker></ejs-datetimepicker>`
})
export class AppComponent {
  constructor() {}
}

```

## Running the application

After completing the configuration required to render a basic DateTimePicker, run the following command to display the output in your default browser.

```
ng serve
```

The following example illustrates the output in your browser

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datetimepicker/accessibility-cs4" %}

## Setting the min and max

The minimum and maximum date time can be defined with the help of `min` and `max` property. The following example demonstrates to set the `min` and `max` on initializing the DateTimePicker. To know more about range restriction in Angular DateTime Picker, please refer this [page](./date-time-range).

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datetimepicker/accessibility-cs5" %}

> If the value of `min` or `max` properties changed through code behind, then you have to update the `value` property to set within the range.

N> You can refer to our [Angular DateTime Picker]( https://www.syncfusion.com/angular-ui-components/angular-datetime-picker) feature tour page for its groundbreaking feature representations. You can also explore our [Angular DateTime Picker example](https://ej2.syncfusion.com/angular/demos/#/material/datetimepicker/default) that shows how to render the DateTime Picker in Angular.

## See Also

* [Render DateTimePicker with specific culture](./globalization)
* [How to achieve validation with DateTimePicker](./how-to/custom-validation-using-form-validator)
* [How to achieve two-way binding with DateTimePicker](./how-to/two-way-binding)
* [Reactive forms with DateTimePicker](./how-to/reactive-form)
* [Template-driven forms with DateTimePicker](./how-to/template-driven-forms)
