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

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion Angular UI Components](../system-requirement).

## Dependencies

```javascript
|-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
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