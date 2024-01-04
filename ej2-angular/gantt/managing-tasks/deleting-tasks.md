---
layout: post
title: Deleting tasks in Angular Gantt component | Syncfusion
description: Learn here all about Deleting tasks in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Deleting tasks 
documentation: ug
domainurl: ##DomainURL##
---

# Deleting tasks in Angular Gantt component

## Deleting tasks

A task delete option in the Gantt component can be enabled by enabling the [`ediSettings.allowDeleting`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowdeleting) property. Tasks can be deleted by clicking the delete toolbar item or using the `deleteRow` method. You can call this method dynamically on any custom actions like button click. The following code example shows how to enable the delete option in the Gantt component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/taskdelete-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/managing-tasks/taskdelete-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/taskdelete-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/taskdelete-cs1" %}

> NOTE: You should select any one of the rows in the Gantt component to perform task delete action.
> You should set the [`ediSettings.allowDeleting`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowdeleting) value to `true` to delete the record dynamically.

## Delete confirmation message

Delete confirmation message is used to get the confirmation from users before deleting a task. This confirmation message can be enabled by setting the [`editSettings.showDeleteConfirmDialog`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#showdeleteconfirmdialog) property to `true`.

The following code snippet explains how to enable the delete confirmation message in Gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/delete-confirmation-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/managing-tasks/delete-confirmation-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/delete-confirmation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/delete-confirmation-cs1" %}