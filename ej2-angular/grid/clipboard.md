---
layout: post
title: Angular Grid - Clipboard | Syncfusion
description: Angular Grid clipboard supports copying and pasting rows or cells, handling formats, integrating with external apps, and configuring clipboard behavior.
platform: ej2-angular
control: Clipboard 
documentation: ug
domainurl: ##DomainURL##
---

# Clipboard in Angular Grid Component

The clipboard feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) enables copying selected rows or cells to the system clipboard for use in other applications. The grid supports keyboard shortcuts for quick copy operations.

Interaction keys | Description
-----|-----
<kbd>Ctrl + C</kbd> | Copy selected rows or cells to the clipboard.
<kbd>Ctrl + Shift + H</kbd> | Copy selected rows or cells with header to the clipboard.

Examples below show grid configuration for clipboard operations. Configure the grid's `dataSource` and `selectionSettings` properties.

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

To copy selected rows or cells data to the clipboard using external buttons, utilize the [copy](https://ej2.syncfusion.com/angular/documentation/api/grid/clipboard#copy) method available in the grid component. The `copy` method accepts an optional parameter `withHeader` (boolean) to include column headers in the copied data. This is demonstrated in the following example:

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

The AutoFill feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid copies values from a selected cell range into target cells by dragging the AutoFill handle. This provides a fast method for populating repetitive or sequential data.

**AutoFill to copy data:**

1. Select the cells containing the data to copy.

2. Hover over the bottom-right corner of the selection to display the autofill icon.

3. Click and drag the autofill icon to the target cells where the data should be pasted.

4. Release the mouse button to complete the autofill operation. The data from the source cells will be copied to the target cells.

Enable this feature by setting the [enableAutoFill](https://ej2.syncfusion.com/angular/documentation/api/grid#enableautofill) property to `true`. 

The following example demonstrates to enable the autofill feature in the grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/autofill/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/autofill/src/main.ts %}
{% endhighlight %}
{% endtabs %}

> * When [enableAutoFill](https://ej2.syncfusion.com/angular/documentation/api/grid#enableautofill) is set to `true`, the autofill icon displays on cell selection for copying cells.
> * AutoFill requires the selection `mode` to be `Cell`, `cellSelectionMode` to be `Box`, and `editMode` to be `Batch`.

### Limitations

* AutoFill does not automatically convert string values to number or date types. When selected cells contain string data and are dragged to number-type cells, the target cells will display NaN. Similarly, dragging string-type cells to date-type cells results in empty cells. Ensure data types are compatible before using autofill to avoid unexpected results.

* The AutoFill feature does not support generating non-linear series or sequential data automatically. It cannot create complex series or patterns by dragging cells with non-sequential data. The autofill feature is designed for copying and pasting data from a selected range of cells.

* AutoFill can only be applied to viewport cells when virtual scrolling, infinite scrolling, or column virtualization features are enabled in the grid.

## Paste

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid supports pasting clipboard content into selected cells for quick data entry and updates. Standard shortcuts allow copying and pasting between ranges within the grid or between the grid and external applications.

Follow these steps to use the paste feature in the grid:

1. Select the cells containing the content to copy.

2. Press <kbd>Ctrl + C</kbd> to copy the selected cells content to the clipboard.

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

> Paste requires selection `mode` to be `Cell`, `cellSelectionMode` to be `Box`, and `Batch` editing to be enabled.

### Limitations

Paste does not convert strings to number or date types; incompatible types can yield NaN or empty cells.