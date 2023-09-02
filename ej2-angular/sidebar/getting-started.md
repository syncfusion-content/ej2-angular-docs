---
layout: post
title: Getting started with Angular Sidebar component | Syncfusion
description:  Checkout and learn about Getting started with Angular Sidebar component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Sidebar component

This section briefly explains the steps required to create a simple **Sidebar** component, and demonstrates the basic usage of the [`Angular Sidebar control`](https://www.syncfusion.com/angular-components/angular-sidebar) in a Angular CLI application.

To get start quickly with Angular Sidebar using CLI and Schematics, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=CL7Cc2efZ9Q" %}

## Prerequisites

To get started with **Sidebar** component, ensure the compatible versions of Angular and Typescript.

* Angular : `4+`
* Typescript : `2.6+`

## Setting up angular project

Angular provides the easiest way to set angular CLI projects using Angular CLI tool.

Install the CLI application globally to your machine by using following command.

```sh
npm install -g @angular/cli
Create a new application
ng new syncfusion-angular-app
```

Navigate to the created project folder by using following command.

```sh
cd syncfusion-angular-app
```

>Refer [Syncfusion Angular Getting Started](../getting-started/angular-cli) section to know more about setting up `angular-cli` project.

## Adding Dependencies

Below dependency packages are required in order to use the `Sidebar` component in your application.

```javascript
|-- @syncfusion/ej2-angular-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-lists
            |-- @syncfusion/ej2-splitbuttons
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
```

## Installing Syncfusion  Sidebar Package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-navigations`](https://www.npmjs.com/package/@syncfusion/ej2-angular-navigations/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-navigations --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-navigations@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-navigations/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-navigations@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-navigations:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Styles

To render the Sidebar component, need to import Sidebar and its dependent component's styles as given below in `app.component.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-navigations/styles/material.css';
```

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Adding Sidebar module

After installing the package, the sidebar component module is available to configure into your application from installed syncfusion package.

Refer to the following snippet to import the sidebar module in `app.module.ts` from the `@syncfusion/ej2-angular-navigations`.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Imported syncfusion sidebar module from navigations package
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Registering EJ2 Sidebar Module
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Adding Syncfusion component

Add the sidebar component by using `<ejs-sidebar>` selector in `template` section of the `app.component.ts` file.

Refer the sidebar component snippet in `app.component.ts` as follows.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <ejs-sidebar id="default-sidebar" >
                <div class="title"> Sidebar content</div>
              </ejs-sidebar>
              <div>
                <div class="title">Main content</div>
                <div class="sub-title">
                    Content goes here.
                </div>
              </div>`,
  styleUrls: ['app/app.component.css']
 })
export class AppComponent {
}

```

## Run the application

Use the npm run start command to run the application in the browser.

```sh
npm start
```

The following samples shows the sidebar component in browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/getting-started-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/sidebar/getting-started-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/getting-started-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/getting-started-cs1" %}

>Note: The ViewChild property need two parameters in **Angular 7+**, use this @ViewChild(ChildDirective,{static: false}) syntax in **Angular 7+**.

## Enable backdrop

Enabling the [`showBackdrop`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#showbackdrop) in the Sidebar component will prevent the main content from user interactions, when it is in expanded state.
Here, DOM elements will not get changed. It only close the main content by covering with black backdrop overlay and focus only the Sidebar in screen. Sidebar can be rendered with specific width by setting [`width`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#width) property.

N> To achieve a proper **backdrop**, we suggest that you create a wrapper parent container for the div block in which you intend to enable the backdrop. Set the class name of this parent container as the **target** for the Sidebar. Alternatively, you can place an empty div container after the target container.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/showBackDrop-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/sidebar/showBackDrop-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/showBackDrop-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/showBackDrop-cs1" %}

## Position

Positioning the Sidebar to the right or left of the main content can be achieved by using the [`position`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#position) property. If the position is not set,the Sidebar will expand from the left to the body element. [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#enablepersistence) will persist the component's state between page reloads. [`change`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#change) event will be triggered when the state(expand/collapse) of the component is changed.

>Note: Add the required Button and Radio Button component style dependency to **app.component.css**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/position-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/sidebar/position-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/position-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/position-cs1" %}

## Animate

Animation transitions can be set while expanding or collapsing the Sidebar using the [`animate`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#animate) property. By default , [`animate`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#animate) property is set to true. [`enableRTL`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#enablertl) will display the sidebar in the right-to-left direction.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/animate-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/sidebar/animate-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/animate-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/animate-cs1" %}

## Close on document click

Sidebar can be closed on document click by setting [`closeOnDocumentClick`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#closeondocumentclick) to true. If this property is not set, the Sidebar will not close on document click since its default value is false. Sidebar can be kept opened during rendering using [`isOpen`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#isopen) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/document-click-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/sidebar/document-click-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/document-click-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/document-click-cs1" %}

## Enable gestures

Expand or collapse the Sidebar while swiping in touch devices using [`enableGestures`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#enablegestures) property. By default, [`enableGestures`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#enablegestures) is set to true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/gestures-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/sidebar/gestures-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/gestures-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/gestures-cs1" %}

> You can refer to our [Angular Sidebar](https://www.syncfusion.com/angular-components/angular-sidebar) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Sidebar example](https://ej2.syncfusion.com/angular/demos/#/material/sidebar/default) that shows how to render the Sidebar in Angular.

## See Also

* [Sidebar with navigation menu](https://ej2.syncfusion.com/angular/demos/#/material/sidebar/sidebar-menu)
* [Sidebar responsive panel](https://ej2.syncfusion.com/angular/demos/#/material/sidebar/responsive-panel)
* [Sidebar with listView](./how-to/initialize-the-sidebar-listview)
* [Initialize sidebar using systemjs](./how-to/initialize-sidebar-using-systemjs)
* [Usecase sample](https://ej2.syncfusion.com/showcase/angular/webmail/)
