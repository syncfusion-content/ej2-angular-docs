---
layout: post
title: Immutable Mode in Angular Gantt Chart Component | Syncfusion
description: Learn how to enable immutable mode in the Syncfusion Angular Gantt Chart component for optimized task rendering and performance with large datasets.
platform: ej2-angular
control: Immutable
documentation: ug
domainurl: ##DomainURL##
---

# Immutable Mode in Angular Gantt Chart Component

Immutable mode optimizes the Angular Gantt Chart component’s rendering performance by minimizing unnecessary re-renders, ideal for large projects with hundreds of tasks or frequent updates like real-time progress tracking. When enabled via the [enableImmutableMode](https://ej2.syncfusion.com/angular/documentation/api/gantt#enableimmutablemode) property, the component uses object reference comparison to identify changed tasks, re-rendering only modified or new rows while preserving unchanged rows’ DOM elements. This reduces DOM operations, CPU usage, and rendering time, ensuring smooth interactions for complex hierarchies or batch updates. For example, updating a single task’s progress in a 1,000-task project re-renders only that task’s row, significantly improving performance over standard mode, which re-renders all visible rows.

## Configure immutable mode

Immutable mode requires a unique primary key in the data source, configured via the [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/gantt/column#isprimarykey) property, and valid [taskFields](https://ej2.syncfusion.com/angular/documentation/api/gantt#taskfields) mappings (e.g., id to a unique field like TaskID). The component compares object references to detect changes, requiring immutable data patterns where updates create new objects rather than mutating existing ones. Hierarchical task updates (e.g., parent-child tasks) are efficiently handled by checking only changed references, preserving nested structures.

**Configuration requirements**
- **Primary key**: Set `isPrimaryKey` to **true** on a unique column (e.g., TaskID) to ensure accurate change detection.
- **Unique identifiers**: Assign stable, unique IDs to all tasks via `taskFields.id`.
- **Immutable data**: Create new objects for updates (e.g., { ...task, progress: 50 }) to trigger reference changes.

The following example enables immutable mode:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/immutable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/immutable-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/immutable-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/immutable-cs1" %}

## Feature compatibility and limitations

Immutable mode is incompatible with certain features due to its reference-based change detection:
- **Column reordering**: Conflicts with reference tracking, requiring temporary disabling of `enableImmutableMode`.
- **Virtualization**: Incompatible with [enableVirtualization](https://ej2.syncfusion.com/angular/documentation/api/gantt#enablevirtualization), as both optimize rendering differently; choose based on dataset size.

For small datasets, standard rendering may suffice. For dynamic column operations, disable immutable mode temporarily. While immutable mode reduces rendering time, it may increase memory usage to maintain object references, a trade-off to consider for extremely large projects.

## See also
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)
- [How to enable virtual scrolling?](https://ej2.syncfusion.com/angular/documentation/gantt/scrolling/virtual-scrolling)
- [How to configure critical path?](https://ej2.syncfusion.com/angular/documentation/gantt/critical-path)