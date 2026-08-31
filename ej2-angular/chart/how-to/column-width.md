---
layout: post
title: How to Customize Column Width in Angular Chart | Syncfusion
description: Learn here all about Column width in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column width 
documentation: ug
domainurl: ##DomainURL##
---

# How to Customize Column Width in Angular Chart

## Customizing column width

You can customize the width of each column and the gap between columns in a column series (`<e-series type="Column">`) by using the [`columnWidth`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#columnwidth) and [`columnSpacing`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#columnspacing) properties on the series. Both properties apply per series and take effect only for column and bar series types.

Set `columnWidth` to a value between `0` and `1` (where `1` fills the available slot) to control how wide each column is rendered. Set `columnSpacing` to a value between `0` and `1` to control the space between adjacent columns; higher values widen the gap, and `0` removes it.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/how-to-cs2" %}