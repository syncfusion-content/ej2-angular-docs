---
layout: post
title: High Low Open Close in Angular Chart component | Syncfusion
description: Learn here all about High Low Open Close in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: High Low Open Close
documentation: ug
domainurl: ##DomainURL##
---

# High Low Open Close in Angular Chart component

## High Low Open Close

HiloOpenClose series is used to represent the low, high, open and closing values over time.
To render a HiloOpenClose series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#type) as `HiloOpenClose` and inject `HiloOpenCloseSeriesService` into the `@NgModule.providers`.

HiloOpenClose series requires 5 fields (x, high, low, open and close) to show the high, low, open and close price values in the stock.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/hiloopenclose-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/hiloopenclose-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/hiloopenclose-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/hiloopenclose-cs1" %}

## Series customization

In HiloOpenClose series, [`bullFillColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#bullFillColor) is used to fill the  segment when the open value is greater than the close value and [`bearFillColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#bearFillColor) is used to fill the segment when the open value is less than the close value.

By default, bullFillColor is set as red and bearFillColor is set as green.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/hiloopenclose-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/hiloopenclose-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/hiloopenclose-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/hiloopenclose-cs2" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)