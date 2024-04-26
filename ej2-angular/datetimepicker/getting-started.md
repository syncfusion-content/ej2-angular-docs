---
layout: post
title: Getting started with Angular Datetimepicker component | Syncfusion
description:  Checkout and learn about Getting started with Angular Datetimepicker component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Datetimepicker component

The following section explains the steps required to create a simple DateTimePicker component and also it demonstrates the basic usage of the DateTimePicker.

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

## Setup Angular environment

Angular provides the easiest way to set angular CLI projects using [`Angular CLI`](https://github.com/angular/angular-cli) tool.

Install the CLI application globally to your machine.

```bash
npm install -g @angular/cli
```

## Create a new application

```bash
ng new syncfusion-angular-datetimepicker
```

By default, it install the CSS style base application. To setup with SCSS, pass --style=scss argument on create project.

Example code snippet.

```bash
ng new syncfusion-angular-datetimepicker --style=scss
```

Navigate to the created project folder.

```bash
cd syncfusion-angular-datetimepicker
```

## Installing Syncfusion DateTimePicker package

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

## Registering DateTimePicker module

Import DateTimePicker module into Angular application(src/app/app.module.ts) from the package `@syncfusion/ej2-angular-calendars`.

```javascript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
// import the DateTimePickerModule for the DateTimePicker component
import { DateTimePickerModule } from "@syncfusion/ej2-angular-calendars";
import { AppComponent } from "./app.component";

@NgModule({
  //declaration of DateTimePickerModule into NgModule
  imports: [BrowserModule, DateTimePickerModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

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

import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template: `<!-- To Render DateTimePicker -->
             <ejs-datetimepicker></ejs-datetimepicker>`
})
export class AppComponent {}

```

## Running the application

After completing the configuration required to render a basic DateTimePicker, run the following command to display the output in your default browser.

```
ng serve
```

The following example illustrates the output in your browser

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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
{% highlight ts tabtitle="app.component.ts" %}
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
