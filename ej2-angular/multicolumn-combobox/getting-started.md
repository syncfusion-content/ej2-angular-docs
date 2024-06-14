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

This section explains how to create a simple **MultiColumn ComboBox** component and configure its available functionalities in Angular.

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

## Setup angular environment

Angular provides the easiest way to set angular CLI projects using [`Angular CLI`](https://github.com/angular/angular-cli) tool.

Install the CLI application globally to your machine.

```bash
npm install -g @angular/cli
```

## Create a new application

```bash
ng new syncfusion-angular-multicolumn-combobox
```

By default, it install the CSS style base application. To setup with SCSS, pass --style=scss argument on create project.

Example code snippet.

```bash
ng new syncfusion-angular-multicolumn-combobox --style=scss
```

Navigate to the created project folder.

```bash
cd syncfusion-angular-multicolumn-combobox
```

## Installing Syncfusion MultiColumn ComboBox package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://v17.angular.io/guide/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-multicolumn-combobox`](https://www.npmjs.com/package/@syncfusion/ej2-angular-multicolumn-combobox/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-multicolumn-combobox --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-multicolumn-combobox@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-multicolumn-combobox/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-multicolumn-combobox@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-multicolumn-combobox:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Registering MultiColumn ComboBox module

Import MultiColumn ComboBox module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-multicolumn-combobox`.

```javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the MultiColumn ComboBoxModule for the MultiColumn ComboBox component
import { MultiColumnComboBoxModule } from '@syncfusion/ej2-angular-multicolumn-combobox';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ej2-angular-multicolumn-combobox module into NgModule
  imports:      [ BrowserModule, MultiColumnComboBoxModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion` package folder.
This can be referenced in [src/styles.css] using following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-multicolumn-combobox/styles/material.css';
```

## Adding MultiColumn ComboBox component

Modify the template in [src/app/app.component.ts] file to render the Angular ComboBox component. Add the Angular MultiColumn ComboBox by using `<ejs-multicolumncombobox>` selector in `template` section of the app.component.ts file.

```javascript
import { Component } from '@angular/core';
import { MultiColumnComboBoxComponent } from '@syncfusion/ej2-angular-multicolumn-combobox';

@Component({
  selector: 'app-root',
  // specifies the template string for the MultiColumn ComboBox component
  template: `<ejs-multicolumncombobox id='multicolumn'></ejs-multicolumncombobox>`
})
export class AppComponent  { }
```

## Binding data source with fields and columns

After initializing, populate the MultiColumn ComboBox with data by using the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#datasource) property, to map the data for each specified columns use the `<e-column>` selector and the [fields](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#fields) property to map the data fields from the dataSource.

```typescript
import { Component } from '@angular/core';
import { MultiColumnComboBoxComponent } from '@syncfusion/ej2-angular-multicolumn-combobox';

@Component({
    selector: 'app-root',
    // specifies the template string for the MultiColumn ComboBox component
    template: `<ejs-multicolumncombobox id='multicolumn' [dataSource]='employeeData' [fields]='fields'>
                  <e-columns>
                    <e-column field='EmpID' header='Employee ID' width='70'></e-column>
                    <e-column field='Name' header='Name' width='80'></e-column>
                    <e-column field='Designation' header='Designation' width='60'></e-column>
                    <e-column field='Country' header='Country' width='80'></e-column>
                  </e-columns>
               </ejs-multicolumncombobox>`
})
export class AppComponent {
    constructor() {
    }
    // define the array of object data
    public employeeData: Object[] = [ 
      { "EmpID": 1001, "Name": "Andrew Fuller", "Designation": "Team Lead", "Country": "England" },
      { "EmpID": 1002, "Name": "Robert", "Designation": "Developer", "Country": "USA" },
      { "EmpID": 1003, "Name": "John", "Designation": "Tester", "Country": "Germany" },
      { "EmpID": 1004, "Name": "Robert King", "Designation": "Product Manager", "Country": "India" },
      { "EmpID": 1005, "Name": "Steven Buchanan", "Designation": "Developer", "Country": "Italy" },
      { "EmpID": 1006, "Name": "Jane Smith", "Designation": "Developer", "Country": "Europe" },
      { "EmpID": 1007, "Name": "James Brown", "Designation": "Developer", "Country": "Australia" },
      { "EmpID": 1008, "Name": "Laura Callahan", "Designation": "Developer", "Country": "Africa" },
      { "EmpID": 1009, "Name": "Mario Pontes", "Designation": "Developer", "Country": "Russia" }, 
    ];
    // maps the appropriate column to fields property
    public fields: Object = { text: 'Name', value: 'EmpID' };
}
```

## Running the application

After completing the configuration required to render a basic MultiColumn ComboBox, run the following command to display the output in your default browser.

```
ng serve
```

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/getting-started-cs1" %}

## Configure the popup list

By default, the width of the popup list automatically adjusts according to the MultiColumn ComboBox input element's width, and the height of the popup list has '300px'.

The height and width of the popup list can also be customized using the [popupHeight](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#popupheight) and [popupWidth](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#popupwidth) properties respectively.

In the following sample, popup list's width and height are configured.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/getting-started-cs2" %}