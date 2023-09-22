---
layout: post
title: Cell selection in Angular Grid component | Syncfusion
description: Learn here all about Cell selection in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Cell selection 
documentation: ug
domainurl: ##DomainURL##
---

# Cell selection in Angular Grid component

Cell Selection can be done through simple Mouse down or Arrow keys(up, down, left and right).

Grid supports two types of cell selection mode which can be set by using [`selectionSettings.cellSelectionMode`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#cellselectionmode). They are:

* **Flow** - The **Flow** value is set by default. Select range of cells between the start index and end index which includes in between cells of rows.
* **Box** - Select range of cells within the start and end column indexes which includes in between cells of rows within the range.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/selection-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/selection-cs1" %}

> Cell Selection requires the [`selectionSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#mode) to be **Cell** or  **Both** and [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type) should be **Multiple**.
[`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type) should be **Multiple**.

## Toggle selection

The Toggle selection allows to perform selection and unselection of the particular row or cell or column. To enable toggle selection, set [`enableToggle`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#enabletoggle) property of the selectionSettings as true. If you click on the selected row or cell or column then it will be unselected and vice versa.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/selection-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/selection-cs2" %}

> If multi selection is enabled, then first click on any selected row (without pressing Ctrl key), it will clear the multi selection and in second click on the same row, it will be unselected.