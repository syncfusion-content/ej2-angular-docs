---
layout: post
title: Range selection in Angular Daterangepicker component | Syncfusion
description: Learn here all about Range selection in Syncfusion Angular Daterangepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Range selection 
documentation: ug
domainurl: ##DomainURL##
---

# Range selection in Angular Daterangepicker component

Range selection in a DateRangePicker can be made-to-order with desire restrictions based on application needs.

## Restrict the range within a range

You can restrict the minimum and maximum date that can be allowed as start date, end date in a range selection with help of [`min`](https://ej2.syncfusion.com/angular/documentation/api/daterangepicker#min), [`max`](https://ej2.syncfusion.com/angular/documentation/api/daterangepicker#max) properties.
* `min` – sets the minimum date that can be selected as startDate.
* `max` – sets the maximum date that can be selected as endDate

In below sample, you can select a range from 15th day of this month to 15th day of next month.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs9/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/daterangepicker/getting-started-cs9" %}

> If the value of `min` or `max` properties changed through code behind, then you have to update the `start date`, `end date` property to set within the range. Or else , if the `start` and `end` date is out of specified date range, a validation error class will be appended to the input element. If `strictMode` is enabled, and both the start, end date is lesser than the min date then start and end date will be updated with `min` date. If both the start and end date is higher than the max date then start and end date will be updated with `max` date. Or else, if startDate is less than `min` date, startDate will be updated with `min` date or if endDate is greater than `max` date, endDate will be updated with the `max` date.

## Range span

Span between ranges can be limited in order to avoid excess or less days selection towards the required days in a range.
In this, minimum and maximum span that can be allowed within the date range can be customized by [`minDays`](https://ej2.syncfusion.com/angular/documentation/api/daterangepicker#mindays-number), [`maxDays`](https://ej2.syncfusion.com/angular/documentation/api/daterangepicker#maxdays-number) properties.
* `minDays`- Sets the minimum number of days between start date and end date.
* `maxDays`- Sets the maximum number of days between start date and end date.
In below sample, the range selection should be greater than 3 days and less than 8 days else it won’t set.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs10/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/daterangepicker/getting-started-cs10" %}

## Strict mode

DateRangePicker provides the option to limit the user towards entering the valid date only.
With strict mode, you can set only valid selection. Also, If any invalid range is specified then the date range value will reset to previous value.
This restriction can be availed by enabling the [`strictMode`](https://ej2.syncfusion.com/angular/documentation/api/daterangepicker#strictmode) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/daterangepicker/getting-started-cs11" %}
