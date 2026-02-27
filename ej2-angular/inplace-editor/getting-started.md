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

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion Angular UI Components](../system-requirement).

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

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> In-place Editor package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular In-place Editor component](https://www.syncfusion.com/angular-components/angular-in-place-editor) for demonstration. Add the Angular In-place Editor component component with:

```bash
ng add @syncfusion/ej2-angular-inplace-editor
```

This command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-inplace-editor` package and peer dependencies to your `package.json`.
- Import the In-place Editor component component in your application.
- Register the default Syncfusion<sup style="font-size:70%">&reg;</sup> material theme in `angular.json`.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package structures for Angular components:		
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)		
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.		
Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:		
```bash		
ng add @syncfusion/ej2-angular-inplace-editor
```		
For applications not compiled with Ivy, use the `ngcc` tagged packages:		
> The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of IVY compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility).	
```bash		
npm add @syncfusion/ej2-angular-inplace-editor@32.1.19-ngcc		
```

## Adding CSS reference

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component themes can be added in various ways: via CSS or SCSS styles from npm packages, CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio).

The `Material` theme is added to your `styles.css` when you run `ng add` (this happens automatically by default).

To stylize only specific Syncfusion<sup style="font-size:70%">&reg;</sup> components, import the necessary styles. For example, to style only the In-place Editor component:

```css

      @import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
      @import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
      @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
      @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';
      @import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
      @import '../node_modules/@syncfusion/ej2-lists/styles/material3.css';
      @import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
      @import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
      @import '../node_modules/@syncfusion/ej2-richtexteditor/styles/material3.css';
      @import '../node_modules/@syncfusion/ej2-calendars/styles/material3.css';
      @import '../node_modules/@syncfusion/ej2-angular-inplace-editor/styles/material3.css';

```

> Ensure that the import order aligns with the component's dependency sequence.

For using SCSS styles, refer to [this guide](https://ej2.syncfusion.com/angular/documentation/common/how-to/sass).

## Adding In-place Editor component

Add the In-place Editor component snippet in `app.ts` as follows.

```typescript

import { InPlaceEditorAllModule } from '@syncfusion/ej2-angular-inplace-editor'
import { Component } from '@angular/core';

@Component({
imports: [
         InPlaceEditorAllModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-inplaceeditor id="element" type="Text" value="Andrew" [model]="modelObj"></ejs-inplaceeditor>`
})

export class AppComponent {
  public modelObj: Object = { placeholder: 'Enter employee name' };
}

```

## Running the application

Run the `ng serve` command in command window, it will serve your application and you can open the browser window. Output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/in-place-editor/getting-started-form-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/getting-started-form-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/getting-started-form-cs1" %}

## Add the In-place Editor with Textbox

By default, the Essential<sup style="font-size:70%">&reg;</sup> JS2 TextBox component is rendered in **In-place Editor** with [`type`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/inputtype) property sets as Text.

Modify the template in `src/app/app.ts` file to render the `ej2-angular-inplace-editor` component.

```javascript

import { InPlaceEditorAllModule } from '@syncfusion/ej2-angular-inplace-editor'
import { Component } from '@angular/core';

@Component({
imports: [
         InPlaceEditorAllModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-inplaceeditor id="element" type="Text" value="Andrew" [model]="modelObj"></ejs-inplaceeditor>`
})

export class AppComponent {
    public modelObj: Object = { placeholder: 'Enter employee name' };
}

```

## Configuring DropDownList

You can render the Essential<sup style="font-size:70%">&reg;</sup> JS2 DropDownList by changing the [`type`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/inputType) property as [`DropDownList`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list) and configure its properties and methods using the `model` property.

In the following sample, [`type`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/inputType) and model values are configured to render the [`DropDownList`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list) component.

```javascript

import { InPlaceEditorAllModule } from '@syncfusion/ej2-angular-inplace-editor'
import { Component } from '@angular/core';

@Component({
imports: [
         InPlaceEditorAllModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-inplaceeditor id="element" type="DropDownList" mode="Inline" [model]="modelObj"></ejs-inplaceeditor>`
})

export class AppComponent {
    public genderData : string[] = ['Male', 'Female'];
    public modelObj: Object = { placeholder: 'Select gender', dataSource: this.genderData };
}

```

## Integrate DatePicker

You can render the Essential<sup style="font-size:70%">&reg;</sup> JS2 [DatePicker](https://ej2.syncfusion.com/angular/documentation/api/datepicker/index-default) by changing the [`type`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/inputType) property as [`Date`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/inputType) and also configure its properties and methods using the [`model`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/index-default#model) property.

```javascript

import { InPlaceEditorAllModule } from '@syncfusion/ej2-angular-inplace-editor'
import { Component } from '@angular/core';

@Component({
imports: [
         InPlaceEditorAllModule
    ],
    standalone: true,
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
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/in-place-editor/getting-started-form-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/getting-started-form-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/getting-started-form-cs2" %}

## Two-way binding

In In-place Editor, the `value` property supports two-way binding functionality. The following example demonstrates how to achieve two-way binding, by using property binding to bind the value to the first In-place Editor component and `ngModel` to bind the model data to the second In-place Editor. The value of the In-place Editor will get changed, when there is any change in the property value or model value.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/in-place-editor/two-way-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/two-way-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/two-way-cs1" %}

## Submitting data to the server (save)

You can submit editor value to the server by configuring the [`url`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/index-default#url), [`adaptor`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/adaptortype) and [`primaryKey`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/index-default#primarykey) property.

| Property   | Usage                                           |
|------------|---------------------------------------------------------|
| **`url`**        | Gets the URL for server submit action.        |
| **`adaptor`**    | Specifies the adaptor type that is used by DataManager to communicate with DataSource.  |
| **`primaryKey`** | Defines the unique primary key of editable field which can be used for saving data in the data-base. |

> The [`primaryKey`](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/index-default#primarykey) property is mandatory. If it's not set, edited data are not sent to the server.

## Refresh with modified value

The edited data is submitted to the server and you can see the new values getting reflected in the **In-place Editor**.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/in-place-editor/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/getting-started-cs1" %}

## See Also

* [Types of rendering the editor](./integration)