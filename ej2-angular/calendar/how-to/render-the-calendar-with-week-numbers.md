---
layout: post
title: Render Calendar with week numbers in Angular Calendar | Syncfusion®
description: Learn how to display week numbers in the Syncfusion Angular Calendar by enabling the weekNumber property in the Calendar component.
platform: ej2-angular
control: Render the calendar with week numbers 
documentation: ug
domainurl: ##DomainURL##
---

# How to render the Calendar with week numbers in Angular Calendar

You can display `weekNumber` in the Calendar by setting the [`weekNumber`](https://ej2.syncfusion.com/angular/documentation/api/calendar#weeknumber) property to true.

When week numbers are enabled, an additional column is displayed alongside the calendar dates, showing the corresponding `weekNumber` for each week.

The following example demonstrates how to render the Calendar with `weekNumber`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/getting-started-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/getting-started-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/getting-started-cs11" %}
