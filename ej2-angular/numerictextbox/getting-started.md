---
layout: post
title: Getting started with Angular NumericTextBox component | Syncfusion
description: Check out and learn how to get started with the Angular NumericTextBox component in Syncfusion Essential JS 2, including setup, configuration, and basic usage.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular NumericTextBox component

The following section explains the steps required to create the NumericTextBox component and demonstrates the basic usage of the NumericTextBox.

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

## Set up the Angular environment

Angular provides the easiest way to set up Angular CLI projects using the [`Angular CLI`](https://github.com/angular/angular-cli) tool.

Install the CLI application globally.

```bash
npm install -g @angular/cli
```

## Create a new application

```bash
ng new syncfusion-angular-numerictextbox
```

By default, the CLI scaffolds a CSS-based application. To set up with SCSS, pass the `--style=scss` flag when creating the project. For example:

```bash
ng new syncfusion-angular-numerictextbox --style=scss
```

Navigate to the created project folder.

```bash
cd syncfusion-angular-numerictextbox
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> NumericTextBox Package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed on npm as `@syncfusion` scoped packages. Browse all Angular packages in the Syncfusion scope on npm: [Syncfusion Angular packages on npm](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (`>=20.2.36`) have been moved to the Ivy distribution to support the Angular [Ivy](https://v12.angular.io/guide/ivy) rendering engine, and the packages are compatible with Angular version 12 and above. Use the following command to install the package.

Add [`@syncfusion/ej2-angular-inputs`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs/v/32.1.19) package to the application.

```bash
npm install @syncfusion/ej2-angular-inputs --save
```

### Angular compatibility compiler package (ngcc)

For Angular versions below 12, use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. Use the following command to install the `ngcc` package.

Add [`@syncfusion/ej2-angular-inputs@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-inputs@ngcc --save
```

To reference the ngcc package in the `package.json` file, add the `-ngcc` suffix to the package version as shown below.

```json
"@syncfusion/ej2-angular-inputs": "32.1.19-ngcc"
```

>Note: If the `ngcc` tag is not specified while installing the package, the Ivy library package will be installed and the package may display a warning.

## Adding CSS reference

The following CSS files are available in the `../node_modules/@syncfusion` package folder.
Reference them in [src/styles.css] (or [src/styles.scss] if using SCSS) using the following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-inputs/styles/material.css';
```

## Adding NumericTextBox component

Use the following snippet in the `src/app/app.ts` file to import the NumericTextBox component.

```ts
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  imports: [
    NumericTextBoxModule,
    FormsModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-numerictextbox value='10'></ejs-numerictextbox>`
})
export class App { }
```

>Note: To reference the combined component styles, use the [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) in your application.

## Running the application

After completing the configuration required to render a basic NumericTextBox, run the following command to display the output in your default browser.

```bash
ng serve
```

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/getting-started-cs4" %}

## Range validation

You can set the minimum and maximum range of values in the NumericTextBox using the [`min`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox/index-default#min) and [`max`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox/index-default#max) properties, so the numeric value should be within the defined range.

The validation behavior depends on the [`strictMode`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox/index-default#strictmode) property.

The following example demonstrates range validation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/getting-started-cs5" %}

## Formatting the value

Set the format of the NumericTextBox using the [`format`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox/index-default#format) property. The value is displayed in the specified format when the component is not focused. For more information about formatting, see [Formats](./formats).

The following example formats the value using the currency format `c2`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/getting-started-cs6" %}

## Precision of numbers

Restrict the number of decimals that can be entered in the NumericTextBox by using the [`decimals`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox/index-default#decimals) and [`validateDecimalOnType`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox/index-default#validatedecimalontype) properties. Values with precision greater than the specified decimals cannot be entered.

* If `validateDecimalOnType` is `false`, the number of decimals is not restricted while typing.
* Otherwise, decimals are restricted while typing in the NumericTextBox.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/getting-started-cs7" %}

## Two-way binding

In NumericTextBox, the `value` property supports two-way binding.
The following example demonstrates two-way binding with the NumericTextBox and an HTML input element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/getting-started-cs8" %}

## Reactive forms

NumericTextBox is a form component, and validation plays a vital role in capturing valid data.
The following example showcases the NumericTextBox with reactive form validation.
For more details about reactive forms, refer to [Angular Reactive Forms](https://angular.dev/guide/forms/reactive-forms).

* To use reactive forms, import `ReactiveFormsModule` from the `@angular/forms` package and add it to your NgModule's imports array. In addition to this, `FormGroup`, `FormControl` should be imported to the app component.
* The `FormGroup` is used to declare `formGroupName` for the form. The constructor of this `FormGroup` then takes an object, that can contain sub-form-groups and `FormControls`.
* The `FormControl` is used to declare `formControlName` for form controls.

The following example demonstrates how to use reactive forms.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/reactive-forms-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/reactive-forms-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/reactive-forms-cs1" %}

## See Also

* [How to perform custom validation using FormValidator](./how-to/perform-custom-validation-using-form-validator)
* [How to customize the UI appearance of the control](./how-to/customize-the-ui-appearance-of-the-control)
* [How to customize the spin button’s up and down arrow](./how-to/customize-the-spin-buttons-up-and-down-arrow)
* [How to customize the step value and hide spin buttons](./how-to/customize-the-step-value-and-hide-spin-buttons)
* [How to prevent nullable input in NumericTextBox](./how-to/prevent-nullable-input-in-numerictextbox)
* [How to maintain trailing zeros in NumericTextBox](./how-to/maintain-trailing-zeros-in-numerictextbox)