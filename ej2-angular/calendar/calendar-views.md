---
layout: post
title: Calendar views in Angular Calendar component | Syncfusion
description: Learn here all about Calendar views in Syncfusion Angular Calendar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Calendar views 
documentation: ug
domainurl: ##DomainURL##
---

# Calendar views in Angular Calendar component

The Calendar has the following pre-defined views that provides a flexible way to navigate back and forth to select the date.
Use the [`start`](https://ej2.syncfusion.com/angular/documentation/api/calendar#start) property to change the default view of the Calendar.

| **View** | **Description** |
| --- | --- |
| month (default) | Displays the days in a month |
| year | Displays the months in a year |
| decade | Displays the years in a decade |

The following example demonstrates how to set the `year` as the start view of the Calendar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/calendar/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/getting-started-cs2" %}

## View Restriction

Calendar view navigation can be restricted by defining the  [`start`](https://ej2.syncfusion.com/angular/documentation/api/calendar#start) and [`depth`](https://ej2.syncfusion.com/angular/documentation/api/calendar#depth) property that allows you to select the date from that view.

By defining the start and depth property with the different view, drill-down and drill-up views navigation can be limited to the user. Calendar views will be drill-down up to the view which is set in `depth` property and drill-up up to the view which is set in `start` property.

> Always the depth view has to be smaller than the start view.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/calendar/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/getting-started-cs3" %}

You can restrict the calendar's drill down navigation by defining the [`start`](https://ej2.syncfusion.com/angular/documentation/api/calendar#start) and [`depth`](https://ej2.syncfusion.com/angular/documentation/api/calendar#depth) property with same view that allows to select the date on that view itself.

The following example demonstrates how to select the dates in `year` view.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/calendar/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/getting-started-cs4" %}
