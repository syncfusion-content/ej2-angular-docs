---
layout: post
title: Getting started with Angular Predefined dialogs component | Syncfusion
description:  Checkout and learn about Getting started with Angular Predefined dialogs component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Predefined dialogs component

This section explains how to create a simple predefined dialogs and demonstrate the basic usage of the predefined dialogs in an angular environment.

## Dependencies

```javascript
|-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
```

## Setup an Angular environment

You can use the [Angular CLI](https://github.com/angular/angular-cli) to setup your Angular applications. To install Angular CLI use the following command.

```javascript

  npm install -g @angular/cli

```

## Create an Angular application

Start a new Angular application using below Angular CLI command.

```javascript

  ng new my-app
  cd my-app

```

## Installing Syncfusion Popups package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-popups`](https://www.npmjs.com/package/@syncfusion/ej2-angular-popups/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-popups --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-popups@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-popups/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-popups@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-popups:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Dialog module

Once you have successfully installed the popups package, the component modules are ready to configure in your application from the installed location. Syncfusion Angular package provides two different types of ngModules.

Refer to [Ng-Module](https://ej2.syncfusion.com/angular/documentation/common/ng-module/) to learn about `ngModules`.

Refer to the following snippet to import the `DialogModule` in `app.module.ts` from the `@syncfusion/ej2-angular-popups`.

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Imported syncfusion DialogModule from popups package
import { DialogModule } from '@syncfusion/ej2-angular-popups';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Registering EJ2 Dialog Module
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Adding CSS reference

Add dialog component's styles as given below in styles.css

```css

       @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
       @import '../node_modules/@syncfusion/ej2-icons/styles/material.css';
       @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
       @import '../node_modules/@syncfusion/ej2-angular-popups/styles/material.css';

```

## Render a dialog using utility functions

The dialog component provides built-in utility functions to render the alert and confirm dialogs with the minimal code.
The following options are used as an argument on calling the utility functions:

| Options   | Description |
|-----------|-------------|
| title | Specifies the title of dialog like the [`header`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#header) property.|
| content | Specifies the value that can be displayed in dialog's content area like the [`content`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#content) property. |
| isModal | Specifies the Boolean value whether the dialog can be displayed as modal or non-modal. For more details, refer to the [`isModal`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#ismodal) property.|
| position | Specifies the value where the alert or confirm dialog is positioned within the document. For more details, refer to the [`position`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#position) property { X: ‘center’, Y: ‘center’}|
| okButton | Configures the `OK button` that contains button properties with the click events. `okButton:{ icon:'prefix icon to the button', cssClass:'custom class to the button', click: 'action for OK button click', text: 'Yes' // <-- Default value is 'OK' }`|
| cancelButton | Configures the `Cancel button` that contains button properties with the click events. `cancelButton:{ icon:'prefix icon to the button', cssClass:'custom class to the button', click: 'action for ‘Cancel’ button click', text: 'No' // <-- Default value is 'Cancel'}`|
|isDraggable|Specifies the value whether the alert or confirm dialog can be dragged by the user.|
| showCloseIcon | When set to true, the close icon is shown in the dialog component. |
|closeOnEscape|When set to true, you can close the dialog by pressing ESC key.|
| animationSettings |Specifies the animation settings of the dialog component. |
| cssClass |Specifies the CSS class name that can be appended to the dialog. |
| zIndex |Specifies the order of the dialog, that is displayed in front or behind of another component. |
| open |Event which is triggered after the dialog is opened. |
| Close |Event which is triggered after the dialog is closed. |

## Alert dialog

An alert dialog box used to display an errors, warnings, and information alerts that needs user awareness. The alert dialog is displayed along with the OK button. When user clicks on ‘OK’ button, alert dialog will get closed. Use the following code to render a simple alert dialog in an application.

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

A confirm dialog box used to displays a specified message along with the ‘OK’ and ‘Cancel’ button. It is used to get approval from the user, and it appears before any critical action. After get approval from the user the dialog will disappear automatically. Use the following code to render a simple confirm dialog in an application.

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

A prompt dialog is used to get the input from the user. When the user clicks the ‘OK’ button the input value from the dialog is returned. If the user clicks the ‘Cancel’ button the null value is returned. After getting the input from the user the dialog will disappear automatically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/dialog-prompt-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/dialog-prompt-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/dialog-prompt-cs1" %}