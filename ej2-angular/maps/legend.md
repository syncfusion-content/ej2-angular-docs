---
layout: post
title: Legend in Angular Maps component | Syncfusion
description: Learn here all about Legend in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Legend 
documentation: ug
domainurl: ##DomainURL##
---

# Legend in Angular Maps component

A Legend is a visual representation of the symbols used on the Maps. It can be represented in various colors, shapes or other identifiers based on the data and provides valuable information for interpreting what the Maps are displaying. It explains what each symbol in the Maps represents. Legends are enabled by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#visible) property of [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel) property to **true**.

## Modes of legend

Legend had two types of mode.
1. **Default** mode
2. **Interactive** mode

### Default mode

Default mode legends having symbols with legend labels, used to identify the shape or bubble or marker color. To enable this option by setting the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#mode) property of [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel) as **Default**.

### Interactive mode

The legends can be made interactive with an arrow mark indicating the exact range color in the legend when the mouse hovers over the corresponding shapes. To enable this type of mode by setting the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#mode) property of [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel) as **Interactive**. The [`invertedPointer`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#invertedpointer) property is used to enable or disable the visibility of the inverted pointer in interactive legend in Maps.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs49/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs49/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs49/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs49" %}

## Positioning of the legend

The legend can be positioned in the following two ways:

* Absolute position
* Dock position

<b>Absolute position</b>

