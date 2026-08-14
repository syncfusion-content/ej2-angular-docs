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

The following example demonstrates how to show dates in other months.

The below styles changes the Calendar's other month dates to visible state from its hidden state.

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