---
layout: post
title: Getting started with Angular Timepicker component | Syncfusion
description:  Checkout and learn about Getting started with Angular Timepicker component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Timepicker component

This section briefly explains how to create a simple **TimePicker** component, and configure its available functionalities in Angular by using [quickstart](https://github.com/angular/quickstart.git) seed repository.

To get start quickly with Angular TimePicker component, refer to the video below.

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

## Setup Angular environment

Angular provides the easiest way to set angular CLI projects using [`Angular CLI`](https://github.com/angular/angular-cli) tool.

Install the CLI application globally to your machine.

```bash
npm install -g @angular/cli
```

## Create a new application

```bash
ng new syncfusion-angular-timepicker
```

By default, it install the CSS style base application. To setup with SCSS, pass --style=scss argument on create project.

Example code snippet.

```bash
ng new syncfusion-angular-timepicker --style=scss
```

Navigate to the created project folder.

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

Add [`@syncfusion/ej2-angular-calendars`](https://www.npmjs.com/package/@syncfusion/ej2-angular-calendars/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-calendars --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-calendars@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-calendars/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-calendars@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-calendars:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion` package folder.
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

## Adding TimePicker component

Modify the template in [src/app/app.component.ts] file to render the TimePicker component.
Add the Angular TimePicker by using `<ejs-timepicker>` selector in `template` section of the [app.component.ts] file.

```javascript

import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

@Component({
imports: [        
        TimePickerModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-timepicker placeholder='Select a time' ></ejs-timepicker>`
})
export class AppComponent {
    constructor() {
    }
}

```

## Running the application

After completing the configuration required to render a basic TimePicker, run the following command to display the output in your default browser.

```
ng serve
```

The following example illustrates the output in your browser

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timepicker/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timepicker/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timepicker/getting-started-cs2" %}

## Setting the selected, min, and max time

The following example demonstrates how to set the value, min and max time on initializing the TimePicker. The TimePicker allows you to select the time value within a range from `7:00 AM` to `4:00 PM`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timepicker/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timepicker/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timepicker/getting-started-cs3" %}

## Setting the time format

Time formats is a way of representing the time value in different string format in textbox and popup list. By default, the TimePicker's format is based on the culture. You can also customize the format by using the [`format`](https://ej2.syncfusion.com/angular/documentation/api/timepicker#format) property. To know more about the time format standards, refer to the [`Date and Time Format](../common/Globalization/internationalization#custom-number-formatting-and-parsing) section.

The following example demonstrates the TimePicker component in 24 hours format with 60 minutes interval. The time interval is set to 60 minutes by using the [`step`](https://ej2.syncfusion.com/angular/documentation/api/timepicker#step-number) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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
