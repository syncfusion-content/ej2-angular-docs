---
layout: post
title: Multi select in Angular Calendar component | Syncfusion
description: Learn here all about Multi select in Syncfusion Angular Calendar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Multi select 
documentation: ug
domainurl: ##DomainURL##
---

# Multi select in Angular Calendar component

Calendar provides an option to select **single** or **multiple dates** or **sequence of dates** by using [`isMultiSelection`](https://ej2.syncfusion.com/angular/documentation/api/calendar#ismultiselection) and [`values`](https://ej2.syncfusion.com/angular/documentation/api/calendar#values) properties. By default, [`isMultiSelection`](https://ej2.syncfusion.com/angular/documentation/api/calendar#ismultiselection) property will be in disabled state.

The following example demonstrates the functionality of  `isMultiSelection` property and `values` properties in the Calendar control.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/calendar/getting-started-cs14/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/calendar/getting-started-cs14/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/getting-started-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/getting-started-cs14" %}