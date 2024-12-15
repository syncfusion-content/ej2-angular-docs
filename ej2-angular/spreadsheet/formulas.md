---
layout: post
title: Formulas in Angular Spreadsheet component | Syncfusion
description: Learn here all about Formulas in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Formulas 
documentation: ug
domainurl: ##DomainURL##
---

# Formulas in Angular Spreadsheet component

Formulas are used for calculating the data in a worksheet. You can refer the cell reference from same sheet or from different sheets.

## Usage

You can set formula for a cell in the following ways,

* Using the `formula` property from `cell`, you can set the formula or expression to each cell at initial load.
* Set the formula or expression through data binding.
* You can set formula for a cell by [`editing`](./editing).
* Using the [`updateCell`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#updatecell) method, you can set or update the cell formula.

## Culture-Based Argument Separator

Previously, although you could import culture-based Excel files into the Spreadsheet component, the formulas wouldn't calculate correctly. This was due to the absence of culture-based argument separators and support for culture-based formatted numeric values as arguments. However, starting from version 25.1.35, you can now import culture-based Excel files into the Spreadsheet component.

> Before importing culture-based Excel files, ensure that the Spreadsheet component is rendered with the corresponding culture. Additionally, launch the import/export services with the same culture to ensure compatibility.

When loading spreadsheet data with culture-based formula argument separators using cell data binding, local/remote data, or JSON, ensure to set the [listSeparator](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#listseparator) property value as the culture-based list separator from your end. Additionally, note that when importing an Excel file, the [listSeparator](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#listseparator) property will be updated based on the culture of the launched import/export service.

In the example below, the Spreadsheet component is rendered with the `German culture (de)`. Additionally, you can find references on how to set the culture-based argument separator and culture-based formatted numeric value as arguments to the formulas.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/formula-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/formula-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/formula-cs3" %}

## Create User Defined Functions / Custom Functions

The Spreadsheet includes a number of built-in formulas. For your convenience, a list of supported formulas can be found [here](https://ej2.syncfusion.com/angular/documentation/spreadsheet/formulas#supported-formulas).

You can define and use an unsupported formula, i.e. a user defined/custom formula, in the spreadsheet by using the [addCustomFunction](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#addcustomfunction) function. Meanwhile, remember that you should define a user defined/custom formula whose results should only return a single value. If a user-defined/custom formula returns an array, it will be time-consuming to update adjacent cell values.

The following code example shows an unsupported formula in the spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/formula-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/formula-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/formula-cs1" %}

Second, if you want to directly compute any formula or expression, you can use the [computeExpression](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#computeexpression) method. This method will work for both built-in and used-defined/custom formula.

The following code example shows how to use `computeExpression` method in the spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/formula-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/formula-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/formula-cs2" %}

## Formula bar

Formula bar is used to edit or enter cell data in much easier way. By default, the formula bar is enabled in the spreadsheet. Use the [`showFormulaBar`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#showformulabar) property to enable or disable the formula bar.

## Named Ranges

You can define a meaningful name for a cell range and use it in the formula for calculation. It makes your formula much easier to understand and maintain. You can add named ranges to the Spreadsheet in the following ways,

* Using the [`definedNames`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#definednames) collection, you can add multiple named ranges at initial load.
* Use the [`addDefinedName`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#adddefinedname) method to add a named range dynamically.
* You can remove an added named range dynamically using the [`removeDefinedName`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#removedefinedname) method.
* Select the range of cells, and then enter the name for the selected range in the name box.

The following code example shows the usage of named ranges support.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/defined-name-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/defined-name-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/defined-name-cs1" %}

## Calculation Mode

The Spreadsheet provides a `Calculation Mode` feature like the calculation options in online Excel. This feature allows you to control when and how formulas are recalculated in the spreadsheet. The available modes are:

* `Automatic`: Formulas are recalculated instantly whenever a change occurs in the dependent cells.
* `Manual`: Formulas are recalculated only when triggered explicitly by the user using options like `Calculate Sheet` or `Calculate Workbook`.

You can configure the calculate mode using the [`calculationMode`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#calculationmode) property of the Spreadsheet. These modes offer flexibility to balance real-time updates and performance optimization.

### Automatic Mode

In Automatic Mode, formulas are recalculated instantly whenever a dependent cell is modified. This mode is perfect for scenarios where real-time updates are essential, ensuring that users see the latest results without additional actions.

For example, consider a spreadsheet where cell `C1` contains the formula `=A1+B1`. When the value in `A1` or `B1` changes, `C1` updates immediately without requiring any user intervention. You can enable this mode by setting the [`calculationMode`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#calculationmode) property to `Automatic`.

The following code example demonstrates how to set the Automatic calculation mode in a Spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/calculation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/calculation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/calculation-cs1" %}

### Manual Mode

In Manual Mode, formulas are not recalculated automatically when cell values are modified. Instead, recalculations must be triggered explicitly. This mode is ideal for scenarios where performance optimization is a priority, such as working with large datasets or computationally intensive formulas.

For example, imagine a spreadsheet where cell `C1` contains the formula `=A1+B1`. When the value in `A1` or `B1` changes, the value in `C1` will not update automatically. Instead, the recalculation must be initiated manually using either the `Calculate Sheet` or `Calculate Workbook` option. To manually initiate recalculation, the Spreadsheet provides two options:

* `Calculate Sheet`: Recalculates formulas for the active sheet only.
* `Calculate Workbook`: Recalculates formulas across all sheets in the workbook.

The following code example demonstrates how to set the Manual calculation mode in a Spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/calculation-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/calculation-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/calculation-cs2" %}

## Supported Formulas

The list of supported formulas can be find in following [`link`](https://ej2.syncfusion.com/documentation/spreadsheet/formulas#supported-formulas).

## Formula Error Dialog

If you enter an invalid formula in a cell, an error dialog with an error message will appear. For instance, a formula with the incorrect number of arguments, a formula without parenthesis, etc.

| Error Message | Reason |
|-------|---------|
| We found that you typed a formula with an invalid arguments | Occurs when passing an argument even though it wasn't needed. |
| We found that you typed a formula with an empty expression | Occurs when passing an empty expression in the argument. |
| We found that you typed a formula with one or more missing opening or closing parenthesis | Occurs when an open parenthesis or a close parenthesis is missing. |
| We found that you typed a formula which is improper | Occurs when passing a single reference but a range was needed. |
| We found that you typed a formula with a wrong number of arguments | Occurs when the required arguments were not passed. |
| We found that you typed a formula which requires 3 arguments | Occurs when the required 3 arguments were not passed. |
| We found that you typed a formula with a mismatched quotes | Occurs when passing an argument with mismatched quotes. |
| We found that you typed a formula with a circular reference | Occurs when passing a formula with circular cell reference. |
| We found that you typed a formula which is invalid | Except in the cases mentioned above, all other errors will fall into this broad category. |

![Formula Alert Dialog](./images/formula-alert-dialog.png)

## Note

You can refer to our [Angular Spreadsheet](https://www.syncfusion.com/angular-ui-components/angular-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Spreadsheet example](https://ej2.syncfusion.com/angular/demos/#/material/spreadsheet/default) to knows how to present and manipulate data.

## See Also

* [Editing](./editing)
* [Formatting](./formatting)
* [Open](./open-save#open)
* [Save](./open-save#save)