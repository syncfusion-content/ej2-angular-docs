---
layout: post
title: Custom field in Angular Gantt component | Syncfusion
description: Learn here all about Custom field in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom field 
documentation: ug
domainurl: ##DomainURL##
---

# Custom field in Angular Gantt component

Generally in Gantt, Custom fields are displayed in the Custom Tab of the Add/Edit dialogs. However, they can be included in the General Tab of Add/Edit Dialog Box using [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actionbegin) and [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actioncomplete) events. These events are used to append the custom field to the dialog box. The following code snippets demonstrate the solution.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/how-to/customfield-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/how-to/customfield-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/how-to/customfield-cs1" %}