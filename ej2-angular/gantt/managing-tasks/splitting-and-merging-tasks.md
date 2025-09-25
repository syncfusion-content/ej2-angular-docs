---
layout: post
title: Splitting and merging tasks in Angular Gantt component | Syncfusion
description: Learn how to split and merge tasks in the Syncfusion Angular Gantt component for flexible task management in project timelines.
platform: ej2-angular
control: Splitting and merging tasks
documentation: ug
domainurl: ##DomainURL##
---

# Splitting and merging tasks in Angular Gantt component

Splitting and merging tasks in the Angular Gantt component enhances project management by allowing tasks to be divided into segments or recombined, representing breaks or continuous work periods. Split tasks at load time using [`taskFields.segments`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#segments) for hierarchical data or [`taskFields.segmentId`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#segmentId) for self-referential data, ensuring segments fit within the task’s start and end dates. Dynamically split tasks via the dialog’s Segments tab or context menu’s Split Task option, requiring `EditService` and valid `taskFields` mappings. Merge tasks using the context menu’s Merge Task option or by dragging segments together in the UI, with [`enableContextMenu`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablecontextmenu) and `ContextMenuService` enabled. Ensure tasks have sufficient width relative to the timeline unit and are not parent or milestone tasks to enable splitting, and avoid using split tasks with multi-taskbar features to maintain compatibility.

## Split tasks at load time

Define task segments at load time using [`taskFields.segments`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#segments) or [`taskFields.segmentId`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#segmentId) mapped. This splits tasks into segments within their original start and end dates, ideal for representing interruptions like holidays in a project schedule.

For more details, see [Split task at load time](https://ej2.syncfusion.com/angular/documentation/gantt/data-binding#split-task).

## Split tasks dynamically

Split tasks dynamically using the dialog or context menu, requiring [`taskFields.segments`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#segments) or [`taskFields.segmentId`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#segmentId) mapped, `EditService` injected, and [`editSettings.allowEditing`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowediting) enabled:
- **Dialog**: The Segments tab in the add/edit dialog allows splitting tasks based on their start and end dates.
- **Context Menu**: Enable [`enableContextMenu`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablecontextmenu) and inject `ContextMenuService` to include the Split Task option in the context menu, enabling task splitting with a right-click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/split-tasks-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/split-tasks-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/managing-tasks/split-tasks-cs1" %}

## Merge tasks dynamically

Merge split tasks using the context menu’s `Merge Task` option, requiring [`enableContextMenu`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablecontextmenu) and `ContextMenuService`, or by dragging segments together in the UI. This recombines segments into a single task, ensuring continuity in the project timeline, with `EditService` and valid `taskFields` mappings required.

## Limitations of Split tasks

1. Parent and milestone tasks cannot be split into segments.
2. The task must have a width greater than the timeline unit cell in order to be split.
3. Split task is not supported with `Multi taskbar`.

## See also
- [How to bind data in Gantt?](https://ej2.syncfusion.com/angular/documentation/gantt/data-binding)
- [How to configure task editing?](https://ej2.syncfusion.com/angular/documentation/gantt/editing)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)

