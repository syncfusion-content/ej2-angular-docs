---
layout: post
title: Chart title and subtitle in Angular Chart component | Syncfusion
description: Learn here all about Chart title and subtitle in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chart title and subtitle 
documentation: ug
domainurl: ##DomainURL##
---

# Title and Subtitle in Angular Chart Component

Chart titles and subtitles help provide context for the visualized data. The title typically indicates the main subject or metric represented in the chart, while the subtitle adds supporting details such as data sources, time ranges, or explanatory notes. Both elements can be customized in terms of position, alignment, and style to align with application design requirements.

<img src="../../images/titleandsubtitle.png" alt="Chart with title and subtitle formatting example">

## Chart title

Add a chart title using the [`title`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#title) property. The title appears at the top of the chart by default and is used to describe the purpose or subject of the visualization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-title-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-title-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-title-cs2" %}

### Title position

Use the [`position`](https://ej2.syncfusion.com/angular/documentation/api/chart/titleSettingsModel#position) property within [`titleStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#titlestyle) to place the title at the left, right, top, or bottom of the chart. The default position is at the top.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-title-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-title-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-title-cs5" %}

To manually position the title anywhere within the chart, use the [`x`](https://ej2.syncfusion.com/angular/documentation/api/chart/titleSettingsModel#x) and [`y`](https://ej2.syncfusion.com/angular/documentation/api/chart/titleSettingsModel#y) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-title-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-title-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-title-cs6" %}

### Title alignment

Align the chart title to the near, center, or far side of the chart using the [`textAlignment`](https://ej2.syncfusion.com/angular/documentation/api/chart/titleSettingsModel#textalignment) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-title-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-title-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-title-cs7" %}

### Title wrap

Customize the title’s appearance using the `textStyle` property. Options include `size`, `color`, `fontFamily`, `fontWeight`, `fontStyle`, `opacity`, `textAlignment`, and `textOverflow` to control how the title is rendered within the chart area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-title-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-title-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-title-cs3" %}

## Chart subTitle

Add a subtitle to the chart using the [`subTitle`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#subtitle) property. Subtitles help provide additional context such as descriptions, notes, or supporting information related to the chart data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-title-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-title-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-title-cs4" %}