---
layout: post
title: Selection in Angular HeatMap chart component | Syncfusion
description: Learn here all about Selection in Syncfusion Angular HeatMap chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Selection 
documentation: ug
domainurl: ##DomainURL##
---

# Selection in Angular HeatMap chart component

In the HeatMap, the cell selection is used to select single or multiple HeatMap cells at runtime and get the selected cell details using the [cellSelected](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#cellselected) event. You can enable the cell selection using the [allowSelection](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#allowselection) property.

The HeatMap cells can be selected using the following interactions, as shown in the table below.

|   Modes of Interactions |   Description                                                                                                      |
|------------------------ | -------------------------------------------------------------------------------------------------------------------|
|   Mouse                 |  HeatMap cells can be selected by clicking or dragging and dropping over them.                                     |
|   Touch                 |  HeatMap cells can be selected by tapping or dragging and dropping over them.                                      |
|   Keyboard              |  The **Ctrl** key on the keyboard can be used to enable multiple cell selection with mouse and touch interaction. The **Ctrl** key can only be used if the `enableMultiSelect` property is set to **true** in order to enable multiple cell selection.                                                                                                                                     |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/selection/cellSelection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/selection/cellSelection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/selection/cellSelection-cs1" %}

## Enable single cell selection

In the HeatMap, the [enableMultiSelect](https://helpej2.syncfusion.com/angular/documentation/api/heatmap/#enablemultiselect) property is used to allow single cell selection. When you set the `enableMultiSelect` property to **false**, only one cell is selected. By default, `enableMultiSelect` property is set to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/selection/singleCellSelection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/selection/singleCellSelection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/selection/singleCellSelection-cs1" %}

### Clearing cell selection

The [clearSelection](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#clearselection) method can be used to clear all the selected cells. The below example illustrates the same.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/selection/clearSelection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/selection/clearSelection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/selection/clearSelection-cs1" %}
