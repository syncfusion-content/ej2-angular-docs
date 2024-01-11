---
layout: post
title: Legend in Angular 3D Chart control | Syncfusion
description: Learn here all about legend in Syncfusion Angular 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: 3D Chart
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Legend in Angular 3D Chart control

<!-- markdownlint-disable MD036 -->

Legend provides information about the series rendered in the 3D chart.

## Position and alignment

By using the [`position`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#position) property, the legend can be positioned at left, right, top or bottom of the 3D chart. The legend is positioned at the bottom of the 3D chart, by default.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/legend/legend-cs1" %}

The custom position helps you to position the legend anywhere in the 3D chart using x and y coordinates.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/legend/legend-cs2" %}

### Legend reverse

The order of the legend items can be reversed by using the [`reverse`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#reverse) property. By default, legend for the first series in the collection will be placed first.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/legend/legend-cs3" %}

### Legend alignment

The legend can be aligned at near, far or center to the 3D chart using the [`alignment`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#alignment) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/legend/legend-cs4" %}

## Legend customization

To change the legend icon shape, [`legendShape`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#legendshape) property in the [`series`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel) can be used. By default, the legend icon shape is `seriesType`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/legend/legend-cs5" %}

### Legend size

By default, legend takes 20% - 25% of the 3D chart's height horizontally, when it is placed on top or bottom position and 20% - 25% of the 3D chart's width vertically, when it is placed on left or right position. You can change this default legend size by using the [`height`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#height) and [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#width) properties of the `legendSettings`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/legend/legend-cs6" %}

### Legend item size

The size of the legend items can be customised by using the [`shapeHeight`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#shapeheight) and [`shapeWidth`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#shapewidth) properties.\

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/legend/legend-cs7" %}

### Paging for legend

Paging will be enabled by default, when the legend items exceeds the legend bounds. Each legend items can be viewed by navigating between the pages using navigation buttons.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs8/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/legend/legend-cs8 %}

### Legend text wrap

When the legend text exceeds the container, the text can be wrapped by using the [`textWrap`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#textwrap) property. End user can also wrap the legend text based on the [`maximumLabelWidth`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#maximumlabelwidth) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs9/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/legend/legend-cs9 %}

## Series selection through legend

By default, you can collapse the series visibility by clicking the legend. On the other hand, turn off the [`toggleVisibility`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#togglevisibility) property if you must use a legend click to choose a series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs10/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/legend/legend-cs10 %}

## Collapsing legend item

By default, series name will be displayed as legend. To skip the legend for a particular series, you can give empty string to the series name.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/legend/legend-cs11 %}

## Legend title

You can set title for legend using [`title`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#title) property in [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DModel/#legendsettings). The [`size`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/titleSettingsModel/#size), [`color`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/titleSettingsModel/#color), [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/titleSettingsModel/#opacity),[`fontStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/titleSettingsModel/#fontstyle),  [`fontWeight`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/titleSettingsModel/#fontweight), [`fontFamily`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/titleSettingsModel/#fontfamily), [`textAlignment`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/titleSettingsModel/#textalignment), and [`textOverflow`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/titleSettingsModel/#textoverflow) of legend title can be customized by using the [`titleStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#titlestyle) property in [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DModel/#legendsettings). The [`titlePosition`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#titleposition) is used to set the legend position in `Top`, `Left` and `Right` position. The [`maximumTitleWidth`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#maximumlabelwidth) is used to set the width of the legend title. By default, it will be `100px`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs12/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs12/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/legend/legend-cs12 %}

## Arrow page navigation

The page number will always be visible while using legend paging. It is now possible to disable the page number and enable page navigation with the left and right arrows. The [`enablePages`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#enablepages) property needs to be set to **false** in order to render the arrow page navigation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs13/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs13/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/legend/legend-cs13 %}

## Legend item padding

The [`itemPadding`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#itempadding) property can be used to adjust the space between the legend items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs14/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs14/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/legend/legend-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/legend/legend-cs14 %}

>Note: To use the legend feature, we need to inject the `Legend3DService` module into the `@NgModule.providers`.