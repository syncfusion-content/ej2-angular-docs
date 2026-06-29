---
layout: post
title: Adding New Tasks in Angular Gantt Chart Component | Syncfusion
description: Learn how to add tasks dynamically in the Syncfusion Angular Gantt Chart component using toolbar, context menu, or programmatic methods for project management.
platform: ej2-angular
control: Adding new tasks
documentation: ug
domainurl: ##DomainURL##
---

# Adding New Tasks in Angular Gantt Chart Component

Adding new tasks to the Angular Gantt Chart component enables flexible project management by inserting tasks like milestones or subtasks using the toolbar, context menu, or programmatic methods. With [editSettings.allowAdding](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings#allowadding) enabled and `EditService` injected, tasks can be added at the top, as children, or at specific positions, seamlessly integrating with dependencies and critical path calculations. Ensure task data aligns with [taskFields](https://ej2.syncfusion.com/angular/documentation/api/gantt#taskfields) mappings (e.g., id, name, startDate) for successful addition, and verify parent rows support subtasks when adding child tasks. The toolbar opens a dialog for task details, the context menu provides positional options, and the [addRecord](https://ej2.syncfusion.com/angular/documentation/api/gantt#addrecord) method offers precise control, making task creation efficient for dynamic project updates.

## Add tasks via toolbar

Enable task addition through the toolbar by setting [editSettings.allowAdding](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings#allowadding) to **true** and injecting `EditService`. Clicking the toolbar’s **Add** icon opens a dialog to enter details like task name, start date, and duration, adding the task at the top of the Gantt chart. This is ideal for quickly inserting high-level tasks or milestones, with all required fields (e.g., TaskID) validated for successful creation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/addrow-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/addrow-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/managing-tasks/addrow-toolbar-cs1" %}

## Add tasks via context menu

Enable context menu task addition by setting [enableContextMenu](https://ej2.syncfusion.com/angular/documentation/api/gantt#enablecontextmenu) to **true**, injecting `ContextMenuService` and `EditService`, and enabling [editSettings.allowAdding](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings#allowadding). Right-clicking a row opens a menu with **Above**, **Below**, and **Child** options. This method suits precise placement within project hierarchies.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/contextmenu-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/contextmenu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/managing-tasks/contextmenu-cs1" %}

## Add tasks programmatically

Add tasks programmatically using the [addRecord](https://ej2.syncfusion.com/angular/documentation/api/gantt#addrecord) method, specifying task data, `rowPosition` (**Top**, **Bottom**, **Above**, **Below**, **Child**), and an optional `rowIndex`. Inject `EditService` and ensure `taskFields` mappings are valid (e.g., unique TaskID). For example, adding a task as a child creates a subtask under a parent row, updating the project hierarchy. Verify dependencies to avoid issues like circular references.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/addrow-dynamic-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/addrow-dynamic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/managing-tasks/addrow-dynamic-cs1" %}

## See also

- [How to configure task editing?](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/editing-tasks)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/task-dependency)
- [How to configure critical path?](https://ej2.syncfusion.com/angular/documentation/gantt/critical-path)
