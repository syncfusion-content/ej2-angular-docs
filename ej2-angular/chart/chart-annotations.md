---
layout: post
title: Chart annotations in Angular Chart component | Syncfusion
description: Learn here all about Chart annotations in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chart annotations 
documentation: ug
domainurl: ##DomainURL##
---

# Chart annotations in Angular Chart component

Chart annotations allow highlighting specific areas of the chart using text, shapes, images, or custom HTML elements. Annotations can be used to emphasize trends, mark thresholds, show custom notes, or display additional information directly inside the chart area.

<!-- markdownlint-disable MD033 -->

Annotations are added using the `annotations` option. Set the [`content`](https://ej2.syncfusion.com/angular/documentation/api/chart/annotationDirective#content) property to reference the element that should be rendered within the chart.

To known more about annotations, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=8JSZW9mZVpY" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs7" %}

>Note: To use the annotation feature, inject `ChartAnnotationService` into the `@NgModule.providers`.

## Region

Annotations can be positioned relative to either the overall `Chart` area or a specific `Series`. When placed relative to the chart, the annotation uses the chart’s coordinate system. When placed relative to a series, the annotation aligns with that series' data points. By default, annotations are placed with respect to the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs8" %}

## Co-ordinate Units

Use the `coordinateUnits` property to define how annotation coordinates are interpreted. Choose between:
- **Pixel** – The annotation is positioned using fixed pixel values within the chart area.  
- **Point** – The annotation is positioned based on chart data points (x and y values).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs9" %}

## Alignment

Annotation provides `verticalAlignment` and `horizontalAlignment`. The `verticalAlignment` can be customized via `Top`, `Bottom` or `Middle` and the `horizontalAlignment` can be customized via `Near`, `Far` or `Center`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs10" %}

## Adding y-axis sub title through on annotation

By setting text div in the `content` option of annotation object you can add sub title to chart y-axis. Specified the `coordinate` value as `pixel` and customize x and y location of the text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs11" %}

## See Also

* [Show total stacking values in data label](./how-to/stacking-total#show-the-total-value-for-stacking-series-in-data-label)
* [Create footer and watermark for chart](./how-to/footer#create-footer-and-watermark-for-chart)
* [Dynamically Update X-Axis Annotation Content](https://support.syncfusion.com/kb/article/21478/how-to-dynamically-update-x-axis-annotation-content-on-point-click-in-angular-chart)
* [Add Clickable Annotation Text](https://support.syncfusion.com/kb/article/21318/how-to-add-clickable-annotation-text-in-angular-accumulation-chart)