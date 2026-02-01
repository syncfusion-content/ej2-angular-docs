---
layout: post
title: Open Add and Edit Dialogs in Angular Gantt Chart Component | Syncfusion
description: Learn how to open add and edit dialogs programmatically in the Syncfusion Angular Gantt Chart component for efficient task creation and modification.
platform: ej2-angular
control: Add edit dialog
documentation: ug
domainurl: ##DomainURL##
---

# Open Add and Edit Dialogs in Angular Gantt Chart Component

The add and edit dialogs in the Angular Gantt Chart component enable efficient task creation and modification, streamlining project management workflows. The [openAddDialog](https://ej2.syncfusion.com/angular/documentation/api/gantt#openadddialog) method opens a dialog to add a new task, populating fields like id, name, or startDate based on [taskFields](https://ej2.syncfusion.com/angular/documentation/api/gantt#taskfields) mappings. The [openEditDialog](https://ej2.syncfusion.com/angular/documentation/api/gantt#openeditdialog) method opens a dialog to modify the currently selected task, ideal for updating task details like duration or dependencies. For example, clicking a button to open the add dialog allows users to create a new task, while selecting a task and opening the edit dialog enables quick updates. These dialogs, requiring `EditService` injection and `editSettings.allowAdding` and `editSettings.allowEditing` enabled, integrate with resources, dependencies, and critical path calculations, supporting validation and events like `actionBegin` for customized workflows. To use `openEditDialog` effectively, select a row through user interaction or by setting [selectedRowIndex](https://ej2.syncfusion.com/angular/documentation/api/gantt#selectedrowindex), ensuring the dialog opens with the correct task data. Configure valid `taskFields` mappings to ensure dialog fields display and save data accurately, and enhance dialogs with custom fields using events like `actionBegin` or `actionComplete` for tailored workflows.

The following code example shows how to open add and dialog on separate button click actions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/how-to/dynamicopen-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/how-to/dynamicopen-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/how-to/dynamicopen-cs1" %}

## See also
- [How to configure task editing?](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/task-bar-editing)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)
- [How to configure critical path?](https://ej2.syncfusion.com/angular/documentation/gantt/critical-path)