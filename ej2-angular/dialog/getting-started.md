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

## Getting Started with Angular CLI

The following section explains the steps required to create a simple angular-cli application and how to configure `Dialog` component.

### Prerequisites

To get started with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components, make sure that you have compatible versions of Angular and TypeScript.

* Angular: 12+
* TypeScript: 4+

### Setting up an Angular project

Angular provides an easy way to set up a project using the [Angular CLI](https://github.com/angular/angular-cli).

Install the CLI globally:

```bash
npm install -g @angular/cli
```

### Create a new application

```bash
ng new syncfusion-angular-app
```

After running the command, you will be prompted with the following options:
* Would you like to add Angular routing?
* Which stylesheet format would you like to use?

By default, the CLI sets up a CSS-based project. To use SCSS, pass the `--style=scss` option when creating the project:

```bash
ng new syncfusion-angular-app --style=scss
```

Navigate into the created project folder:

```bash
cd syncfusion-angular-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Popups package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (v20.2.36 and later) are distributed in the Ivy format to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and are compatible with Angular version 12 and above. To install the package, use the following command:

Add [`@syncfusion/ej2-angular-popups`](https://www.npmjs.com/package/@syncfusion/ej2-angular-popups/v/32.1.19) package to the application.

```bash
npm install @syncfusion/ej2-angular-popups --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To install the `ngcc` package, use the following:

Add [`@syncfusion/ej2-angular-popups@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-popups/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-popups@ngcc --save
```

To specify the ngcc package in the `package.json` file, add the `-ngcc` suffix to the package version as shown below.

```json
{
  "@syncfusion/ej2-angular-popups": "32.1.19-ngcc"
}
```

> Note: If the `@ngcc` tag is not specified while installing, the Ivy package will be installed by default, and a warning may be shown in older Angular versions.

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

## Adding CSS reference

The following CSS files are available in the `../node_modules/@syncfusion` package folder. Reference them in `src/styles.css` as shown below. Choose one theme consistently (for example, Material, Tailwind, Fluent, or Bootstrap).

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-icons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-popups/styles/material.css';
```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

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

