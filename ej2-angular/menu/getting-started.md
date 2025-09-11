---
layout: post
title: Getting started with Angular Menu component | Syncfusion
description:  Checkout and learn about Getting started with Angular Menu component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Menu
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Menu component

This section explains how to create a simple Menu component, a navigational UI element for organizing commands hierarchically in Angular applications, and demonstrates its basic usage with the Menu module.

## Dependencies

The following dependencies are required for the Menu component’s functionality, including rendering, data handling, and popup behavior:

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

Use [Angular CLI](https://github.com/angular/angular-cli) to set up your Angular applications. To install Angular CLI, use the following command:

```
npm install -g @angular/cli
```

## Create an Angular application

Create a new Angular application using the following Angular CLI command:

```
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Menu Package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. All Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available on npm at [here](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler (Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-navigations`](https://www.npmjs.com/package/@syncfusion/ej2-angular-navigations/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-navigations --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-navigations@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-navigations/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-navigations@ngcc --save
```

To specify the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as follows:

```bash
@syncfusion/ej2-angular-navigations:"20.2.38-ngcc"
```

> Note: If the ngcc tag is not specified during installation, the Ivy Library Package will be installed and may throw a warning.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Menu component

Modify the template in `app.component.ts` to render the Menu component using the `ejs-menu` directive. The `items` property accepts an array of `MenuItemModel` objects, supporting nested `items` for hierarchical submenus, imported from `@syncfusion/ej2-angular-navigations`.

```javascript
import { MenuModule } from '@syncfusion/ej2-angular-navigations'
import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
imports: [ MenuModule],
standalone: true,
selector: 'app-root',
    template: `<!-- To Render Menu. -->
      <ejs-menu [items]='menuItems'></ejs-menu>`
})

export class AppComponent {
    public menuItems: MenuItemModel[] = [
        {
            text: 'File',
            items: [
                { text: 'Open' },
                { text: 'Save' },
                { text: 'Exit' }
            ]
        },
        {
            text: 'Edit',
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }
            ]
        },
        {
            text: 'View',
            items: [
                { text: 'Toolbar' },
                { text: 'Sidebar' }
            ]
        },
        {
            text: 'Tools',
            items: [
                { text: 'Spelling & Grammar' },
                { text: 'Customize' },
                { text: 'Options' }
            ]
        },
        { text: 'Go' },
        { text: 'Help' }
    ];
}
```

## Adding CSS reference

Add the Menu component’s styles to `style.css` as follows:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a basic `Menu` component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/getting-started-cs3" %}

> This example demonstrates the basic rendering of Menu with items support.
For more information about data source support, refer to the [`Data Source Binding`](./data-source-binding-and-custom-menu-items#data-binding) section.

## Group Menu items with separator

The separators are both horizontal and vertical lines used to separate the menu items.
You cannot select the separators, but you can enable separators to group the menu items using the [`separator`](https://ej2.syncfusion.com/angular/documentation/api/menu/menuItemModel/#separator) property.
The `Open` and `Save` sub menu items are grouped using the `separator` property in the following sample.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/getting-started-cs4" %}

> The [`separator`](https://ej2.syncfusion.com/angular/documentation/api/menu/menuItemModel/#separator) property should not be given along with the other fields in the [`MenuItemModel`](https://ej2.syncfusion.com/angular/documentation/api/menu/menuItemModel/).
You can also enable the separator to group **horizontal** menu items.
