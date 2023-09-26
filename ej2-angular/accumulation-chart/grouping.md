---
layout: post
title: Grouping in Angular Accumulation chart component | Syncfusion
description: Learn here all about Grouping in Syncfusion Angular Accumulation chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Grouping 
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Angular Accumulation chart component

You can club/group few points of the series based on [`groupTo`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationSeries/#groupto) property. For example, if the club value is 11, then the points with value less than 11 is grouped together and will be showed as a single point with label `others`. The property also takes value in percentage (percentage of total data points value).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/clubpoint-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/clubpoint-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/clubpoint-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/clubpoint-cs2" %}

## Broken slice

You can visualize all points available in club/group points by clicking on the grouped point. For example, if 5 points are grouped together it will be showed as a single slice with label `others`. If we click on `others` slice it will explode and broke into 5 seperate slices.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/clubpoint-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/clubpoint-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/clubpoint-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/clubpoint-cs3" %}

## Group Mode

Slice can also be grouped based on number of points by specifying the `groupMode` to Point. For example, if the group to value is 11, accumulation chart will show 1st 11 points and will group remaining entries in the collection as a single point.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/clubpoint-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/clubpoint-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/clubpoint-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/clubpoint-cs4" %}

## Customization

You can customize the grouped point and its data label using `pointRender` and `textRender` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/clubpoint-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/clubpoint-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/clubpoint-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/clubpoint-cs5" %}