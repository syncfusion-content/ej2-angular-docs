---
layout: post
title: Getting started with Angular Dialog component | Syncfusion
description:  Checkout and learn about Getting started with Angular Dialog component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Dialog component

This section explains the steps to create a simple **Dialog** component and configure its available functionalities in Angular.

## Getting Started with Angular CLI

The following section explains the steps required to create a simple angular-cli application and how to configure `Dialog` component.

### Prerequisites

To get started with Syncfusion Angular UI Components, make sure that you have compatible versions of Angular and TypeScript.

* Angular : 6+
* TypeScript : 2.6+

### Setting up an Angular project

Angular provides an easiest way to setup project using Angular CLI [Angular CLI](https://github.com/angular/angular-cli) tool.

Install the CLI application globally in your machine.

```javascript

  npm install -g @angular/cli

```

### Create a new application

```javascript

  ng new syncfusion-angular-app

```

Once you have executed the above command you may ask for following options,
* Would you like to add Angular routing?
* Which stylesheet format would you like to use?

By default, it install the CSS style base application. To setup with SCSS, pass --style=SCSS argument on create project.

Example code snippet.

```javascript

  ng new syncfusion-angular-app --style=SCSS

```

Use below command to Navigate into the created project folder.

```javascript

  cd syncfusion-angular-app

```

## Installing Syncfusion Popups package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
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

## Adding Dialog component

Add the Dialog component snippet in `app.component.ts` as follows.

```javascript

import { Component, ViewChild, OnInit, ElementRef  } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  template: `
    <div id="dialog-container">
        <button class="e-control e-btn" id="targetButton" (click)="onOpenDialog($event)">Open
          Dialog</button>
        <ejs-dialog id='dialog' #ejDialog target="#dialog-container" [showCloseIcon]='true' content='This is a Dialog content'
          width='350px'>
        </ejs-dialog>
    </div>`
})
export class AppComponent implements OnInit {
  // Create element reference for dialog target element.
  @ViewChild('ejDialog') ejDialog: DialogComponent;

  public onOpenDialog = function(event: any): void {
      // Call the show method to open the Dialog
      this.ejDialog.show();
  };
}

```

Add following styles in corresponding css file. The below mentioned styles are used in styles.css file,

```css
#dialog-container {
    height: 500px;
}
```

>Note: Please do the necessary change in `index.html` file. In this demo we used id selector in `<app-root id='dialog-container'></app-root>`

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion` package folder. This can be referenced in [src/styles.css] using following code.

```css

       @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
       @import '../node_modules/@syncfusion/ej2-icons/styles/material.css';
       @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
       @import '../node_modules/@syncfusion/ej2-angular-popups/styles/material.css';

```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

## Running the application

Run the `ng serve` command in command window, it will serve your application and you can open the browser window. Output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/getting-started-cs2" %}

> In the dialog control, max-height is calculated based on the dialog target element height. If the target property is not configured, the document.body is considered as a target. Therefore, to show a dialog in proper height, you need to add min-height to the target element.
If the dialog is rendered based on the body, then the dialog will get the height based on its body element height. If the height of the dialog is larger than the body height, then the dialog's height will not be set. For this scenario, we can set the CSS style for the html and body to get the dialog height.

```css

html, body {
   height: 100%;
}

```

## Modal Dialog

A [modal](https://ej2.syncfusion.com/angular/documentation/api/dialog/#ismodal) shows an overlay behind the Dialog. So, the user should interact the Dialog compulsory before interacting with the remaining content in an application.

While the user clicks the overlay, the action can be handled through the [`overlayClick`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#overlayclick) event. In the below sample the Dialog close action is performed while clicking on the overlay.

> When the modal Dialog is opened, the Dialog's target scrolling will be disabled. The scrolling will be enabled again once close the Dialog.

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

The Dialog header can be enabled by adding the header content as text or HTML content through the [`header`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#header) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/getting-started-cs4" %}

## Enable default footer Buttons

The Dialog provides built-in support to render the `buttons` on the footer (for ex: ‘OK’ or ‘Cancel’ buttons). Each Dialog button allows the user to perform any action while clicking on it.

The primary button will be focused automatically when open the Dialog and add the [`click`](https://ej2.syncfusion.com/angular/documentation/api/dialog/buttonProps/#click) event to handle the actions

> When the Dialog initialize with more than one primary buttons, the first primary button gets focus on open the Dialog.

The below sample render with button and its click event.

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

The Angular Dialog supports to [drag](https://ej2.syncfusion.com/angular/documentation/api/dialog/#allowdragging) within its target container by grabbing the Dialog header, which allows the user to reposition the Dialog dynamically.

> The Dialog can be draggable only when the Dialog header is enabled.
From `16.2.x` version, enabled draggable support for modal Dialog also.

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

The Angular Dialog can be positioned using the [position](https://ej2.syncfusion.com/angular/documentation/api/dialog/#position) property by providing the X and Y co-ordinates. It can be positioned inside the target of the container or `<body>` of the element based on the given X and Y values.

* for X is: left, center, right (or) any offset value
* for Y is: top, center, bottom (or) any offset value

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

> You can refer to our [Angular Dialog](https://www.syncfusion.com/angular-ui-components/angular-modal-dialog) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Dialog example](https://ej2.syncfusion.com/angular/demos/#/material/dialog/default) that shows how to render the dialog.

## See Also

* [Load dialog content using AJAX](./how-to/load-dialog-content-using-ajax)
* [How to position the dialog on center of the page on scrolling](./how-to/position-the-dialog-on-center-of-the-page-on-scrolling)
* [Prevent closing of modal dialog](./how-to/prevent-closing-of-modal-dialog)
* [Close dialog while click on outside of dialog](./how-to/close-dialog-while-click-on-outside-of-dialog)
* [How to make a reusable alert and confirm dialog](./how-to/render-a-dialog-using-utility-functions)
