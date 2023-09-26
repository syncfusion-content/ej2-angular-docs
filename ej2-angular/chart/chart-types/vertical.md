---
layout: post
title: Vertical Chart in Angular Chart component | Syncfusion
description: Learn here all about Vertical Chart in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Vertical Chart
documentation: ug
domainurl: ##DomainURL##
---

# Vertical Chart in Angular Chart component

## Vertical Chart

In EJ2 chart, you can draw a chart in vertical manner by changing orientation of the axis. All series types support this feature.
You can use `isTransposed` property in chart to render a chart in vertical manner.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/line-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/line-cs9/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/line-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/line-cs9" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)