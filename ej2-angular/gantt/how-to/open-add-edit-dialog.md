---
layout: post
title: Open add edit dialog in Angular Gantt component | Syncfusion
description: Learn here all about Open add edit dialog in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Open add edit dialog 
documentation: ug
domainurl: ##DomainURL##
---

# Open add edit dialog in Angular Gantt component

In the Gantt component, add and edit dialogs can be opened dynamically by using [`openAddDialog`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#openadddialog) and [`openEditDialog`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#openeditdialog) methods. The following code example shows how to open add and dialog on separate button click actions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/how-to/dynamicopen-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/how-to/dynamicopen-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/how-to/dynamicopen-cs1" %}

>NOTE: You should select any one of the row in the Gantt to open the edit dialog.