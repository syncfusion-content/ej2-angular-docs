---
layout: post
title: Smith Chart Marker in Angular Smith Chart | Syncfusion
description: Learn here all about Smith chart marker in Syncfusion Angular Smithchart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Smith chart marker 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Smith Chart Marker in Angular Smith Chart

Markers and Datalabels are used to provide information about the data points in the series. You can add a shape to adorn each data point. By default marker and datalabel both are disabled in smithchart. You can enable both of them by setting visible property as true in marker and datalabel settings

## Enable markers in the Smith Chart

Use the series [`marker`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesModel#marker) property to configure series markers. To display a marker for a particular series, set [`visible`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesMarkerModel#visible) to `true` on the marker's options. The following sample enables the marker for the first series only.

Update `app.component.ts` to bind a `marker` object to the first series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs4" %}

## Marker Customization

Using marker settings in series, you can customize the marker for each series differently. Using marker settings, you can customize following properties differently for each series in the smithchart.

* [`width`] - To control the width of the marker.
* [`height`] - To control the height of the marker.
* [`fill`] - Used to customize the fill color of the marker.
* [`opacity`] - Used to customize the opacity of the marker.
* [`border`] - Used to control the width and color of the marker's border.
* [`shape`] - Used to change the shape of the marker.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs22/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs22" %}

## Enable data labels on Smith Chart markers

Use the marker [`dataLabel`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesMarkerModel#datalabel) property to configure marker data labels. To display a data label for a particular series marker, set [`visible`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesDatalabelModel#visible) to `true` on the marker's `dataLabel` options. The following sample enables data labels for the first series.

Update `app.component.ts` as shown in the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs5" %}

## Datalabel customization

Using datalabel settings in marker, you can customize the datalabel for each series differently. In datalabel, you can customize the following properties differently for each series.

* [`fill`] - Used to changes the fill color of the data label's shape.
* [`opacity`] - Used to control the opacity of the data label's shape.
* [`border`] - Used to customize the width and color of the border.
* [`textStyle`] - Used to customize the font color, width and size.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs24/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs24/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs24" %}