The legend of the Maps can be positioned using the [`location`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#location) property in the [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel) property. For positioning the legend based on co-ordinates corresponding to a Maps, the [`position`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#position) property is set as **Float**.

<b>Dock position</b>

Legends are positioned in the following locations within the container. The [`position`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#position) property in [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel) property is used to set these options in Maps.

* Top
* Left
* Bottom
* Right

The above four positions can be aligned with combination of **Near**, **Center** and **Far** using [`alignment`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#alignment) property in [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel) property. So, the legend can be aligned to 12 positions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs50/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs50/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs50/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs50" %}

## Legend for shapes

Legend for shapes can be generated from color mapping types such as equal color mapping, range color mapping and desaturation color mapping.

The below code snippet demonstrate the equal color mapping legends for the shapes. To bind the given data source to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel/#datasource) property of [`layerSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel/) property. Set the value of [`shapePropertyPath`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel/#shapepropertypath) to **name** and [`shapeDataPath`](https://ej2.syncfusion.com/angular/documentation/api/maps/layerSettingsModel/#shapedatapath) to **Country**. To enable equal color mapping, set the [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel/) as an array in [`shapeSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/) property. Finally, set the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#visible) property of [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel) as **true**. The [`label`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel/#label) property in [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel/) property is used to set the text name for legend in Maps.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs51/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs51/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs51/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs51" %}

### Legend shape

Maps supports the following types of legend shapes. The [`shape`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#shape) property in the [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel) property can be used to change the type of legend shapes.

* Circle
* Rectangle
* Triangle
* Diamond
* Cross
* Star
* HorizontalLine
* VerticalLine
* Pentagon
* InvertedTriangle

The shape of legends can be customized using the [`shapeWidth`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#shapewidth), [`shapeHeight`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#shapeheight), [`shapeBorder`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#shapeborder) and [`shapePadding`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#shapepadding) properties.

### Customization

The following properties are available in legend to customize the legend shape and legend text in Maps.

* [`background`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#background) - To customize the background color of the Legend.
* [`border`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#border) - To customize the color, width and opacity of the border for the Legend.
* [`fill`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#fill) - To apply the color for the Legend.
* [`labelDisplayMode`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#labeldisplaymode) - To customize the display mode for the Legend text.
* [`labelPosition`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#labelposition) - To customize the position of the Legend text.
* [`orientation`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#orientation) - To customize the orientation of the Legend.
* [`textStyle`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#textstyle) - To customize the text style for Legend.
* [`title`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#title) - To apply the title for the Legend.
* [`titleStyle`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#titlestyle) - To customize the style of the title for the Legend.
* [`height`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#height) - To customize the height of the Legend.
* [`width`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#width) - To customize the width of the Legend.
* [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#opacity) - To apply the opacity to the Legend.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs52/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs52/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs52/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs52" %}

### Legend for items excluded from color mapping

The legend can be enabled for items excluded from the color mapping using the [`color`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel/#color) property in [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel/). Refer to the **Population_density** data which demonstrates the population density of some countries.

```typescript
export let Population_density = [
    https://ej2.syncfusion.com/angular/documentation.
    {
        'code': 'AE',
        'value': 90,
        'name': 'United Arab Emirates',
        'population': 8264070,
        'density': 99
    },
    {
        'code': 'GB',
        'value': 257,
        'name': 'United Kingdom',
        'population': 62041708,
        'density': 255
    },
    {
        'code': 'US',
        'value': 34,
        'name': 'United States',
        'population': 325020000,
        'density': 33
    }
    ...
    ];
```

In the following example, color mapping is added for the ranges from **0** to **200**. If there are any records in the data source that are outside of this range, the color mapping will not be applied. To apply the color for these excluded items, set the [`color`](../api/maps/colorMappingSettingsModel/#color) property alone in the [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel/). To enable legend for these items, set the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#visible) property of [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/) to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs53/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs53/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs53/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs53" %}

### Hide desired legend items

Use the [`showLegend`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel/#showlegend) in the [`colorMapping`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel/) property to show or hide the desired legend items in Maps. If the [`showLegend`](https://ej2.syncfusion.com/angular/documentation/api/maps/colorMappingSettingsModel/#showlegend) property is set to **false**, the legend item will be hidden. otherwise, it will be visible.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs54/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs54/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs54/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs54" %}

### Hide legend items based data source value

Depending on the boolean values provided in the data source, the legend items will be hidden or visible. Bind the field name that contains the visibility state in the data source to the [`showLegendPath`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#showlegendpath) property of the [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/) to achieve this.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs55/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs55/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs55/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs55" %}

### Binding legend item text from data source

To show the legend text based on values provided in the data source, use the [`valuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#valuepath) property in the [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs56/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs56/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs56/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs56" %}

### Hide duplicate legend items

To hide the duplicate legend items in Maps, set the [`removeDuplicateLegend`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#removeduplicatelegend) property to **true** in the [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs57/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs57/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs57/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs57" %}

### Toggle option in legend

The toggle option has been provided for legend. If the legend can be toggled, the given color will be changed to the corresponding Maps shape item. To enable the toggle options in Legend, set the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/maps/toggleLegendSettingsModel/#enable) property of the [`toggleLegendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/toggleLegendSettingsModel) to **true**.

The following properties are available to customize the toggle option in legend.

* [`applyShapeSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/toggleLegendSettingsModel/#applyshapesettings) – To apply a [`fill`](https://ej2.syncfusion.com/angular/documentation/api/maps/shapeSettingsModel/#fill) property color to the shapes when toggling the legend items.
* [`fill`](https://ej2.syncfusion.com/angular/documentation/api/maps/toggleLegendSettingsModel/#fill) - To apply the color to the shape of the Maps for which legend item is toggled.
* [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/maps/toggleLegendSettingsModel/#opacity) – To customize the transparency for the shapes for which legend item is toggled.
* [`border`](https://ej2.syncfusion.com/angular/documentation/api/maps/toggleLegendSettingsModel/#border) – To customize the color, width and opacity of the border of the shapes in Maps.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs58/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs58/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs58/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs58" %}

## Enable legend for bubbles

To enable the legend for the bubble by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#visible) property of [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel) as **true** and [`type`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#type) property of [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel) as **Bubbles**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs59/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs59/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs59/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs59" %}

## Enable legend for markers

To enable legend for marker by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#visible) property of [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel) as **true** and [`type`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#type) property of [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel) as **Markers**. The [`legendText`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#legendtext) property in the [`markerSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel) can be used to show the legend text based on values provided in the data source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs60/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs60/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs60/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs60" %}

### Imitate/Map marker shape to the legend shape

To imitate or map the marker shape with its legend item shape, set the [`useMarkerShape`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel/#usemarkershape) property to **true** in the [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/legendSettingsModel) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs61/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs61/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs61/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs61" %}