---
layout: post
title: Calendar Views in Angular Calendar | Syncfusion®
description: Learn how to switch between month, year, and decade views in the Syncfusion Angular Calendar using the start and depth properties.
platform: ej2-angular
control: Calendar views 
documentation: ug
domainurl: ##DomainURL##
---

# Calendar Views in Angular Calendar

The Calendar has the following pre-defined views that provide a flexible way to navigate back and forth to select the date.
Use the [`start`](https://ej2.syncfusion.com/angular/documentation/api/calendar#start) property to change the initial (start) view of the Calendar. The default value of the `start` property is `month`.

The `start` and [`depth`](https://ej2.syncfusion.com/angular/documentation/api/calendar#depth) properties accept the same enumerated values: `month`, `year`, or `decade`.

| **View** | **Description** |
| --- | --- |
| Month (default) | Displays the days in a month. |
| Year | Displays the months in a year. |
| Decade | Displays the years in a decade. |

The following example demonstrates how to set the `year` as the start view of the Calendar.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/getting-started-cs2" %}

## View Restriction

### Restrict to a range of views

Calendar view navigation can be restricted by defining the  [`start`](https://ej2.syncfusion.com/angular/documentation/api/calendar#start) and [`depth`](https://ej2.syncfusion.com/angular/documentation/api/calendar#depth) properties that allows you to select the date from that view.

By defining the start and depth properties with the different view, drill-down and drill-up views navigation can be limited to the user. Calendar views will be drill-down up to the view which is set in `start` property and drill-up up to the view which is set in `depth` property.

> The depth view level must be below the start view level (month < year < decade).

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/getting-started-cs3" %}

### Lock to a single view

You can restrict the calendar's drill-down navigation by defining the [`start`](https://ej2.syncfusion.com/angular/documentation/api/calendar#start) and [`depth`](https://ej2.syncfusion.com/angular/documentation/api/calendar#depth) properties with the same view, which allows the date to be selected on that view itself.

The following example demonstrates how to select the dates in `year` view.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/getting-started-cs4" %}
