---
layout: post
title: Getting started with Angular Context menu component | Syncfusion
description:  Checkout and learn about Getting started with Angular Context menu component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Context menu component

This section explains how to create a simple ContextMenu, and demonstrate the basic usage of the ContextMenu component in an Angular environment.

## Dependencies

The list of dependencies required to use the Angular ContextMenu component in your application is given below:

```javascript
|-- @syncfusion/ej2-angular-navigations
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-data
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-splitbuttons
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
```

## Setup Angular environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to setup your Angular applications. To install Angular CLI use the following command.

```
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using below Angular CLI command.

```
ng new my-app
cd my-app
```

## Installing Syncfusion ContextMenu Package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
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

## Adding Syncfusion ContextMenu component

Modify the template in `app.component.ts` file with `ejs-contextmenu` to render the ContextMenu component and the option contains `menuItems` and `target` in which ContextMenu will be opened.

```javascript
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations'
import { Component } from '@angular/core';
import { MenuItemModel } from '@syncfusion/ej2-navigations';

@Component({
imports: [
  ContextMenuModule
],
standalone: true,
selector: 'app-root',
template: `<!--target element-->
  <div id="target">Right click / Touch hold to open the ContextMenu</div>
  <!-- To Render ContextMenu. -->
    <ejs-contextmenu id='contextmenu' target='#target' [items]= 'menuItems'></ejs-contextmenu>`
})

export class AppComponent {
  public menuItems: MenuItemModel[] = [
  {
      text: 'Cut'
  },
  {
      text: 'Copy'
  },
  {
      text: 'Paste'
  }];
}
```

## Adding CSS reference

Add ContextMenu component's styles as given below in `style.css`.

```css
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';

/* Context Menu target */
#target {
    border: 1px dashed;
    height: 150px;
    padding: 10px;
    position: relative;
    text-align: justify;
    color: gray;
    user-select: none;
}
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a basic `ContextMenu` component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/getting-started-cs1" %}

## Rendering items with Separator

The Separators are the horizontal lines used to separate the menu items. You `cannot` select the separators. You can enable separators to group the menu items using the [`separator`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/menuItemModel#separator) property. Cut, Copy, and Paste menu items are grouped using `separator` property in the following sample.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/separators-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/separators-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/separators-cs1" %}

> The [`separator`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/menuItemModel#separator) property should not be given along with
the other fields in the [`MenuItem`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/menuItemModel).
