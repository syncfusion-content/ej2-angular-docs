---
layout: post
title: Copy paste records in Angular Gantt component | Syncfusion
description: Learn here all about Copy paste records in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Copy paste records 
documentation: ug
domainurl: ##DomainURL##
---

# Copy paste records in Angular Gantt component

You can copy and paste a record in the Gantt chart by using the [`addRecord`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#addrecord) method and `custom context menu`. It is also possible to copy and paste the parent record with multiple hierarchical child records on the required position.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/how-to/copypaste-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/how-to/copypaste-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/how-to/copypaste-cs1" %}