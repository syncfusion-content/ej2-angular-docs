---
layout: post
title: Getting started with Angular MultiColumn ComboBox | Syncfusion
description:  Checkout and learn about Getting started with Angular MultiColumn ComboBox component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: MultiColumn ComboBox 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular MultiColumn ComboBox component

This guide demonstrates how to set up and configure the Syncfusion Angular MultiColumn ComboBox component, from initial installation through displaying multi-column data with custom column configurations. The MultiColumn ComboBox allows users to select values from a dropdown list that displays multiple columns of data with header support and customizable column widths.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion Angular UI Components](../system-requirement).

## Dependencies

The following list of dependencies are required to use the Angular ComboBox component in your application.

```javascript
|-- @syncfusion/ej2-angular-multicolumn-combobox
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
      |-- @syncfusion/ej2-buttons
```

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

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> MultiColumn ComboBox package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular MultiColumn ComboBox component](https://www.syncfusion.com/angular-components/angular-multicolumn-combobox) for demonstration. Add the Angular MultiColumn ComboBox component component with:

```bash
ng add @syncfusion/ej2-angular-multicolumn-combobox
```

This command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-multicolumn-combobox` package and peer dependencies to your `package.json`.
- Import the MultiColumn ComboBox component component in your application.
- Register the default Syncfusion<sup style="font-size:70%">&reg;</sup> material theme in `angular.json`.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package structures for Angular components:		
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)		
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.		
Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:		
```bash		
ng add @syncfusion/ej2-angular-multicolumn-combobox
```		
For applications not compiled with Ivy, use the `ngcc` tagged packages:		
> The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of IVY compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility).	
```bash		
npm add @syncfusion/ej2-angular-multicolumn-combobox@32.1.19-ngcc		
```

## Import Syncfusion CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component themes can be added in various ways: via CSS or SCSS styles from npm packages, CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio).

The `Material` theme is added to your `styles.css` when you run `ng add` (this happens automatically by default).

To stylize only specific Syncfusion<sup style="font-size:70%">&reg;</sup> components, import the necessary styles. For example, to style only the MultiColumn ComboBox component:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-angular-multicolumn-combobox/styles/material3.css';
```

> Ensure that the import order aligns with the component's dependency sequence.

For using SCSS styles, refer to [this guide](https://ej2.syncfusion.com/angular/documentation/common/how-to/sass).

## Add MultiColumn ComboBox component

Now, modify the `src/app/app.ts` file to render the MultiColumn ComboBox component using the `<ejs-multicolumncombobox>` selector:

```typescript
import { Component, OnInit } from '@angular/core';
import { MultiColumnComboBoxModule } from '@syncfusion/ej2-angular-multicolumn-combobox';

@Component({
  imports: [MultiColumnComboBoxModule],
  standalone: true,
  selector: 'app-root',
  template: `<!-- Render MultiColumn ComboBox -->
             <ejs-multicolumncombobox id='multicolumn'></ejs-multicolumncombobox>`
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
}
```

## Binding data source with fields and columns

After initializing, populate the MultiColumn ComboBox with data using the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#datasource) property. To map data for each column, use the `<e-column>` selector and the [fields](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#fields) property to map data fields from the dataSource:

```typescript
import { Component, OnInit } from '@angular/core';
import { MultiColumnComboBoxModule } from '@syncfusion/ej2-angular-multicolumn-combobox';

@Component({
  imports: [MultiColumnComboBoxModule],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-multicolumncombobox id='multicolumn' [dataSource]='employeeData' [fields]='fields'>
               <e-columns>
                 <e-column field='EmpID' header='Employee ID' width='70'></e-column>
                 <e-column field='Name' header='Name' width='80'></e-column>
                 <e-column field='Designation' header='Designation' width='60'></e-column>
                 <e-column field='Country' header='Country' width='80'></e-column>
               </e-columns>
             </ejs-multicolumncombobox>`
})
export class AppComponent implements OnInit {
  // Array of employee data
  public employeeData: Object[] = [
    { "EmpID": 1001, "Name": "Andrew Fuller", "Designation": "Team Lead", "Country": "England" },
    { "EmpID": 1002, "Name": "Robert", "Designation": "Developer", "Country": "USA" },
    { "EmpID": 1003, "Name": "John", "Designation": "Tester", "Country": "Germany" },
    { "EmpID": 1004, "Name": "Robert King", "Designation": "Product Manager", "Country": "India" },
    { "EmpID": 1005, "Name": "Steven Buchanan", "Designation": "Developer", "Country": "Italy" },
    { "EmpID": 1006, "Name": "Jane Smith", "Designation": "Developer", "Country": "Europe" },
    { "EmpID": 1007, "Name": "James Brown", "Designation": "Developer", "Country": "Australia" },
    { "EmpID": 1008, "Name": "Laura Callahan", "Designation": "Developer", "Country": "Africa" },
    { "EmpID": 1009, "Name": "Mario Pontes", "Designation": "Developer", "Country": "Russia" }
  ];
  // Maps the data fields to the field property
  public fields: Object = { text: 'Name', value: 'EmpID' };

  ngOnInit(): void {
  }
}
```

## Running the application

After completing the configuration required to render a MultiColumn ComboBox component, run the following command to display the output in your default browser:

```bash
ng serve --open
```

The MultiColumn ComboBox component will be rendered in your browser with the data and columns configured.

The following example illustrates the output in your browser:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/multicolumn-combobox/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/getting-started-cs1" %}

## Configure the popup list

By default, the width of the popup list automatically adjusts according to the MultiColumn ComboBox input element's width, and the height is set to '300px'.

The height and width of the popup list can be customized using the [popupHeight](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#popupheight) and [popupWidth](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#popupwidth) properties respectively.

In the following sample, the popup list's width and height are customized:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/multicolumn-combobox/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/getting-started-cs2" %}