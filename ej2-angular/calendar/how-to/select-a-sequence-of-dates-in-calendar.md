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

The following example demonstrates how to select the week dates of chosen date in the Calendar using [`values`](https://ej2.syncfusion.com/angular/documentation/api/calendar#values) property, when [`isMultiSelection`](https://ej2.syncfusion.com/angular/documentation/api/calendar#ismultiselection) property is enabled. Methods of Moment.js is used in this sample for calculating the start and end of week from the selected date.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/how-to-multiselect-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/how-to-multiselect-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/how-to-multiselect-cs1" %}
