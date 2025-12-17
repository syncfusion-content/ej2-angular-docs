---
layout: post
title: Eventmarkers in Angular Gantt component | Syncfusion
description: Learn here all about Eventmarkers in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Eventmarkers 
documentation: ug
domainurl: ##DomainURL##
---

# Event markers in Angular Gantt component

Event markers highlight significant project events by displaying vertical timeline indicators that span across the entire Gantt chart. These markers identify critical dates, milestones, deadlines, or important project events that affect multiple tasks or the overall project timeline, providing visual reference points for project-wide activities.

Understanding event markers implementation enables effective visualization of project-critical dates and enhances timeline awareness across all project phases.

Event markers utilize specific properties to define their positioning, appearance, and identification within the project timeline:

**Date positioning**: The [day](https://ej2.syncfusion.com/angular/documentation/api/gantt/eventMarker/#day) property establishes the exact timeline date where the marker appears. This date value determines marker placement across the entire vertical timeline, ensuring accurate project event representation.

**Descriptive labeling**: The [label](https://ej2.syncfusion.com/angular/documentation/api/gantt/eventMarker/#label) property provides descriptive text that identifies the marker's purpose or significance. Labels enhance user understanding by clearly indicating what project event the marker represents.

**Visual customization**: The [cssClass](https://ej2.syncfusion.com/angular/documentation/api/gantt/eventMarker/#cssclass) property enables custom styling through CSS class applications. This property allows distinctive visual treatment for different marker types, supporting color coding, styling variations, and brand consistency.

**Vertical adjustment**: The [top](https://ej2.syncfusion.com/angular/documentation/api/gantt/eventMarker/#top) property specifies the vertical offset (in pixels) of the marker from the top of the chart pane's content area. This property helps prevent visual overlap when multiple markers share the same date, ensuring clear and organized marker placement.

## Event marker configuration

Event markers render as vertical lines positioned at specific dates across the entire Gantt timeline, distinguishing them from data markers which appear within individual task rows. This project-wide visibility ensures critical dates remain prominent regardless of the current view or task focus.

**Timeline integration**: Event markers integrate seamlessly with the Gantt timeline, appearing as vertical indicators that extend from the top to the bottom of the chart area. This comprehensive visibility ensures important dates remain visible during scrolling, zooming, or filtering operations.

**Configuration requirements**: Event markers require the `DayMarkersService` injection in the AppModule providers section to enable rendering functionality. This service manages marker positioning, styling, and timeline integration logic.

**Multiple marker support**: The component supports multiple event markers simultaneously, allowing comprehensive tracking of various project-critical dates within the same timeline view. Each marker maintains independent configuration while sharing the common timeline space.

**Service integration**: Event marker functionality requires the [eventMarkers](https://ej2.syncfusion.com/angular/documentation/api/gantt/#eventmarkers) property initialization combined with `DayMarkersService` injection to enable proper rendering and timeline integration.

The following implementation demonstrates event marker integration within a Gantt chart, showcasing timeline-wide event highlighting:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/eventmarkers/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/eventmarkers/default-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/eventmarkers/default-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/eventmarkers/default-cs1" %}

## Programmatically show and hide event markers

You can programmatically show or hide event markers in the Gantt Chart by updating the [eventMarkers](https://ej2.syncfusion.com/angular/documentation/api/gantt/#eventmarkers) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/eventmarkers/show-hide-eventmaker/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/eventmarkers/show-hide-eventmaker/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/eventmarkers/show-hide-eventmaker/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/eventmarkers/show-hide-eventmaker" %}

## See Also

- [How to bind data to the Gantt chart?](https://ej2.syncfusion.com/angular/documentation/gantt/data-binding)
- [How to enable context menu in Gantt chart?](https://ej2.syncfusion.com/angular/documentation/gantt/context-menu)
- [How to compare planned vs. actual schedules?](https://ej2.syncfusion.com/angular/documentation/gantt/baseline)
- [How to visualize critical tasks in Gantt chart?](https://ej2.syncfusion.com/angular/documentation/gantt/critical-path)
- [How to highlight task-specific events?](https://ej2.syncfusion.com/angular/documentation/gantt/data-markers)