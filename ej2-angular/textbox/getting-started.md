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

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

A quick introduction video is available:
{% youtube "https://www.youtube.com/watch?v=v90dQ41gDcQ" %}

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion Angular UI Components](../system-requirement).

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

## Installing syncfusion<sup style="font-size:70%">&reg;</sup> TextBox package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular TextBox component](https://www.syncfusion.com/angular-components/angular-textbox) for demonstration. Add the Angular TextBox component component with:

```bash
ng add @syncfusion/ej2-angular-inputs
```

This command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-inputs` package and peer dependencies to your `package.json`.
- Import the TextBox component component in your application.
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

## Add CSS references

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component themes can be added in various ways: via CSS or SCSS styles from npm packages, CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio).

The `Material` theme is added to your `styles.css` when you run `ng add` (this happens automatically by default).

To stylize only specific Syncfusion<sup style="font-size:70%">&reg;</sup> components, import the necessary styles. For example, to style only the TextBox component:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-angular-inputs/styles/material3.css';
```

> Ensure that the import order aligns with the component's dependency sequence.

For using SCSS styles, refer to [this guide](https://ej2.syncfusion.com/angular/documentation/common/how-to/sass).

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