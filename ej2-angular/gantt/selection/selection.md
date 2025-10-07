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

The Selection feature provides the ability to highlight a row or cell in the Gantt component. Selection can be performed using arrow keys or mouse scrolling.

To disable selection, set the [allowSelection](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowselection) property to **false**.

To enable selection functionality, inject the [SelectionService](https://ej2.syncfusion.com/angular/documentation/api/gantt/#selectionmodule) module in the **providers** section of your Angular application.

The Gantt component supports two types of selection that can be set by using the [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings/#type) property. They are:

* **Single:** Allows selection of only one row or cell at a time. This is the default behavior.
* **Multiple:** Enables selection of multiple rows or cells. To perform multi-selection, press and hold the **CTRL** key while clicking the desired rows or cells.

The following video explains the selection in Gantt chart :

{% youtube "https://www.youtube.com/watch?v=XqhZdDal93g" %}

## Selection mode

The Gantt component supports three types of selection modes, which can be set using the [selectionSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings/#mode) property: 

* **Row:** Allows selection of rows only. This is the default mode.
* **Cell:** Allows selection of cells only.
* **Both:** Allows selection of both rows and cells at the same time.

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

Toggle selection allows selecting and deselecting a specific row or cell. To enable this feature, set the [enableToggle](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings/#enabletoggle) property of `selectionSettings` to **true**.

When enabled, clicking a selected row or cell will deselect it, and clicking it again will reselect it. By default, the `enableToggle` property is set to **false**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/toggleselection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/toggleselection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/toggleselection-cs1" %}

## Hover highlighting

The hover highlighting feature in the Syncfusion Angular Gantt Chart improves interaction by highlighting **tree grid rows, chart task bars, header cells, and timeline cells** when hovered. This makes it easier to follow tasks in complex project timelines.

To enable this feature, set the [enableHover](https://ej2.syncfusion.com/angular/api/gantt/#enablehover) property to **true** in the component. By default, this property is set to **false**.

The following code example shows how to enable the hover highlighting in Gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/selection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/selection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/selection-cs1" %}

## Clear selection

To clear selected rows and cells in the Gantt component, use the [clearSelection](https://ej2.syncfusion.com/angular/documentation/api/gantt/#clearselection) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/selection/clearselection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/selection/clearselection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/selection/clearselection-cs1" %}

## Touch interaction

The Syncfusion Angular Gantt Chart supports touch interaction, making it easier to navigate and interact with chart elements on touch-enabled devices such as smartphones and tablets. This feature enhances usability by allowing intuitive gestures for selecting and managing tasks.

[Single Row selection](selection/row-selection/#selection-mode): Tapping a row on a touch screen automatically selects it, providing a simple and direct way to interact with the chart.

[Multiple Row selection](selection/row-selection/#multiple-row-selection): To select multiple rows, tap a row to display a popup that activates multi-selection mode. After tapping the popup, continue tapping the desired rows to select them. This enables selection of multiple rows at once, as shown in the following image:

![Multiple selection](../images/multiple-selection.PNG)
