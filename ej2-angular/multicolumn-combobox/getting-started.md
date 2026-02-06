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

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion Angular UI Components](../system-requirement).


## Setup angular environment

The easiest way to set up an Angular project is using the [Angular CLI](https://github.com/angular/angular-cli) tool. Follow these steps:

Install the CLI application globally to your machine.

```bash
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using below Angular CLI command.

```bash
ng new syncfusion-angular-multicolumn-combobox
```

Navigate to the created project folder:

```bash
cd syncfusion-angular-multicolumn-combobox
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> MultiColumn ComboBox package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://v17.angular.io/guide/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Use the [ng add](https://angular.dev/reference/schematics) command to automatically configure the MultiColumn ComboBox package:

```bash
ng add @syncfusion/ej2-angular-multicolumn-combobox
```

This command will install the package (v32.1.19), add peer dependencies, and configure the Material theme automatically.

**For Manual Installation:**

```bash
npm install @syncfusion/ej2-angular-multicolumn-combobox --save
```

>Note: Use @syncfusion/ej2-angular-multicolumn-combobox@32.1.19 for Angular 12+ (Ivy format). For legacy support, see the peer dependency requirements above.

## Import Syncfusion CSS styles

When using `ng add @syncfusion/ej2-angular-multicolumn-combobox`, the Material theme is automatically configured in `angular.json`. The MultiColumn ComboBox component styles are included automatically.

If you need to manually add or customize the CSS, import the theme in `src/styles.css`:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-multicolumn-combobox/styles/material.css';
```

>If you want to use combined component styles, please use our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

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