---
layout: post
title: Task bar editing in Angular Gantt component | Syncfusion
description: Learn how to edit tasks via taskbar interactions in the Syncfusion Angular Gantt component for intuitive project timeline adjustments.
platform: ej2-angular
control: Task bar editing
documentation: ug
domainurl: ##DomainURL##
---

# Task bar editing in Angular Gantt component

Task bar editing in the Angular Gantt component enables intuitive project timeline adjustments by allowing to drag or resize taskbars to modify task details, such as start dates, durations, or progress, using mouse or touch interactions. Enable this feature by setting the [allowTaskbarEditing](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowtaskbarediting) property to **true** and injecting `EditService`, ensuring task data aligns with valid [taskFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskfields) mappings (e.g., id, startDate, duration). Taskbars can be dragged to shift dates, resize them to adjust durations, or move progress grips to update completion percentages. The [taskbarEditing](https://ej2.syncfusion.com/angular/documentation/gantt/events#taskbarediting) event allows preventing edits for specific tasks, while the [queryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#querytaskbarinfo) event customizes taskbar visuals by hiding editing indicators like resizers or connector points.

## Edit taskbars

Enable taskbar editing by setting [allowTaskbarEditing](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowtaskbarediting) to **true** and injecting `EditService`. Drag taskbars to adjust start and end dates, resize them to modify durations, or adjust progress grips to update completion percentages, ideal for quick timeline updates.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/taskbaredit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/taskbaredit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/managing-tasks/taskbaredit-cs1" %}

## Prevent taskbar editing for specific tasks

Prevent taskbar editing for specific tasks using the [taskbarEditing](https://ej2.syncfusion.com/angular/documentation/gantt/events#taskbarediting) event by setting its `cancel` property to **true** based on task data, such as protecting milestones. Customize taskbar visuals by hiding editing indicators (e.g., resizers, connector points) using the [queryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#querytaskbarinfo) event, ensuring a tailored editing experience.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/prevent-taskbaredit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/prevent-taskbaredit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/managing-tasks/prevent-taskbaredit-cs1" %}

## See also
- [How to configure task editing?](https://ej2.syncfusion.com/angular/documentation/gantt/editing)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)
- [How to configure critical path?](https://ej2.syncfusion.com/angular/documentation/gantt/critical-path)