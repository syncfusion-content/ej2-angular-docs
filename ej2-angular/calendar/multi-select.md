---
layout: post
title: Multi Select in Angular Calendar | Syncfusion®
description: Learn how to select single or multiple dates in the Syncfusion Angular Calendar using the isMultiSelection and values properties.
platform: ej2-angular
control: Multi select 
documentation: ug
domainurl: ##DomainURL##
---

# Multi Select in Angular Calendar
## Multiple Date Selection

The Calendar provides an option to select a single date, multiple dates, or a sequence of dates by using the [`isMultiSelection`](https://ej2.syncfusion.com/angular/documentation/api/calendar#ismultiselection) and [`values`](https://ej2.syncfusion.com/angular/documentation/api/calendar#values) properties. By default, the `isMultiSelection` property is `false`.

The [`values`](https://ej2.syncfusion.com/angular/documentation/api/calendar#values) property is of type `Date[]` and is only effective when `isMultiSelection` is set to `true`. Use the `value` property for single-date selection and the `values` property for multiple-date selection; when `isMultiSelection` is enabled, the `values` array takes precedence over `value`.

The following example demonstrates the functionality of the `isMultiSelection` and `values` properties by showing multiple pre-selected dates in the Calendar control.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/getting-started-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/getting-started-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/getting-started-cs14" %}

## See Also

* [How to select a sequence of dates in Calendar](./how-to/select-a-sequence-of-dates-in-calendar)
* [Date Range](./date-range)
* [Customization](./customization)