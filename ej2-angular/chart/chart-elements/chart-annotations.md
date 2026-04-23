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

<img src="../../images/annotation.png" alt="Chart displaying annotation example">

Annotations are added using the [`annotations`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#annotations) option. Set the [`content`](https://ej2.syncfusion.com/angular/documentation/api/chart/annotationDirective#content) property to reference the element that should be rendered within the chart.

To know more about annotations, you can check on this video:

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

>**Note**: To use annotation feature in chart, we need to inject `ChartAnnotationService` into the `@NgModule.providers`.

## Region

Annotations can be positioned relative to either the overall `Chart` area or a specific `Series` using the [`region`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAnnotationSettingsModel#region) property. When placed relative to the chart, the annotation uses the chart's coordinate system. When placed relative to a series, the annotation aligns with that series' data points. By default, annotations are placed with respect to the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs8" %}

## Coordinate Units

Use the [`coordinateUnits`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAnnotationSettingsModel#coordinateunits) property to define how annotation coordinates are interpreted. Choose between:
- **Pixel** – The annotation is positioned using fixed pixel values within the chart area.  
- **Point** – The annotation is positioned based on chart data points ([`x`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAnnotationSettingsModel#x) and [`y`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAnnotationSettingsModel#y) values).   

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

Annotation provides [`verticalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAnnotationSettingsModel#verticalalignment) and [`horizontalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAnnotationSettingsModel#horizontalalignment). The [`verticalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAnnotationSettingsModel#verticalalignment) can be customized via `Top`, `Bottom` or `Middle` and the [`horizontalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAnnotationSettingsModel#horizontalalignment) can be customized via `Near`, `Far` or `Center`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs10" %}

## Adding y-axis subtitle through annotation

By setting text div in the [`content`](https://ej2.syncfusion.com/angular/documentation/api/chart/annotationDirective#content) option of annotation object, you can add a subtitle to the chart y-axis. Specify the [`coordinateUnits`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAnnotationSettingsModel#coordinateunits) value as `Pixel` and customize the [`x`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAnnotationSettingsModel#x) and [`y`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAnnotationSettingsModel#y) location of the text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs11" %}

## Annotation customization

### Dotted line

Set the annotation [`coordinateUnits`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAnnotationSettingsModel#coordinateunits) to `Point` to place dotted lines at specific data point positions using their [`x`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAnnotationSettingsModel#x) and [`y`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAnnotationSettingsModel#y) values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs6" %}

### Footer

Use annotations to add both a watermark and a footer to the chart. Initialize custom elements with the [`annotation`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAnnotationSettingsModel) property and provide the HTML to render via the [`content`](https://ej2.syncfusion.com/angular/documentation/api/chart/annotationDirective#content) option. For a watermark, supply the text "syncfusion" and position it using the desired [`coordinateUnits`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAnnotationSettingsModel#coordinateunits).

```bash
    #  watermark for chart
       <e-annotations>
            <e-annotation  content='<div id="chart_cloud" style="font-size:450%; opacity: 0.3;" >syncfusion</div>'
            x='Wed' y= 20 coordinateUnits= 'Point' horizontalAlignment='Center'>
            </e-annotation>
        </e-annotations>
```

Use the [`x`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAnnotationSettingsModel#x) and [`y`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAnnotationSettingsModel#y) option of the annotation object to create a footer for the chart.

```bash
<e-annotations>
   #  footer for chart
        <e-annotation  content='<div id="chart" > <a href="https://www.syncfusion.com" target="_blank">www.syncfusion.com</a></div>'
            x=400 y=440 coordinateUnits='Pixel' horizontalAlignment='Center'>
            </e-annotation>
        </e-annotations>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs8" %}

### Stacking total

To show the total at each stacked data point, handle the [`annotationRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#annotationrender) event to compute the series' stacked value and update the annotation content before it renders.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs19/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs19" %}


## See Also

* [Dynamically Update X-Axis Annotation Content](https://support.syncfusion.com/kb/article/21478/how-to-dynamically-update-x-axis-annotation-content-on-point-click-in-angular-chart)
* [Add Clickable Annotation Text](https://support.syncfusion.com/kb/article/21318/how-to-add-clickable-annotation-text-in-angular-accumulation-chart)