---
layout: post
title: Style and appearance in Angular Gantt component | Syncfusion
description: Learn here all about Style and appearance in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Style and appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Style and appearance in Angular Gantt component

To modify the Gantt Chart appearance, you need to override the default CSS of gantt chart. Please find the list of CSS classes and its corresponding section in Gantt Chart. Also, you have an option to create your own custom theme for all the JavaScript controls using our [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material).

Section | CSS Class | Purpose of Class
-----|-----|-----
**Root**|e-gantt|This class is in the root element (div) of the gantt chart control.
**Header**|e-gridheader|This class is added in the root element of header element. In this class, You can override thin line between header and content of the gantt chart.
||e-table|This class is added at 'table' of the gantt chart header. This CSS class makes table width as 100 %.
||e-columnheader|This class is added at 'tr' of the gantt chart header.
**Grid Content**|e-gridcontent|This class is added at root of body content. This is to override background color of the body.
||e-table|This class is added to table of content. This CSS class makes table width as 100 %.
||e=row|This class is added to rows of gantt chart.
||e-altrow|This class is added to alternate rows of gantt chart. This is to override alternate row color of the gantt chart.
||e-rowcell|This class is added to all cells in the gantt chart. This is to override cells appearance and styling.
**Chart Content**|e-gantt-chart|This class is added to the chart side of the gantt chart.
||e-chart-row|This class is added to rows of gantt chart.
**Timeline**|e-timeline-header-container|This class is added to timeline of the gantt chart.
||e-header-cell-label|This class is added to the header cell of the timeline.
||e-weekend-header-cell|This class is added to the weekend cells.
**Taskbar**|e-taskbar-main-container|This class is added to taskbar of the gantt chart.
||e-gantt-parent-taskbar|This class is added to the parent task bar of the gantt chart.
||e-gantt-milestone|This class is added to the milestone tasks of the gantt chart.
||e-gantt-unscheduled-taskbar|This class is added to the unscheduled tasks.
||e-gantt-manualparenttaskbar|This class is added to the manual scheduled parent taskbar.
||e-gantt-child-manualtaskbar|This class is added to the manual scheduled child taskbar.
||e-gantt-unscheduled-manualtask|This class is added to the manual unscheduled tasks.
**Splitter**|e-split-bar|This class is added to the gantt chart splitter.
||e-resize-handler|This class is added to the resize handler of the gantt chart splitter.
||e-arrow-left|This class is added to the left arrow of the resize handler.
||e-arrow=right|This class is added to the right arrow of the resize handler.
**Connector Lines**|e-line|This class is added to the connector lines.
||e-connector-line-right-arrow|This class is added to the right arrow of the connector line.
||e-connector-line-left-arrow|This class is added to the left arrow of the connector line.
**Labels**|e-task-label|This class is added to the task labels.
||e-right-label-container|This class is added to the right label.
||e-left-label-container|This class is added to the left label.
**Event Markers**|e-event-markers|This class is added to the event markers.
**Baseline**|e-baseline-bar|This class is added to the baseline.
||e-baseline-gantt-milestone-container|This class is added to the baseline of milestone tasks.
**Tooltip**|e-gantt-tooltip|This class is added to the tooltip.

## Grid lines

In Gantt component, you can show or hide the grid lines in the TreeGrid side and chart side by using the [`gridLines`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#gridlines) property.

The following options are available in Gantt component for rendering grid lines,

* Horizontal: The horizontal grid lines alone will be visible.
* Vertical: The vertical grid lines alone will be visible.
* Both: Both the horizontal and vertical grid lines will be visible on the TreeGrid and chart sides.
* None: Gridlines will not be visible on TreeGird and chart sides.

> By default, the [`gridLines`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#gridLines) property is set with `Horizontal` type.

The following code example shows how to change the gridlines rendering mode in the Gantt component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/gridlines-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/appearance-customization/gridlines-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/gridlines-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/appearance-customization/gridlines-cs1" %}