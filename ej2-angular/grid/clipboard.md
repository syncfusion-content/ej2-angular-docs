---
layout: post
title: Clipboard in Angular Grid component | Syncfusion
description: Learn here all about Clipboard in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Clipboard 
documentation: ug
domainurl: ##DomainURL##
---

# Clipboard in Angular Grid component

The clipboard feature in the Syncfusion Angular Grid provides an efficient way to copy selected rows or cells data to the clipboard. The grid supports keyboard shortcuts to perform clipboard operations seamlessly. The following keyboard shortcuts are supported for copying selected rows or cells data:

Interaction keys |Description
-----|-----
<kbd>Ctrl + C</kbd> |Copy selected rows or cells data to clipboard.
<kbd>Ctrl + Shift + H</kbd> |Copy selected rows or cells data with headers to clipboard.
<kbd>Ctrl + V</kbd> |Paste copied data to selected cells (requires batch editing mode).

These keyboard shortcuts enable quick data transfer from the grid to the clipboard, making it easy to paste data into other applications or documents.

To enable the clipboard feature, configure the grid component with your data source and selection property. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/copy/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/copy/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/copy" %}

## Copy to clipboard by external buttons

Copying data to the clipboard using external buttons in the Syncfusion Angular Grid enables programmatic triggering of copy operations, enhancing usability, particularly for those unfamiliar with keyboard shortcuts.

To copy selected rows or cells data to the clipboard using external buttons, utilize the [copy](https://ej2.syncfusion.com/angular/documentation/api/grid/clipboard/#copy) method available in the grid component. The `copy` method accepts an optional parameter `withHeader` (boolean) to include column headers in the copied data. This is demonstrated in the following example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/copy-with-header/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/copy-with-header/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/copy-with-header" %}

## AutoFill

The AutoFill feature in the Syncfusion Angular Grid allows copying data from selected cells and pasting it into adjacent cells by dragging the autofill icon. This feature provides a convenient way to quickly populate data across multiple cells in the grid.

**How to use the AutoFill feature:**

1. Select the cells containing the data to copy.

2. Hover over the bottom-right corner of the selection to display the autofill icon.

3. Click and drag the autofill icon to the target cells where the data should be pasted.

4. Release the mouse button to complete the autofill operation. The data from the source cells will be copied to the target cells.

Enable this feature by setting the [enableAutoFill](https://ej2.syncfusion.com/angular/documentation/api/grid/#enableautofill) property to **true**. 

The following example demonstrates how to enable the autofill feature in the grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/autofill/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/autofill/src/main.ts %}
{% endhighlight %}
{% endtabs %}

> * When [enableAutoFill](https://ej2.syncfusion.com/angular/documentation/api/grid/#enableautofill) is set to **true**, the autofill icon displays on cell selection for copying cells.
> * AutoFill requires the selection `mode` to be **Cell**, `cellSelectionMode` to be **Box**, and `editMode` to be **Batch**.

### Limitations

* AutoFill does not automatically convert string values to number or date types. When selected cells contain string data and are dragged to number-type cells, the target cells will display **NaN**. Similarly, dragging string-type cells to date-type cells results in **empty cells**. Ensure data types are compatible before using autofill to avoid unexpected results.

* The AutoFill feature does not support generating non-linear series or sequential data automatically. It cannot create complex series or patterns by dragging cells with non-sequential data. The autofill feature is designed for copying and pasting data from a selected range of cells.

* AutoFill can only be applied to viewport cells when virtual scrolling, infinite scrolling, or column virtualization features are enabled in the grid.

## Paste

The Syncfusion Angular Grid provides a paste feature that allows copying content from cells or groups of cells and pasting it into another set of cells. This feature enables quick data transfer within the grid, making it convenient for data entry and manipulation.

Follow these steps to use the paste feature in the grid:

1. Select the cells containing the content to copy.

2. Press <kbd>Ctrl + C</kbd> to copy the selected cells' content to the clipboard.

3. Select the target cells where the copied content should be pasted.

4. Press <kbd>Ctrl + V</kbd> to paste the copied content into the target cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paste/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paste/src/main.ts %}
{% endhighlight %}
{% endtabs %}

> To perform paste functionality, the selection **mode** must be **Cell**, **cellSelectionMode** must be **Box**, and Batch Editing must be enabled.

### Limitations

* The paste feature does not automatically convert string values to number or date types. When pasted cells contain string data and are applied to number-type cells, the target cells will display **NaN**. Similarly, pasting string-type data to date-type cells results in **empty cells**. Ensure data types are compatible before using the paste feature to avoid unexpected results.