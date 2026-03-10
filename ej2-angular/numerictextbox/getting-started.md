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

This guide demonstrates the steps required to create the NumericTextBox component and demonstrates the basic usage of the NumericTextBox.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion Angular UI Components](../system-requirement).

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

## SetUp the Angular application

A straightforward approach to beginning with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

### Installing a specific version

To install a particular version of Angular CLI, use:

```bash
npm install -g @angular/cli@21.0.0
```

## Create a new application

With Angular CLI installed, execute this command to generate a new application:

```bash
ng new syncfusion-angular-app
```

* This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format.

```bash

? Which stylesheet format would you like to use? (Use arrow keys)
> CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org                                             ]

```

* By default, a CSS-based application is created. Use SCSS if required:

```bash
ng new syncfusion-angular-app --style=scss
```

* During project setup, when prompted for the Server-side rendering (SSR) option, choose the appropriate configuration.

![Initial_setup](images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![Initial_setup](images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> Note: In Angular 19 and below, it uses `app.component.ts`, `app.component.html`, `app.component.css` etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> NumericTextBox Package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular NumericTextBox component](https://www.syncfusion.com/angular-components/angular-numeric-textbox) for demonstration. Add the Angular NumericTextBox component component with:

```bash
ng add @syncfusion/ej2-angular-inputs
```

This command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-inputs` package and peer dependencies to your `package.json`.
- Import the NumericTextBox component component in your application.
- Register the default Syncfusion<sup style="font-size:70%">&reg;</sup> material theme in `angular.json`.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package structures for Angular components:		
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)		
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.		
Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:		
```bash		
ng add @syncfusion/ej2-angular-inputs
```		
For applications not compiled with Ivy, use the `ngcc` tagged packages:		
> The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of IVY compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility).	
```bash		
npm add @syncfusion/ej2-angular-inputs@32.1.19-ngcc		
```

## Adding CSS reference

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component themes can be added in various ways: via CSS or SCSS styles from npm packages, CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio).

The `Material` theme is added to your `styles.css` when you run `ng add` (this happens automatically by default).

To stylize only specific Syncfusion<sup style="font-size:70%">&reg;</sup> components, import the necessary styles. For example, to style only the NumericTextBox component:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-angular-inputs/styles/material3.css';
```

> Ensure that the import order aligns with the component's dependency sequence.

For using SCSS styles, refer to [this guide](https://ej2.syncfusion.com/angular/documentation/common/how-to/sass).

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