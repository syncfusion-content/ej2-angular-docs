---
layout: post
title: Getting Started with Angular Date Range Picker Component | Syncfusion
description: Checkout and learn about getting started with Angular Date Range Picker component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Date Range Picker Component

The following section explains the steps required to create a simple DateRangePicker component and also it demonstrates the basic usage of the DateRangePicker.

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

## Setup Angular environment

Angular provides the easiest way to set angular CLI projects using [`Angular CLI`](https://github.com/angular/angular-cli) tool.

Install the CLI application globally to your machine.

```bash
npm install -g @angular/cli
```

## Create a new application

```bash
ng new syncfusion-angular-daterangepicker
```

By default, it install the CSS style base application. To setup with SCSS, pass --style=scss argument on create project.

Example code snippet.

```bash
ng new syncfusion-angular-daterangepicker --style=scss
```

Navigate to the created project folder.

```bash
cd syncfusion-angular-daterangepicker
```

## Installing Syncfusion DateRangePicker package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-calendars`](https://www.npmjs.com/package/@syncfusion/ej2-angular-calendars/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-calendars --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-calendars@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-calendars/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-calendars@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-calendars:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Registering DateRangePicker module

Import DateRangePicker module into Angular application(src/app/app.module.ts) from the package `@syncfusion/ej2-angular-calendars`.

```javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the DateRangePickerModule for the DateRangPicker component
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of DateRangePickerModule into NgModule
  imports:      [ BrowserModule, DateRangePickerModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion`  package folder..
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

## Adding DateRangePicker component

Modify the template in [src/app/app.component.ts] file to render the DateRangePicker component. by using `<ejs-daterangepicker>` selector.

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!-- To Render DateRangePicker -->
             <ejs-daterangepicker></ejs-daterangepicker>`
})
export class AppComponent  { }
```

## Running the application

After completing the configuration required to render a basic DateRangePicker, run the following command to display the output in your default browser.

```
ng serve
```

The following example illustrates the output in your browser

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/daterangepicker/getting-started-cs5" %}

## Setting the start and end date

The start and end date in a range can be set by using  `startDate` and `endDate` properties. To know more about range restriction in DateRangePicker, please refer this [page](./range-selection).

The below example demonstrates the DateRangePicker with startDate and endDate.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs6/src/app.module.ts %}
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