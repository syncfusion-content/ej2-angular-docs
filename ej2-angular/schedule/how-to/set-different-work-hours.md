---
layout: post
title: Set different work hours in Angular Schedule component | Syncfusion
description: Learn here all about Set different work hours in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Set different work hours 
documentation: ug
domainurl: ##DomainURL##
---

# Set different work hours in Angular Schedule component

By default, the work hours of the Scheduler is highlighted based on the start and end values provided within the [`workHours`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#workhours) property which remains same for all days. To highlight different work hours range for different days,[`setWorkHours`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#setworkhours) method can be used as follows.

You can pass date object/ multiple date objects collection as first argument and start and end time need to be added as work hours should be passed as second and third arguments respectively. In the following code example, on button click 11:00 AM to 08:00 PM of 15th and 17th February has been added in work hours.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs52/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs52/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs52" %}