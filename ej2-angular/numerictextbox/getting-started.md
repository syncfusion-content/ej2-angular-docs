---
layout: post
title: Getting started with Angular Numerictextbox component | Syncfusion
description:  Checkout and learn about Getting started with Angular Numerictextbox component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Numerictextbox component

The following section explains the steps required to create the NumericTextBox component and also it demonstrates the basic usage of the NumericTextBox.

## Dependencies

The following list of dependencies are required to use the NumericTextBox component in your application.

```javascript
|-- @syncfusion/ej2-angular-inputs
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-angular-popups
    |-- @syncfusion/ej2-angular-buttons
    |-- @syncfusion/ej2-angular-splitbuttons
    |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
        |-- @syncfusion/ej2-splitbuttons
```

## Setup angular environment

Angular provides the easiest way to set angular CLI projects using [`Angular CLI`](https://github.com/angular/angular-cli) tool.

Install the CLI application globally to your machine.

```bash
npm install -g @angular/cli
```

## Create a new application

```bash
ng new syncfusion-angular-numerictextbox
```

By default, it install the CSS style base application. To setup with SCSS, pass --style=scss argument on create project.

Example code snippet.

```bash
ng new syncfusion-angular-numerictextbox --style=scss
```

Navigate to the created project folder.

```bash
cd syncfusion-angular-numerictextbox
```

## Installing Syncfusion NumericTextBox Package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-inputs`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-inputs --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-inputs@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-inputs@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-inputs:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Registering NumericTextBox module

Import NumericTextBox module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-inputs`.

```javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// imports the NumericTextBoxModule for the NumericTextBox component
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { AppComponent }  from './app.component';

@NgModule({
  // declaration of ej2-angular-inputs module into NgModule
  imports:      [ BrowserModule , NumericTextBoxModule],
  declarations: [ AppComponent],
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
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-inputs/styles/material.css';
```

## Adding NumericTextBox component

Modify the template in [src/app/app.component.ts] file to render the NumericTextBox component.
Add the Angular NumericTextBox by using `<ejs-numerictextbox>` selector in `template` section of the app.component.ts file..

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // specifies the template string for the NumericTextBox component
  template: `<ejs-numerictextbox value='10'></ejs-numerictextbox>`
})
export class AppComponent  { }
```

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Running the application

After completing the configuration required to render a basic NumericTextBox, run the following command to display the output in your default browser.

```
ng serve
```

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/getting-started-cs4" %}

## Range validation

You can set the minimum and maximum range of values in the NumericTextBox using the [`min`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox#min) and [`max`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox#max) properties, so the numeric value should be in the min and max range.

The validation behavior depends on the [`strictMode`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox#strictmode) property.

The below example demonstrates range validation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/getting-started-cs5" %}

## Formatting the value

User can set the format of the NumericTextBox component using [`format`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox#format) property. The value will be displayed in the specified format, when the component is in focused out state. For more information about formatting the value, refer to this [link](./formats/).

The below example demonstrates format the value by using currency format value `c2`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/getting-started-cs6" %}

## Precision of numbers

You can restrict the number of decimals to be entered in the NumericTextBox by using the [`decimals`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox#decimals) and [`validateDecimalOnType`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox#validatedecimalontype) properties.
So, you can't enter the number whose precision is greater than the mentioned decimals.

* If `validateDecimalOnType` is false, number of decimals will not be restricted.
Else, number of decimals will be restricted while typing in the NumericTextBox.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/getting-started-cs7" %}

## Two way binding

In NumericTextBox, the `value` property supports two-way binding functionality.
The below example demonstrates two-way binding functionality with the NumericTextBox and HTML input element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs8/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/getting-started-cs8" %}

## Reactive form

NumericTextBox is a form component and validation is playing vital role in forms to get the valid data.
Here to showcase the NumericTextBox with form validations we have used the reactive form.
For more details about Reactive Forms refer: [`https://angular.io/guide/reactive-forms`](https://angular.io/guide/reactive-forms).

* To use reactive forms, import `ReactiveFormsModule` from the `@angular/forms` package and add it to your NgModule's imports array. In addition to this, `FormGroup`, `FormControl` should be imported to the app component.
* The `FormGroup` is used to declare `formGroupName` for the form. The constructor of this `FormGroup` then takes an object, that can contain sub-form-groups and `FormControls`.
* The `FormControl` is used to declare `formControlName` for form controls.

The following example demonstrates how to use the reactive forms.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/reactive-forms-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/numerictextbox/reactive-forms-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/reactive-forms-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/reactive-forms-cs1" %}

## See Also

* [How to perform custom validation using FormValidator](./how-to/perform-custom-validation-using-form-validator/)
* [How to customize the UI appearance of the control](./how-to/customize-the-ui-appearance-of-the-control/)
* [How to customize the spin button’s up and down arrow](./how-to/customize-the-spin-buttons-up-and-down-arrow/)
* [How to customize the step value and hide spin buttons](./how-to/customize-the-step-value-and-hide-spin-buttons/)
* [How to prevent nullable input in NumericTextBox](./how-to/prevent-nullable-input-in-numerictextbox/)
* [How to maintain trailing zeros in NumericTextBox](./how-to/maintain-trailing-zeros-in-numerictextbox/)