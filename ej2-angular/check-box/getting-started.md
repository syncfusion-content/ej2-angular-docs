---
layout: post
title: Getting started with Angular Check box component | Syncfusion
description:  Checkout and learn about Getting started with Angular Check box component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular CheckBox component

This section explains how to create a simple CheckBox and demonstrate the basic usage of the CheckBox component in an Angular environment.

## Dependencies

The following dependencies are required to use the CheckBox component in your application.

 ```typescript
|-- @syncfusion/ej2-angular-buttons
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-buttons
        |-- @syncfusion/ej2-base
```

## Set up Angular environment

You can use [Angular CLI](https://v17.angular.io/cli) to set up your Angular applications. Use the following command to install Angular CLI.

```
npm install -g @angular/cli
```

## Create an Angular application

Use the following Angular CLI commands to create a new application.

```
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> CheckBox package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed on npm as `@syncfusion` scoped packages. Find all Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages on npm: [Angular packages on npm](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. The Angular compatibility compiler (Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (`>=20.2.36`) have been moved to the Ivy distribution to support the Angular [Ivy](https://v12.angular.io/guide/ivy) rendering engine, and the packages are compatible with Angular versions 12 and above. Use the following command to install the package.

Add [`@syncfusion/ej2-angular-buttons`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons/v/32.1.19) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons --save
```

### Angular compatibility compiled package (ngcc)

For Angular versions below 12, use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. Use the following command to install the `ngcc` package.

Add [`@syncfusion/ej2-angular-buttons@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-buttons/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons@ngcc --save
```

To reference the ngcc package in the `package.json` file, add the suffix `-ngcc` to the package version as shown below.

```bash
@syncfusion/ej2-angular-buttons:"32.1.19-ngcc"
```

> Note: If the ngcc tag is not specified when installing the package, the Ivy package will be installed and it will emit a warning.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> CheckBox component

Use the following snippet in the `src/app/app.ts` file to import the CheckBox component.

 ```typescript
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { Component } from '@angular/core';

@Component({
  imports: [CheckBoxModule],
  standalone: true,
  selector: 'app-root',
  template: `<div class="e-section-control">
    <!-- To Render CheckBox. -->
    <ejs-checkbox label="Default"></ejs-checkbox>
    </div>`
})

export class AppComponent { }
```

## Adding CSS reference

Add the CheckBox component styles in `styles.css` as shown below.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a basic CheckBox component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/check-box/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/check-box/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/check-box/getting-started-cs1" %}

## Change the CheckBox state

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 CheckBox has three visual states:
* Checked
* Unchecked
* Indeterminate

Use the [`checked`](https://ej2.syncfusion.com/angular/documentation/api/check-box/index-default#checked) property to set the checked and unchecked states.
In the checked state, a tick mark appears in the CheckBox.

### Indeterminate

Set the indeterminate state using the [`indeterminate`](https://ej2.syncfusion.com/angular/documentation/api/check-box/index-default#indeterminate) property. The indeterminate state visually masks the actual value of the CheckBox. It cannot be set via the user interface and can only be configured programmatically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/check-box/label-and-size-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/check-box/label-and-size-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/check-box/label-and-size-cs2" %}