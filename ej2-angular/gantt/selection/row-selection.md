---
layout: post
title: Row selection in Angular Gantt component | Syncfusion
description: Learn here all about Row selection in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row selection 
documentation: ug
domainurl: ##DomainURL##
---

# Row selection in Angular Gantt component

The row selection in the Gantt component can be enabled or disabled using the [`allowSelection`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowselection) property. You can get the selected row object using the [`getSelectedRecords`](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection/#getselectedrecords) method. The following code example shows how to disable the row selection in Gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/disableselect-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/selection/disableselect-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/disableselect-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/disableselect-cs1" %}

> `Row` Selection is default type of gantt selection.

## Selecting a row on initial load

You can select a row at the time of loading by setting the index of the row to the [`selectedRowIndex`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#selectedrowindex) property. Find the following code example for details.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/selectrow-initial-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/selection/selectrow-initial-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/selectrow-initial-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/selectrow-initial-cs1" %}

## Selecting a row dynamically

You can also select a row dynamically using the [`selectRow`](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection/#selectrow) method. The following code demonstrates how to select a row dynamically by clicking the custom button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/selectrow-dynamic-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/selection/selectrow-dynamic-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/selectrow-dynamic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/selectrow-dynamic-cs1" %}

## Multiple row selection

You can select multiple rows by setting the [`selectionSettings.type`](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings/#type) property to `multiple`. You can select more than one row by holding down the CTRL key while selecting multiple rows. The following code example explains how to enable multiple selection in Gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/multiplerow-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/selection/multiplerow-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/multiplerow-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/multiplerow-cs1" %}

## Selecting multiple rows dynamically

You can also select rows dynamically using the [`selectRows`](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection/#selectrows) method. The following code demonstrates how to select rows dynamically by clicking the custom button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/multiplerow-dynamic-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/selection/multiplerow-dynamic-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/multiplerow-dynamic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/multiplerow-dynamic-cs1" %}

## Customize row selection action

While selecting a row in Gantt, the [`rowSelecting`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowselecting) and [`rowSelected`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowselected) events will be triggered. The the [`rowSelecting`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowselecting) event will be triggered on initialization of row selection, and you can get the previously selected row and current selecting row’s information, which is used to prevent selection of a particular row. The [`rowSelected`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowselected) event will be triggered on completion of row selection action, and you can get the current selected row’s information through this event. The following code example demonstrates how to prevent the selection of a row using the [`rowSelecting`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowselecting) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/customize-rowselection-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/selection/customize-rowselection-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/customize-rowselection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/customize-rowselection-cs1" %}

In the Gantt component, when you click an already selected row, selection will be cleared. While deselecting a row in Gantt, the [`rowDeselecting`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdeselecting) and [`rowDeselected`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdeselected) events will occur. The [`rowDeselecting`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdeselecting) event will occur on initialization of deselecting row, and you can get the current deselecting row’s information to prevent the deselection of particular row. The [`rowDeselected`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdeselected) event will occur on completion of row deselection action, and you can get the current deselected row’s information.