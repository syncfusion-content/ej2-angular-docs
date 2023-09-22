---
layout: post
title: Color mapping in Angular Treemap component | Syncfusion
description: Learn here all about Color mapping in Syncfusion Angular Treemap component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Color mapping 
documentation: ug
domainurl: ##DomainURL##
---

# Color mapping in Angular Treemap component

Color mapping is used to customize the color for each group or item based on the specified types. The following options are available to customize the group and leaf items in the TreeMap.

## Range color mapping

Range color mapping is used to apply color to the items by giving specific ranges in the DataSource, and it should be specifying the data source properties to the [`rangeColorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#rangecolorvaluepath). The color mapping ranges to be specified in the [`from`](https://ej2.syncfusion.com/angular/documentation/api/treemap/colorMapping/#from) and [`to`](https://ej2.syncfusion.com/angular/documentation/api/treemap/colorMapping/#to) properties of the [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/treemap/colorMapping/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs1" %}

## Equal color mapping

Equal color mapping is used to fill colors to each item by specifying equal value present in the data source, that can be specified in the [`equalColorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#equalcolorvaluepath) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs2" %}

## Desaturation color mapping

Desaturation color mapping is used to apply colors to the items based on the [`minOpacity`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeMap.ColorMapping.html#Syncfusion_Blazor_TreeMap_ColorMapping_MinOpacity) and [`maxOpacity`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeMap.ColorMapping.html#Syncfusion_Blazor_TreeMap_ColorMapping_MaxOpacity) properties in the [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettings/#colormapping).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs3" %}

## Palette color mapping

The palette color mapping is used to fill the color to each group or leaf item by given colors in the [`palette`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#palette) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs4" %}

## Desaturation with multiple colors

Multiple colors are used as gradient effect to specific shapes based on the ranges in datasource. By using [`color`](https://ej2.syncfusion.com/angular/documentation/api/treemap/colorMappingModel/#color) property, you can set n number of colors.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs5" %}

## Color for items excluded from color mapping

Get the excluded ranges from data source using the color mapping and apply the specific color to those items, without specifying the [`from`](https://ej2.syncfusion.com/angular/documentation/api/treemap/colorMapping/#from) and [`to`](https://ej2.syncfusion.com/angular/documentation/api/treemap/colorMapping/#to) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs6" %}

## Bind the colors to the items from data source

To set the color for each item from the data source, bind the data source property to the [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#colorvaluepath).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs7" %}