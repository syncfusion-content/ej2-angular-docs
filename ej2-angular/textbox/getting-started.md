---
layout: post
title: Getting started with Angular TextBox component | Syncfusion
description: Learn how to create and configure Angular TextBox component with floating labels, icons, and styling in your application.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular TextBox component

The Angular TextBox component is an enhanced HTML input element that provides features such as floating labels, input validation, icons, and customizable styling. This guide describes how to create a simple TextBox in an Angular application.

A quick introduction video is available:
{% youtube "https://www.youtube.com/watch?v=v90dQ41gDcQ" %}

## Prerequisites

Before getting started, ensure the following are available:
- Node.js installed (version 16 or later)
- Basic knowledge of Angular and TypeScript
- Angular CLI installed globally

## Dependencies

The TextBox component requires the following dependencies in your application:

```js
|-- @syncfusion/ej2-angular-inputs
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-base
		|-- @syncfusion/ej2-buttons
		|-- @syncfusion/ej2-popups
		|-- @syncfusion/ej2-splitbuttons
```

## Set up Angular environment

Use the [`Angular CLI`](https://github.com/angular/angular-cli) to create and manage projects.

Install the Angular CLI globally:

```bash
npm install -g @angular/cli
```

## Create a new application

Create a new Angular project:

```bash
ng new syncfusion-angular-textbox
```

By default, the CLI scaffolds a CSS-based application. To set up with SCSS, pass the `--style=scss` flag when creating the project. For example:

```bash
ng new syncfusion-angular-textbox --style=scss
```

Navigate to the project directory:

```bash
cd syncfusion-angular-textbox
```

## Install Syncfusion TextBox package

Syncfusion packages are published under the `@syncfusion` scope on npm. Two package formats are provided to support different Angular versions.

### For Angular 12 and above (Ivy distribution)

Syncfusion Angular packages (version 20.2.36 and later) use Ivy distribution format, compatible with Angular's modern rendering engine.

Install the TextBox package:

```bash
npm install @syncfusion/ej2-angular-inputs --save
```

### For Angular versions below 12 (ngcc compatibility)

For older Angular versions, use the legacy compilation package:

```bash
npm install @syncfusion/ej2-angular-inputs@ngcc --save
```

In your `package.json`, specify the ngcc version:

```bash
@syncfusion/ej2-angular-inputs: "32.1.19-ngcc"
```

> **Note**: Installing without the ngcc tag on older Angular versions will install the Ivy package and display compatibility warnings.

## Add TextBox to the application

Use the following snippet in the `src/app/app.ts` file to import the TextBox component.

```javascript
import { Component } from '@angular/core';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  imports: [TextBoxModule],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-textbox placeholder="Enter Name"></ejs-textbox>`
})
export class App { }
```

## Add CSS references

Syncfusion® Angular component themes can be added in various ways: via CSS or SCSS styles from npm packages, CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio).

Add the required CSS files to your project's global styles (`src/styles.css` or `src/styles.scss`) or include them in the `angular.json` `styles` array:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-inputs/styles/material.css';
```

Tip: for production builds, the Custom Resource Generator (CRG) can produce optimized, combined CSS and JavaScript bundles for only the components in use.

## Add icons to TextBox

Icons can be added using the [`addIcon`](https://ej2.syncfusion.com/angular/documentation/api/textbox/index-default#addicon) method within the [`created`](https://ej2.syncfusion.com/angular/documentation/api/textbox/index-default#created) event:

| **Parameter** | **Type**           | **Description**                                                                 |
|--------------|--------------------|---------------------------------------------------------------------------------|
| position     | string             | Specifies the icon placement. Possible values: append, prepend.                |
| icons        | string or string[] | CSS class or array of CSS classes for the icon(s). These classes are applied to a span element that renders the icon or button. |

```javascript
import { Component, ViewChild } from '@angular/core';
import { TextBoxComponent, TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  imports: [TextBoxModule],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-textbox #textbox placeholder="Enter Date" (created)="onCreate($event)"></ejs-textbox>`
})
export class App {
  @ViewChild('textbox')
  public textboxObj!: TextBoxComponent;

  public onCreate(args: any) {
    (this.textboxObj as any).addIcon('append', 'e-icons e-input-group-icon e-input-popup-date');
  }
}
```

```css
.e-input-group-icon.e-input-popup-date::before {
    content: "\e901";
}
```

## Run the application

Start the development server to view the TextBox component:

```bash
ng serve
# or open automatically
ng serve --open
```

The application starts on the development server and the TextBox component is available in the browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/getting-started-cs1" %}

## Floating label

The floating label feature displays the label above the TextBox when focused or when the input contains a value. Configure floating labels using the [FloatLabelType](https://ej2.syncfusion.com/angular/documentation/api/textbox/index-default#floatlabeltype) property:

Available `FloatLabelType` values:

- **Never** — Placeholder text remains static and does not float above the TextBox.
- **Always** — Placeholder text permanently floats above the TextBox regardless of focus or input state.
- **Auto** — Placeholder text floats above the TextBox when the field receives focus or contains a value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/textbox-component-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/textbox-component-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/textbox-component-cs1" %}

## Troubleshooting

**Package installation issues**: Verify the package version used for the Angular version (Ivy for Angular 12+ or the `ngcc` distribution for earlier versions).

**Styling not applied**: Verify that the CSS imports are present in `src/styles.css` or `src/styles.scss`, or included in the `angular.json` `styles` array, and that the import paths match the `node_modules` layout.

**Component not rendering**: Confirm that `TextBoxModule` is imported in the component or NgModule where the `ejs-textbox` selector is used.