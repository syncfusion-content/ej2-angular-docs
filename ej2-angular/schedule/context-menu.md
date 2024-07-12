---
layout: post
title: Context menu in Angular Schedule component | Syncfusion
description: Learn here all about Context menu in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Context menu 
documentation: ug
domainurl: ##DomainURL##
---

# Context menu in Angular Schedule component

You can display context menu on work cells and appointments of Scheduler by making use of the [`ContextMenu`](https://ej2.syncfusion.com/angular/documentation/context-menu/getting-started) control manually from the application end. In the following code example, context menu control is being added from sample end and set its target as `Scheduler`.

On Scheduler cells, you can display the menu items such as `New Event`, `New Recurring Event` and `Today` option. For appointments, you can display its related options such as `Edit Event` and `Delete Event`. The default event window can be opened for appointment creation and editing using the [`openEditor`](https://ej2.syncfusion.com/angular/documentation/api/schedule#openeditor) method of Scheduler.

The deletion of appointments can be done by using the [`deleteEvent`](https://ej2.syncfusion.com/angular/documentation/api/schedule#deleteevent) public method. Also, the [`selectedDate`](https://ej2.syncfusion.com/angular/documentation/api/schedule#selecteddate) property can be used to navigate between different dates.

> You can also display custom menu options on Scheduler cells and appointments. Context menu will open on tap-hold in responsive mode.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/schedule/context-menu-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/context-menu-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/context-menu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/context-menu-cs1" %}

![Context Menu](images/schedule-contextmenu.png)

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to knows how to present and manipulate data.
