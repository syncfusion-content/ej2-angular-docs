---
layout: post
title: Getting started with Angular AutoComplete component | Syncfusion
description: Learn how to get started with the Syncfusion Angular AutoComplete component, including setup, installation, data binding, and basic configuration.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular AutoComplete component

This guide demonstrates how to set up and configure the Syncfusion Angular AutoComplete component, from initial installation through enabling core features like data binding and popup customization. The AutoComplete component provides suggestions as users type, offering filtering and selection capabilities for efficient text input in various scenarios.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

## Dependencies

The following dependencies are required to use the AutoComplete component in your application.

```javascript
|-- @syncfusion/ej2-angular-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-notifications
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-angular-base
```

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion Angular UI Components](../system-requirement).

## Setup Angular environment

Angular provides the easiest way to set up Angular CLI projects using the [Angular CLI](https://github.com/angular/angular-cli) tool.

Install the CLI application globally to your machine.

```bash
npm install -g @angular/cli
```

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about standalone components, refer to the [Standalone Guide](./angular-standalone).

## Create a new application

With Angular CLI installed, execute this command to generate a new application:

```bash
ng new syncfusion-angular-autocomplete
```

* This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format.

* By default, Angular CLI creates a CSS style-based application. Use SCSS if required:

```bash
ng new syncfusion-angular-autocomplete --style=scss
```

Navigate to the created project folder.

```bash
cd syncfusion-angular-autocomplete
```

> Note: In Angular 19 and below, it uses `app.component.ts`, `app.component.html`, `app.component.css` etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular AutoComplete Component](https://www.syncfusion.com/angular-components/angular-autocomplete) for demonstration. Add the Angular AutoComplete component with:

```bash
ng add @syncfusion/ej2-angular-dropdowns
```

This command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-dropdowns` package and peer dependencies to your `package.json`.
- Import the AutoComplete component in your application.
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

To stylize only specific Syncfusion<sup style="font-size:70%">&reg;</sup> components, import the necessary styles. For example, to style only the AutoComplete component:

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

## Add AutoComplete component

Modify the template in [src/app/app.ts] file to render the AutoComplete component.
Add the Angular AutoComplete by using `<ejs-autocomplete>` selector in **template** section of the app.ts file.

```typescript
import { Component, OnInit } from '@angular/core';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns'

@Component({
    imports: [
      AutoCompleteModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AutoComplete component
    template: `<ejs-autocomplete></ejs-autocomplete>`
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
    }
}
```

## Binding data source

Bind data to the AutoComplete component using the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#datasource) property. The property accepts either an array of JavaScript objects or a [DataManager](https://ej2.syncfusion.com/angular/documentation/auto-complete/data-binding/data-binding) instance.

```typescript
import { Component, OnInit } from '@angular/core';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns'

@Component({
    imports: [
      AutoCompleteModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AutoComplete component
    template: `<ejs-autocomplete id='atcelement' [dataSource]='sportsData'></ejs-autocomplete>`
})
export class App implements OnInit {
  public sportsData: string[] = [];
  ngOnInit(): void {
    this.sportsData = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
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
{% include code-snippet/autocomplete/getting-started-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs11" %}

## Configure the popup list

By default, the width of the popup list automatically adjusts to match the AutoComplete input element's width, and the height defaults to 300px.

The height and width of the popup list can be customized using the [popupHeight](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#popupheight) and [popupWidth](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#popupwidth) properties.

In the following sample, the popup list's width and height are configured.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/getting-started-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs12" %}

## Two-way binding

In AutoComplete, the `value` property supports two-way binding functionality. The following example demonstrates how to use two-way binding in the AutoComplete component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/getting-started-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs13" %}

## See Also

* [How to bind the data](./data-binding/)
