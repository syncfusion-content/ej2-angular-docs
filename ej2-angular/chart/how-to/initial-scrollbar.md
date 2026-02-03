---
layout: post
title: Initial scrollbar in Angular Chart component | Syncfusion
description: Learn here all about Initial scrollbar in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Initial scrollbar 
documentation: ug
domainurl: ##DomainURL##
---

# Initial scrollbar in Angular Chart component

By setting `zoomFactor` in primaryXAxis and `isZoomed` value as `true` in [`load`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel/#load) event and `enableScrollbar` value as `true` in `zoomSettings`, you can make the scrollbar visible in initial rendering of chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs10" %}