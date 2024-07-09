---
layout: post
title: Getting started with Angular Pivotview component | Syncfusion
description:  Checkout and learn about Getting started with Angular Pivotview component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Pivotview component

This section explains you the steps required to create a simple pivot table and demonstrate the basic usage of the [pivot table component](https://www.syncfusion.com/angular-components/angular-pivot-table) in an Angular environment.

To get start quickly with Angular Pivot Table, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=HXTnI9XhVSw" %}

## Setup Angular Environment

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Dependencies

The following list of dependencies are required to use the pivot table component in your application.

```javascript
|-- @syncfusion/ej2-angular-pivotview
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pivotview
        |-- @syncfusion/ej2-buttons
        |-- @syncfusion/ej2-dropdowns
        |-- @syncfusion/ej2-excel-export
          |-- @syncfusion/ej2-file-utils
          |-- @syncfusion/ej2-compression
        |-- @syncfusion/ej2-pdf-export
          |-- @syncfusion/ej2-file-utils
          |-- @syncfusion/ej2-compression
        |-- @syncfusion/ej2-grids
        |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-popups
|-- @syncfusion/ej2-angular-base
```

## Installing Syncfusion PivotView package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-pivotview`](https://www.npmjs.com/package/@syncfusion/ej2-angular-pivotview/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-pivotview --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-pivotview@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-pivotview/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-pivotview@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-pivotview:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Registering PivotView Module

Import PivotView module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-pivotview` [src/app/app.module.ts].

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the PivotViewModule for the pivot table component
import { PivotViewModule } from '@syncfusion/ej2-angular-pivotview';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ej2-angular-pivotview module into NgModule
  imports:      [ BrowserModule, PivotViewModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

## Adding CSS reference

The following CSS files are available in ../node_modules/@syncfusion package folder. This can be referenced in [src/styles.css] using following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import '../node_modules/@syncfusion/ej2-angular-pivotview/styles/material.css';
```

## Browser compatibility

Polyfills are required to use the Pivot Table in Internet Explorer 11 browser. Refer the [documentation](https://ej2.syncfusion.com/angular/documentation/browser/?no-cache=1#browser-support) for more details.

## Initializing pivot table component in an application

Add the template in [src/app/app.component.ts] file to render the pivot table component.
Add the Angular pivot table by using  `<ejs-pivotview>` selector in `template` section of the `app.component.ts` file.

```typescript
import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet } from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-root',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350'></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public pivotData: IDataSet[];
    public dataSourceSettings: IDataOptions;

    ngOnInit(): void {
    }
}

```

## Assigning sample data to the pivot table

The Pivot Table component further needs to be populated with an appropriate data source. For illustration purpose, a collection of objects mentioning the sales details of certain products over a period and region has been prepared. This sample data is assigned to the pivot table component through `dataSource` property under [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/).

```typescript
import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet } from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-root',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public pivotData: IDataSet[];
    public dataSourceSettings: IDataOptions;

    ngOnInit(): void {

        this.pivotData = [
                { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
                { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
                { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
                { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
                { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' }];

        this.dataSourceSettings = {
            dataSource: this.pivotData,
        };
    }
}

```

## Adding fields to row, column, value and filter axes

Now that pivot table is initialized and assigned with sample data, will further move to showcase the component by organizing appropriate fields in row, column, value and filter axes.

In [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/), four major axes - [`rows`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#rows), [`columns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#columns), [`values`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#values) and [`filters`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#filters) plays a vital role in defining and organizing fields from the bound data source, to render the entire pivot table component in a desired format.

[`rows`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#rows) – Collection of fields that needs to be displayed in row axis of the pivot table.

[`columns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#columns) – Collection of fields that needs to be displayed in column axis of the pivot table.

[`values`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#values) – Collection of fields that needs to be displayed as aggregated numeric values in the pivot table.

[`filters`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#filters) - Collection of fields that would act as master filter over the data bound in row, column and value axes of the pivot table.

In-order to define each field in the respective axis, the following basic properties should be set.

* [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldOptionsModel/#name): It allows to set the field name from the bound data source. It’s casing should match exactly like in the data source and if not set properly, the pivot table will not be rendered.
* [`caption`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldOptionsModel/#caption): It allows to set the field caption, which is the alias name of the field that needs to be displayed in the pivot table.
* [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldOptionsModel/#type): It allows to set the summary type of the field. By default, **Sum** is applied.
In this illustration, "Year" and "Quarter" are added in column, "Country" and "Products" in row, and "Sold" and "Amount" in value section respectively.

```typescript
import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet } from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-root',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public pivotData: IDataSet[];
    public dataSourceSettings: IDataOptions;

    ngOnInit(): void {

        this.pivotData = [
                { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
                { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
                { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
                { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
                { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' }];

        this.dataSourceSettings = {
            dataSource: this.pivotData,
            expandAll: false,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }]
        };
    }
}

```

## Applying formatting to a value field

Formatting defines a way in which values should be displayed. For example, format **"C"** denotes the values should be displayed in currency pattern. To do so, define the [`formatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatSettings/) with its [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatSettings/) and [`format`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatSettings/) properties and add it to [`formatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatSettings/). In this illustration, the [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatSettings/) property is set as **Amount**, a field from value section and its format is set as currency. Likewise, we can set format for other value fields as well and add it to [`formatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatSettings/).

> Only fields from value section, which is in the form of numeric data values are applicable for formatting.

```typescript
import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet } from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-root',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public pivotData: IDataSet[];
    public dataSourceSettings: IDataOptions;

    ngOnInit(): void {

        this.pivotData = [
                { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
                { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
                { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
                { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
                { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' }];

        this.dataSourceSettings = {
            dataSource: this.pivotData,
            expandAll: false,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
    }
}

```

## Module Injection

To create pivot table with additional features, inject the required modules. The modules that are available with basic functionality are as follows.

* `GroupingBarService` - Inject this module to access grouping bar feature.
* `FieldListService` - Inject this module to access pivot field list feature.
* `CalculatedFieldService` - Inject this module to access calculated field feature.

These modules should be injected into the `providers` section of root `NgModule` or component class. On doing so, only the injected views will be loaded and displayed along with pivot table.

```typescript
providers: [GroupingBarService]
```

## Enable Field List

The field list allows to add or remove fields and also rearrange the fields between different axes, including column, row, value, and filter along with filter and sort options dynamically at runtime. It can be enabled by setting the [`showFieldList`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#showfieldlist) property to **true** and by injecting the `FieldListService` module as follows. To know more about field list, [`refer`](./field-list) here.

> If the `FieldListService` module is not injected, the Field List will not be rendered with the pivot table component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs105/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs105/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs105/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs105" %}

## Enable Grouping Bar

The grouping bar feature automatically populates fields from the bound data source and allows end users to drag fields between different axes such as columns, rows, values, and filters, and alter pivot table at runtime. It also provides option to sort, filter and remove fields. It can be enabled by setting the [`showGroupingBar`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#showgroupingbar) property to **true** and by injecting the `GroupingBarService` module as follows. To know more about grouping bar, [`refer`](./grouping-bar) here.

> If the `GroupingBarService` module is not injected, the grouping bar will not be rendered with the pivot table component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs106/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs106/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs106/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs106" %}

## Exploring Filter Axis

The filter axis contains collection of fields that would act as master filter over the data bound in row, column and value axes of the pivot table. The fields along with filter members could be set to filter axis either through report via code behind or by dragging and dropping fields from other axes to filter axis via grouping bar or field list at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs107/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs107/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs107/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs107" %}

## Calculated field

The calculated field feature allows user to insert or add a new calculated field based on the available fields from the bound data source using basic arithmetic operators. The calculated field can be included in pivot table using the [`calculatedFieldSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/calculatedFieldSettings/) from code behind. Or else, calculated fields can be added at run time through the built-in dialog by just setting the [`allowCalculatedField`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#allowcalculatedfield) property to **true** in pivot table. You will see a button enabled in the Field List UI automatically to invoke the calculated field dialog and perform necessary operation. To know more about calculated field, [`refer`](./calculated-field) here.

Also calculated fields can be added to the bound datasource at run time through the built-in popup. The popup can be enabled by setting the `allowCalculatedField` property to true and by injecting the `CalculatedFieldService` module as follows.

> If the `CalculatedFieldService` module is not injected, the calculated field popup will not be rendered with the pivot table component. By default, the calculated fields created through code-behind are only added to the field list and calculated field dialog UI. To display the calculated field in the pivot table UI, it must be added to the [`values`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#values) property, as shown in the code below. Additionally, calculated fields can only be added to the value axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs108/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs108/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs108/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs108" %}

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

```sh
ng serve --open
```

To run the application in production mode, set the **buildOptimizer** to **false** in **angular.json** to resolve the angular-cli problem.

```sh
ng serve --prod
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs109/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs109/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs109/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs109" %}

<!-- markdownlint-disable MD028 -->
> In Angular, the `ViewChild` method is used to access the instance of the component. It has following parameters.
> * `selector` - The directive type or the name used for querying.
> * `read` - Read a different token from the queried elements.
> * `static` - `true` to resolve query results before change detection runs, `false` to resolve after change detection. Default is `false`.

> Under Angular 8 version, the `static` parameter is optional. So, follow the below code.
> @ViewChild('pivotview’)

> But the parameter is mandatory in Angular 8 and above versions. So, follow the below code.
> @ViewChild('pivotview', { static: false })

For more information and to access the quick start project, visit: [GitHub Repository](https://github.com/SyncfusionExamples/getting-started-with-the-angular-pivot-table-component)

> You can also explore our [Angular Pivot Table example](https://ej2.syncfusion.com/angular/demos/#/material/pivot-table/default) that shows how to rendering of the pivot table with drill-up and drill-down functionality bound to a relational report.
