---
layout: post
title: Palette in Angular Heatmap chart component | Syncfusion
description: Learn here all about Palette in Syncfusion Angular Heatmap chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Palette 
documentation: ug
domainurl: ##DomainURL##
---

# Palette in Angular Heatmap chart component

In heat map, each data point is displayed as a cell with applied color based on the data value. The palette in the heat map is used to define the color range for cells and gradient type for colors. You can define the colors either in RGB or hex codes using the [color](https://ej2.syncfusion.com/angular/documentation/api/heatmap/paletteCollection#color) property in `palette`. The defined colors are applied to the cell background based on the palette type and cell value.

## Palette types

You can display the heat map cells either in gradient colors or fixed colors.

### Gradient

The smooth transition between the given palette colors can be applied for the heat map cells based on value. The heat map calculates all the gradient colors between the start and end colors for all distinct data values. Default start color and end color will be considered for gradient calculation, if the colors are not defined. The palette type must be defined as **Gradient** for the [type](https://ej2.syncfusion.com/angular/documentation/api/heatmap/paletteSettings#type) property in `paletteSettings` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/palette/palettegradient-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/palette/palettegradient-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/palette/palettegradient-cs1" %}

### Fixed

In fixed palette type, solid colors are applied to the heat map cells. The data values can be grouped based on the number of colors defined for the heat map. The palette type should be defined as **Fixed** for the [type](https://ej2.syncfusion.com/angular/documentation/api/heatmap/paletteSettings#type) property in the `paletteSettings` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/palette/palettefixed-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/palette/palettefixed-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/palette/palettefixed-cs1" %}

## Defining color stops

You can define the colors ranges or color stops for data values in both gradient and fixed palette types. You need to define the data value in the `value` property for `palette` property to calculate the color stops. The heat map automatically calculates the color stops if the `value` property is not defined. The [label](https://ej2.syncfusion.com/angular/documentation/api/heatmap/paletteCollection#label) property is used to provide the additional information about the color that is to be displayed in the legend. If the label is not provided, the [value](https://ej2.syncfusion.com/angular/documentation/api/heatmap/paletteCollection#value) is displayed in the legend. The labels can be automatically calculated based on data values, if both the values and labels are not defined.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/palette/palettevalue-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/palette/palettevalue-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/palette/palettevalue-cs1" %}

## Color range

The color range support is used to provide a specific color for specific range in heat map. The `startValue` and `endValue` properties are used to define the range start and end value. The `minColor` and `maxColor` properties represent the colors of given range. It's possible to set the cell color for the value not in the given range using the `fillColor` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/palette/palettevalue-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/palette/palettevalue-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/palette/palettevalue-cs2" %}

## See Also

* [How to enable smart legend](./legend#smart-legend)