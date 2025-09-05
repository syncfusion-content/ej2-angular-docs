---
layout: post
title: Getting started with Angular TextBox component | Syncfusion
description: Learn how to create and configure Angular TextBox component with floating labels, icons, and styling in your application.
platform: ej2-angular
control: TextBox
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular TextBox component

The Angular TextBox component is an enhanced HTML input element that provides features like floating labels, input validation, icons, and customizable styling. This guide walks through creating a simple TextBox in an Angular application.

To get started quickly with Angular TextBox component, you can check out this video:
{% youtube "https://www.youtube.com/watch?v=v90dQ41gDcQ" %}

## Prerequisites

Before getting started, ensure you have:
- Node.js installed (version 14 or later)
- Basic knowledge of Angular and TypeScript
- Angular CLI installed globally

## Dependencies

The TextBox component requires the following dependencies in your application:

```js
|-- @syncfusion/ej2-angular-inputs
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-base
```

## Set up Angular environment

Angular provides an efficient way to create projects using the [`Angular CLI`](https://github.com/angular/angular-cli) tool.

Install the CLI application globally:

```bash
npm install -g @angular/cli
```

## Create a new application

Create a new Angular project:

```bash
ng new syncfusion-angular-textbox
```

To set up the project with SCSS styling, use the style flag:

```bash
ng new syncfusion-angular-textbox --style=scss
```

Navigate to the project directory:

```bash
cd syncfusion-angular-textbox
```

## Install Syncfusion TextBox package

Syncfusion packages are distributed as `@syncfusion` scoped packages on npm. The library provides two package formats to support different Angular versions.

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
@syncfusion/ej2-angular-inputs: "20.2.38-ngcc"
```

> **Note**: Installing without the ngcc tag on older Angular versions will install the Ivy package and display compatibility warnings.

## Add TextBox to the application

Integrate the TextBox component into your application by importing the module and using the component selector.

```javascript
import { Component } from '@angular/core';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [TextBoxModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-textbox placeholder="Enter Name"></ejs-textbox>`
})
export class AppComponent { }
```

## Add CSS references

Import the required CSS files in your `src/styles.css` file:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-inputs/styles/material.css';
```

> **Tip**: Use the [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) to create optimized, combined CSS and JavaScript files for your specific component requirements.

## Add icons to TextBox

Enhance the TextBox with icons using the [`addIcon`](https://ej2.syncfusion.com/angular/documentation/api/textbox/#addicon) method within the [`created`](https://ej2.syncfusion.com/angular/documentation/api/textbox/#created) event:

| **Parameter** | **Type**           | **Description**                                                                 |
|--------------|--------------------|---------------------------------------------------------------------------------|
| position     | string             | Specifies the icon placement. Possible values: append, prepend.                |
| icons        | string or string[] | CSS classes for the icon(s) to be added. These are applied to a span element that acts as an icon or button. |

```javascript
import { Component, ViewChild } from '@angular/core';
import { TextBoxComponent, TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [TextBoxModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-textbox #textbox placeholder="Enter Date" (created)="onCreate($event)"></ejs-textbox>`
})
export class AppComponent {
    @ViewChild('textbox')
    public textboxObj!: TextBoxComponent;

    public onCreate(args: any) {
        (this.textboxObj as any).addIcon('append', 'e-icons e-input-popup-date');
    }
}
```

```css
.e-input-group-icon.e-input-popup-date::before {
    content: "";
}
```

## Run the application

Start the development server to view your TextBox component:

```bash
ng serve
```

The application will open in your default browser, displaying the TextBox component.

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

The floating label feature displays the label above the TextBox when focused or when the input contains a value. Configure floating labels using the [FloatLabelType](https://ej2.syncfusion.com/angular/documentation/api/textbox/#floatlabeltype) property:

**Available FloatLabelType values:**

* **Never** - The placeholder text remains static and does not float above the TextBox
* **Always** - The placeholder text permanently floats above the TextBox regardless of focus or input state
* **Auto** - The placeholder text dynamically floats above the TextBox when the field receives focus or contains a value

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

**Package installation issues**: Ensure you're using the correct package version for your Angular version (Ivy for Angular 12+ or ngcc for earlier versions).

**Styling not applied**: Verify that CSS imports are correctly added to `src/styles.css` and the paths match your node_modules structure.

**Component not rendering**: Check that the TextBoxModule is properly imported in your component or module.