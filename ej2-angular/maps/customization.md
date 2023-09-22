---
layout: post
title: Customization in Angular Maps component | Syncfusion
description: Learn here all about Customization in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customization 
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Angular Maps component

## Setting the size for Maps

The width and height of the Maps can be set using the [`width`](https://ej2.syncfusion.com/angular/documentation/api/maps/mapsModel/#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/maps/mapsModel/#height) properties in the Maps component. Percentage or pixel values can be used for the height and width values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs19/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs19/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs19" %}

## Maps title

The title for the Maps can be set using the [`titleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/titleSettingsModel). It can be customized using the following properties.

* [`alignment`](https://ej2.syncfusion.com/angular/documentation/api/maps/titleSettingsModel/#alignment) - To customize the alignment for the text in the title for the Maps. The possible values are **Center**, **Near** and **Far**.
* [`description`](https://ej2.syncfusion.com/angular/documentation/api/maps/titleSettingsModel/#description) - To set the description of the title in Maps.
* [`text`](https://ej2.syncfusion.com/angular/documentation/api/maps/titleSettingsModel/#text) - To set the text for the title in Maps.
* [`textStyle`](https://ej2.syncfusion.com/angular/documentation/api/maps/titleSettingsModel/#textstyle) - To customize the text of the title in Maps.
* [`subtitleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/titleSettingsModel/#subtitlesettings) - To customize the subtitle for the Maps.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs20/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs20/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs20" %}

## Setting theme

The Maps component supports following themes.

* Material
* Fabric
* Bootstrap
* Highcontrast
* MaterialDark
* FabricDark
* BootstrapDark
* Bootstrap4
* HighContrastLight
* Tailwind

By default, the Maps are rendered by the **Material** theme. The theme of the Maps component is changed using the [`theme`](https://ej2.syncfusion.com/angular/documentation/api/maps/#theme) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs21/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs21/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs21" %}

## Customizing Maps container

The following properties are available to customize the container in the Maps.

* [`background`](https://ej2.syncfusion.com/angular/documentation/api/maps/mapsModel/#background) - To apply the background color to the container in the Maps.
* [`border`](https://ej2.syncfusion.com/angular/documentation/api/maps/mapsModel/#border) - To customize the color, width and opacity of the border of the Maps.
* [`margin`](https://ej2.syncfusion.com/angular/documentation/api/maps/mapsModel/#margin) - To customize the margins of the Maps.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs22/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs22/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs22" %}

## Customizing Maps area

By default, the background color of the shape maps is set as **white**. To modify the background color of the Maps area, the [`background`](https://ej2.syncfusion.com/angular/documentation/api/maps/mapsAreaSettingsModel/#background) property in the [`mapsArea`](https://ej2.syncfusion.com/angular/documentation/api/maps/mapsAreaSettingsModel) is used. The border of the Maps area can be customized using [`border`](https://ej2.syncfusion.com/angular/documentation/api/maps/mapsAreaSettingsModel/#border) property in the [`mapsArea`](https://ej2.syncfusion.com/angular/documentation/api/maps/mapsAreaSettingsModel).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs23/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs23/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs23" %}

## Customizing the shapes

The following properties are available in [`shapeSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel) to customize the shapes of the Maps.

* [`fill`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/#fill) - To apply the fill color to the all the shapes.
* [`autofill`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/#autofill) - To apply the palette colors to the shapes if it is set as true.
* [`palette`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/#palette) - To set the custom palette for the shapes.
* [`border`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/#border) - To customize the color, width and opacity of the border of the shapes.
* [`dashArray`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/#dasharray) - To define the pattern of dashes and gaps that is applied to the outline of the shapes.
* [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/#opacity) - To customize the transparency for the shapes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs24/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs24/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs24/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs24" %}

## Setting color to the shapes from the data source

The color for each shape in the Maps can be set using the [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/#colorvaluepath) property of [`shapeSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel). The value for the [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/#colorvaluepath) property is the field name from the data source of the [`shapeSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel) which contains the color values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs25/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs25/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs25/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs25" %}

## Applying border to individual shapes

The border of each shape in the Maps can be customized using the [`borderColorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/#bordercolorvaluepath) and [`borderWidthValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/#borderwidthvaluepath) properties to modify the color and the width of the border respectively. The field name in the data source of the layer which contains the color and the width values must be set in the [`borderColorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/#bordercolorvaluepath) and [`borderWidthValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/#borderwidthvaluepath) properties respectively. If the values of [`borderWidthValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/#borderwidthvaluepath) and [`borderColorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/#bordercolorvaluepath) do not match with the field name from the data source, then the color and width of the border will be applied to the shapes using the [`border`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/#border) property in the [`shapeSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs26/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs26/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs26/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs26" %}

## Projection type

The Maps component supports the following projection types:

* Mercator
* Equirectangular
* Miller
* Eckert3
* Eckert5
* Eckert6
* Winkel3
* AitOff

By default, the Maps are rendered by the **Mercator** projection type in which the Maps are rendered based on the coordinates. So, the Maps is not stretched. To change the type of projection in the Maps, the [`projectionType`](https://ej2.syncfusion.com/angular/documentation/api/maps/projectionType/) property is used.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs27/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs27/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs27/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs27" %}