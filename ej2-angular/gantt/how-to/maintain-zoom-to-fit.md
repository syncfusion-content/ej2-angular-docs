---
layout: post
title: Maintain zoom-to-fit in Angular Gantt component | Syncfusion
description: Learn how to maintain zoom-to-fit functionality in the Syncfusion Angular Gantt component during editing and dynamic data source changes.
platform: ej2-angular
control: Zoom to fit
documentation: ug
domainurl: ##DomainURL##
---

# Maintain zoom-to-fit in Angular Gantt component

The zoom-to-fit functionality in the Angular Gantt component ensures the entire project timeline fits within the viewport, providing an optimal view of all tasks. When using the `zoomToFit` toolbar item, editing actions (e.g., cell edit, dialog edit, taskbar edit) or dynamic `dataSource` changes can cause the timeline to refresh, potentially losing the zoomed view. By leveraging the [`fitToProject`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#fittoproject) method, you can maintain the zoom-to-fit state seamlessly. For editing actions, call `fitToProject` in the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/gantt/events#actioncomplete) and [`taskbarEdited`](https://ej2.syncfusion.com/angular/documentation/gantt/events#taskbaredited) events to reapply zoom-to-fit after modifications like updating task durations or dependencies. For dynamic `dataSource` changes, such as adding or removing tasks, invoke `fitToProject` in the [`dataBound`](https://ej2.syncfusion.com/angular/documentation/gantt/events#databound) event to adjust the timeline automatically. Ensure `ToolbarService` is injected and `toolbar` includes `zoomToFit` to enable this feature, with valid [`timelineSettings`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#timelinesettings) configured for accurate rendering. This approach maintains a consistent project overview, integrating with task scheduling, dependencies, and critical path for efficient project management.

The following example demonstrates how to use `fitToProject` after performing edit actions:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/how-to/maintainzoomtofit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/how-to/maintainzoomtofit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/how-to/maintainzoomtofit-cs1" %}

The following example demonstrates how to use `fitToProject` after dynamically changing the data source:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/how-to/maintainzoomtofitdatasource-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/how-to/maintainzoomtofitdatasource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/how-to/maintainzoomtofitdatasource-cs1" %}

## See also
- [How to configure timeline settings?](https://ej2.syncfusion.com/angular/documentation/gantt/timeline)
- [How to configure toolbar?](https://ej2.syncfusion.com/angular/documentation/gantt/toolbar)
- [How to manage task editing?](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/editing-tasks)