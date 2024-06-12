---
layout: post
title: Date range in Angular Calendar component | Syncfusion
description: Learn here all about Date range in Syncfusion Angular Calendar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Date range 
documentation: ug
domainurl: ##DomainURL##
---

# Date range in Angular Calendar component

You can restrict the user to select the date from a specified range of dates by utilizing the [`min`](https://ej2.syncfusion.com/angular/documentation/api/calendar/#min) and [`max`](https://ej2.syncfusion.com/angular/documentation/api/calendar/#max) properties.  Always the min date has to be lesser than the max date.

The below example allows you to select a date within a range from 7th to 27th days in a month.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/calendar/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/calendar/getting-started-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/getting-started-cs6" %}

> If the value of `min` or `max` properties changed through code behind, then you have to update the `value` property to set within the range. Or else, if the value is out of specified date range and less than `min` date, value property will be updated with min date or the value is higher than max date, value property will be updated with `max` date.