---
layout: post
title: Getting started with Angular MaskedTextBox component | Syncfusion
description: Learn how to add and configure the Angular MaskedTextBox component from Syncfusion Essential JS 2, including setup, configuration, and basic usage.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular MaskedTextBox component

This article describes how to add the MaskedTextBox component and shows basic usage.

## Dependencies

The following list of dependencies are required to use the MaskedTextBox component in your application.

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

Use the Angular CLI to create and manage projects. Install the CLI globally (optional) or use `npx`/`npm init` if preferred.

```bash
npm install -g @angular/cli
```

## Create a new application

```bash
ng new syncfusion-angular-maskedtextbox
```

By default the CLI creates a project that uses plain CSS. To use SCSS, pass the `--style=scss` argument when creating the project.

Example:

```bash
ng new syncfusion-angular-maskedtextbox --style=scss
```

Navigate to the created project folder.

```bash
cd syncfusion-angular-maskedtextbox
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> MaskedTextBox package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages from [npm](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler (Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (>= 20.2.36) have moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine, and the packages are compatible with Angular version 12 and above. To install the package, use the following command.

Add [`@syncfusion/ej2-angular-inputs`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs/v/32.1.19) package to the application.

```bash
npm install @syncfusion/ej2-angular-inputs --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To install the `ngcc` package, use the following command.

Add [`@syncfusion/ej2-angular-inputs@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-inputs@ngcc --save
```

To specify the ngcc package in the `package.json` file, add the suffix `-ngcc` to the package version, as shown below.

```bash
@syncfusion/ej2-angular-inputs:"32.1.19-ngcc"
```

N> If the ngcc tag is not specified while installing the package, the Ivy package will be installed, and a warning may be displayed.

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion` package folder.
Reference these files from `src/styles.css` using the following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-inputs/styles/material.css';
```

## Adding MaskedTextBox component

Use the following snippet in the `src/app/app.ts` file to import the MaskedTextBox component.

```ts
import { MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { Component } from '@angular/core';

@Component({
  imports: [MaskedTextBoxModule],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-maskedtextbox></ejs-maskedtextbox>`
})

export class App { }
```

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com) (Custom Resource Generator) in your application.

## Set the mask

Use the [`mask`](https://ej2.syncfusion.com/angular/documentation/api/maskedtextbox/index-default#mask) property to validate user input.
For details on mask configuration, see the mask configuration guide.

The following example shows the mask element `0`, which accepts a single digit (0–9).

```ts
import { MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { Component } from '@angular/core';

@Component({
  imports: [MaskedTextBoxModule],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-maskedtextbox mask='000-000-0000'></ejs-maskedtextbox>`
})

export class App { }
```

## Running the application

After configuring the MaskedTextBox, run the application with:

```bash
ng serve
```

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maskedtextbox/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maskedtextbox/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maskedtextbox/getting-started-cs1" %}

## Two-way binding

The `value` property supports two-way binding. The example demonstrates two-way binding between the MaskedTextBox and a component property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maskedtextbox/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maskedtextbox/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maskedtextbox/getting-started-cs2" %}

## Reactive form

MaskedTextBox is a form component and commonly used with form validation. The examples use reactive forms. For more information, see the Angular reactive forms guide.

- Import `ReactiveFormsModule` from `@angular/forms` and add it to the NgModule `imports` array. Also import `FormGroup` and `FormControl` in the component.
- Create a `FormGroup` instance in the component and bind it to the template using the `[formGroup]` directive.
- Use `formControlName` on input elements to bind `FormControl` instances defined in the `FormGroup`.

The following example demonstrates how to use the reactive forms.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maskedtextbox/reactive-forms-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maskedtextbox/reactive-forms-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maskedtextbox/reactive-forms-cs1" %}

## See Also

* [How to perform custom validation using FormValidator](./how-to/perform-custom-validation-using-form-validator)
* [How to customize the UI appearance of the control](./how-to/customize-the-ui-appearance-of-the-control)
* [How to set cursor position while focus on the input textbox](./how-to/set-cursor-position-while-focus-on-the-input-textbox)
* [How to display numeric keypad when focus on mobile devices](./how-to/display-numeric-keypad-when-focus-on-mobile-devices)