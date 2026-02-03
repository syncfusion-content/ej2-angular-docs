---
layout: post
title: Getting started with Angular Timepicker component | Syncfusion
description:  Checkout and learn about Getting started with Angular Timepicker component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular TimePicker component

This guide demonstrates how to set up and configure the Syncfusion Angular TimePicker component, from initial installation through selecting time values with custom formats. The TimePicker component allows users to select time values with support for time ranges, custom formats, globalization, and keyboard shortcuts.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

To get started quickly with Angular TimePicker component using CLI and Schematics, you can check this video:

{% youtube "https://www.youtube.com/watch?v=v=3efj-8AIc3Y" %}

## Dependencies

Install the below required dependency package in order to use the `TimePicker` component in your application.

```javascript
|-- @syncfusion/ej2-angular-calendars
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-calendars
        |-- @syncfusion/ej2-inputs
          |-- @syncfusion/ej2-splitbuttons
        |-- @syncfusion/ej2-lists
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
ng new syncfusion-angular-timepicker
```

By default, it install the CSS style base application. To setup with SCSS, pass --style=scss argument on create project.

Example code snippet.

```bash
ng new syncfusion-angular-timepicker --style=scss
```

Navigate to the created project folder:

```bash
cd syncfusion-angular-timepicker
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> TimePicker package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Use the [ng add](https://angular.dev/reference/schematics) command to automatically configure the TimePicker package:

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

When using `ng add @syncfusion/ej2-angular-calendars`, the Material theme is automatically configured in `angular.json`. The TimePicker component styles are included automatically.

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

>If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Adding TimePicker component

Now, modify the `src/app/app.ts` file to render the TimePicker component using the `<ejs-timepicker>` selector:

```typescript
import { Component } from '@angular/core';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';

@Component({
  imports: [TimePickerModule],
  standalone: true,
  selector: 'app-root',
  template: `<!-- Render TimePicker -->
             <ejs-timepicker placeholder='Select a time'></ejs-timepicker>`
})
export class AppComponent {
    constructor() {
    }
}
```

## Running the application

After completing the configuration required to render a TimePicker component, run the following command to display the output in your default browser:

```bash
ng serve --open
```

The TimePicker component will be rendered in your browser with default settings.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/timepicker/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timepicker/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timepicker/getting-started-cs2" %}

## Setting the selected, min, and max time

The following example demonstrates how to set the value, min and max time when initializing the TimePicker. The TimePicker allows selection of time values within a range from `7:00 AM` to `4:00 PM`. To learn more about time range restrictions, please refer to the [time range documentation](./time-range).

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/timepicker/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timepicker/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timepicker/getting-started-cs3" %}

## Setting the time format

Time format is a way of representing the time value in different string formats in the textbox and popup list. By default, the TimePicker's format is based on the culture. You can customize the format using the [`format`](https://ej2.syncfusion.com/angular/documentation/api/timepicker#format) property. To learn more about time format standards, refer to the [Date and Time Format documentation](../common/Globalization/internationalization#custom-number-formatting-and-parsing).

The following example demonstrates the TimePicker component in 24-hour format with 60-minute intervals. The time interval is set to 60 minutes using the [`step`](https://ej2.syncfusion.com/angular/documentation/api/timepicker#step-number) property:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/timepicker/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timepicker/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timepicker/getting-started-cs4" %}

> Once the format property is defined, it will be applicable to all the cultures.

## See Also

* [Render TimePicker with min and max time](./time-range)
* [How to achieve validation with TimePicker](./how-to/custom-validation-using-form-validator)
* [Render TimePicker with specific culture](./globalization)
* [How to achieve two-way binding with TimePicker](./how-to/two-way-binding)
* [Reactive forms with TimePicker](./how-to/reactive-form)
