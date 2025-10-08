---
layout: post
title: Zooming functionality in Angular Gantt component | Syncfusion
description: Explore zooming options in the Syncfusion Angular Gantt component, including Zoom In, Zoom Out, Zoom To Fit, and custom zooming levels.
platform: ej2-angular
control: Zooming
documentation: ug
domainurl: ##DomainURL##
---

# Zooming functionality in Angular Gantt component

The Angular Gantt component provides zooming support to adjust the timeline view dynamically. This includes increasing or decreasing the width of timeline cells and changing the timeline units to view tasks across various timespan from minutes to decades.

To enable zooming features, add `ZoomIn`, `ZoomOut`, and `ZoomToFit` to the toolbar items collection. These actions can also be triggered externally using the built-in methods like [zoomIn](https://ej2.syncfusion.com/angular/documentation/api/gantt/#zoomin), [zoomOut](https://ej2.syncfusion.com/angular/documentation/api/gantt/#zoomout), and [fitToProject](https://ej2.syncfusion.com/angular/documentation/api/gantt/#fittoproject).

**Zoom in**

This support is used to increase the timeline width and timeline unit from years to minutes timespan. When the `ZoomIn` icon was clicked, the timeline cell width is increased when the cell size exceeds the specified range and the timeline unit is changed based on the current zoom levels.

**Zoom out**

This support is used to increase the timeline width and timeline unit from minutes to years timespan. When the `ZoomOut` icon was clicked, the timeline cell width is decreased when the cell size falls behind the specified range and the timeline view mode is changed based on the current zooming levels.

**Zoom to fit**

This support is used to view all the tasks available in a project within available area on the chart part of Gantt. When users click the `ZoomToFit` icon, then all the tasks are rendered within the available chart container width.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/zooming/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/zooming/default-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/zooming/default-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/zooming/default-cs1" %}

## Customizing zooming levels

Zoom actions are governed by predefined zooming levels specified in the [zoomingLevels](https://ej2.syncfusion.com/angular/documentation/api/gantt/#zoominglevels) property. These levels can be customized by assigning a collection of zoom configurations to the `zoomingLevels` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/zooming/custom-zooming-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/zooming/custom-zooming-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/zooming/custom-zooming-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/zooming/custom-zooming-cs1" %}

## Zoom actions via methods

Zooming actions can be triggered dynamically or through external controls using the following methods:

* **Zoom In** - Use [zoomIn](https://ej2.syncfusion.com/angular/documentation/api/gantt/#zoomin) when `ZoomIn` external button was clicked, the timeline cell width is increased when the cell size exceeds the specified range and the timeline unit is changed based on the current zoom levels.
* **Zoom Out** - Use [zoomOut](https://ej2.syncfusion.com/angular/documentation/api/gantt/#zoomout) when the `ZoomOut` external button was clicked, the timeline cell width is decreased when the cell size falls behind the specified range and the timeline view mode is changed based on the current zooming levels.
* **Zoom To Fit** - Use [fitToProject](https://ej2.syncfusion.com/angular/documentation/api/gantt/#fittoproject) When `ZoomToFit` external button was clicked then all the tasks are rendered within the available chart container width.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/zooming/method-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/zooming/method-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/zooming/method-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/zooming/method-cs1" %}