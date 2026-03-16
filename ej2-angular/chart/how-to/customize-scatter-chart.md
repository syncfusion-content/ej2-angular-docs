---
layout: post
title: Customize scatter chart in Angular Chart component | Syncfusion
description: Learn here all about Customize scatter chart in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize scatter chart 
documentation: ug
domainurl: ##DomainURL##
---

# Customize scatter chart in Angular Chart component

By using the [`shape`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel/#shape) property in the [`marker`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel), you can customize the shape of the scatter series points such as `Circle`, `Rectangle`, `Triangle`, `Diamond`, `Cross`, `HorizontalLine`, `VerticalLine`, `Pentagon`, `InvertedTriangle`, and `Image`.

You can customize the width and height of the shapes by using the [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel/#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel/#height) properties of the marker.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs3" %}

## Customizing point color and data label value

You can customize the point color by using the [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/#pointrender) event in the chart. In which we check the condition based on `yValue` to change the fill color of the point.

By default, data label values show y values of the data source. You can customize the data label value by using the [`textRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/#textrender) event in the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs4" %}
