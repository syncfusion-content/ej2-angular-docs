---
layout: post
title: Getting started with Angular DropDownList component | Syncfusion
description: Learn how to get started with the Syncfusion Angular DropDownList component, including setup, installation, data binding, and basic configuration.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular DropDownList component

This guide demonstrates how to set up and configure the Syncfusion Angular DropDownList component, from initial installation through enabling core features like data binding and popup customization. The DropDownList component allows users to select a single value from a predefined list, providing an efficient interface for single-item selection scenarios.

> Note: This guide supports **Angular 19** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

## Dependencies

The following dependencies are required to use the DropDownList component in your application.

```javascript
|-- @syncfusion/ej2-angular-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-dropdowns
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-notifications
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons

```

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion Angular UI Components](../system-requirement).

## Setup Angular environment

Angular provides the easiest way to set up Angular CLI projects using the [Angular CLI](https://github.com/angular/angular-cli) tool.

To get started quickly with Angular DropDownList component using CLI and Schematics, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=9wdvNqhSnUw" %}


Install the CLI application globally to your machine.

```bash
npm install -g @angular/cli
```

> **Angular 19+ Standalone Architecture:** Standalone components are the default in Angular 19 and later. This guide uses the modern standalone architecture. If you need more information about standalone components, refer to the [Standalone Guide](./angular-standalone).

## Create a new application

With Angular CLI installed, execute this command to generate a new application:

```bash
ng new syncfusion-angular-dropdownlist
```

* This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format.

* By default, Angular CLI creates a CSS style-based application. Use SCSS if required:

```bash
ng new syncfusion-angular-dropdownlist --style=scss
```

Navigate to the created project folder.

```bash
cd syncfusion-angular-dropdownlist
```

> Note: In Angular 18 and below, it uses `app.component.ts`, `app.component.html`, `app.component.css` etc. In Angular 19+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular DropDownList Component](https://www.syncfusion.com/angular-components/angular-dropdown-list) for demonstration. Add the Angular DropDownList component with:

```bash
ng add @syncfusion/ej2-angular-dropdowns
```

This command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-dropdowns` package and peer dependencies to your `package.json`.
- Import the DropDownList component in your application.
- Register the default Syncfusion<sup style="font-size:70%">&reg;</sup> Material theme in `angular.json`.

For more details on version compatibility, refer to the [Version Compatibility](../upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package structures for Angular components:		
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)		
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.		
Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:		
```bash		
ng add @syncfusion/ej2-angular-dropdowns		
```		
For applications not compiled with Ivy, use the `ngcc` tagged packages:		
> The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of IVY compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](../common/troubleshooting/ngcc-compatibility).		
```bash		
npm add @syncfusion/ej2-angular-dropdowns@32.1.19-ngcc		
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component themes can be added in various ways: via CSS or SCSS styles from npm packages, CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio).

The `Material` theme is added to your `styles.css` when you run `ng add` (this happens automatically by default).

To stylize only specific Syncfusion<sup style="font-size:70%">&reg;</sup> components, import the necessary styles. For example, to style only the DropDownList component:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-dropdowns/styles/material.css';
```

> Ensure that the import order aligns with the component's dependency sequence.

For using SCSS styles, refer to [this guide](../common/how-to/sass).

## Add DropDownList component

Modify the template in [src/app/app.ts] file to render the DropDownList component.
Add the Angular DropDownList by using `<ejs-dropdownlist>` selector in **template** section of the app.ts file.

```typescript
import { Component, OnInit } from '@angular/core';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'

@Component({
    imports: [
      DropDownListModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the DropDownList component
    template: `<ejs-dropdownlist></ejs-dropdownlist>`
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
    }
}
```

## Binding data source

Bind data to the DropDownList component using the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#datasource) property. The property accepts either an array of JavaScript objects or a [DataManager](https://ej2.syncfusion.com/angular/documentation/drop-down-list/data-binding/data-binding) instance.

```typescript
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    imports: [DropDownListModule],
    // specifies the template string for the DropDownList component
    template: `<ejs-dropdownlist id='ddlelement' [dataSource]='data'></ejs-dropdownlist>`
})
export class AppComponent implements OnInit {
  public data: string[] = [];
  ngOnInit(): void {
    this.data = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
  }
}
```

## Running the application

Use the following command to run the application in the browser.

```bash
ng serve
```

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs11" %}

## Configure the popup list

By default, the width of the popup list automatically adjusts to match the DropDownList input element's width, and the height defaults to 300px.

The height and width of the popup list can be customized using the [popupHeight](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#popupheight) and [popupWidth](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#popupwidth) properties.

In the following sample, the popup list's width and height are configured.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs12" %}

## Two-way binding

In DropDownList, the `value` property supports two-way binding functionality. The following example demonstrates how to use two-way binding in the DropDownList component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs13" %}

## See also

* [How to bind the data](./data-binding)