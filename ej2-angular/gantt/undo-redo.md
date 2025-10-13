---
layout: post
title: Undo redo in Angular Gantt component | Syncfusion
description: Learn how to configure undo redo actions in the Syncfusion Angular Gantt component for reverting task edits, dependencies, and project changes.
platform: ej2-angular
control: Undo redo
documentation: ug
domainurl: ##DomainURL##
---

# Undo redo in Angular Gantt component

The undo redo feature in the Angular Gantt component allows users to revert or reapply actions like task edits, deletions, or dependency changes, enhancing project management by correcting mistakes efficiently. Enabled via the [enableUndoRedo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enableundoredo) property, it supports actions such as editing task details, dragging taskbars, or reordering columns, provided the `UndoRedoService` is injected. For example, undoing a task duration change restores the original timeline, while redoing it reapplies the edit. The [undoRedoActions](https://ej2.syncfusion.com/angular/documentation/api/gantt/#undoredoactions) property specifies which actions to track (e.g., Edit, Delete), defaulting to a comprehensive set including sorting, filtering, and zooming. The [undoRedoStepsCount](https://ej2.syncfusion.com/angular/documentation/api/gantt/#undoredostepscount) property limits the action history, defaulting to 10, with older actions removed as new ones are added. This feature ensures history management for complex projects with hierarchical tasks or frequent updates.

## Configure undo redo

Enable undo redo by setting [enableUndoRedo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enableundoredo) to **true** and injecting `UndoRedoService` in the Angular module’s providers. The [undoRedoActions](https://ej2.syncfusion.com/angular/documentation/api/gantt/#undoredoactions) property customizes supported actions, such as:
- **Edit:** Reverts task field changes (e.g., StartDate, Duration) via dialog or taskbar drag, requiring `EditService`.
- **Delete:** Restores deleted tasks, requiring `EditService`.
- **Add:** Removes added tasks, requiring `EditService`.
- **Column Reorder:** Reverts column reordering, requiring `ReorderService`.
- **Indent/Outdent:** Reverts hierarchy changes, requiring `EditService`.
- **Row Drag And Drop:** Restores row positions, requiring `RowDDService`.
- **Taskbar Drag And Drop:** Reverts taskbar drags, requiring `EditService`.
- **Sorting, Filtering, Search:** Reverts grid operations, requiring respective services.
- **Zoom In, Zoom Out, Zoom To Fit:** Reverts timeline zoom changes.
- **ColumnState:** Restores column visibility.
- **Previous Time Span, Next Time Span:** Reverts timeline navigation.

The [undoRedoStepsCount](https://ej2.syncfusion.com/angular/documentation/api/gantt/#undoredostepscount) property sets the action history limit (e.g., 5); setting it to **0** disables undo/redo. Ensure dependencies like `EditService` or `RowDDService` are injected for actions like Edit or RowDragAndDrop.

## Configure the feature set for undo redo actions

By default, all the gantt features listed in the below table will be restored for undo and redo actions. However, you have the option to specify only the required actions to be restored using [undoRedoActions](https://ej2.syncfusion.com/angular/documentation/api/gantt/#undoredoactions) property.

| Built-in Undo Redo Items | Actions |
|------------------------|---------|
| Edit | Undo redo actions can be performed for edited record.|
| Delete | Undo redo actions can be performed for deleted record.|
| Add | Undo redo actions can be performed for newly added record.|
| ColumnReorder | Undo redo actions can be performed for reordered column.|
| Indent | Undo redo actions can be performed for indented record.|
| Outdent | Undo redo actions can be performed for outdented record.|
| ColumnResize | Undo redo actions can be performed for resized column.|
| Sorting | Undo redo actions can be performed for sorted column.|
| Filtering | Undo redo actions can be performed for filtered record.|
| Search | Undo redo actions can be performed for searched value.|
| ZoomIn | Undo redo actions can be performed for zoomIn action.|
| ZoomOut | Undo redo actions can be performed for zoomOut action.|
| ZoomToFit | Undo redo actions can be performed for zoomToFit action.|
| ColumnState | Undo redo actions can be performed for hided or shown columns.|
| RowDragAndDrop | Undo redo actions can be performed for row drag and drop.|
| TaskbarDragAndDrop |  Undo redo actions can be performed for taskbar drag and drop.|
| PreviousTimeSpan | Undo redo actions can be performed for previous time span acton.|
| NextTimeSpan | Undo redo actions can be performed for next time span action.|

In the following code example, **Edit** and **Delete** actions are specified in `undoRedoActions` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/undo-redo/default-cs1" %}

## Configuring the Storage Step Count for Undo and Redo Actions

You can specify the number of actions to be stored for undo and redo operations using the [undoRedoStepsCount](https://ej2.syncfusion.com/angular/documentation/api/gantt/#undoredostepscount) property.

By default, the value of `undoRedoStepsCount` is set to 10.

When the number of actions performed exceeds the `undoRedoStepsCount`, the oldest action in the undo collection is removed, and the latest action performed is added to the collection. This ensures that the number of stored actions does not exceed the specified limit, maintaining efficient memory usage.

In the following example, `undoRedoStepsCount` value is set to 5.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs2/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs2/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/undo-redo/default-cs2" %}

This code allows reverting task edits (e.g., changing a task’s duration) or deletions, with up to 5 actions stored.

## Programmatic Undo/Redo in Gantt Chart

Programmatic control over undo redo is achieved using methods like [undo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#undo) to revert actions, [redo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#redo) to reapply them.

The following example triggers `undo` and `redo` via external buttons:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs3/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs3/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/undo-redo/default-cs3" %}

## Retrieve undo and redo stack collection

By default, when an undo or redo action is performed, the actions are stored in an array collection. To retrieve the undo and redo stack array collections, you can use the [getUndoActions](https://ej2.syncfusion.com/angular/documentation/api/gantt/#getundoactions) and [getRedoActions](https://ej2.syncfusion.com/angular/documentation/api/gantt/#getredoactions) methods.

The following code example demonstrates how to retrieve the **undo** and **redo** collection using method by clicking the external button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs4/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs4/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/undo-redo/default-cs4" %}

## Clear undo and redo collection

At any point, you can clear the undo and redo collections using [clearUndoCollection](https://ej2.syncfusion.com/angular/documentation/api/gantt/#clearundocollection) and [clearRedoCollection](https://ej2.syncfusion.com/angular/documentation/api/gantt/#clearredocollection) methods. This allows you to reset the undo and redo stacks as needed during runtime.

The following code example demonstrates how to clear the undo and redo collection using method by clicking the external button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs5/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs5/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/undo-redo/default-cs5" %}

## See also
- [How to configure task editing?](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/task-bar-editing)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)
- [How to configure critical path?](https://ej2.syncfusion.com/angular/documentation/gantt/critical-path)