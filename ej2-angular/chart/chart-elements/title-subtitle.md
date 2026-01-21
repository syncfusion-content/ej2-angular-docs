---
layout: post
title: Chart title and subtitle in Angular Chart component | Syncfusion
description: Learn here all about Chart title and subtitle in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chart title and subtitle 
documentation: ug
domainurl: ##DomainURL##
---

# Chart title and subtitle in Angular Chart component

The chart title appears at the top of the chart area, serving as a clear and prominent heading for the data visualization, while the subtitle provides additional context.

<img src="../../images/titleandsubtitle.png" alt="Yes">

## Chart title

Chart can be given a title using [`title`](https://ej2.syncfusion.com/angular/documentation/api/chart#title) property, to show the information about the data plotted.

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

By using the [`position`](https://ej2.syncfusion.com/angular/documentation/api/chart/titleSettingsModel#position) property in [`titleStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart#titlestyle), you can position the [`title`](https://ej2.syncfusion.com/angular/documentation/api/chart#title) at left, right, top or bottom of the chart. The title is positioned at the top of the chart, by default.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-title-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-title-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-title-cs5" %}

The custom option helps you to position the title anywhere in the chart using [`x`](https://ej2.syncfusion.com/angular/documentation/api/chart/titleSettingsModel#x) and [`y`](https://ej2.syncfusion.com/angular/documentation/api/chart/titleSettingsModel#y) coordinates.

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

You can align the title to the near, far, or center of the chart using the [`textAlignment`](https://ej2.syncfusion.com/angular/documentation/api/chart/titleSettingsModel#textalignment) property.

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

Chart can be given a title using [`title`](https://ej2.syncfusion.com/angular/documentation/api/chart#title) property, to show the information about the data plotted.

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

Chart can be given a subtitle using [`subTitle`](https://ej2.syncfusion.com/angular/documentation/api/chart#subtitle) property, to show the information about the data plotted.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-title-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-title-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-title-cs4" %}