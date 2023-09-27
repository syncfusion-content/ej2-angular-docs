---
layout: post
title: Holidays in Angular Gantt component | Syncfusion
description: Learn here all about Holidays in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Holidays 
documentation: ug
domainurl: ##DomainURL##
---

# Holidays in Angular Gantt component

Non-working days in a project can be displayed in the Gantt component using the [`holidays`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#holidays) property. Each holiday can be defined with the following properties:

* [`from`](https://ej2.syncfusion.com/angular/documentation/api/gantt/holiday/#from): Defines start date of the holiday(s).
* [`to`](https://ej2.syncfusion.com/angular/documentation/api/gantt/holiday/#to): Defines end date of the holiday(s).
* [`label`](https://ej2.syncfusion.com/angular/documentation/api/gantt/holiday/#label): Defines the description or label for the holiday.
* [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/gantt/holiday/#cssclass): Formats the holidays label in the Gantt chart.

To highlight the days, inject the `DayMarkersService` module in the `provide` section.

The following code example shows how to display the non-working days in the Gantt component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/holidays/default-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/holidays/default-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/holidays/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/holidays/default-cs1" %}