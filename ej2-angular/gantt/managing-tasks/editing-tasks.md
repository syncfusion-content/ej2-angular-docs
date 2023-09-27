---
layout: post
title: Editing tasks in Angular Gantt component | Syncfusion
description: Learn here all about Editing tasks in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Editing tasks 
documentation: ug
domainurl: ##DomainURL##
---

# Editing tasks in Angular Gantt component

The editing feature can be enabled in the Gantt component by enabling the [`editSettings.allowEditing`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowediting) and [`editSettings.allowTaskbarEditing`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowtaskbarediting) properties.

The following editing options are available to update the tasks in Gantt,
* Cell
* Dialog
* Taskbar
* Connector line

## Cell editing

By setting the edit mode to auto using the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#mode) property, the tasks can be edited through TreeGrid cells by double-clicking.

`Note:` If the [`Edit`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#editmodule) module is not injected, you cannot edit the tasks through the TreeGrid cells.

The following code example demonstrates how to enable cell editing in the Gantt component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/celledit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/managing-tasks/celledit-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/celledit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/celledit-cs1" %}

`Note:` When the edit mode is set to `Auto`, on performing double-click action on TreeGrid side, the cells will be changed to editable mode and on performing double-click action on chart side, the edit dialog will appear for editing the task details.

## Dialog editing

Modify the task details through the edit dialog by setting the edit [`mode`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#mode) property as `Dialog`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/dialogedit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/managing-tasks/dialogedit-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/dialogedit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/dialogedit-cs1" %}

`Note:` In dialog editing mode, the edit dialog appears when performing double-click action on both TreeGrid or Gantt chart sides.

## Sections or tabs in dialog

In the Gantt dialog, you can define the required tabs or editing sections using the [`addDialogFields`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#adddialogfields) and [`editDialogFields`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#editdialogfields) properties. Every tab is defined using the [`type`](https://ej2.syncfusion.com/angular/documentation/api/gantt/dialogFieldType/) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/addedit-tab-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/managing-tasks/addedit-tab-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/addedit-tab-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/addedit-tab-cs1" %}

## Limiting data fields in general tab

In the Gantt dialog, you can make only specific data source fields visible for editing by using the [`addDialogFields`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#adddialogfields) and [`editDialogFields`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#editdialogfields) properties. The data fields are defined with [`type`](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettings/#type) and [`fields`](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettings/#fields) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/addedit-field-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/managing-tasks/addedit-field-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/addedit-field-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/addedit-field-cs1" %}

`Note:` You can also define the custom fields in the add/edit dialog General tab using the [`fields`](https://ej2.syncfusion.com/angular/documentation/api/gantt/addDialogFieldSettings/#fields)property.