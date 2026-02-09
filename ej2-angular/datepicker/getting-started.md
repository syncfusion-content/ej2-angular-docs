---
layout: post
title: Getting started with Angular Datepicker component | Syncfusion
description: Check out how to get started with the Angular DatePicker component of Syncfusion Essential JS 2, including basic usage and setup.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular DatePicker component

The following section explains the steps required to create a simple DatePicker component and also it demonstrates the basic usage of the DatePicker.

To get start quickly with Angular DatePicker component, refer to the video below.

{% youtube "https://www.youtube.com/watch?v=tVCdgVol-uI" %}

## Dependencies

Install the following required dependency packages to use the `DatePicker` component in your application.

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

## Setup Angular environment

Use the [`Angular CLI`](https://github.com/angular/angular-cli) to create and manage Angular projects.

Install the CLI globally on your machine.

```bash
npm install -g @angular/cli
```

## Create a new application

```bash
ng new syncfusion-angular-datepicker
```

By default, the CLI scaffolds a CSS-based application. To set up with SCSS, pass the `--style=scss` flag when creating the project. For example:

```bash
ng new syncfusion-angular-datepicker --style=scss
```

Navigate to the created project folder.

```bash
cd syncfusion-angular-datepicker
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> DatePicker package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed on npm as `@syncfusion` scoped packages. You can find all Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages on npm at this link: https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (`>=20.2.36`) have moved to the Ivy distribution to support the Angular [Ivy](https://v12.angular.io/guide/ivy) rendering engine, and the packages are compatible with Angular version 12 and above. To download the package, use the command below.

Add the [`@syncfusion/ej2-angular-calendars`](https://www.npmjs.com/package/@syncfusion/ej2-angular-calendars) package to the application.

```bash
npm install @syncfusion/ej2-angular-calendars --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. Install the `ngcc` package using the following command:

Add [`@syncfusion/ej2-angular-calendars@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-calendars/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-calendars@ngcc --save
```

To reference the ngcc package in the `package.json` file, add the suffix `-ngcc` to the package version as shown below.

```json
"@syncfusion/ej2-angular-calendars": "32.1.19-ngcc"
```

>Note: If the `@ngcc` tag is not specified while installing the package, the Ivy library package will be installed, which may display a warning in older Angular versions.

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion` package folder.
These can be referenced in [src/styles.css] using the following imports.

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

>If you want to reference combined component styles, use the [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Adding DatePicker component

Use the following snippet in the `src/app/app.ts` file to import the DatePicker component.

```ts
import { Component } from '@angular/core';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePickerModule],
  template: `<ejs-datepicker></ejs-datepicker>`
})

export class App {
  constructor() { }
}
```

## Running the application

After completing the configuration required to render a basic DatePicker, run the following command to display the output in your default browser.

```bash
ng serve
```

The following example illustrates the output in the browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datepicker/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/getting-started-cs7" %}

## Setting the selected date

To set the selected date, use the [`value`](https://ej2.syncfusion.com/angular/documentation/api/datepicker/index-default#value) property.

The following example demonstrates the DatePicker with the current date set as the selected value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datepicker/getting-started-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/getting-started-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/getting-started-cs8" %}

## Setting the date range to restrict selection

To restrict the selection of date within a specified range, use the [`min`](https://ej2.syncfusion.com/angular/documentation/api/datepicker/index-default#min) and [`max`](https://ej2.syncfusion.com/angular/documentation/api/datepicker/index-default#max) properties. To know more about range restriction in DatePicker, please refer this [page](./date-range).

The following example demonstrates selecting a date within a range from 7 to 27.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datepicker/getting-started-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/getting-started-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/getting-started-cs9" %}

## See Also

* [Change the format of selected date](./date-format)
* [Render DatePicker with specific culture](./globalization)
* [How to change the initial view of the DatePicker](./date-views)
* [How to achieve validation with DatePicker](./how-to/custom-validation-using-form-validator)
* [How to achieve two-way binding with DatePicker](./how-to/two-way-binding)
