---
layout: post
title: Getting started with Angular ColorPicker component | Syncfusion
description: Check out how to get started with the Angular ColorPicker component in Syncfusion Essential JS 2, including setup, configuration, and basic usage.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular ColorPicker component

This section explains how to create the default ColorPicker and demonstrates its basic usage.

## Dependencies

The list of dependencies required to use the ColorPicker module in your application is given below:

```javascript
|-- @syncfusion/ej2-angular-inputs
  |-- @syncfusion/ej2-angular-base
  |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
```

## Set up the Angular environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to set up Angular applications. To install Angular CLI, use the following command.

```
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using the following commands.

```
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> ColorPicker package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages from [npm]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> ColorPicker component

Use the following snippet in the `src/app/app.ts` file to import the ColorPicker component.

```ts
import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs'
import { Component } from '@angular/core';

@Component({
  imports: [ColorPickerModule],
  standalone: true,
  selector: 'app-root',
  template: `<!-- To render ColorPicker. -->
             <input ejs-colorpicker type="color" id="colorpicker" />`
})

export class App { }
```

## Adding CSS reference

Add the ColorPicker component styles as shown below in `styles.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a default ColorPicker component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/getting-started/default-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/getting-started/default-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/getting-started/default-cs2" %}

## Inline type

By default, the ColorPicker is rendered using a SplitButton and opens a pop-up. To render only the ColorPicker container and access it directly, use the inline type by setting the [`inline`](https://ej2.syncfusion.com/angular/documentation/api/color-picker#inline) property to `true`.

The following sample shows the inline type rendering of ColorPicker.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/getting-started/inline-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/getting-started/inline-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/getting-started/inline-cs1" %}

N> The `showButtons` property is disabled in this sample because control buttons are not needed for the inline type. To learn about control button functionality, see the [`showButtons`](./how-to/hide-control-buttons) sample.

N> Refer to the [Angular ColorPicker](https://www.syncfusion.com/angular-ui-components/angular-color-picker) feature tour page for an overview of key features. You can also explore the [Angular ColorPicker example](https://ej2.syncfusion.com/angular/demos/#/material/color-picker/default) that shows how to render the component in Angular.