---
layout: post
title: Editing tasks in Angular Gantt component | Syncfusion
description: Learn how to edit tasks dynamically in the Syncfusion Angular Gantt component using cell editing, dialog, taskbar, or programmatic methods for project updates.
platform: ej2-angular
control: Editing tasks
documentation: ug
domainurl: ##DomainURL##
---

# Editing tasks in Angular Gantt component

Editing tasks in the Angular Gantt component enables dynamic project updates, such as modifying task durations, names, or dependencies, using cell editing, dialog, taskbar interactions, or programmatic methods. Enable editing by setting [editSettings.allowEditing](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowediting) and [editSettings.allowTaskbarEditing](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowtaskbarediting) to `true` with `EditService` injected, ensuring task data aligns with [taskFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskfields) mappings (e.g., `id`, `name`, `startDate`). Cell editing allows direct updates in the TreeGrid pane, dialog editing provides a comprehensive interface, taskbar dragging adjusts durations or dates, and connector lines manage dependencies via drag-and-drop. Use the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#mode) property to control editing behavior (`Auto` or `Dialog`). Customize dialog fields with [addDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/#adddialogfields) and [editDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/#editdialogfields) for tailored forms. The [updateRecordById](https://ej2.syncfusion.com/angular/documentation/api/gantt/#updaterecordbyid) method enables programmatic updates, except for task IDs. Ensure valid data to prevent issues and maintain dependency integrity.

## Edit tasks via cell editing

Enable cell editing by setting [editSettings.allowEditing](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowediting) to `true`, [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#mode) to `Auto`, and injecting `EditService`. Double-click a TreeGrid cell to edit fields like task name or duration directly, ideal for quick updates. Ensure `taskFields` mappings are valid for seamless editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/celledit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/celledit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/managing-tasks/celledit-cs1" %}

## Edit tasks via dialog

Enable dialog editing by setting [editSettings.allowEditing](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowediting) to `true`, [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#mode) to `Dialog`, and injecting `EditService`. Double-click a row on the TreeGrid or chart side to open a dialog for editing task details, such as start date or dependencies, suitable for comprehensive updates. In `Auto` mode, double-clicking the chart side opens the dialog, while the TreeGrid side enables cell editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/dialogedit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/dialogedit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/managing-tasks/dialogedit-cs1" %}

## Customize dialog tabs

Customize the edit dialog by defining tabs with [addDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/#adddialogfields) and [editDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/#editdialogfields), using the [type](https://ej2.syncfusion.com/angular/documentation/api/gantt/dialogFieldType/) property (e.g., `General`, `Dependency`). This organizes fields into tabs for focused editing, such as task details or dependencies, with `EditService` required.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/addedit-tab-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/addedit-tab-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/managing-tasks/addedit-tab-cs1" %}

### Limit fields in general tab

Restrict fields in the dialog’s General tab using [addDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/#adddialogfields) and [editDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/#editdialogfields) with [type](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettings/#type) set to `General` and [fields](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettings/#fields) specifying visible fields (e.g., `TaskName`, `Duration`). This streamlines editing by showing only relevant fields, requiring `EditService`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/addedit-field-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/addedit-field-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/managing-tasks/addedit-field-cs1" %}

## Edit task dependencies

Enable dependency editing by mapping the [dependency](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#dependency) property in `taskFields`, setting [editSettings.allowEditing](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowediting) and [editSettings.allowTaskbarEditing](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowtaskbarediting) to `true`, and injecting `EditService`. Update dependencies via:

- **Mouse interactions**: Drag connector points on taskbars to create or modify links.

    ![Updating task dependency with mouse drag and drop action](../images/user-interaction.png)

- **Dialog**: Edit the Dependency tab in the edit dialog.

    ![Updating task dependency in dialog Dependency tab](../images/dialog.png)

- **Cell editing**: Update the dependency field in the TreeGrid. Ensure valid dependency strings to avoid circular references.

    ![Updating task dependency via cell editing in TreeGrid](../images/cell-edit.png)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/dependencyedit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/dependencyedit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/managing-tasks/dependencyedit-cs1" %}

## Edit tasks programmatically

Update tasks programmatically using the [updateRecordById](https://ej2.syncfusion.com/angular/documentation/api/gantt/#updaterecordbyid) method, specifying the task ID and updated data, with `EditService` injected. This method supports automation, such as updating durations via a button, but cannot modify the task ID. Ensure `taskFields` mappings are valid for successful updates.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/updaterecord-dynamic-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/updaterecord-dynamic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/managing-tasks/updaterecord-dynamic-cs1" %}

## See also
- [How to add new tasks?](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/adding-new-tasks)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)
- [How to configure critical path?](https://ej2.syncfusion.com/angular/documentation/gantt/critical-path)