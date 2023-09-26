---
layout: post
title: Select a sequence of dates in calendar in Angular Calendar component | Syncfusion
description: Learn here all about Select a sequence of dates in calendar in Syncfusion Angular Calendar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Select a sequence of dates in calendar 
documentation: ug
domainurl: ##DomainURL##
---

# Select a sequence of dates in calendar in Angular Calendar component

The following example demonstrates how to select the week dates of chosen date in the Calendar using [`values`](https://ej2.syncfusion.com/angular/documentation/api/calendar#values) property, when [`isMultiSelection`](https://ej2.syncfusion.com/angular/documentation/api/calendar#ismultiselection) property is enabled. Methods of Moment.js is used in this sample for calculating the start and end of week from the selected date.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/calendar/how-to-multiselect-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/calendar/how-to-multiselect-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/how-to-multiselect-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/how-to-multiselect-cs1" %}
