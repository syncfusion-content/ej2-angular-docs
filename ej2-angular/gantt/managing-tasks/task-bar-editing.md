---
layout: post
title: Task bar editing in Angular Gantt component | Syncfusion
description: Learn here all about Task bar editing in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Task bar editing 
documentation: ug
domainurl: ##DomainURL##
---

# Task bar editing in Angular Gantt component

## Taskbar editing

Modify the task details through user interaction such as resizing and dragging the taskbar by enabling the [`allowTaskbarEditing`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowtaskbarediting) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/taskbaredit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/taskbaredit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/taskbaredit-cs1" %}

## Prevent taskbar editing for particular task

On taskbar edit action, the [`taskbarEditing`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskbarediting) event will be triggered. You can prevent the taskbar from editing using the [`taskbarEditing`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskbarediting) event. This can be done by setting cancel property of [`taskbarEditing`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskbarediting) event argument to true. And we can hide the taskbar editing indicators like taskbar resizer, progress resizer and connector points by using [`queryTaskbarInfo`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#querytaskbarinfo) event.  The following code example shows how to achieve this.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/prevent-taskbaredit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/prevent-taskbaredit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/prevent-taskbaredit-cs1" %}