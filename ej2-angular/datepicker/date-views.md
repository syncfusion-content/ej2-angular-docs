---
layout: post
title: Start View and Depth in Angular DatePicker | Syncfusion®
description: Learn how to configure the start view and depth of navigation in the Syncfusion Angular DatePicker using the start and depth properties.
platform: ej2-angular
control: Date views 
documentation: ug
domainurl: ##DomainURL##
---

# Start View and Depth Restriction in Angular DatePicker

The DatePicker has the following predefined views that provides a flexible way to navigate back and forth to select the date.

| **View** | **Description** |
| --- | --- |
| month(default) | Displays the days in a month |
| year | Displays the months in a year |
| decade | Displays the years in a decade |

## Start view

You can use the [`start`](https://ej2.syncfusion.com/angular/documentation/api/datepicker#start) property to define the initial rendering view.

The following example demonstrates how to create a DatePicker with `decade` as initial rendering view.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/datepicker/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/getting-started-cs5" %}

## Depth view restriction

Define the [`depth`](https://ej2.syncfusion.com/angular/documentation/api/datepicker#depth) property to control the view navigation.

> Always the depth view has to be smaller than the start view, otherwise the view restriction will be not restricted.

The following example demonstrates how to create a DatePicker that allows users to select a month.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/datepicker/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/getting-started-cs6" %}

> To know more about Calendar views refer the Calendar's [Calendar Views](../calendar/calendar-views) section.