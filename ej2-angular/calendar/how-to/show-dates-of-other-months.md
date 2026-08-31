---
layout: post
title: How to show dates of other months in Angular Calendar | Syncfusion®
description: Learn how to show the leading and trailing dates of adjacent months in the Syncfusion Angular Calendar by applying custom CSS styles.
platform: ej2-angular
control: Show dates of other months 
documentation: ug
domainurl: ##DomainURL##
---

# How to show dates of other months in Angular Calendar

By default, dates that belong to the previous or next month are hidden in the Calendar view. You can display these leading and trailing dates by overriding the default Calendar styles.

The following CSS styles make the dates from adjacent months visible and enable interaction with those dates.

```css
.e-calendar .e-content tr.e-month-hide {
    display: table-row;
}

.e-calendar .e-content td.e-other-month>span.e-day {
    display: inline-block;
}

.e-calendar .e-content td.e-month-hide,
.e-calendar .e-content td.e-other-month {
    pointer-events: auto;
    touch-action: auto;
}
```

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/how-to-othermonth-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/how-to-othermonth-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/how-to-othermonth-cs1" %}