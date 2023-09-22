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

The clipboard provides an option to copy selected rows or cells data into the clipboard.

The following list of keyboard shortcuts is supported in the Grid to copy selected rows or cells data into clipboard.

Interaction keys |Description
-----|-----
<kbd>Ctrl + C</kbd> |Copy selected rows or cells data into clipboard.
<kbd>Ctrl + Shift + H</kbd> |Copy selected rows or cells data with header into clipboard.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs1" %}

## Copy to clipboard by external buttons

To copy selected rows or cells data into clipboard with help of external buttons, you need to invoke the [`copy`](https://ej2.syncfusion.com/angular/documentation/api/grid/clipboard/#copy) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs2" %}

## AutoFill

AutoFill Feature allows you to copy the data of selected cells and paste it to another cells by just dragging the autofill icon of the selected cells up to required cells. This feature is enabled by defining [`enableAutoFill`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enableautofill) property as true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs1" %}

> * If [`enableAutoFill`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enableautofill)  is set to true, then the autofill icon will be displayed on cell selection to copy cells.
> * It requires the selection **mode** to be **Cell**,  **cellSelectionMode** to be **Box** and also Batch Editing should be enabled.

### Limitations of AutoFill

* Since the string values are not parsed to number and date type, so when the selected string type cells are dragged to number type cells then it will display as **NaN**. For date type cells, when the selected string type cells are dragged to date type cells then it will display as an **empty cell**.
* Linear series and the sequential data generations are not supported in this autofill feature.

## Paste

You can able to copy the content of a cell or a group of cells by selecting the cells and pressing <kbd>Ctrl + C</kbd> shortcut key and paste it to another set of cells by selecting the cells and pressing <kbd>Ctrl + V</kbd> shortcut key.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs2" %}

> To perform paste functionality, it requires the selection **mode** to be **Cell**,  **cellSelectionMode** to be **Box** and also Batch Editing should be enabled.

### Limitations of Paste Functionality

* Since the string values are not parsed to number and date type, so when the copied string type cells are pasted to number type cells then it will display as **NaN**. For date type cells, when the copied string format cells are pasted to date type cells then it will display as an **empty cell**.