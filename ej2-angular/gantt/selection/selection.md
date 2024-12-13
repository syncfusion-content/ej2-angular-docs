---
layout: post
title: Selection in Angular Gantt component | Syncfusion
description: Learn here all about Selection in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Selection 
documentation: ug
domainurl: ##DomainURL##
---

# Selection in Angular Gantt component

Selection provides an option to highlight a row or a cell. It can be done using arrow keys or by scrolling down the mouse. To disable selection in the Gantt component, set the [`allowSelection`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowselection) to `false`.

To select data, inject the [`SelectionService`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#selectionmodule) module in provider section of `AppModule`.

The Gantt component supports two types of selection that can be set by using the [`selectionSettings.type`](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings/#type) property. They are:

* `Single`: Sets a single value by default and allows only selection of a single row or a cell.
* `Multiple`: Allows you to select multiple rows or cells. To perform the multi-selection, press and hold the CTRL key and click the desired rows or cells.

The following video explains the selection in Gantt chart :

{% youtube "https://www.youtube.com/watch?v=XqhZdDal93g" %}

## Selection mode

The Gantt component supports three types of selection modes that can be set by using the [`selectionSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings/#mode). They are:

* `Row`: Allows you to select only rows, and the row value is set by default.
* `Cell`: Allows you to select only cells.
* `Both`: Allows you to select rows and cells at the same time.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/bothcellrow-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/bothcellrow-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/bothcellrow-cs1" %}

## Toggle selection

The toggle selection allows you to select and deselect a specific row or cell. To enable toggle selection, set the `enableToggle` property of the selectionSettings to `true`. If you click the selected row or cell, then it will be deselected and vice versa. By default, the `enableToggle` property is set to `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/toggleselection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/toggleselection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/toggleselection-cs1" %}

## Clear selection

You can clear the selected cells and selected rows by using a method called [`clearSelection`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#clearselection). The following code example demonstrates how to clear the selected rows in Gantt Chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/clearselection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/clearselection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/clearselection-cs1" %}

## Get selected row indexes and records

You can get the selected row indexes by using the [`getSelectedRowIndexes`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#getselectedrowindexes) method. And by using [`getSelectedRecords`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#getSelectedRecords) method, you can get the selected record details.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/rowIndex-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/rowIndex-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/rowIndex-cs1" %}

## Multiple Selection based on condition

You can select multiple rows based on condition by using the [`selectRows`](https://ej2.syncfusion.com/angular/documentation/api/grid/#selectrows) method.

In the following code, the rows which contains `TaskId` value as 3 and 4 are selected at initial rendering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/multipleSelection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/multipleSelection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/multipleSelection-cs1" %}

## Touch interaction

The touch interaction feature in the Gantt component allows you to easily interact with the Gantt chart on touch screen devices. This feature is particularly useful for enhancing usability on mobile devices and tablets, making it easier to navigate and interact with the Gantt chart's content using touch gestures.

[Single Row selection](selection/#selection-mode) : When you tap on a row using a touch screen, the tapped row is automatically selected. This offers a straightforward way to select single rows with a touch interface.

[Multiple Row selection](selection/#multiple-row-selection) : To select multiple rows, you can utilize the multi-row selection feature. When you tap on a row, a popup is displayed, indicating the option for multi-row selection. Tap on the popup, and then proceed to tap on the desired rows you want to select. This allows you to select and interact with multiple rows simultaneously, as shown in the following image:

![Multiple selection](../images/multiple-selection.PNG)
