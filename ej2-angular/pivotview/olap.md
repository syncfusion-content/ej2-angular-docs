---
layout: post
title: Olap in Angular Pivot Table component | Syncfusion
description: Learn here all about Olap in Syncfusion Angular Pivot Table component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Olap 
documentation: ug
domainurl: ##DomainURL##
---

# Olap in Angular Pivot Table component

## Getting started

This section explain steps to create a simple **Pivot Table** with OLAP data source in an Angular environment.

### Dependencies

The following list of dependencies are required to use the pivot table component in your application.

```javascript
|-- @syncfusion/ej2-angular-pivotview
    |-- @syncfusion/ej2-pivotview
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-excel-export
        |-- @syncfusion/ej2-file-utils
        |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-pdf-export
        |-- @syncfusion/ej2-file-utils
        |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-charts
        |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-grids
|-- @syncfusion/ej2-angular-base
```

### Setup Angular Environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to setup your Angular application. To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

### Create an Angular Application

Create a new Angular application using below Angular CLI command.

```bash
ng new my-app
```

Now, the application is created in the **my-app** demo folder. Run the following command to navigate to the **my-app** demo folder.

```bash
cd my-app
```

### Adding Syncfusion PivotView package

All the available Essential JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry. To install the pivot table component, use the following command.

```bash
npm install @syncfusion/ej2-angular-pivotview --save
```

> The **--save** will instruct NPM to include the pivot table package inside the `dependencies` section of the `package.json`.

### Registering PivotView Module

Import **PivotViewModule** (aka, PivotTable) into an Angular application in **src/app/app.module.ts** file from the package **@syncfusion/ej2-angular-pivotview**. Then declare **PivotViewModule** in imports section of the NgModule as follows.

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

### Adding CSS reference

Next we need to refer the pivot table and its [dependency](#dependencies) styles into the **[src/styles.css]** file. Those CSS files are available in "../node_modules/@syncfusion" package folders. This can be referenced in **[src/styles.css]** using following code. In this illustration, we have referred **material** theme.

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
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-pivotview/styles/material.css';
```

> You can also refer other themes like bootstrap, fabric, high-contrast etc. To know about individual component CSS, please refer [here](../../appearance/theme).

### Add pivot table component

Next we need to add the template in **[src/app/app.component.ts]** file to initialize the pivot table component. Add the Angular pivot table by using `<ejs-pivotview>` selector in **template** section of the **app.component.ts** file.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview></ejs-pivotview>`
})
export class AppComponent {
}

```

After initialization, add the the following code in **[src/app/app.component.ts]** file to populate pivot table with a sample OLAP data source. Refer [here](#data-binding) to know the more details about OLAP data binding.

```typescript
import { Component, OnInit } from '@angular/core';
import { IDataOptions } from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-root',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public dataSourceSettings: IDataOptions;

    ngOnInit(): void {

        this.dataSourceSettings = {
            catalog: 'Adventure Works DW 2008 SE',
            cube: 'Adventure Works',
            providerType: 'SSAS',
            enableSorting: true,
            url: 'https://bi.syncfusion.com/olap/msmdpump.dll',
            localeIdentifier: 1033
        };
    }
}

```

### Adding OLAP cube elements to row, column, value and filter axes

Now that pivot table is initialized and assigned with sample OLAP data source, will further move to showcase the component by organizing appropriate [OLAP cube elements](#olap-cube-elements) in [`rows`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#rows), [`columns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#columns), [`values`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#values) and [`filters`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#filters) axes.

