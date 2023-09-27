---
layout: post
title: Zooming in Angular Gantt component | Syncfusion
description: Learn here all about Zooming in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Zooming 
documentation: ug
domainurl: ##DomainURL##
---

# Zooming in Angular Gantt component

The zooming support provides options to increase or decrease the width of timeline cells and also provides options to change the timeline units dynamically. This support enables you to view the tasks in a project clearly from minute to decade timespan. To enable the zooming features, define the `ZoomIn`, `ZoomOut`, and `ZoomToFit` items to toolbar items collections, and this action can be performed on external actions such as button click using the [`zoomIn`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#zoomin), [`zoomOut`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#zoomout), and [`fitToProject`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#fittoproject) built-in methods. The following zooming options are available to view the project:

## Zoom in

This support is used to increase the timeline width and timeline unit from years to minutes timespan. When the `ZoomIn` icon was clicked, the timeline cell width is increased when the cell size exceeds the specified range and the timeline unit is changed based on the current zoom levels.

## Zoom out

This support is used to increase the timeline width and timeline unit from minutes to years timespan. When the `ZoomOut` icon was clicked, the timeline cell width is decreased when the cell size falls behind the specified range and the timeline view mode is changed based on the current zooming levels.

## Zoom to fit

This support is used to view all the tasks available in a project within available area on the chart part of Gantt. When users click the `ZoomToFit` icon, then all the tasks are rendered within the available chart container width.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/zooming/default-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/zooming/default-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/zooming/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/zooming/default-cs1" %}

## Customizing zooming levels

In Gantt, the zoom in and zoom out actions are performed based on the predefined zooming levels in the `zoomingLevels` property. You can customize the zooming actions by defining the required zooming collection to the `zoomingLevels` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/zooming/custom-zooming-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/zooming/custom-zooming-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/zooming/custom-zooming-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/zooming/custom-zooming-cs1" %}

## Zoom action by methods

You can perform the various zoom actions dynamically or on external click action using the following methods:
* Zoom in - [`zoomIn`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#zoomin)
* Zoom out - [`zoomOut`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#zoomout)
* Fit to project - [`fitToProject`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#fittoproject)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/zooming/method-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/zooming/method-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/zooming/method-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/zooming/method-cs1" %}