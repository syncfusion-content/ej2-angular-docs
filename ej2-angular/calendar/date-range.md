---
layout: post
title: Date Range in Angular Calendar | Syncfusion®
description: Learn how to restrict date selection in the Syncfusion Angular Calendar using the min and max properties to define a valid date range.
platform: ej2-angular
control: Date range 
documentation: ug
domainurl: ##DomainURL##
---

# Date Range in Angular Calendar

You can restrict the user to select a date from a specified range of dates by using the [`min`](https://ej2.syncfusion.com/angular/documentation/api/calendar#min) and [`max`](https://ej2.syncfusion.com/angular/documentation/api/calendar#max) properties. The `min` date must always be less than the `max` date. If `min` is set greater than `max`, the Calendar will not restrict the range correctly and may render an invalid selectable range, so ensure `min` is always earlier than `max`.

The following example allows you to select a date within a range from the 7th to the 27th day of a month. In the sample, `min` is set to the 7th day and `max` is set to the 27th day of the current month.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/getting-started-cs6" %}

> When the `min` or `max` values are changed through code-behind, keep the following in mind:
>
> * **Update an existing `value`:** You must update the `value` property so it stays within the new range.
> * **Auto-correction of an out-of-range `value`:** If the `value` is out of the specified date range, it is auto-corrected. If the `value` is less than the `min` date, the `value` property will be updated with the `min` value. If the `value` is greater than the `max` date, the `value` property will be updated with the `max` value.
> * **Unset `value`:** If the `value` is unset (`null`) when `min` or `max` are changed, no auto-correction occurs.