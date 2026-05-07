---
layout: post
title: Context menu in Angular Schedule component | Syncfusion
description: Learn here all about Context menu in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# Context menu in Angular Schedule component

You can display a context menu on scheduler work cells and appointments by using the [`ContextMenu`](https://ej2.syncfusion.com/angular/documentation/context-menu/getting-started) control manually in the application. In the following code example, the context menu is added in the example and its target is set to the Scheduler component.

On scheduler cells, you can display menu items such as `New Event`, `New Recurring Event`, and `Today`. For appointments, you can display options such as `Edit Event` and `Delete Event`. Use the [`openEditor`](https://ej2.syncfusion.com/angular/documentation/api/schedule#openeditor) method of the Scheduler to open the default event window for creating or editing appointments.

The deletion of appointments can be done by using the [`deleteEvent`](https://ej2.syncfusion.com/angular/documentation/api/schedule#deleteevent) public method. Also, the [`selectedDate`](https://ej2.syncfusion.com/angular/documentation/api/schedule#selecteddate) property can be used to navigate between different dates.

> You can also display custom menu options on scheduler cells and appointments. Context menu will open on tap-hold in responsive mode.

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
