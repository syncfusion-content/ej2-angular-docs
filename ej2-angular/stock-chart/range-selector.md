---
layout: post
title: Range selector in Angular Stock chart component | Syncfusion
description: Learn here all about Range selector in Syncfusion Angular Stock chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Range selector 
documentation: ug
domainurl: ##DomainURL##
---

# Range selector in Angular Stock chart component

The left and right thumb of RangeNavigator are used to indicate the selected range in the large collection of data. Following are the ways you can select a range.

* By dragging the thumbs.
* By tapping on the labels.
* By setting the start and end through Date Range button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/range-selector-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/range-selector-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/range-selector-cs1" %}

## Visibility of range selector

The [`enableSelector`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartModel/#enableselector) property allows users to toggle the visibility of range selector.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/range-selector-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/range-selector-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/range-selector-cs2" %}