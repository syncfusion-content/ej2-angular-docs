---
layout: post
title: Cell Range in Angular Spreadsheet Component | Syncfusion
description: Learn here all about cell range in Syncfusion Essential Angular Spreadsheet component, it's elements and more.
platform: ej2-angular
control: Cell range 
documentation: ug
domainurl: ##DomainURL##
---

# Cell Range in Angular Spreadsheet Component

A group of cells in a sheet is known as cell range.

## Wrap text

Wrap text allows you to display large content as multiple lines in a single cell. By default, the wrap text support is enabled. Use the [`allowWrap`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowwrap) property to enable or disable the wrap text support in spreadsheet.

Wrap text can be applied or removed to a cell or range of cells in the following ways,

* Using the `wrap` property in `cell`, you can enable or disable wrap text to a cell at initial load.
* Select or deselect wrap button from ribbon toolbar to apply or remove the wrap text to the selected range.
* Using the [`wrap`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#wrap) method, you can apply or remove the wrap text once the component is loaded.

The following code example shows the wrap text functionality in spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/wrap-text-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/wrap-text-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/wrap-text-cs1" %}

### Limitations of Wrap text

The following features have some limitations in wrap text:

* Sorting with wrap text applied data.
* Merge with wrap text.

## Merge cells

Merge cells allows users to span two or more cells in the same row or column into a single cell. When cells with multiple values are merged, top-left most cell data will be the data for the merged cell. By default, the merge cells option is enabled. Use [`allowMerge`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowmerge) property to enable or disable the merge cells option in spreadsheet.

You can merge the range of cells in the following ways,

* Set the `rowSpan` and `colSpan` property in `cell` to merge the number of cells at initial load.
* Select the range of cells and apply merge by selecting the desired option from ribbon toolbar.
* Use [`merge`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#merge) method to merge the range of cells, once the component is loaded.

The available merge options in spreadsheet are,

| Type | Action |
|-------|---------|
| Merge All | Combines all the cells in a range in to a single cell (default). |
| Merge Horizontally | Combines cells in a range as row-wise. |
| Merge Vertically | Combines cells in a range as column-wise. |
| UnMerge | Splits the merged cells into multiple cells. |

The following code example shows the merge cells operation in spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/merge-cells-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/merge-cells-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/merge-cells-cs1" %}

### Limitations of Merge

The following features have some limitations in Merge:

* Merge with filter.
* Merge with wrap text.

## Data Validation

Data Validation is used to restrict the user from entering the invalid data. You can use the [`allowDataValidation`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowdatavalidation) property to enable or disable data validation.

> * The default value for `allowDataValidation` property is `true`.

### Apply Validation

You can apply data validation to restrict the type of data or the values that users enter into a cell.

You can apply data validation by using one of the following ways,

* Select the Data tab in the Ribbon toolbar, and then choose the Data Validation item.
* Use the [`addDataValidation()`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#adddatavalidation) method programmatically.

### Clear Validation

Clear validation feature is used to remove data validations from the specified ranges or the whole worksheet.

You can clear data validation rule by one of the following ways,

* Select the Data tab in the Ribbon toolbar, and then choose the Clear Validation item.
* Use the [`removeDataValidation()`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#removedatavalidation) method programmatically.

### Highlight Invalid Data

Highlight invalid data feature is used to highlight the previously entered invalid values.

You can highlight an invalid data by using one of the following ways,

* Select the Data tab in the Ribbon toolbar, and then choose the Highlight Invalid Data item.
* Use the [`addInvalidHighlight()`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#addinvalidhighlight) method programmatically.

### Clear Highlighted Invalid Data

Clear highlight feature is used to remove the highlight from invalid cells.

You can clear the highlighted invalid data by using the following ways,

* Select the Data tab in the Ribbon toolbar, and then choose the Clear Highlight item.
* Use the [`removeInvalidHighlight()`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#removeinvalidhighlight) method programmatically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/data-validation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/data-validation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/data-validation-cs1" %}

### Custom Data validation

The Spreadsheet supports custom data validation, allowing users to define their own validation rules for specific cells or ranges. This feature enables you to set conditions that the entered data must meet, making it particularly useful when predefined validation options, such as numbers, dates, or lists, are insufficient.

With custom validation, you can enforce rules using logical expressions or formulas, ensuring that only valid data is entered into the Spreadsheet.

For example, consider a scenario where you want to ensure that a cell contains a number between 10 and 100. To achieve this, define a validation rule using a formula that checks if the entered value is greater than 10 and less than 100. The formula for this validation is =AND(A1>10, A1<100), where A1 refers to the cell being validated.

When this rule is applied, the Spreadsheet evaluates the entered value against the formula. If a user enters a value outside the specified range, an alert notifies them of the invalid input. This helps users correct errors efficiently and ensures that only desired values are accepted.

You can apply custom data validation using two methods.

* The first is through the Data Validation dialog in the Ribbon toolbar. Navigate to the Data tab, select the Data Validation option, and choose the Custom type from the Allow dropdown menu.
* The second method is programmatically, using the [`addDataValidation()`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#adddatavalidation) method, which allows developers to set custom rules dynamically via code.

The following code example demonstrates how to add custom data validation with a formula in a Spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/data-validation-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/data-validation-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/spreadsheet/data-validation-cs2" %}

### Limitations of Data validation

The following features have some limitations in Data Validation:

* Entire row data validation.
* Insert row between the data validation.
* Copy/paste with data validation.
* Delete cells between data validation applied range.

## Auto Fill

Auto Fill is used to fill the cells with data based on adjacent cells. It also follows a pattern from adjacent cells if available. There is no need to enter the repeated data manually. You can use `allowAutoFill` property to enable/disable the auto fill support. You can also use `showFillOptions` property to enable/disable the fill option and `fillType` property to change the default auto fill option which is available in `autoFillSettings`.

You can do this by one of the following ways,

* Using “AutoFillOptions” menu which is open, while drag and drop the cell using fill handle element.
* Use the autoFill() method programmatically.

The available parameters in `autoFill()` method are,

| Parameter | Type | Description |
|-----|------|----|
| fillRange | `string` | Specifies the fill range. |
| dataRange | `string` | Specifies the data range. |
| direction | `AutoFillDirection` | Specifies the direction("Up","Right","Down","Left")to be filled. |
| fillType | `AutoFillType` | Specifies the fill type("CopyCells","FillSeries","FillFormattingOnly","FillWithoutFormatting") for autofill action. |

In Auto Fill we have following options,

* Copy Cells
* Fill Series
* Fill Formatting Only
* Fill Without Formatting

>* The default auto fill option is “FillSeries” which can be referred from `fillType` property.

### Copy Cells

To copy the selected cell content to the adjacent cells. You can do this by one of the following ways,

* Using fill handle to select the adjacent cell range and “Copy Cells” option in “AutoFillOptions” menu to fill the adjacent cells.
* Using “CopyCells” as fill type in `autoFill` method to fill the adjacent cells.

### Fill Series

To fill the series of numbers, characters, or dates based on selected cell content to the adjacent cells with their formats.

You can do this by one of the following ways,

* Using fill handle to select the adjacent cell range and “Fill Series” option in “AutoFillOptions” menu to fill the adjacent cells.
* Using “FillSeries” as fill type in `autoFill` method to fill the adjacent cells.

### Fill Formatting Only

To fill the cell style and number formatting based on the selected cell content to the adjacent cells without their content.

You can do this by one of the following ways,

* Using fill handle to select the adjacent cell range and “Fill Formatting Only” option in “AutoFillOptions” menu to fill the adjacent cells.
* Using “FillFormattingOnly” as fill type in `autoFill` method to fill the adjacent cells.

### Fill Without Formatting

To fill series of numbers, characters, or dates based on the selected cells to the adjacent cells without their formats.

You can do this by one of the following ways,

* Using fill handle to select the adjacent cell range and “Fill Without Formatting” option in “AutoFillOptions” menu to fill the adjacent cells.
* Using “FillWithoutFormatting” as fill type in `autoFill` method to fill the adjacent cells.

In the following sample, you can enable/disable the fill option on the button click event by using the `showFillOptions` property in `autoFillSettings`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/autofill-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/autofill-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/autofill-cs1" %}

### Limitations of Autofill

The following features have some limitations in Autofill:

* Flash Fill option in Autofill feature.
* Fill with Conditional Formatting applied cells.

## Clear

Clear feature helps you to clear the cell contents (formulas and data), formats (including number formats, conditional formats, and borders) in a spreadsheet. When you apply clear all, both the contents and the formats will be cleared simultaneously.

### Apply Clear Feature

You can apply clear feature by using one of the following ways,

* Select the clear icon in the Ribbon toolbar under the Home Tab.
* Using the [`clear()`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#clear) method to clear the values.

Clear has the following types in the spreadsheet,

| Options | Uses |
|-----|------|
| `Clear All` | Used to clear all contents, formats, and hyperlinks.  |
| `Clear Formats` | Used to clear the formats (including number formats, conditional formats, and borders) in a cell. |
| `Clear Contents` | Used to clear the contents (formulas and data) in a cell. |
| `Clear Hyperlinks` | Used to clear the hyperlink in a cell. |

### Methods

Clear the cell contents and formats in the Spreadsheet document by using the [clear](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#clear) method. The [clear](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#clear) method has `type` and `range` as parameters. The following code example shows how to clear the cell contents and formats in the button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/clear-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/clear-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/clear-cs1" %}

## Note

You can refer to our [Angular Spreadsheet](https://www.syncfusion.com/angular-ui-components/angular-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Spreadsheet example](https://ej2.syncfusion.com/angular/demos/#/material/spreadsheet/default) to knows how to present and manipulate data.

## See Also

* [Rows and columns](./rows-and-columns)
* [Formatting](./formatting)
* [Hyperlink](./link)
* [Sorting](./sort)
* [Filtering](./filter)
