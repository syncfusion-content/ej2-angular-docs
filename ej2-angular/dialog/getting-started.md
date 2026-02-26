---
layout: post
title: Getting started with the Angular Dialog component | Syncfusion
description: Learn how to get started with the Angular Dialog component in Syncfusion Essential JS 2, including installation, setup, and core features.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with the Angular Dialog component

This section explains the steps to create a simple **Dialog** component and configure its available functionalities in Angular.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion Angular UI Components](../system-requirement).

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

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Popups package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular Dialog component](https://www.syncfusion.com/angular-components/angular-modal-dialog) for demonstration. Add the Angular Dialog component component with:

```bash
ng add @syncfusion/ej2-angular-popups
```

This command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-popups` package and peer dependencies to your `package.json`.
- Import the Dialog component component in your application.
- Register the default Syncfusion<sup style="font-size:70%">&reg;</sup> material theme in `angular.json`.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package structures for Angular components:		
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)		
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.		
Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:		
```bash		
ng add @syncfusion/ej2-angular-popups
```		
For applications not compiled with Ivy, use the `ngcc` tagged packages:		
> The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of IVY compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility).	
```bash		
npm add @syncfusion/ej2-angular-popups@32.1.19-ngcc		
```

## Adding CSS reference

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component themes can be added in various ways: via CSS or SCSS styles from npm packages, CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio).

The `Material` theme is added to your `styles.css` when you run `ng add` (this happens automatically by default).

To stylize only specific Syncfusion<sup style="font-size:70%">&reg;</sup> components, import the necessary styles. For example, to style only the Dialog component:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-icons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-angular-popups/styles/material3.css';
```

> Ensure that the import order aligns with the component's dependency sequence.

For using SCSS styles, refer to [this guide](https://ej2.syncfusion.com/angular/documentation/common/how-to/sass).

## Adding Dialog component

Use the following snippet in the `src/app/app.ts` file to import the Dialog component.

```ts
import { Component, ViewChild } from '@angular/core';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-root',
  imports: [DialogModule],
  template: `
    <div id="dialog-container">
      <button class="e-control e-btn" id="targetButton" (click)="onOpenDialog()">Open Dialog</button>
      <ejs-dialog id="dialog" #ejDialog target="#dialog-container" [showCloseIcon]="true" content="This is a Dialog content"
        width="350px">
      </ejs-dialog>
    </div>
  `
})
export class App {
  // Element reference for the Dialog instance
  @ViewChild('ejDialog') public ejDialog!: DialogComponent;

  public onOpenDialog(): void {
    // Call the show method to open the Dialog
    this.ejDialog.show();
  }
}
```

Add the following styles in the corresponding CSS file (for example, `styles.css`):

```css
#dialog-container {
    height: 500px;
}
```

> Note: Ensure that the element with the id `dialog-container` exists and wraps the dialog. For example, set the id on the root element in `index.html` if needed: `<app-root id='dialog-container'></app-root>`.

## Running the application

Run the `ng serve` command in a terminal to serve your application, then open it in a browser. 

```bash
ng serve
```

The following example shows a basic Dialog component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/getting-started-cs2" %}

> The dialog's max-height is calculated based on the dialog target element's height. If the `target` property is not configured, `document.body` is considered the target. To display the dialog at a proper height, add a `min-height` to the target element.
If the dialog is rendered against `body` and its height exceeds the body's height, the dialog's height will not be set automatically. In this scenario, set CSS on the `html` and `body` elements to provide full height.

```css
html, body {
   height: 100%;
}
```

## Modal Dialog

A [modal](https://ej2.syncfusion.com/angular/documentation/api/dialog#ismodal) shows an overlay behind the Dialog, so the user must interact with the dialog before interacting with the rest of the application.

When the user clicks the overlay, handle the action through the [`overlayClick`](https://ej2.syncfusion.com/angular/documentation/api/dialog#overlayclick) event. In the sample below, clicking the overlay closes the dialog.

> When a modal dialog is opened, scrolling on the dialog's target is disabled and re-enabled after the dialog is closed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/getting-started-cs3" %}

## Enable header

Enable the Dialog header by providing text or HTML content through the [`header`](https://ej2.syncfusion.com/angular/documentation/api/dialog#header) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/getting-started-cs4" %}

## Enable default footer buttons

The Dialog provides built-in support to render `buttons` in the footer (for example, “OK” or “Cancel”). Each Dialog button can trigger actions when clicked.

The primary button is automatically focused when the Dialog opens. Use the [`click`](https://ej2.syncfusion.com/angular/documentation/api/dialog/buttonProps#click) event to handle actions.

> When the Dialog initializes with more than one primary button, the first primary button receives focus when the Dialog opens.

The sample below renders footer buttons and handles their click events.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/getting-started-cs5" %}

## Draggable

The Angular Dialog supports [dragging](https://ej2.syncfusion.com/angular/documentation/api/dialog#allowdragging) within its target container by grabbing the Dialog header, allowing the user to reposition the Dialog dynamically.

> The Dialog can be draggable only when the Dialog header is enabled.
Starting from v16.2.x, draggable is also supported for modal dialogs.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/getting-started-cs6" %}

## Positioning

The Angular Dialog can be positioned using the [position](https://ej2.syncfusion.com/angular/documentation/api/dialog#position) property by providing the X and Y coordinates. It can be positioned inside the target container or the `<body>` element based on the given X and Y values.

* For X: left, center, right, or any offset value
* For Y: top, center, bottom, or any offset value

The below example demonstrates the different Dialog positions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/position-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/position-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/position-cs1" %}

> Refer to the [Angular Dialog](https://www.syncfusion.com/angular-ui-components/angular-modal-dialog) feature tour page for a summary of features. You can also explore the [Angular Dialog example](https://ej2.syncfusion.com/angular/demos/#/tailwind3/dialog/default) that shows how to render the dialog.

## See Also

* [Load dialog content using AJAX](./how-to/load-dialog-content-using-ajax)
* [How to position the dialog at the center of the page while scrolling](./how-to/position-the-dialog-on-center-of-the-page-on-scrolling)
* [Prevent closing of modal dialog](./how-to/prevent-closing-of-modal-dialog)
* [Close dialog when clicking outside the dialog](./how-to/close-dialog-while-click-on-outside-of-dialog)

