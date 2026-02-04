---
layout: post
title: Getting started with Angular MultiSelect component | Syncfusion
description: Learn how to get started with the Syncfusion Angular MultiSelect component, including setup, installation, data binding, and basic configuration.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular MultiSelect component

This guide demonstrates how to set up and configure the Syncfusion Angular MultiSelect component, from initial installation through enabling core features like data binding and popup customization. The MultiSelect component allows users to select multiple values from a dropdown list, providing an intuitive interface for multi-item selection scenarios such as selecting multiple skills, categories, or preferences.

> Note: This guide supports **Angular 19** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

## Dependencies

The following dependencies are required to use the Angular MultiSelect component in your application. Each package provides essential functionality for component operation, styling, and data management.

```javascript
|-- @syncfusion/ej2-angular-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-dropdowns
        |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-notifications
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
```

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion Angular UI Components](../system-requirement).

## Setup Angular environment

Angular provides the easiest way to set up Angular CLI projects using the [Angular CLI](https://github.com/angular/angular-cli) tool.

Install Angular CLI globally on your machine.

```bash
npm install -g @angular/cli
```

> **Angular 19+ Standalone Architecture:** Standalone components are the default in Angular 19 and later. This guide uses the modern standalone architecture. If you need more information about standalone components, refer to the [Standalone Guide](./angular-standalone).

## Create a new application

With Angular CLI installed, execute this command to generate a new application:

```bash
ng new syncfusion-angular-multiselect
```

* This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format.

* By default, Angular CLI creates a CSS style-based application. Use SCSS if required:

```bash
ng new syncfusion-angular-multiselect --style=scss
```

* Navigate to the created project folder:

```bash
cd syncfusion-angular-multiselect
```

> Note: In Angular 19 and below, it uses `app.component.ts`, `app.component.html`, `app.component.css` etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular MultiSelect Component](https://www.syncfusion.com/angular-components/angular-multiselect-dropdown) for demonstration. Add the Angular MultiSelect component with:

```bash
ng add @syncfusion/ej2-angular-dropdowns
```

This command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-dropdowns` package and peer dependencies to your `package.json`.
- Import the MultiSelect component in your application.
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

To stylize only specific Syncfusion<sup style="font-size:70%">&reg;</sup> components, import the necessary styles. For example, to style only the MultiSelect component:

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

## Add MultiSelect component

Modify the template in [src/app/app.ts] file to render the MultiSelect component.
Add the Angular MultiSelect by using `<ejs-multiselect>` selector in **template** section of the app.ts file.

```typescript
import { Component, OnInit } from '@angular/core';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'

@Component({
    imports: [
      MultiSelectModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the MultiSelect component
    template: `<ejs-multiselect></ejs-multiselect>`
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
    }
}
```

## Binding data source

Bind data to the MultiSelect component using the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#datasource) property. The property accepts either an array of JavaScript objects or a [DataManager](https://ej2.syncfusion.com/angular/documentation/multi-select/data-binding/data-binding) instance.

```typescript
import { Component, OnInit} from '@angular/core';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
@Component({
  selector: 'app-root',
  imports: [MultiSelectModule],
  template: `<ejs-multiselect id='multiselectelement' [dataSource]='data'></ejs-multiselect>`,
  standalone: true,
})
export class AppComponent implements OnInit {
  public data: string[] = [];
  ngOnInit(): void {
    this.data = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
    }
}

```

## Running the application

After completing the configuration required to render a basic MultiSelect, run the following command to display the output in your default browser:

```bash
ng serve
```

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/multiselect/getting-started-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/getting-started-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/getting-started-cs12" %}

## Configure the popup list

By default, the width of the popup list automatically adjusts to match the MultiSelect input element's width, and the height automatically adjusts based on the popup list items.

The height and width of the popup list can be customized using the [popupHeight](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#popupheight) and [popupWidth](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#popupwidth) properties.

In the following sample, the popup list's width and height are configured.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/multiselect/getting-started-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/getting-started-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/getting-started-cs13" %}

> You can refer to the [Angular MultiSelect](https://www.syncfusion.com/angular-components/angular-multiselect-dropdown) feature tour page for its groundbreaking feature representations. You can also explore the [Angular MultiSelect example](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/multi-select/default) that shows how to render the MultiSelect component in Angular.