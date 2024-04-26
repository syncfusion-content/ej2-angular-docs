---
layout: post
title: Getting started with Angular Datepicker component | Syncfusion
description:  Checkout and learn about Getting started with Angular Datepicker component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Datepicker component

The following section explains the steps required to create a simple DatePicker component and also it demonstrates the basic usage of the DatePicker.

To get start quickly with Angular DatePicker component, refer to the video below.

{% youtube "https://www.youtube.com/watch?v=v=tVCdgVol-uI" %}

## Dependencies

Install the below required dependency package in order to use the `DatePicker` component in your application.

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
ng new syncfusion-angular-datepicker
```

By default, it install the CSS style base application. To setup with SCSS, pass --style=scss argument on create project.

Example code snippet.

```bash
ng new syncfusion-angular-datepicker --style=scss
```

Navigate to the created project folder.

```bash
cd syncfusion-angular-datepicker
```

## Installing Syncfusion DatePicker package

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

## Registering DatePicker module

Import DatePicker module into Angular application(src/app/app.module.ts) from the package `@syncfusion/ej2-angular-calendars`.

```javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the DatePickerModule for the DatePicker component
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of DatePickerModule into NgModule
  imports:      [ BrowserModule, DatePickerModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

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

## Adding DatePicker component

Modify the template in [src/app/app.component.ts] file to render the DatePicker component. by using `<ejs-datepicker>` selector.

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!-- To Render DatePicker -->
             <ejs-datepicker></ejs-datepicker>`
})
export class AppComponent  { }
```

## Running the application

After completing the configuration required to render a basic DatePicker, run the following command to display the output in your default browser.

```
ng serve
```

The following example illustrates the output in your browser

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

To set the selected date, use the [`value`] (https://ej2.syncfusion.com/angular/documentation/api/datepicker#value) property.

The below example demonstrates the DatePicker with current date as selected one.

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

To restrict the selection of date within a specified range, use the [`min`](https://ej2.syncfusion.com/angular/documentation/api/datepicker#min) and [`max`](https://ej2.syncfusion.com/angular/documentation/api/datepicker#max) properties. To know more about range restriction in DatePicker, please refer this [page](./date-range).

The below example demonstrates the DatePicker to select a date within a range from 7 to 27.

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
