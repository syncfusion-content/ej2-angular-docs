---
layout: post
title: Managing tasks in Angular Gantt component | Syncfusion
description: Learn here all about Managing tasks in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Managing tasks 
documentation: ug
domainurl: ##DomainURL##
---

# Managing tasks in Angular Gantt component

Managing tasks in the Angular Gantt component enables dynamic project updates, such as inserting, deleting, or editing tasks and dependencies, by enabling [allowAdding](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowadding), [allowDeleting](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowdeleting), [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowediting), and [allowTaskbarEditing](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowtaskbarediting) with `EditService` injected. A primary key column, defined by [columns.isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#isprimarykey) set to `true` (e.g., on `id`), ensures reliable CRUD operations and task identification. Editing modes include cell editing for quick TreeGrid updates, dialog editing for comprehensive changes, taskbar dragging for duration or date adjustments, and connector line dragging for dependencies. Customize dialogs with templates or fields using [addDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/#adddialogfields) and [editDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/#editdialogfields). Methods like [addRecord](https://ej2.syncfusion.com/angular/documentation/api/gantt/#addrecord), [deleteRow](https://ej2.syncfusion.com/angular/documentation/api/gantt/#deleterow), and [updateRecordById](https://ej2.syncfusion.com/angular/documentation/api/gantt/#updaterecordbyid) support programmatic management. Ensure valid `taskFields` mappings and a primary key to enable editing seamlessly.

The following code example demonstrates editing in the Gantt component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/celledit-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/celledit-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/celledit-cs2" %}


Editing feature requires a primary key column for CRUD operations. While defining columns in Gantt using the [columns](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columns) property, it is mandatory that any one of the columns, must be a primary column. By default, the [id](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#id) column will be the primary key column.  If [id](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#id) column is not defined, we need to enable [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#isprimarykey) for any one of the columns defined in the [columns](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columns) property.

## Open new task dialog with default values

You can set default values when new task dialog opens using [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actionbegin) event when `requestType` is `beforeOpenAddDialog`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/addrow-toolbar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/addrow-toolbar-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/addrow-toolbar-cs2" %}

## Cell edit type and its params

The [columns.editType](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#edittype) is used to define the edit type for any particular column.
You can set the [columns.editType](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#edittype) based on data type of the column.

Below is the combined content from the provided markdown sections in bullet points, as requested, ensuring clarity and conciseness while preserving the original information:

- **Cell edit types and components**:
  - `numericedit`: Uses the [NumericTextBox](https://helpej2.syncfusion.com/angular/documentation/numerictextbox/) component for editing integers, doubles, and decimals.
  - `defaultedit`: Uses the [TextBox](https://helpej2.syncfusion.com/angular/documentation/textbox/) component for editing string data.
  - `dropdownedit`: Uses the [DropDownList](https://helpej2.syncfusion.com/angular/documentation/drop-down-list/) component to display all unique values for a field.
  - `booleanedit`: Uses the [CheckBox](https://helpej2.syncfusion.com/angular/documentation/check-box/) component for editing boolean data.
  - `datepickeredit`: Uses the [DatePicker](https://helpej2.syncfusion.com/angular/documentation/datepicker/) component for editing date data.
  - `datetimepickeredit`: Uses the [DateTimePicker](https://helpej2.syncfusion.com/angular/documentation/datetimepicker/) component for editing date-time data.

- **Customization**:
  - Customize editor component behavior using the [columns.edit.params](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#edit) property.

- **Edit type parameters**:
  - `numericedit`: Supports parameters like `decimals: 2`, `value: 5`.
  - `dropdownedit`: Supports parameters like `value: 'Germany'`.
  - `booleanedit`: Supports parameters like `checked: true`.
  - `datepickeredit`: Supports parameters like `format: 'dd.MM.yyyy'`.
  - `datetimepickeredit`: Supports parameters like `value: new Date()`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/editParams-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/editParams-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/editParams-cs1" %}

## Cell Edit Template

The cell edit template is used to create a custom component for a particular column by invoking the following functions:

* `create` - It is used to create the element at the time of initialization.

* `write` - It is used to create the custom component or assign default value at the time of editing.

* `read` - It is used to read the value from the component at the time of save.

* `destroy` - It is used to destroy the component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/cellEditTemplate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/cellEditTemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/cellEditTemplate-cs1" %}

## Disable editing for particular column

You can disable editing for particular columns, by using the [columns.allowEditing](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#allowediting) property.

In the following demo, editing is disabled for the `TaskName` column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/disableedit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/disableedit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/disableedit-cs1" %}

## Customize control in add/edit dialog

In Gantt Chart, the controls such as form elements, grid and RTE in add and edit dialog can be customized by using [additionalParams](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettingsModel/#additionalParams) property.

### Customize general tab of dialog

The form element in the `General` tab of the add/edit dialog can be added or removed by using the [fields](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettings/#fields) property within the [addDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettings/) and [editDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/editDialogFieldSettings/) settings respectively.

The controls of the `fields` can be customized by using the [edit](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/managing-tasks#cell-edit-template) template feature.

In the below sample, `General` tab is customized using the `fields` property. The fields **TaskID**, **TaskName** and **newInput** are added in both `addDialogFields` and `editDialogFields` settings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/disableedit-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/disableedit-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/disableedit-cs2" %}

### Customize dependency, segments and resources tab of dialog

You can customize the dependency, segments, and resource tabs of the dialog box using the [additionalParams](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettingsModel/#additionalParams) property within the [addDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettings/) and [editDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/editDialogFieldSettings/) settings respectively. This customization involves defining properties from the [grid](https://ej2.syncfusion.com/angular/documentation/api/grid/) within the `additionalParams` property.

In the example below: 
* The `dependency` tab enables [sorting](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowsorting) and [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) options. 
* The `segments` tab enables `sorting` and `toolbar` options and includes a new column `newData` defined with a specified [field](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#field).
* The `resources` tab defines a new column `Segment Task`  with specific properties such as `field`, [width](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#width) and [headerText](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#headertext).
These customizations are applied to both `addDialogFields` and `editDialogFields` settings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/disableedit-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/disableedit-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/disableedit-cs3" %}

### Customize note dialog tab

You can customize the note dialog tab using the [additionalParams](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettingsModel/#additionalParams) property within the [addDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettings/) and [editDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/editDialogFieldSettings/) settings respectively. This customization involves defining properties from the [RTE](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/) module within the `additionalParams` property.

In the following example, the `notes` tab is customized with the [inlinemode](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#inlinemode) property enabled, allowing for in-place editing. Additionally, the `OnSelection` property is enabled, which opens the toolbar inline upon selecting text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/disableedit-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/disableedit-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/disableedit-cs4" %}

## Touch interation

The Gantt control editing actions can be achieved using the double tap and tap and drag actions on a element.

The following table describes different types of editing modes available in Gantt.

Action |Description
-----|-----
[Cell editing](managing-tasks/#cell-editing) | To perform `double tap` on a specific cell, initiate the cell to be in edit state.
[Dialog editing](managing-tasks/#dialog-editing) | To perform `double tap` on a specific row, initiate the edit dialog to be opened.
[Taskbar editing](managing-tasks/#taskbar-editing) | Taskbar editing action is initiated using the `tap` action on the taskbar. <br> **Parent taskbar** : Once you tap on the parent taskbar, it will be changed to editing state. Perform only dragging action on parent taskbar editing. <br> ![Alt text](images/editing-parent.PNG) <br> **Child taskbar** : Once you tap the child taskbar, it will be changed to editing state. <br> ![Alt text](images/editing-state.PNG) <br> **Dragging taskbar** : To drag a taskbar to the left or right in editing state. <br> <br> **Resizing taskbar** : To resize a taskbar, drag the left/right resize icon. <br> <br> **Progress resizing** : To change the progress, drag the progress resize icon to the left or right direction.

### Task dependency editing

You can `tap` the left/right connector point to initiate [task dependencies](managing-tasks/#task-dependencies) edit mode and again tap another taskbar to establish the dependency line between two taskbars.

The following table explains the taskbar state in dependency edit mode.

![Taskbar states](images/taskbar-states.PNG)

Taskbar state |Description
-----|-----
`Parent taskbar` | You cannot create dependency relationship to parent tasks. <br> ![Parent taskbar](images/parent-taskbar.PNG)
`Taskbar without dependency` |  If you tap a valid child taskbar, it will create `FS` type dependency line between tasks, otherwise exits from task dependency edit mode. <br> ![Valid taskbar](images/valid-taskbar.PNG)
`Taskbar with dependency` | If you tap the second taskbar, which has already been directly connected, it will ask to remove it. <br> ![Invalid taskbar](images/invalid-taskbar.PNG)
`Removing dependency` | Once you tap the taskbar with direct dependency, then confirmation dialog will be shown for removing dependency. <br> ![Confirm dialog](images/confirm-dialog.PNG)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/touch/dependencyediting-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/touch/dependencyediting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/touch/dependencyediting-cs1" %}

>Note: In mobile device, you cannot create dependency other than `FS` by taskbar editing. By using cell/dialog editing, you can add all type of dependencies.

## Taskbar editing tooltip

The taskbar editing tooltip can be customized using the [tooltipSettings.editing](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#editing) property. The following code example shows how to customize the taskbar editing tooltip in Gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/taskbar-edit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/taskbar-edit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/tooltip/taskbar-edit-cs1" %}

## See also
- [How to add new tasks?](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/adding-new-tasks)
- [How to delete tasks?](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/deleting-tasks)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)
- [How to configure critical path?](https://ej2.syncfusion.com/angular/documentation/gantt/critical-path)