In [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#datasourcesettings) property, four major axes [`rows`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#rows), [`columns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#columns), [`values`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#values) and [`filters`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#filters) plays a vital role in defining and organizing [OLAP cube elements](#olap-cube-elements) from the bound data source, to render the entire pivot table component in a desired format.

[`rows`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#rows) – Collection of [OLAP cube elements](#olap-cube-elements) (such as Hierarchies, NamedSet, Calculated Members etc.,) that needs to be displayed in row axis of the pivot table.

[`columns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#columns) – Collection of [OLAP cube elements](#olap-cube-elements) (such as Hierarchies, NamedSet, Calculated Members etc.,) that needs to be displayed in column axis of the pivot table.

[`values`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#values) – Collection of [OLAP cube elements](#olap-cube-elements) (such as Measures, Calculated Measures) that needs to be displayed as aggregated numeric values in the pivot table.

[`filters`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#filters) - Collection of [OLAP cube elements](#olap-cube-elements) (such as Hierarchies and Calculated Members) that would act as master filter over the data bound in row, column and value axes of the pivot table.

In-order to define each [OLAP cube element](#olap-cube-elements) in the respective axis, the following basic properties should be set.

* [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldOptions/#name): It allows to set the unique name of the hierarchies, named set, measures, calculated members etc., from the bound OLAP data source. It’s casing should match exactly like in the data source and if not set properly, the pivot table will be rendered as empty.
* [`caption`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldOptions/#caption): It allows to set the caption, which is the alias name of the unique name that needs to be displayed in the pivot table. If not provided, unique name will be displayed.

In this sample, "Product Categories" is added in column, "Customer Geography" in row, and "Customer Count" and "Internet Sales Amount" in value axes respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs189/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs189/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs189/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs189" %}

### Applying formatting to a value field

Formatting defines a way in which values should be displayed. For example, format **"C"** denotes the values should be displayed in currency pattern. To do so, define the [`formatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatSettings/#formatsettings) property with its [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatSettings/#name) and [`format`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatSettings/#format) properties and add it to [`formatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatSettings/#formatsettings). In this sample, the [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatSettings/#name) property is set as **[Measures].[Internet Sales Amount]**, a field from value section and its format is set as currency. Likewise, we can set format for other value fields as well and add it to [`formatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatSettings/#formatsettings).

> Only fields from value section, which is in the form of numeric data values are applicable for formatting.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs190/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs190/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs190/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs190" %}

### Enable grouping bar

The Grouping Bar feature automatically populates [OLAP cube elements](#olap-cube-elements) from the bound data source and allows end users to drag [OLAP cube elements](#olap-cube-elements) between different axes such as [`rows`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#rows), [`columns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#columns), [`values`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#values) and [`filters`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#filters), and change pivot view at runtime. Sorting, filtering and removing of elements is also possible. It can be enabled by setting the [`showGroupingBar`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotViewModel/#showgroupingbar) property to **true** and by injecting the **GroupingBarService** module as follows.

> If the **GroupingBarService** module is not injected, the grouping bar will not be rendered with the pivot table component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs191/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs191/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs191/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs191" %}

### Enable pivot field list

The component provides a built-in Field List similar to Microsoft Excel. It allows you to add or remove [OLAP cube elements](#olap-cube-elements) and also rearrange the [OLAP cube elements](#olap-cube-elements) between different axes, including [`rows`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#rows), [`columns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#columns), [`values`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#values) and [`filters`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#filters) along with filter and sort options dynamically at runtime. It can be enabled by setting the [`showFieldList`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotViewModel/#showfieldlist) property to **true** and by injecting the **FieldListService** module as follows.

> If the **FieldListService** module is not injected, the Field List will not be rendered with the pivot table component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs192/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs192/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs192/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs192" %}

### Exploring filter axis

The filter axis contains collection of [OLAP cube elements](#olap-cube-elements) such as hierarchies and calculated members that would act as master filter over the data bound in [`rows`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#rows), [`columns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#columns) and [`values`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#values) axes of the pivot table. The [OLAP cube elements](#olap-cube-elements) along with filter members could be set to filter axis either through report via code behind or by dragging and dropping [OLAP cube elements](#olap-cube-elements) from other axes to filter axis via grouping bar or field list at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs193/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs193/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs193/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs193" %}

### Calculated field

The calculated field allows user to insert or add a new calculated field based on the available [OLAP cube elements](#olap-cube-elements) from the bound data source. Calculated fields are nothing but customized dimensions or measures that are newly created based on the user-defined expression.

The two types of calculated fields are as follows:

* **Calculated Measure** – Creates a new measure through user-defined expression.
* **Calculated Dimension** – Creates a new dimension through user-defined expression.

It can be customized using the [`calculatedFieldsSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/calculatedFieldSettings/#calculatedfieldsettings) property through code behind. The setting required for calculate field feature at code behind are:
* [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/calculatedFieldSettings/#name): It allows to set the unique name for new calculated field.
* [`formula`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/calculatedFieldSettings/#formula): It allows to set the user-defined expression.
* [`hierarchyUniqueName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/calculatedFieldSettings/#hierarchyuniquename): It allows to specify dimension unique name whose hierarchies alone should be used in the expression. This will be applicable only for calculated dimension.
* [`formatString`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/calculatedFieldSettings/#formatstring): It allows to set the format string for the resultant calculated field.

You need to set [`isCalculatedField`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldOptions/#iscalculatedfield) property to true, while adding calculated fields to respective axis through code behind.

Also calculated fields can be added at run time through the built-in dialog. The dialog can be enabled by setting the [`allowCalculatedField`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotViewModel/#allowcalculatedfield) property to **true** and by injecting the **CalculatedFieldService** module as follows. You will see a button enabled in the Field List UI automatically to invoke the calculated field dialog and perform necessary operation.

> If the **CalculatedFieldService** module is not injected, the calculated field dialog will not be rendered with the pivot table component. Moreover calculated measure can be added only in value axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs194/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs194/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs194/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs194" %}

Users can add a calculated field at runtime through the built-in dialog by using the following steps.

**Step 1:** Click the "CALCULATED FIELD" button in the field list dialog positioned at the top right corner. The calculated field dialog will be opened now. Enter the name of the calculated field to be created.
<br/>
<br/>
![output](images/olap_calc_button.png "Enabling calculated field in field list UI")
<br/>
<br/>
![output](images/calculatedfield-name.png "Enabling calculated field in field list UI")
<br/>
<br/>
**Step 2:** Frame the expression by dragging and dropping the fields from the tree view on the left side of the dialog using simple arithmetic operators. **Example:** "IIF([Measures].[Internet Sales Amount]^0.5 > 100, [Measures].[Internet Sales Amount]*100, [Measures].[Internet Sales Amount]/100)". Please refer here to learn more about the supported [`operators`](https://docs.microsoft.com/en-us/sql/mdx/operators-mdx-syntax?view=sql-server-ver15) and [`functions`](https://docs.microsoft.com/en-us/sql/mdx/functions-mdx-syntax?view=sql-server-ver15) to frame the expression.
<br/>
<br/>
![output](images/calculatedfield-drag.png "Enabling calculated field in field list UI")
<br/>
<br/>
**Step 3:** Confirm the type of the field to be created - calculated measure or calculated dimension.
<br/>
<br/>
![output](images/calculatedfield-type.png "Enabling calculated field in field list UI")
<br/>
<br/>
**Step 4:** Choose the parent hierarchy of the calculated field. NOTE: It is only applicable to the calculated dimension.
<br/>
<br/>
![output](images/calculatedfield-hierarchy.png "Enabling calculated field in field list UI")
<br/>
<br/>
**Step 5:** Then select the format string from the drop-down list and finally click "OK".
<br/>
<br/>
![output](images/calculatedfield-format-string.png "Creating new calculated field through dialog")
<br/>
<br/>
![output](images/olap_calc_grid.png "New calculated field 'Order on Discount' added in pivot table")
<br/>
<br/>

#### Format String

Allows you to specify the required format string while creating new calculated field. Supported format strings are:

* **Standard** - Denotes the numeric type.
* **Currency** - Denotes the currency type.
* **Percent** - Denotes the percentage type.
* **Custom** - Denotes the custom format. For example: "###0.##0#". This shows the value "9584.3" as "9584.300."

By default, **Standard** will be selected from the drop down list.

![output](images/calculatedfield-fomat.png "Calculated field format string")

#### Renaming the existing calculated field

Existing calculated field can be renamed only through the UI at runtime. To do so, open the calculated field dialog, click the target field. User can now see the existing name getting displayed in the text box at the top of the dialog. Now, change the name based on user requirement and click "OK".

<!-- markdownlint-disable MD012 -->
![output](images/before-edit-olap.png "Editing the calculated field")
<br/>
<br/>
![output](images/after-edit-olap.png "Renaming the calculated field")

#### Editing the existing calculated field formula

Existing calculated field formula can be edited only through the UI at runtime. To do so, open the calculated field dialog, click the target field. User can now see the existing expression getting displayed in a "Expression" section. Now, change the expression based on user requirement and click "OK".

![output](images/before-edit-olap.png "Editing the calculated field")
<br/>
<br/>
![output](images/after-change-olap.png "Editing the calculated field formula")

#### Reusing the existing formula in a new calculate field

While creating a new calculated field, if user wants to the add the formula of an existing calculated field, it can be done easily. To do so, simply drag-and-drop the existing calculated field to the "Expression" section.

![output](images/before-edit-olap.png "Dragging the existing calculated field")
<br/>
<br/>
![output](images/while-drag-olap.png "Drag field to formula")
<br/>
<br/>
![output](images/after-drag-olap.png "Reusing the existing calculated field formula")

#### Modifying the existing format string

Existing calculated field's format string can be modified only through the UI at runtime. To do so, open the calculated field dialog and click the target calculated field. User can now see the format string for the existing calculated field getting displayed in a drop-down list. Change the format string based on the requirement and finally click "OK".

![output](images/before-edit-olap.png "Editing the calculated field")
<br/>
<br/>
![output](images/after-modify-olap.png "Editing the calculated field formula")

#### Clearing the changes while editing the calculated field

Previous changes can be cleared by using the "Clear" option while performing operations such as creating and editing the calculated field. To do so, click the "Clear" button in the bottom left corner of the dialog.

![output](images/clear-edit-olap.png "Editing the calculated field")

### Virtual Scrolling

Allows large amounts of data to be loaded without any performance degradation by rendering rows and columns in relation to the current viewport. Rest of the data will be brought into the viewport dynamically based on vertical or horizontal scroll position. This feature can be enabled by setting the [`enableVirtualization`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#enablevirtualization) property to **true**.

To use the virtual scrolling feature, inject the `VirtualScroll` module into the pivot table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs195/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs195/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs195/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs195" %}

#### Limitations for virtual scrolling

* In virtual scrolling, the [columnWidth](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#columnwidth) property in [gridSettings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings) should be in pixels, and percentage values are not accepted.
* Resizing columns or setting width to individual columns affects the calculation used to pick the correct page on scrolling.
* When using OLAP data, subtotals and grand totals are only displayed when measures are bound at the last position in the [rows](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#rows) or [`columns](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#columns) axis. Otherwise, the data from the pivot table will be shown without summary totals.
* When the pivot table's width and height are large, the loading data count in the current, previous, and next viewports (pages) will also increase, affecting performance.

### Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

```sh
ng serve --open
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs196/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs196/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs196/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs196" %}

## Data Binding

To bind OLAP datasource to the pivot table, you need to specify following properties under [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#datasourcesettings) option.

| Properties|Description |
|-----|-----|
| [`cube`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#cube "cube")| Points the respective cube name from OLAP database.|
| [`providerType`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#providertype "providerType")| Points the provider type for pivot table to identify the type of data source.|
| [`url`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#url "url")| Contains the cube URL for establishing the connection (online).|
| [`catalog`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#catalog "catalog")| Contains the database name (catalog name) to fetch the data.|

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs197/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs197/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs197/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs197" %}

### Fields

#### Measures in row axis

By default, the measures are plotted in column axis. To plot those measures in row axis, place the **Measures** button in the row axis as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs198/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs198/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs198/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs198" %}

#### Measures in different position

You can place measures in different position in row or column axis either thorough code behind or UI. In this sample, **measures** placed before the dimension in the column axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs199/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs199/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs199/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs199" %}

### Named set

Named set is a multidimensional expression (MDX) that returns a set of dimension members, which can be created by combining the cube data, arithmetic operators, numbers, and functions.

You can bind the named sets in the pivot table by setting it's unique name in the [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldOptions/#name) property either in row or column axis and [`isNamedSet`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldOptions/#isnamedset) boolean property to **true**. In this sample, we have added "Core Product Group" named set in the column axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs200/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs200/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs200/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs200" %}

### Configuring authentication

Users can configure basic authentication information to access the OLAP cube using the [`authentication`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#authentication) property. The settings required to configure are as follows:

* [`userName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/authenticationModel/#username): It allows the user to set a username that recognizes the basic authentication of the IIS.
* [`password`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/authenticationModel/#password): It allows to set the appropriate password.

> If the user does not configure the authentication, a default popup will appear in the browser to get the authentication information.

```typescript
import { Component } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, FieldListService } from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-container',
  providers: [FieldListService],
  // specifies the template string for the pivot table component
  template: `<div><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width showFieldList='true'></ejs-pivotview></div>`
})

export class AppComponent {
    public dataSourceSettings: IDataOptions;
    ngOnInit(): void {
        this.dataSourceSettings = {
            catalog: 'Adventure Works DW 2008 SE',
            cube: 'Adventure Works',
            providerType: 'SSAS',
            enableSorting: true,
            url: 'https://bi.syncfusion.com/olap/msmdpump.dll',
            localeIdentifier: 1033,
            rows: [
                { name: '[Customer].[Customer Geography]', caption: 'Customer Geography' },
            ],
            columns: [
                { name: '[Product].[Product Categories]', caption: 'Product Categories' },
                { name: '[Measures]', caption: 'Measures' },
            ],
            values: [
                { name: '[Measures].[Customer Count]', caption: 'Customer Count' },
                { name: '[Measures].[Internet Sales Amount]', caption: 'Internet Sales Amount' }
            ],
            filters: [
                { name: '[Date].[Fiscal]', caption: 'Date Fiscal' },
            ],
            filterSettings: [
                {
                    name: '[Date].[Fiscal]', items: ['[Date].[Fiscal].[Fiscal Quarter].&[2002]&[4]',
                        '[Date].[Fiscal].[Fiscal Year].&[2005]'],
                    levelCount: 3
                }
            ],
            authentication: {
                userName: 'username',
                password: 'password'
            }
        };
        this.width = "100%";
    }
 }
```

### Roles

SQL Server Analysis Services uses [`roles`](https://learn.microsoft.com/en-us/analysis-services/multidimensional-models/roles-and-permissions-analysis-services?view=asallproducts-allversions) to limit data access within a cube. Each role defines a set of permissions that can be granted to a single user or groups of users. It is used to manage security by limiting access to sensitive data and determining who has access to and can change the cube. It can be configured using the [`roles`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#roles) property in [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#datasourcesettings).

> The [`roles`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#roles) property can be used to specify one or more roles to the OLAP cube, separated by commas.

```typescript
import { Component } from '@angular/core';
import { IDataOptions, IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-container',
  providers: [],
  // specifies the template string for the pivot table component
  template: `<div><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width></ejs-pivotview></div>`
})

export class AppComponent {
    public dataSourceSettings: IDataOptions;
    ngOnInit(): void {
        this.dataSourceSettings = {
            catalog: 'Adventure Works DW 2008 SE',
            cube: 'Adventure Works',
            roles: 'Role1',
            providerType: 'SSAS',
            url: 'https://bi.syncfusion.com/olap/msmdpump.dll',
            localeIdentifier: 1033,
            rows: [
                { name: '[Customer].[Customer Geography]', caption: 'Customer Geography' },
            ],
            columns: [
                { name: '[Product].[Product Categories]', caption: 'Product Categories' },
                { name: '[Measures]', caption: 'Measures' },
            ],
            values: [
                { name: '[Measures].[Customer Count]', caption: 'Customer Count' },
                { name: '[Measures].[Internet Sales Amount]', caption: 'Internet Sales Amount' }
            ]
        };
        this.width = "100%";
    }
 }
```

## OLAP Cube: Elements

### Field list

The field list, aka cube dimension browser, is a tree view like structure that organizes the cube elements such as dimensions, hierarchies, measures, etc., from the selected cube into independent logical groups.

#### Types of node in field list

* **Display folder**: A folder that contains a set of similar elements.
* **Measure**: Quantity available for analysis.
* **Dimension**: A name given to the parts of the cube that categorizes data.
* **Attribute Hierarchy**: Level of attributes down the hierarchy.
* **User-defined Hierarchy**: Members of a dimension in a hierarchical structure.
* **Level**: Denotes a specific level in the category.
* **Named Set**: A collection of tuples and members, that can be defined and saved as a part of cube definition for later use.

#### Measure

In a cube, a measure is a set of values that are based on a column in the cube’s fact table and are usually numeric. The measures are the central values of a cube that are analyzed. That is, measures are the numeric data of primary interest to users browsing a cube. You can select measures depend on the types of users request. Some common measures are sales, costs, expenditures, and production count.

#### Dimension

A simple dimension object is composed of basic information such as name, hierarchy, level, and members. You can create a dimension element by specifying its name and providing the hierarchy and level name. The dimension element contains the hierarchical details and information about each included level elements in that hierarchy. A hierarchy can have any number of level elements and the level elements can have any number of members and the member elements can have any number of child members.

#### Hierarchy

Each element of a dimension can be summarized using a hierarchy. The hierarchy is a series of parent-child relationship, where a parent member represents the consolidation of members which are its children. Parent members can be further aggregated as the children of another parent. For example, May 2005 can be summarized into Second Quarter 2005 which in turn would be summarized in the year 2005.

#### Level

Level element is the child of hierarchy element which contains a set of members, each of which has the same rank within a hierarchy.

#### Attribute hierarchy

Attribute hierarchy contains the following levels:

* A leaf level contains distinct attribute member, and each member of the leaf level is known as a leaf member.
* Intermediate levels if the attribute hierarchy is a parent-child hierarchy.
* An optional (all) level contains the aggregated value of the attribute hierarchy's leaf members, with the member of the (all) level also known as the (all) member.

#### User-defined hierarchy

User-defined hierarchy organizes the members of a dimension into hierarchical structure and provides navigation paths in a cube. For example, take a dimension table that supports three attributes such as year, quarter, and month. The year, quarter, and month attributes are used to construct a user-defined hierarchy, named Calendar, in the time dimension that relates to all levels.

#### Differentiating user-defined hierarchy and attribute hierarchy

* User-defined hierarchy contains more than one level whereas attribute hierarchy contains only one level.
* User-defined hierarchy provides the navigation path between the levels taken from attribute hierarchies of the same dimension.
* The attribute hierarchy and the user-defined hierarchy are represented in different ways as shown in the following table.

#### Named set

A named set is a collection of tuples and members, which can be defined and saved as a part of the cube definition. Named set records reside inside the sets folder, which is under a dimension element. These elements can be dragged to [`rows`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#rows) or [`columns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#columns) axis via grouping bar or field list at runtime. To work with a lengthy, complex, or commonly used expression easier, Multidimensional Expressions (MDX) allows you to define a named set.

#### Calculated field

The calculated field allows user to insert or add a new calculated field based on the available OLAP cube elements from the bound data source. Calculated fields are nothing but customized dimensions or measures that are newly created based on the user-defined expression.

The two types of calculated fields are as follows:

* **Calculated Measure** – Creates a new measure through user-defined expression.
* **Calculated Dimension** – Creates a new dimension through user-defined expression.

#### Symbolic representation of the nodes inside field list

| Icon|Name | Node type | Is Draggable |
|-----|-----|-----------|--------------|
| ![Folder icon in JavaScript pivot table control](images/Folder.png)| Display Folder| Display Folder| False|
| ![Measure icon in JavaScript pivot table control](images/Measure.png)|Measure| Measure| False|
| ![Dimension icon in JavaScript pivot table control](images/Dimension.png)| Dimension| Dimension| False|
| ![User-defined hierarchy in JavaScript pivot table control](images/UserDefinedHierarchy.png)| User Defined Hierarchy| Hierarchy| True|
| ![Attribute hierarchy in JavaScript pivot table control](images/AttributeHierarchy.png)| Attribute Hierarchy| Hierarchy| True|
| ![First level icon in JavaScript pivot table control](images/FirstLevel.png)<br>![Second level icon in JavaScript pivot table control](images/SecondLevel.png)<br>![Third level icon in JavaScript pivot table control](images/ThirdLevel.png)| Levels (in order)| Level Element| True|
| ![NamedSet icon in JavaScript pivot client control](images/NamedSet.png)| Named Set| Named Set| True|