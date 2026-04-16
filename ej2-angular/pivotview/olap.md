---
layout: post
title: OLAP in Angular Pivot Table component | Syncfusion
description: Learn here all about Olap in Syncfusion Angular Pivot Table component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Olap 
documentation: ug
domainurl: ##DomainURL##
---

# OLAP in Angular Pivot Table component

## Getting started

This section explain steps to create a simple **Pivot Table** with OLAP data source in an Angular environment.

### Dependencies

Understanding the dependency structure helps you identify the required packages for implementing the Pivot Table component effectively in your Angular application. The Pivot Table component relies on a structured hierarchy of dependencies that provide essential functionality for data processing, user interface elements, and export capabilities.

The following dependency tree shows the required packages for the Angular Pivot Table component:

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

The main package `@syncfusion/ej2-angular-pivotview` serves as the primary Angular wrapper for the Pivot Table component. This package automatically includes all the necessary sub-dependencies shown in the tree structure above. When you install the main package, npm will automatically resolve and install these dependencies, ensuring your Pivot Table component functions properly with all its supported operations, including data binding, user interactions, and export options.

### Setup Angular Environment

Setting up the Angular environment properly ensures smooth development and deployment of your Pivot Table application. To streamline this process, you can use the [`Angular CLI`](https://github.com/angular/angular-cli), which provides a comprehensive toolkit for Angular application development.

Install Angular CLI globally on your system using the following command:

```bash
npm install -g @angular/cli
```

### Create an Angular Application

Creating a new Angular application provides the foundation for integrating the Syncfusion Angular Pivot Table component. With Angular CLI installed, you can now generate a new project using the command below:

```bash
ng new my-app
```

This command will prompt you for a few settings for the new project, such as whether to add Angular routing and which stylesheet format to use.

![Initial setup](images/Initial-setup.webp)

By default, it creates a CSS-based application. Once the project is created, navigate to the project folder to begin working with your new Angular application:

```bash
cd my-app
```

### Adding Syncfusion<sup style="font-size:70%">&reg;</sup> PivotView package

To build interactive PivotTable in Angular, you need to install the Syncfusion<sup style="font-size:70%">&reg;</sup> PivotTable package. Syncfusion packages are available on npm as `@syncfusion` scoped packages. You can find all Syncfusion Angular packages in the npm [`registry`](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two distinct package structures to accommodate different Angular development environments and ensure compatibility across various Angular versions:

1. **Ivy Library Distribution Package** - Modern format for Angular 12 and above
2. **Angular Compatibility Compiler (ngcc) Package** - Legacy support for Angular versions below 12

#### Ivy library distribution package

The Ivy library distribution package represents the modern approach to Angular development, designed specifically for the Angular [`Ivy`](https://docs.angular.lat/guide/ivy) rendering engine. This package format offers improved performance, smaller bundle sizes, and an enhanced development experience for applications built with Angular 12 and later versions.

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (version 20.2.36 and above) utilize the Ivy distribution format to ensure full compatibility with Angular's latest rendering capabilities. To install the Ivy-compatible package, add the [`@syncfusion/ej2-angular-pivotview`](https://www.npmjs.com/package/@syncfusion/ej2-angular-pivotview/v/20.2.38) package to your application using the following command:

```bash
npm install @syncfusion/ej2-angular-pivotview --save
```

> The **--save** will instruct NPM to include the pivot table package inside the `dependencies` section of the `package.json`.

#### Angular compatibility compiled package(ngcc)

For projects using Angular versions below 12, the Angular Compatibility Compiler (ngcc) package ensures seamless integration with the legacy Angular compilation and rendering pipeline. This package maintains full functionality while supporting older Angular environments that have not yet migrated to the Ivy rendering engine.

To install the ngcc-compatible package, add the [`@syncfusion/ej2-angular-pivotview@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-pivotview/v/20.2.38-ngcc) package to your application:

```bash
npm install @syncfusion/ej2-angular-pivotview@ngcc --save
```

When specifying the ngcc package in your `package.json` file, include the `-ngcc` suffix with the package version as shown below:

```json
"@syncfusion/ej2-angular-pivotview": "20.2.38-ngcc"
```

> **Note**: Installing the package without the `-ngcc` suffix will automatically install the Ivy library package, which may generate compatibility warnings in Angular versions below 12.

### Registering PivotView Module

To use the Pivot Table in your Angular application, you need to add the `PivotViewModule` from the `@syncfusion/ej2-angular-pivotview` package to your project. Open the **src/app/app.module.ts** file and import the `PivotViewModule`. Then, include `PivotViewModule` in the imports array of your `@NgModule` decorator, as shown below:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import the PivotViewModule for the Pivot Table component
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

Adding the required CSS files ensures that your Angular Pivot Table component displays with the proper styling and visual elements. These CSS files contain the necessary styles for all dependent components to render correctly.

The following CSS files are available in the `../node_modules/@syncfusion` package folder. Add these CSS imports to your `src/styles.css` file to apply the tailwind3 theme styling:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-angular-pivotview/styles/tailwind3.css';
```

> You can also refer other themes like bootstrap, fabric, high-contrast etc. To know about individual component CSS, please refer [here](../../appearance/theme).

### Add pivot table component

Setting up the Pivot Table component in your Angular application is straightforward and allows you to create powerful data analysis interfaces with minimal configuration. The component integrates seamlessly with Angular's component architecture and provides a robust foundation for data visualization.

To initialize the Pivot Table component, add the following code to your `src/app/app.component.ts` file. This example demonstrates how to set up the basic component structure using the `<ejs-pivotview>` selector:

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

Once the Pivot Table is added, you need to bind it to an OLAP data source. Update the `src/app/app.component.ts` file by defining the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettingsModel/) property and setting it as an input to the Pivot Table component. For more details about OLAP data binding, refer to [this section](#data-binding).

```typescript
import { Component, OnInit } from '@angular/core';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
  selector: 'app-root',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public dataSourceSettings: DataSourceSettingsModel;

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

After initializing the Pivot Table and assigning a sample OLAP data source, you can organize the [OLAP cube elements](#olap-cube-elements) to define how your data is displayed using the [`rows`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#row), [`columns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#columns), [`values`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#values), and [`filters`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#filters) properties in the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#datasourcesettings) option.

You can use these four main axes to arrange OLAP cube elements from your data source and control how the Pivot Table displays the information.

- [`rows`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#row): Add OLAP cube elements such as hierarchies, named sets, or calculated members to show them as rows in the Pivot Table.
- [`columns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#columns): Add OLAP cube elements like hierarchies, named sets, or calculated members to show them as columns in the Pivot Table.
- [`values`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#values): Add OLAP cube elements such as measures or calculated measures to display summarized numeric data in the Pivot Table.
- [`filters`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#filters): Add OLAP cube elements like hierarchies or calculated members here to filter the data shown in the row, column, and value axes.

To specify each [OLAP cube element](#olap-cube-elements) in the required axis, set the following options:

- [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldOptions/#name): Specifies the unique name of the hierarchy, named set, measure, or calculated member from the OLAP data source. The name must be entered exactly as it appears in the data source. If the name is not matched, the Pivot Table will be empty.
- [`caption`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldOptions/#caption): Specifies a caption or display name for the item in the Pivot Table. If a caption is not set, the unique name appears by default.

For example, in the sample below, the element "Product Categories" is assigned to the columns axis, "Customer Geography" is assigned to the rows axis, and both "Customer Count" and "Internet Sales Amount" are set in the values axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs189/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs189/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs189" %}

### Applying formatting to a value field

You can change how values in the Pivot Table are displayed by applying formatting. For example, you can display values as currency by using the **C** format string. To apply formatting, use the [`formatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatSettings/#formatsettings) property within [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings), and define both the [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatSettings/#name) (the value field to format) and the [`format`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatSettings/#format) (the format to apply).

In the following example, the [`formatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettings) property is used to apply the **C0** format to the **[Measures].[Internet Sales Amount]** field. This causes its values to be displayed as currency, showing the currency symbol without any decimal places. You can add formatting for other value fields in a similar way by including them in the [`formatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatSettings/#formatsettings) array.

> Only fields from the value section containing numeric data can be formatted.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs190/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs190/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs190" %}

### Enable grouping bar

The grouping bar lets users easily organize [OLAP cube elements](#olap-cube-elements) from the connected data source. Users can drag these cube elements between different axes, such as [rows](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#row), [columns](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#columns), [values](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#values), and [filters](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#filters), to quickly change how data is shown in the Pivot Table. It also allows sorting, filtering, and removing of elements directly from the grouping bar, making it simple to customize the Pivot Table layout at runtime.

To display the grouping bar, set the [`showGroupingBar`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotViewModel/#showgroupingbar) property to **true** in the [Pivot Table](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default) component, and make sure to inject the **GroupingBarService** module as shown below.

> Note: If the **GroupingBarService** module is not injected, the grouping bar will not appear in the Pivot Table component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs191/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs191/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs191" %}

### Enable pivot field list

The Pivot Table control includes a built-in Field List, similar to the one in Microsoft Excel. This Field List allows users to add or remove [OLAP cube elements](#olap-cube-elements), and to move them between different axes: [rows](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#row), [columns](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#columns), [values](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#values), and [filters](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#filters). Users can also filter and sort these elements as needed, all during runtime.

To display the Field List, set the [`showFieldList`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotViewModel/#showfieldlist) property to **true** on the Pivot Table. It is also necessary to inject the [`FieldListService`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/FieldListService/) module.

> Note: If the [`FieldListService`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/FieldListService/) module is not injected, the Field List will not appear in the Pivot Table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs192/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs192/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs192" %}

### Exploring filter axis

The filter axis in the Pivot Table allows users to control which data is displayed in the [`rows`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#row), [`columns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#columns), and [`values`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#values) axes. It includes various [OLAP cube elements](#olap-cube-elements), such as hierarchies and calculated members. When elements are placed in the filter axis, they act as master filters that refine the data shown in the Pivot Table.

Users can add [OLAP cube elements](#olap-cube-elements) and filter members to the filter axis either by updating the report in code behind or by dragging items from other axes to the filter axis using the grouping bar or field list at runtime. This makes it easy to filter data according to specific requirements directly within the Pivot Table interface.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs193/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs193/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs193" %}

### Calculated field

The calculated field option lets users create a new field in the Pivot Table by using expressions based on existing [OLAP cube elements](#olap-cube-elements) from the connected data source. These calculated fields are new custom dimensions or measures built from an expression defined by the user.

There are two types of calculated fields:

- **Calculated Measure** – Creates a new measure by using a custom expression.
- **Calculated Dimension** – Creates a new dimension by using a custom expression.

You can define calculated fields in your code by using the [`calculatedFieldsSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/calculatedFieldSettings/#calculatedfieldsettings) property in the [dataSourceSettings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings) configuration. The available options for calculated fields are:

- [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/calculatedfieldsettings#name): Sets a unique name for the new calculated field.
- [`formula`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/calculatedfieldsettings#formula): Allows you to set the expression for the calculated field.
- [`hierarchyUniqueName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/calculatedFieldSettings/#hierarchyuniquename): Specifies the dimension’s unique name, so that only hierarchies within that dimension are used in the expression. This option applies only to calculated dimensions.
- [`formatString`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/calculatedFieldSettings/#formatstring): Sets the format for the calculated field result.

When adding calculated fields to an axis in your code, set the [`isCalculatedField`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldOptions/#iscalculatedfield) property to **true**.

You can also add calculated fields at runtime through the built-in dialog. To enable this dialog, set the [`allowCalculatedField`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotViewModel/#allowcalculatedfield) property to **true** and add the **CalculatedFieldService** module. This will display a button in the Field List UI, letting users open the calculated field dialog and create or edit calculated fields as needed.

> If the **CalculatedFieldService** module is not added, the calculated field dialog will not be shown with the Pivot Table component. Also, calculated measures can be added only to the value axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs194/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs194/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs194" %}

Users can add a calculated field at runtime using the built-in dialog by following these steps:

**Step 1:** Click the **CALCULATED FIELD** button in the field list dialog, located at the top right corner. The calculated field dialog appears. Enter the name for the new calculated field in the dialog.
<br/>

![Calculated field button](images/olap_calc_button.webp)  
<br/>

![Enter calculated field name](images/calculatedfield-name.webp)

**Step 2:** Create the expression for your calculated field. To do this, drag and drop fields from the tree view on the left side of the dialog and use simple arithmetic operators.

**For example**: `IIF([Measures].[Internet Sales Amount]^0.5 > 100, [Measures].[Internet Sales Amount]*100, [Measures].[Internet Sales Amount]/100)`  
For more information about supported [`operators`](https://docs.microsoft.com/en-us/sql/mdx/operators-mdx-syntax?view=sql-server-ver15) and [`functions`](https://docs.microsoft.com/en-us/sql/mdx/functions-mdx-syntax?view=sql-server-ver15), see the Microsoft documentation.
<br/>

![Create calculated field expression](images/calculatedfield-drag.webp)

**Step 3:** Select the type for the new field, either calculated measure or calculated dimension.
<br/>

![Select calculated field type](images/calculatedfield-type.webp)

**Step 4:** If you are creating a calculated dimension, select its parent hierarchy from the drop-down list. This step is only required when adding a calculated dimension.
<br/>

![Choose parent hierarchy](images/calculatedfield-hierarchy.webp)

**Step 5:** Select a format string from the drop-down list and then click **OK** to finalize the calculated field.
<br/>

![Choose format string](images/calculatedfield-format-string.webp)
<br/>

![Calculated field added in Pivot Table](images/olap_calc_grid.webp)

#### Format String

When creating a calculated field in the [Pivot Table](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default), you can choose the format for displaying values by selecting a format string. The available options are:

* **Standard** – Displays values as standard numbers.
* **Currency** – Displays values in currency format.
* **Percent** – Displays values as a percentage.
* **Custom** – Allows you to define your own format string. For example, entering "###0.##0#" will show the value "9584.3" as "9584.300".

By default, the **Standard** option is selected in the drop-down list.

This option helps users present calculated field results in the most suitable format for their needs.

![Format string in calculated field](images/calculatedfield-fomat.webp)

#### Renaming the existing calculated field

You can rename any existing calculated field directly through the user interface at runtime. This option allows you to update calculated field names to keep them clear and meaningful as your analysis needs change.

To rename a calculated field:

1. Open the calculated field dialog in the Pivot Table.
2. Click the name of the field you want to rename. The current name will be shown in the text box at the top of the dialog.
3. Enter the new name in the text box.
4. Click **OK** to save the new name.

<!-- markdownlint-disable MD012 -->
![Renaming the calculated field before editing](images/before-edit-olap.webp)
<br/>

![Renaming the calculated field after editing](images/after-edit-olap.webp)

#### Editing an existing calculated field formula

You can edit an existing calculated field formula directly through the user interface at runtime. To do this:

1. Open the calculated field dialog in the Pivot Table.
2. From the list, select the calculated field you want to edit.
3. The current formula for the selected field will appear in the **Expression** section.
4. Modify the formula as needed based on your requirements.
5. Click **OK** to apply and save your changes.

The Pivot Table will automatically update to show the changes in the calculated values.

![Editing the calculated field](images/before-edit-olap.webp)
<br/>

![Editing the calculated field after change](images/after-change-olap.webp)

#### Reusing an existing formula in a new calculated field

This option allows you to easily create a new calculated field in the [Pivot Table](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default) by reusing a formula from an existing calculated field. This saves time and helps keep your calculations consistent.

To reuse an existing formula when working with the OLAP data source:

1. Open the calculated field dialog in the Pivot Table.
2. Find the existing calculated field that contains the formula you want to use again.
3. Drag the existing calculated field from the field list treeview.
4. Drop it into the **Expression** section. The formula from the selected field is then added automatically.
5. If needed, you can adjust the formula further or use it without changes.
6. Click **OK** to add your new calculated field.

![Reusing the calculated field in Pivot Table](images/before-edit-olap.webp)
<br/>
<br/>

![Dragging the existing calculated field](images/while-drag-olap.webp)
<br/>
<br/>

![Calculated field formula reused](images/after-drag-olap.webp)

#### Modifying the existing format string

You can modify the format string of an existing calculated field at runtime through the user interface. To do this:

1. Open the calculated field dialog in the Pivot Table.
2. Click the name of the calculated field you want to edit.
3. The dialog will display the current format string in a drop-down list.
4. Select or enter a new format string based on your requirements.
5. Click **OK** to apply and save your changes.

![Modifying the calculated fields format string](images/before-edit-olap.webp)
<br/>
<br/>

![Modified calculated field output](images/after-modify-olap.webp)

#### Clearing the changes while editing the calculated field

If you make edits while creating or modifying a calculated field, you can easily remove all the current changes by clicking the **Clear** button. This option is available in the bottom left corner of the calculated field dialog. Using the Clear button helps you start over without manually undoing each change, ensuring a smooth editing experience.

![Clearing the changes while editing the calculated field](images/clear-edit-olap.webp)

### Virtual Scrolling

Virtual scrolling helps you view large amounts of data smoothly in the Pivot Table. It loads and displays only the rows and columns currently visible in the viewport. As you scroll vertically or horizontally, new data is brought into view automatically, ensuring good performance even with a large data source.

To enable virtual scrolling, set the [`enableVirtualization`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#enablevirtualization) option to **true**. Also, be sure to inject the [`VirtualScrollService`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#virtualscrollservice) into the Pivot Table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs195/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs195/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs195" %}

#### Limitations for virtual scrolling

- When using virtual scrolling, the [`columnWidth`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#columnwidth) property under [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/) must be set in pixels; percentage values are not supported.
- Resizing columns or setting width to individual columns affects the calculation used to pick the correct page on scrolling.
- With OLAP data, subtotals and grand totals are shown only when measures are placed at the end of the [`rows`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#row) or [`columns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#columns) axes within [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings). If measures appear elsewhere, data will display without summary totals.
- If the width and height of the Pivot Table are set to large values, the amount of data loaded in the current, previous, and next pages increases. This may impact loading performance during scrolling.

### Run the application

Running the Pivot Table application allows you to see your changes and data in real time directly in the browser, making it easy to check your results.

To start the application, open a command prompt in your project folder and run the following command. This will compile the project and automatically open it in your browser.

```sh
ng serve --open
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs196/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs196/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs196" %}

## Data Binding

To connect an OLAP data source to the Pivot Table, use the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#datasourcesettings) property. Several options within `dataSourceSettings` must be specified to bind data correctly:

| Property | Description |
|----------|-------------|
| [`cube`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#cube "cube") | Specifies the name of the OLAP cube to use from the database. |
| [`providerType`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#providertype "providerType") | Indicates the type of provider, helping the Pivot Table determine how to connect to the data source. |
| [`url`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#url "url") | The URL of the OLAP service. Use this to establish an online connection to the cube. |
| [`catalog`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#catalog "catalog") | The database or catalog name containing the cube data. |

Below are sample code files showing how to bind an OLAP data source in Angular:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs197/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs197/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs197" %}

### Fields

#### Measures in the row axis

By default, measures are shown on the columns axis in the Pivot Table. If you would like to display measures on the rows axis instead, you can do this using the [grouping bar](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#showgroupingbar) or the [field list](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/) UI. Simply drag the "Measures" button and drop it onto the rows axis.

Alternatively, you can set up the measure directly in your code by configuring the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings) option, as shown in the code below:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs198/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs198/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs198" %}

#### Measures in different positions

You can choose where to place measures on either the row or column axis thorough code behind or the user interface. In this example, the **measures** are set before the dimension field on the column axis. To achieve this, specify the order of the fields within the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#datasourcesettings) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs199/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs199/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs199" %}

### Named set

A named set is a multidimensional expression (MDX) that provides a predefined group of members from a dimension. It is created by combining cube data with arithmetic operators, numbers, or functions.

To display a named set in the Pivot Table, set its unique name using the [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldOptions/#name) property within either the row or column axis in [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#datasourcesettings). Additionally, set the [`isNamedSet`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldOptions/#isnamedset) property to **true**. In the example below, the "Core Product Group" named set is added to the column axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs200/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs200/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs200" %}

### Configuring authentication

To connect to an OLAP data source that requires authentication, users can provide basic authentication details through the [`authentication`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#authentication) property within the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#datasourcesettings) option of the Pivot Table. The authentication options include:

- [`userName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/authenticationModel/#username): Enter the username required for access to the OLAP server.
- [`password`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/authenticationModel/#password): Enter the password associated with the username.

> If authentication details are not provided, the browser will display a default pop-up window prompting users to enter the required information.

Below is an example of how to configure authentication settings in the Pivot Table:

```typescript
import { Component } from '@angular/core';
import { IDataSet, PivotView, FieldListService } from '@syncfusion/ej2-angular-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
  selector: 'app-container',
  providers: [FieldListService],
  // specifies the template string for the pivot table component
  template: `<div><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width showFieldList='true'></ejs-pivotview></div>`
})

export class AppComponent {
    public dataSourceSettings: DataSourceSettingsModel;
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

SQL Server Analysis Services (SSAS) uses [roles](https://learn.microsoft.com/en-us/analysis-services/multidimensional-models/roles-and-permissions-analysis-services?view=asallproducts-allversions) to control user access to the data inside an OLAP cube. Each role is defined with a set of permissions that can be assigned to individual users or groups. By assigning roles, you can restrict access to sensitive data and also determine who can view or modify information in the cube.

In the Syncfusion Angular Pivot Table, you can specify roles using the [`roles`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#roles) property within the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#datasourcesettings) object. This allows you to provide one or more role names for connecting to an OLAP cube. If you want to use multiple roles, list them as a comma-separated string.

```typescript
import { Component } from '@angular/core';
import { IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
  selector: 'app-container',
  providers: [],
  // specifies the template string for the pivot table component
  template: `<div><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width></ejs-pivotview></div>`
})

export class AppComponent {
    public dataSourceSettings: DataSourceSettingsModel;
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

### Field List

The field list, also called the cube dimension browser, displays the cube elements from the selected OLAP cube in a tree view structure. It organizes elements such as dimensions, hierarchies, and measures into logical groups, making it easier for the user to explore and arrange data for analysis using the Pivot Table.

#### Types of Nodes in the Field List

- **Display folder**: Contains a set of similar cube elements grouped together.
- **Measure**: Represents the numeric values or quantities that users can analyze and summarize in the Pivot Table.
- **Dimension**: Groups related data and helps users to categorize and filter information in the cube.
- **Attribute hierarchy**: Shows data at different attribute levels within a dimension, allowing users to drill down for more specific analysis.
- **User-defined hierarchy**: Presents a custom arrangement of members within a dimension, structured in multiple levels for easier navigation and deeper data analysis.
- **Level**: Indicates a specific position or stage within a hierarchy for more focused data review.
- **Named set**: A saved collection of tuples or members that can be reused in analysis as part of the cube definition.

#### Measure

A measure in a cube refers to a numeric value that comes from a column in the cube’s fact table. Measures are the main values analyzed in the Pivot Table. They help users investigate metrics such as sales, costs, expenditures, or production counts. Users can select measures based on their analysis needs. In the field list, all available measures are grouped separately, making it easy to select or remove measures as required. When a user chooses a measure, it is displayed in the desired area of the [Pivot Table](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default) and participates in calculations and summary values.

#### Dimension

A dimension is an essential part of the OLAP cube in the Pivot Table. It holds key information, such as its name, hierarchies, levels, and members. To use a dimension, you specify its name, along with the desired hierarchy and the corresponding level. Each dimension contains detailed information about its hierarchies, and each hierarchy is made up of one or more levels. Within each level, there are members, and each member can also have child members. This structure helps users organize and explore data easily in the Pivot Table.

#### Hierarchy

A hierarchy organizes elements within a dimension into a series of parent-child relationships. Each parent member groups its child members, summarizing their data. These parent members can also be grouped under another parent for further summarization. For example, in a time dimension, the month of May 2005 can be grouped under Second Quarter 2005, which is then summarized under the year 2005.

#### Level

A level is a child element of a hierarchy in the field list. It contains a group of members that share the same rank within that hierarchy. For example, in a hierarchy representing geographical data, a level might include members like cities or states, all at the same depth.

#### Attribute hierarchy

An attribute hierarchy in the Pivot Table organizes data into levels for easier analysis. It includes:

- **Leaf level**: This level contains unique attribute members, known as leaf members. Each leaf member represents a distinct data point.
- **Intermediate levels**: These exist in a parent-child hierarchy, connecting the leaf level to higher levels for structured data exploration.
- **Optional (all) level**: This level shows the combined total of all leaf members' values. The member at this level is called the (all) member.

#### User-defined hierarchy

A user-defined hierarchy arranges the members of a dimension into a structured, hierarchical format, making it easier to navigate and analyze data in the cube. For example, consider a dimension table with attributes like year, quarter, and month. These attributes can be combined to create a user-defined hierarchy named Calendar within the time dimension. This hierarchy connects all levels—year, quarter, and month—allowing users to explore data across different time periods seamlessly.

#### Differentiating user-defined hierarchy and attribute hierarchy

In the field list of the Pivot Table, hierarchies help users organize and analyze data in different ways. There are two main types of hierarchies:

- **User-defined hierarchy**: This type of hierarchy consists of two or more levels. Each level is created by combining related fields, which allows users to drill down through the data step by step—for example, from "Year" to "Quarter" to "Month" within a "Date" dimension. User-defined hierarchies use fields from the same dimension to create a logical path for navigation.

- **Attribute hierarchy**: In this type, there is only a single level. Each field in the dimension automatically forms an attribute hierarchy. For example, if "Country" is a field, it will appear as an attribute hierarchy with just one level, letting the user view data for each country individually.

#### Named set

A named set is a group of specific tuples or members that can be defined and stored within the OLAP cube. Named sets are saved inside the sets folder under a dimension element in the field list, making them easy to locate. Users can add these named sets to the [`rows`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#row) or [`columns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#columns) axes through the grouping bar or the field list when working with the Pivot Table at runtime. Named sets are useful for handling long, complex, or frequently used expressions. The cube supports defining named sets using Multidimensional Expressions (MDX), which helps users manage these expressions more efficiently.

#### Calculated field

The calculated field option lets users create a new field in the Pivot Table using their own formula or expression, based on the existing OLAP cube elements in the connected data source. These fields act as custom dimensions or measures, allowing users to add calculations that are not originally available in the cube.

There are two types of calculated fields:

* **Calculated measure** – This allows users to create a new measure by defining a custom expression. The new measure is then available in the field list along with the other measures.
* **Calculated dimension** – This allows users to create a new dimension using a user-defined expression. The dimension is grouped together with other dimensions in the field list.

#### Symbolic representation of the nodes inside field list

In the field list, each node uses a specific icon to help users quickly identify its type and purpose. The following table describes each type of node, its symbol, and whether it can be dragged into the Axis Fields:

| Icon | Name | Node type | Is draggable? |
|------|------|-----------|--------------|
| ![Folder icon in JavaScript pivot table control](images/Folder.webp) | Display folder | Display folder | No |
| ![Measure icon in JavaScript pivot table control](images/Measure.webp) | Measure | Measure | No |
| ![Dimension icon in JavaScript pivot table control](images/Dimension.webp) | Dimension | Dimension | No |
| ![User-defined hierarchy icon in JavaScript pivot table control](images/UserDefinedHierarchy.webp) | User-defined hierarchy | Hierarchy | Yes |
| ![Attribute hierarchy icon in JavaScript pivot table control](images/AttributeHierarchy.webp) | Attribute hierarchy | Hierarchy | Yes |
| ![First level icon in JavaScript pivot table control](images/FirstLevel.webp)<br>![Second level icon in JavaScript pivot table control](images/SecondLevel.webp)<br>![Third level icon in JavaScript pivot table control](images/ThirdLevel.webp) | Levels (in order) | Level element | Yes |
| ![NamedSet icon in JavaScript pivot client control](images/NamedSet.webp) | Named set | Named set | Yes |

## Events

### BeforeServiceInvoke

The [`beforeServiceInvoke`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotViewModel/#beforeserviceinvoke) event is triggered before initiating any service communication with the OLAP server in the Pivot Table and Field List components.

* This event allows you to inject custom properties or additional parameters dynamically before a request is made to the OLAP server.
* It is particularly useful for passing contextual data such as user tokens, custom filters, or localization information along with the original server request.

When the [`beforeServiceInvoke`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotViewModel/#beforeserviceinvoke) event is triggered, the event argument provides access to the request details and includes a [`customProperties`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/beforeServiceInvokeEventArgs/#customproperties) field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/olap-beforeServiceInvoke/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/olap-beforeServiceInvoke/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/olap-beforeServiceInvoke" %}

### AfterServiceInvoke

The [`afterServiceInvoke`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotViewModel/#afterserviceinvoke) event is triggered in the Pivot Table and Field List components during the onSuccess phase of every OLAP service request.

* This event is useful for performing post-processing, logging actions, or updating the UI after receiving a successful response from the OLAP server.
* You may use it to audit data, trigger notifications, or handle custom response-handling logic.

When the [`afterServiceInvoke`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotViewModel/#afterserviceinvoke) event is triggered, the event argument provides access to the server response details, including properties such as the action performed and the result data returned from the OLAP server.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/olap-afterServiceInvoke/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/olap-afterServiceInvoke/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/olap-afterServiceInvoke" %}