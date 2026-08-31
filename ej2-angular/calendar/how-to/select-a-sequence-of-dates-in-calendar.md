---
layout: post
title: Select a sequence of dates in Calendar | Syncfusion®
description: Learn how to select a sequence of dates such as a full week in the Syncfusion Angular Calendar using the values and isMultiSelection properties.
platform: ej2-angular
control: Select a sequence of dates in calendar 
documentation: ug
domainurl: ##DomainURL##
---

# How to select a sequence of dates in Calendar in Angular Calendar

The following example demonstrates how to select all dates in the week that contains the selected date by using the [`values`](https://ej2.syncfusion.com/angular/documentation/api/calendar#values) property when the [`isMultiSelection`](https://ej2.syncfusion.com/angular/documentation/api/calendar#ismultiselection) property is enabled.

The `values` property is used to maintain the collection of selected dates, while `isMultiSelection` allows multiple dates to be selected in the Calendar.

In this example, Moment.js methods are used to calculate the start and end dates of the week based on the selected date, and all dates within that range are selected.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/how-to-multiselect-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/how-to-multiselect-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/how-to-multiselect-cs1" %}
