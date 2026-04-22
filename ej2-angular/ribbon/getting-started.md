---
layout: post
title: Getting started with Angular Ribbon component | Syncfusion
description:  Learn here all about Getting started with Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Ribbon Component

This section explains how to create a simple Ribbon, and demonstrate the basic usage of the Ribbon module in an Angular environment.

## Dependencies

The list of dependencies required to use the Ribbon module in your application is given below:

```javascript
|-- @syncfusion/ej2-angular-ribbon
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-ribbon
```

## Setup Angular environment

You can use the [Angular CLI](https://github.com/angular/angular-cli) to set up your Angular applications. To install the Angular CLI globally, use the following command.

```
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using the Angular CLI command below.

```
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Ribbon Package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy Library Distribution Package

Starting with version `20.2.36`, Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages are distributed in the Ivy library format to support Angular's modern [Ivy](https://docs.angular.lat/guide/ivy) rendering engine. These packages are compatible with Angular version 12 and higher.

Install the [@syncfusion/ej2-angular-ribbon](https://www.npmjs.com/package/@syncfusion/ej2-angular-ribbon/v/21.1.35) package using the following command.

```bash
npm install @syncfusion/ej2-angular-ribbon --save
```

### Angular Compatibility Compiled (ngcc) Package

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [@syncfusion/ej2-angular-ribbon@ngcc](https://www.npmjs.com/package/@syncfusion/ej2-angular-ribbon/v/21.1.35-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-ribbon@ngcc --save
```

To specify the `ngcc` package in the `package.json` file, add the `-ngcc` suffix to the package version.

```bash
@syncfusion/ej2-angular-ribbon:"21.1.35-ngcc"
```

> **Note**: If you are using an Angular version below 12 and do not specify the `-ngcc` tag during installation, the Ivy package will be installed by default, which will result in a warning.

## Adding CSS Reference

Import the required CSS theme files for the Ribbon component and its dependencies into your `styles.css` file.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css'; 
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';    
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import "../node_modules/@syncfusion/ej2-ribbon/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-angular-ribbon/styles/tailwind3.css";
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Ribbon component

Modify the template in `app.component.ts` file with `ejs-ribbon` to render the Ribbon component.

```javascript

import { Component } from "@angular/core";
import { RibbonModule } from '@syncfusion/ej2-angular-ribbon';

@Component({
imports: [ RibbonModule ],
standalone: true,
selector: "app-root",
template: `<!-- To Render Ribbon. -->
  <ejs-ribbon id="ribbon">
    <e-ribbon-tabs>
        <e-ribbon-tab header="Home"></e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>`,
})
export class AppComponent { }

```

## Adding Ribbon Tab

In Ribbon, the options are arranged in tabs for easy access. You can use the `<e-ribbon-tab>` selector to define the ribbon tab like below.

```javascript

import { Component } from "@angular/core";
import { RibbonModule } from '@syncfusion/ej2-angular-ribbon';

@Component({
imports: [ RibbonModule ],
standalone: true,
selector: "app-root",
template: `<!-- To Render Ribbon. -->
  <ejs-ribbon id="ribbon">
    <e-ribbon-tabs>
        <e-ribbon-tab header="Home"></e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>`,
})
export class AppComponent { }

```

## Adding Ribbon Group

To define a ribbon group under each tab, you can use the `<e-ribbon-group>` selector like below. The `orientation` property of ribbon group defines whether the collection of items will be rendered column-wise or row-wise.

```javascript

import { Component } from "@angular/core";
import { RibbonModule } from '@syncfusion/ej2-angular-ribbon';

@Component({
imports: [ RibbonModule ],
standalone: true,
selector: "app-root",
template: `<!-- To Render Ribbon. -->
  <ejs-ribbon id="ribbon">
    <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
            <e-ribbon-groups>
                <e-ribbon-group header="Clipboard" orientation="Row"></e-ribbon-group>
            </e-ribbon-groups>
        </e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>`
})

```

## Adding Ribbon Item

You can use the `<e-ribbon-collection>` selector to define each ribbon collection that contains one or more items. To define each ribbon item, you can use the `<e-ribbon-item>` selector and the `type` property to specify the type of component to be rendered, like a button, a drop-down button, a combo box, and more.

```javascript

import { Component } from "@angular/core";
import { RibbonModule } from '@syncfusion/ej2-angular-ribbon';
import { RibbonSplitButtonSettingsModel, RibbonButtonSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
imports: [ RibbonModule ],
standalone: true,
selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard" orientation="Row">
                        <e-ribbon-collections>
                            <e-ribbon-collection id="paste-collection">
                                <e-ribbon-items>
                                    <e-ribbon-item type="SplitButton" [splitButtonSettings]="pasteSettings"></e-ribbon-item>
                                </e-ribbon-items>
                            </e-ribbon-collection>
                            <e-ribbon-collection id="cutcopy-collection">
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" [buttonSettings]="cutButton">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" [buttonSettings]="copyButton">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                            </e-ribbon-collection>
                        </e-ribbon-collections>
                    </e-ribbon-group>
                </e-ribbon-groups>
            </e-ribbon-tab>
        </e-ribbon-tabs>
    </ejs-ribbon>`,
})
export class AppComponent {
  public pasteSettings: RibbonSplitButtonSettingsModel = { iconCss: "e-icons e-paste", items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }], content: "Paste" };
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
}

```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example illustrates how tabs, groups, collections, and items are used in a ribbon component to form the ribbon layout.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/getting-started-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/ribbon/getting-started-cs1/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/getting-started-cs1" %}