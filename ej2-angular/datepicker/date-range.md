---
layout: post
title: Date range in Angular Datepicker component | Syncfusion
description: Learn here all about Date range in Syncfusion Angular Datepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Date range 
documentation: ug
domainurl: ##DomainURL##
---

# Date range in Angular Datepicker component

You can restrict the user to select the date from the specified range of dates by using the [`min`](https://ej2.syncfusion.com/angular/documentation/api/datepicker#min) and [`max`](https://ej2.syncfusion.com/angular/documentation/api/datepicker#max) properties.

When the min and max properties are configured and the selected date value is out-of-range or invalid, then the model value will be set to `out of range` date value or `null` respectively with highlighted `error` class to indicates the date is out of range or invalid.

The below example demonstrates the Calendar to select a date within a range from 1 to 27 in a month.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datepicker/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/getting-started-cs4" %}