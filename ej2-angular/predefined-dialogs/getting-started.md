---
layout: post
title: Getting started with the Angular Predefined Dialogs | Syncfusion
description: Check out and learn about getting started with the Angular Predefined Dialogs component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with the Angular Predefined Dialogs component

This section explains how to create a simple predefined dialog and demonstrates the basic usage of predefined dialogs in an Angular environment.

## Dependencies

```javascript
|-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
```

## Set up an Angular environment

You can use the [Angular CLI](https://github.com/angular/angular-cli) to set up Angular applications. To install Angular CLI, use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using the following Angular CLI commands.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Popups package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed on npm as `@syncfusion` scoped packages. You can find all Syncfusion Angular packages on npm under the `@syncfusion/ej2-angular-*` scope.

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components:
1. Ivy library distribution package [format](https://v17.angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler (Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (>= 20.2.36) have been moved to the Ivy distribution to support the Angular [Ivy](https://v12.angular.io/guide/ivy) rendering engine, and they are compatible with Angular version 12 and above. To install the package, use the following command.

Add [`@syncfusion/ej2-angular-popups`](https://www.npmjs.com/package/@syncfusion/ej2-angular-popups) package to the application.

```bash
npm install @syncfusion/ej2-angular-popups --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To install the ngcc package, use the following command.

Add [`@syncfusion/ej2-angular-popups@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-popups/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-popups@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```json
"@syncfusion/ej2-angular-popups": "32.1.19-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy library package will be installed, and a warning will be thrown.

## Adding Dialog component

Use the following snippet in the `src/app/app.ts` file to import the Dialog component.

```ts
import { Component } from '@angular/core';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DialogUtility } from '@syncfusion/ej2-popups';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  template: `
    <button ejs-button cssClass="e-primary" (click)="showAlert()">Show Alert</button>
    <button ejs-button cssClass="e-success" (click)="showConfirm()" style="margin-left:10px;">
      Show Confirm
    </button>
  `,
})

export class App {
  // ---- Predefined Alert ----
  showAlert(): void {
    DialogUtility.alert({
      title: 'Alert',
      content: 'This is a simple predefined Alert dialog.',
      width: '250px'
    });
  }

  // ---- Predefined Confirm ----
  showConfirm(): void {
    DialogUtility.confirm({
      title: 'Confirm',
      content: 'Are you sure you want to continue?',
      width: '280px'
    });
  }
}
```

## Adding CSS reference

The following CSS files are available in the `../node_modules/@syncfusion` package folder. Reference them in `src/styles.css` as shown below. Choose one theme consistently (for example, Material, Tailwind, Fluent, or Bootstrap).

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-icons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-popups/styles/material.css';
```

## Running the application

Run the `ng serve` command in a terminal to serve your application, then open it in a browser. 

```bash
ng serve
```

## Render a dialog using utility functions

The dialog component provides built-in utility functions to render alert and confirm dialogs with minimal code.
The following options are used as arguments when calling the utility functions:

| Options   | Description |
|-----------|-------------|
| title | Specifies the dialog title similar to the [`header`](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#header) property.|
| content | Specifies the value displayed in the dialog content area similar to the [`content`](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#content) property. |
| isModal | Specifies whether the dialog is displayed as modal or non-modal. For more details, refer to the [`isModal`](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#ismodal) property.|
| position | Specifies where the alert or confirm dialog is positioned within the document. For more details, refer to the [`position`](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#position) property. Example: `position: { X: 'center', Y: 'center' }`.|
| okButton | Configures the OK button with button properties and click event. Example: `okButton: { icon: 'prefix icon', cssClass: 'custom-class', click: /* OK action */, text: 'Yes' }` (default text is `OK`).|
| cancelButton | Configures the Cancel button with button properties and click event. Example: `cancelButton: { icon: 'prefix icon', cssClass: 'custom-class', click: /* Cancel action */, text: 'No' }` (default text is `Cancel`).|
| isDraggable | Specifies whether the alert or confirm dialog can be dragged by the user.|
| showCloseIcon | When set to true, the close icon is shown in the dialog component. |
| closeOnEscape | When set to true, the dialog can be closed by pressing the ESC key.|
| animationSettings | Specifies the animation settings of the dialog component. |
| cssClass | Specifies the CSS class name appended to the dialog. |
| zIndex | Specifies the z-index of the dialog, controlling whether it appears in front of or behind other components. |
| open | Event that is triggered after the dialog is opened. |
| close | Event that is triggered after the dialog is closed. |

## Alert dialog

An alert dialog box is used to display errors, warnings, and information that require user awareness. The alert dialog is displayed with an OK button. When the user clicks the OK button, the alert dialog closes. Use the following code to render a simple alert dialog in an application.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/dialog-alert-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/dialog-alert-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/dialog-alert-cs1" %}

## Confirm dialog

A confirm dialog box displays a specified message along with OK and Cancel buttons. It is used to get approval from the user and typically appears before a critical action. After the user responds, the dialog disappears automatically. Use the following code to render a simple confirm dialog in an application.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/dialog-confirm-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/dialog-confirm-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/dialog-confirm-cs1" %}

## Prompt dialog

A prompt dialog is used to get input from the user. When the user clicks the OK button, the input value from the dialog is returned. If the user clicks the Cancel button, a null value is returned. After receiving the input, the dialog disappears automatically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/dialog-prompt-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/dialog-prompt-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/dialog-prompt-cs1" %}