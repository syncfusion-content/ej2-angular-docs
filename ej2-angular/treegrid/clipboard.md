---
layout: post
title: Clipboard in Angular Treegrid component | Syncfusion
description: Learn here all about Clipboard in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Clipboard 
documentation: ug
domainurl: ##DomainURL##
---

# Clipboard in Angular Treegrid component

The clipboard provides an option to copy selected rows or cells data into the clipboard.

The following list of keyboard shortcuts is supported in the Tree Grid to copy selected rows or cells data into clipboard.

Interaction keys |Description
-----|-----
<kbd>Ctrl + C</kbd> |Copy selected rows or cells data into clipboard.
<kbd>Ctrl + Shift + H</kbd> |Copy selected rows or cells data with header into clipboard.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/clipboard-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/clipboard-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/clipboard-cs1" %}

## Copy to clipboard by external buttons

To copy selected rows or cells data into clipboard with help of external buttons, you need to invoke the [`copy`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/clipboard/#copy) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/copy-method-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/copy-method-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/copy-method-cs1" %}

## Copy Hierarchy Modes

Tree Grid provides support for a set of copy modes with [`copyHierarchyMode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#copyHierarchymode) property. The below are the type of filter mode available in TreeGrid.

* **Parent** : This is the default copy hierarchy mode in Tree Grid. Clipboard value have the selected records with its parent records. If the selected records not have any parent record then the selected record will be in clipboard.

* **Child** : Clipboard value have the selected records with its child record. If the selected records do not have any child record then the selected records will be in clipboard.

* **Both** : Clipboard value have the selected records with its both parent and child record. If the selected records do not have any parent and child record then the selected records alone in clipboard.

* **None** : Only the Selected records will be in clipboard.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/clipboard-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/clipboard-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/clipboard-cs2" %}

### Limitations of Copy Functionality

* Only current view records will be available in copy clipboard.

## AutoFill

AutoFill Feature allows you to copy the data of selected cells and paste it to another cells by just dragging the autofill icon of the selected cells up to required cells. This feature is enabled by defining `enableAutoFill` property as true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs1" %}

> * If `enableAutoFill` is set to true, then the autofill icon will be displayed on cell selection to copy cells.
> * It requires the selection `mode` to be `Cell`, `cellSelectionMode` to be `Box` and also Batch Editing should be enabled.

### Limitations of AutoFill

* Since the string values are not parsed to number and date type, so when the selected string type cells are dragged to number type cells then it will display as **NaN**. For date type cells, when the selected string type cells are dragged to date type cells then it will display as an **empty cell**.
* Linear series and the sequential data generations are not supported in this autofill feature.

## Paste

You can able to copy the content of a cell or a group of cells by selecting the cells and pressing <kbd>Ctrl + C</kbd> shortcut key and paste it to another set of cells by selecting the cells and pressing <kbd>Ctrl + V</kbd> shortcut key.

Paste the cell programmatically by using the [`Paste`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#paste) method in the tree grid. To use, you need to pass the data to paste the row index and column index as parameters to the method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs2" %}

> To perform paste functionality, it requires the selection `mode` to be `Cell`,  `cellSelectionMode` to be `Box` and also Batch Editing should be enabled.

### Limitations of Paste Functionality

* Since the string values are not parsed to number and date type, so when the copied string type cells are pasted to number type cells then it will display as **NaN**. For date type cells, when the copied string format cells are pasted to date type cells then it will display as an **empty cell**.

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.