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

The Gantt component has options to dynamically insert, delete, and update tasks in the project. The primary key column is necessary to manage the tasks and perform CRUD operations in Gantt. To define the primary key, set the [`columns.isPrimaryKey`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#isprimarykey) property to `true` in the particular column.

To use CRUD, inject the [`EditService`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#editmodule) in the provider section of `AppModule`.

`Note:` If the [`Edit`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#editmodule) module is not injected, you cannot edit the tasks through the TreeGrid cells.

The following code example demonstrates editing in the Gantt component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/celledit-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/managing-tasks/celledit-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/celledit-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/celledit-cs2" %}

## Troubleshoot: Editing works only when primary key column is defined

Editing feature requires a primary key column for CRUD operations. While defining columns in Gantt using the [`columns`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columns) property, it is mandatory that any one of the columns, must be a primary column. By default, the [`id`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#id) column will be the primary key column.  If [`id`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#id) column is not defined, we need to enable [`isPrimaryKey`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#isprimarykey) for any one of the columns defined in the [`columns`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columns) property.

## Open new task dialog with default values

You can set default values when new task dialog opens using [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actionbegin) event when `requestType` is `beforeOpenAddDialog`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/addrow-toolbar-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/managing-tasks/addrow-toolbar-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/addrow-toolbar-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/addrow-toolbar-cs2" %}

## Cell edit type and its params

The [`columns.editType`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#edittype) is used to define the edit type for any particular column.
You can set the [`columns.editType`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#edittype) based on data type of the column.

* `numericedit` - [`NumericTextBox`](https://helpej2.syncfusion.com/angular/documentation/numerictextbox/) component for integers, double, and decimal data types.

* `defaultedit` - [`TextBox`](https://helpej2.syncfusion.com/angular/documentation/textbox/) component for string data type.

* `dropdownedit` - [`DropDownList`](https://helpej2.syncfusion.com/angular/documentation/drop-down-list/) component to show all unique values related to that field.

* `booleanedit` - [`CheckBox`](https://helpej2.syncfusion.com/angular/documentation/check-box/) component for boolean data type.

* `datepickeredit` - [`DatePicker`](https://helpej2.syncfusion.com/angular/documentation/datepicker/) component for date data type.

* `datetimepickeredit` - [`DateTimePicker`](https://helpej2.syncfusion.com/angular/documentation/datetimepicker/) component for date time data type.

Also, you can customize the behavior of the editor component through the [`columns.edit.params`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#edit).

The following table describes cell edit type component and their corresponding edit params of the column.

Edit Type |Component |Example
-----|-----|-----
`numericedit` | [`NumericTextBox`](https://helpej2.syncfusion.com/angular/documentation/numerictextbox/) | params: { decimals: 2, value: 5 }
`dropdownedit` | [`DropDownList`](https://helpej2.syncfusion.com/angular/documentation/drop-down-list/) | params: { value: 'Germany' }
`booleanedit` | [`Checkbox`](https://helpej2.syncfusion.com/angular/documentation/check-box/) | params: { checked: true}
`datepickeredit` | [`DatePicker`](https://helpej2.syncfusion.com/angular/documentation/datepicker/) | params: { format:'dd.MM.yyyy' }
`datetimepickeredit` | [`DateTimePicker`](https://helpej2.syncfusion.com/angular/documentation/datetimepicker/) | params: { value: new Date() }

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/editParams-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/managing-tasks/editParams-cs1/src/app.module.ts %}
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
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/managing-tasks/cellEditTemplate-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/cellEditTemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/cellEditTemplate-cs1" %}

## Disable editing for particular column

You can disable editing for particular columns, by using the [`columns.allowEditing`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#allowediting) property.

In the following demo, editing is disabled for the `TaskName` column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/disableedit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/managing-tasks/disableedit-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/disableedit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/disableedit-cs1" %}

## Customize control in add/edit dialog

In Gantt Chart, the controls such as form elements, grid and RTE in add and edit dialog can be customized by using [additionalParams](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettingsModel/#additionalParams) property.

### Customize general tab of dialog 

In the general tab of add/edit dialog, the custom input [fields](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettings/#fields) can be included into fields by defining the field names either from the data source or template in [addDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettings/) and [editDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/editDialogFieldSettings/) respectively.

In the below sample, added field from the template to general tab.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/disableedit-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/managing-tasks/disableedit-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/disableedit-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/disableedit-cs2" %}

### Customize dependency, segments and resources tab of dialog 

[Grid](https://ej2.syncfusion.com/angular/documentation/api/grid/) component in the dependency, segment and resource tab of add/edit dialog can be customized, by defining grid module properties in the [additionalParams](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettingsModel/#additionalParams) property of [addDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettings/) and [editDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/editDialogFieldSettings/). 

In the below code show cases, how to add additional features to dependency, segments and resources tab.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/disableedit-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/managing-tasks/disableedit-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/disableedit-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/disableedit-cs3" %}

### Customize note dialog tab

 [RTE](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/) component in notes tab of add and edit dialog can be customized, by defining RTE module properties in the [additionalParams](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettingsModel/#additionalParams) property of [addDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettings/) and [editDialogFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/editDialogFieldSettings/). 
 
 The below code shows how to enable inline mode to RTE in notes tab.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/disableedit-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/managing-tasks/disableedit-cs4/src/app.module.ts %}
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
[`Cell editing`](managing-tasks/#cell-editing) | To perform `double tap` on a specific cell, initiate the cell to be in edit state.
[`Dialog editing`](managing-tasks/#dialog-editing) | To perform `double tap` on a specific row, initiate the edit dialog to be opened.
[`Taskbar editing`](managing-tasks/#taskbar-editing) | Taskbar editing action is initiated using the `tap` action on the taskbar. <br> **Parent taskbar** : Once you tap on the parent taskbar, it will be changed to editing state. Perform only dragging action on parent taskbar editing. <br> ![Alt text](images/editing-parent.PNG) <br> **Child taskbar** : Once you tap the child taskbar, it will be changed to editing state. <br> ![Alt text](images/editing-state.PNG) <br> **Dragging taskbar** : To drag a taskbar to the left or right in editing state. <br> <br> **Resizing taskbar** : To resize a taskbar, drag the left/right resize icon. <br> <br> **Progress resizing** : To change the progress, drag the progress resize icon to the left or right direction.

### Task dependency editing

You can `tap` the left/right connector point to initiate [`task dependencies`](managing-tasks/#task-dependencies) edit mode and again tap another taskbar to establish the dependency line between two taskbars.

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
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/touch/dependencyediting-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/touch/dependencyediting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/touch/dependencyediting-cs1" %}

>Note: In mobile device, you cannot create dependency other than `FS` by taskbar editing. By using cell/dialog editing, you can add all type of dependencies.

## Taskbar editing tooltip

The taskbar editing tooltip can be customized using the [`tooltipSettings.editing`](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#editing) property. The following code example shows how to customize the taskbar editing tooltip in Gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/taskbar-edit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/tooltip/taskbar-edit-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/taskbar-edit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/tooltip/taskbar-edit-cs1" %}