---
layout: post
title: Undo Redo in Angular Gantt component | Syncfusion
description: Learn here all about Undo Redo in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Undo Redo 
documentation: ug
domainurl: ##DomainURL##
---

# Undo Redo in Angular Gantt component

The Undo feature enables users to revert the most recent action performed in the Gantt Chart. It helps undo changes made to tasks, dependencies, or other actions within the Gantt Chart.

The Redo feature can reapply an action that was previously undone using the Undo feature. This allows users to revert their decision to undo an action.

The undo redo feature can be enabled in Gantt by using the [enableUndoRedo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enableundoredo) property.

To use undo redo feature, inject the `UndoRedoService` in the provider section of `AppModule`.

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

In the following code example, `Edit` and `Delete` actions are specified in `undoRedoActions` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs1/src/main.ts %}
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
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/undo-redo/default-cs2" %}

## Perform undo redo actions programatically

You can perform undo and redo actions programatically using [undo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#undo) and [redo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#redo) methods.

The following code example demonstrates how to invoke the `undo` and `redo` method by clicking the external button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/undo-redo/default-cs3" %}

## Retrieve undo and redo stack collection

By default, when an undo or redo action is performed, the actions are stored in an array collection. To retrieve the undo and redo stack array collections, you can use the [`getUndoActions`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#getundoactions) and [`getRedoActions`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#getredoactions) methods.

The following code example demonstrates how to retrieve the undo and redo collection using method by clicking the external button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/undo-redo/default-cs4/src/main.ts %}
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
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/undo-redo/default-cs5" %}
