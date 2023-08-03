---
layout: post
title: Getting started with Angular Ribbon component | Syncfusion
description:  Learn here all about Getting started with Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Ribbon component

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

## Installing Syncfusion Ribbon Package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [@syncfusion/ej2-angular-ribbon](https://www.npmjs.com/package/@syncfusion/ej2-angular-ribbon/v/21.1.35) package to the application.

```bash
npm install @syncfusion/ej2-angular-ribbon --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [@syncfusion/ej2-angular-ribbon@ngcc](https://www.npmjs.com/package/@syncfusion/ej2-angular-ribbon/v/21.1.35-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-ribbon@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-ribbon:"21.1.35-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Ribbon module

Import Ribbon module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-ribbon`.

```javascript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// Import Syncfusion Ribbon module from ribbon package.
import { RibbonModule, RibbonAllModule } from "@syncfusion/ej2-angular-ribbon";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, RibbonModule, RibbonAllModule], // Registering EJ2 Ribbon Module.
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Adding CSS reference

Add Ribbon component's styles as given below in `style.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css'; 
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';    
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import "../node_modules/@syncfusion/ej2-ribbon/styles/material.css";
@import "../node_modules/@syncfusion/ej2-angular-ribbon/styles/material.css";
```

## Adding Syncfusion Ribbon component

Modify the template in `app.component.ts` file with `ejs-ribbon` to render the Ribbon component.

```javascript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon"></ejs-ribbon>`,
})
export class AppComponent {}
```

## Adding Ribbon Tab

In Ribbon, the options are arranged in tabs for easy access. You can use the `<e-ribbon-tab>` selector to define the ribbon tab like below.

```javascript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
      <e-ribbon-tabs>
          <e-ribbon-tab header="Home"></e-ribbon-tab>
      </e-ribbon-tabs>
    </ejs-ribbon>`,
})
export class AppComponent {}
```

## Adding Ribbon Group

To define a ribbon group under each tab, you can use the `<e-ribbon-group>` selector like below. The `orientation` property of ribbon group defines whether the collection of items will be rendered column-wise or row-wise.

```javascript
import { Component } from "@angular/core";

@Component({
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
    </ejs-ribbon>`,
})
export class AppComponent {}
```

## Adding Ribbon Item

You can use the `<e-ribbon-collection>` selector to define each ribbon collection that contains one or more items. To define each ribbon item, you can use the `<e-ribbon-item>` selector and the `type` property to specify the type of component to be rendered, like a button, a drop-down button, a combo box, and more.

```javascript
import { Component } from "@angular/core";
import { RibbonSplitButtonSettingsModel, RibbonButtonSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
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
{% include code-snippet/ribbon/getting-started-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/getting-started-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/getting-started-cs1/app/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/getting-started-cs1/app/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/ribbon/getting-started-cs1/app/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/getting-started-cs1" %}
