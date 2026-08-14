---
layout: post
title: How to customize the day header in DateRangePicker | Syncfusion®
description: Learn how to customize the day header format in the Syncfusion Angular DateRangePicker using the dayHeaderFormat property.
platform: ej2-angular
control: Customize the daterangepicker day header 
documentation: ug
domainurl: ##DomainURL##
---

# How to customize the day header in Angular DateRangePicker

You can change the format of the day that to be displayed in header using [`dayHeaderFormat`](https://ej2.syncfusion.com/angular/documentation/api/daterangepicker#dayheaderformat) property. By default, the format is `Short`.

You can find the possible formats on below.

| **Name** | **Description** |
|------|---------------------|
| `Short` | Sets the short format of day name (like Su ) in day header. |
| `Narrow` | Sets the single character of day name (like S ) in day header. |
| `Abbreviated` | Sets the min format of day name (like Sun ) in day header. |
| `Wide` | Sets the long format of day name (like Sunday ) in day header. |

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/daterangepicker/header-format-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/daterangepicker/header-format-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/daterangepicker/header-format-cs1" %}
