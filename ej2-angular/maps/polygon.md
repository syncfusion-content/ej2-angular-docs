---
layout: post
title: Polygon in Angular Maps component | Syncfusion
description: Learn here all about Polygon in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Polygon 
documentation: ug
domainurl: ##DomainURL##
---

# Polygon shape in Angular Maps component

The Maps component supports rendering custom polygon shapes as overlays on both geometry-based maps and online tile maps. Polygons are useful for highlighting specific geographic regions, marking zones of interest, drawing custom boundaries, or visualizing areas such as coverage zones, territorial boundaries, or restricted areas. This feature is configured using the [polygons](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingsModel#polygons) property, which allows multiple polygon shapes to be added and customized independently.

## Adding polygon shape

Polygons are rendered over map layers by defining the [points](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingModel#points) property in the [polygons](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingsModel#polygons) collection. The [points](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingModel#points) property accepts an array of latitude and longitude coordinate pairs that define the vertices of the polygon shape. These coordinates are connected in sequence to form the closed polygon boundary.

The following properties are available for customizing polygon appearance:

* [fill](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingModel#fill) - It is used to change the color of the polygon shape.
* [opacity](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingModel#opacity) - It is used to change the opacity of the polygon shape.
* [borderColor](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingModel#bordercolor) - It is used to change the color of the border in the polygon shape.
* [borderWidth](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingModel#borderwidth) - It is used to change the width of the border in the polygon shape.
* [borderOpacity](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingModel#borderopacity) - It is used to change the opacity of the border in the polygon shape.

> You can also include “n” polygon shapes using the [polygons](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingsModel#polygons) property.

The following example demonstrates how to add and customize a polygon shape on a geometry map.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/polygon-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/polygon-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/polygon-cs1" %}

## Tooltip

Tooltips provide additional information about polygon shapes during mouse hover or touch interactions. Enable tooltips by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonTooltipSettingsModel#visible) property to **true** in the [tooltipSettings](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonTooltipSettingsModel). Define the tooltip content using the [tooltipText](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingModel#tooltiptext) property within each polygon configuration. When multiple polygons are present, each can have its own unique tooltip text.

### Tooltip customization

Customize tooltip appearance using the following properties in [tooltipSettings](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonTooltipSettingsModel):

* [border](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonTooltipSettingsModel#border) - Customizes the color, width, and opacity of the tooltip border.
* [fill](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonTooltipSettingsModel#fill) - Specifies the background color of the tooltip.
* [textStyle](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonTooltipSettingsModel#textstyle) - Defines the font style, size, color, and other text properties for tooltip content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/polygon-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/polygon-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/polygon-cs4" %}

### Tooltip template

Custom HTML content can be displayed in polygon tooltips using the [tooltipTemplate](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingModel#tooltiptemplate) property. This allows for rich formatting, images, or complex layouts within the tooltip. Each polygon can have its own unique tooltip template, enabling different visualizations for different polygon shapes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/polygon-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/polygon-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/polygon-cs5" %}
