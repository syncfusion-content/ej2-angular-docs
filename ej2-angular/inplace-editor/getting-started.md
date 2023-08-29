---
layout: post
title: Getting started with Angular Inplace editor component | Syncfusion
description:  Checkout and learn about Getting started with Angular Inplace editor component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Inplace editor component

This section explains the steps to create a simple **In-place Editor** component and configure its available functionalities in Angular.

## Getting Started with Angular CLI

The following section explains the steps required to create a simple `angular-cli` application and how to configure `In-place Editor` component.

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

By default it install the CSS style base application. To setup with SCSS, pass --style=SCSS argument on create project.

Example code snippet.

```javascript

  ng new syncfusion-angular-app --style=SCSS

```

Navigate to the created project folder.

```javascript

  cd syncfusion-angular-app

```

## Installing Syncfusion In-place Editor package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-inplace-editor`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inplace-editor/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-inplace-editor --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-inplace-editor@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inplace-editor/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-inplace-editor@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-inplace-editor:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding In-place Editor module

Once you have successfully installed the package, the component modules are ready to configure in your application from the installed location. Syncfusion Angular package provides two different types of ngModules.

Refer to [Ng-Module](https://ej2.syncfusion.com/angular/documentation/common/ng-module/) to learn about `ngModules`.

Refer the following snippet to import the `InPlaceEditorAllModule` in `app.module.ts` from the `@syncfusion/ej2-angular-inplace-editor`.

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Imported syncfusion InPlaceEditorAllModule from ej2-angular-inplace-editor package
import { InPlaceEditorAllModule } from '@syncfusion/ej2-angular-inplace-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Registering EJ2 In-place Editor Module
    InPlaceEditorAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Adding In-place Editor component

Add the In-place Editor component snippet in `app.component.ts` as follows.

```typescript

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ejs-inplaceeditor id="element" type="Text" value="Andrew" [model]="modelObj"></ejs-inplaceeditor>`
})

export class AppComponent {
  public modelObj: Object = { placeholder: 'Enter employee name' };
}

```

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion` package folder. This can be referenced in [src/styles.css] using following code.

```css

      @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
      @import '../node_modules/@syncfusion/ej2-angular-inplace-editor/styles/material.css';

```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

## Running the application

Run the `ng serve` command in command window, it will serve your application and you can open the browser window. Output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/in-place-editor/getting-started-form-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/in-place-editor/getting-started-form-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/getting-started-form-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/getting-started-form-cs1" %}

## Add the In-place Editor with Textbox

By default, the Essential JS2 TextBox component is rendered in **In-place Editor** with [`type`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/inputType/) property sets as Text.

Modify the template in `src/app/app.component.ts` file to render the `ej2-angular-inplace-editor` component.

```javascript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<ejs-inplaceeditor id="element" type="Text" value="Andrew" [model]="modelObj"></ejs-inplaceeditor>`
})

export class AppComponent {
    public modelObj: Object = { placeholder: 'Enter employee name' };
}
```

## Configuring DropDownList

You can render the Essential JS2 DropDownList by changing the [`type`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/inputType/) property as [`DropDownList`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list) and configure its properties and methods using the `model` property.

In the following sample, [`type`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/inputType/) and model values are configured to render the [`DropDownList`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list) component.

```javascript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<ejs-inplaceeditor id="element" type="DropDownList" mode="Inline" [model]="modelObj"></ejs-inplaceeditor>`
})

export class AppComponent {
    public genderData : string[] = ['Male', 'Female'];
    public modelObj: Object = { placeholder: 'Select gender', dataSource: this.genderData };
}
```

## Integrate DatePicker

You can render the Essential JS2 [DatePicker](https://ej2.syncfusion.com/angular/documentation/api/datepicker/) by changing the [`type`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/inputType/) property as [`Date`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/inputType/) and also configure its properties and methods using the [`model`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/#model) property.

```javascript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<ejs-inplaceeditor id="element" type="Date" [value]="value" [model]="modelObj"></ejs-inplaceeditor>`
})

export class AppComponent {
    public modelObj: Object = { showTodayButton: true };
    public value: Date = new Date('04/12/2018');
}
```

Once you have configured Textbox, DatePicker and DropDownList you will get following output as shown in below,

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/in-place-editor/getting-started-form-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/in-place-editor/getting-started-form-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/getting-started-form-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/getting-started-form-cs2" %}

## Two-way binding

In In-place Editor, the `value` property supports two-way binding functionality. The following example demonstrates how to achieve two-way binding, by using property binding to bind the value to the first In-place Editor component and `ngModel` to bind the model data to the second In-place Editor. The value of the In-place Editor will get changed, when there is any change in the property value or model value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/in-place-editor/two-way-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/in-place-editor/two-way-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/two-way-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/two-way-cs1" %}

## Submitting data to the server (save)

You can submit editor value to the server by configuring the [`url`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/#url), [`adaptor`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/adaptorType/) and [`primaryKey`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/#primarykey) property.

| Property   | Usage                                           |
|------------|---------------------------------------------------------|
| **`url`**        | Gets the URL for server submit action.        |
| **`adaptor`**    | Specifies the adaptor type that is used by DataManager to communicate with DataSource.  |
| **`primaryKey`** | Defines the unique primary key of editable field which can be used for saving data in the data-base. |

> The [`primaryKey`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor#primarykey) property is mandatory. If it's not set, edited data are not sent to the server.

## Refresh with modified value

The edited data is submitted to the server and you can see the new values getting reflected in the **In-place Editor**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/in-place-editor/getting-started-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/in-place-editor/getting-started-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/getting-started-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/getting-started-cs1" %}

## See Also

* [Types of rendering the editor](./integration/)