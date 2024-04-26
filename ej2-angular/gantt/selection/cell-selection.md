---
layout: post
title: Cell selection in Angular Gantt component | Syncfusion
description: Learn here all about Cell selection in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Cell selection 
documentation: ug
domainurl: ##DomainURL##
---

# Cell selection in Angular Gantt component

You can select a cell in the Gantt component by setting the [`selectionSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings/#mode) property to cell. You can get the selected cell information using the [`getSelectedRowCellIndexes`](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection/#getselectedrowcellindexes) method. This method returns the result as an object collection, which has `cellIndexes` and `rowIndex` information of the selected cells.

Refer to the following code example to enable the cell selection in Gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/cell-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/cell-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/cell-cs1" %}

## Selecting multiple cells

You can select multiple cells by setting the [`selectionSettings.type`](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings/#type) property to multiple and the [`selectionSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings/#mode) property to cell. Multiple cells can be selected by holding the CTRL key and selecting the cells. The following code example demonstrates how to select multiple cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/multiplecell-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/multiplecell-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/multiplecell-cs1" %}

## Selecting a cell dynamically

You can select a cell dynamically using the [`selectCell`](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection/#selectcell) method. Refer to the following code example for details.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/selectcell-dynamic-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/selectcell-dynamic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/selectcell-dynamic-cs1" %}

## Customize cell selection action

While selecting a cell in Gantt, the [`cellSelecting`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#cellselecting) and [`cellSelected`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#cellselected) event will be triggered. The [`cellSelecting`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#cellselecting) event will be triggered on initialization of cell selection action, and you can get the current selecting cell information to prevent the selection of a particular cell in a particular row. The [`cellSelected`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#cellselected) event will be triggered on completion of cell selection action, and you can get the current selected cell’s information. The following code example demonstrates how to prevent the selection of the cell using the [`cellSelecting`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#cellselecting) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/customize-cellselection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/customize-cellselection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/customize-cellselection-cs1" %}