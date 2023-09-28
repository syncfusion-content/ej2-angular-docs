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