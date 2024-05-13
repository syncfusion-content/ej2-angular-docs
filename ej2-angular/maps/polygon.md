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

The Maps component allows you to add polygon shape to a geometry map or an online map by using the properties in the [polygons](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingsModel/#polygons). This section describes how to add polygon shape to the map and customize them.

## Adding polygon shape

To render polygon shape in Maps, **Polygon** module must be injected into the Maps using `Maps.Inject(Polygon)` method. The polygon shape can be rendered over the map layer by defining the [points](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingModel/#points) property in the `polygons` of the Maps component. The `points` property uses a collection of latitude and longitude values to define the polygon shape.

The `polygons` provides the following properties for customizing the polygon shape of the Maps component.

* [fill](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingModel/#fill) - It is used to change the color of the polygon shape.
* [opacity](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingModel/#opacity) - It is used to change the opacity of the polygon shape.
* [borderColor](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingModel/#bordercolor) - It is used to change the color of the border in the polygon shape.
* [borderWidth](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingModel/#borderwidth) - It is used to change the width of the border in the polygon shape.
* [borderOpacity](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingModel/#borderopacity) - It is used to change the opacity of the border in the polygon shape.

> You can also include “n” polygon shapes using the [polygons](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingsModel/#polygons) property.

The following example shows how to customize the polygon shape over the geometry map.

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

Tooltip is used to display more information about a polygon shape during a mouse or touch interaction. Tooltip and tooltip template can be enabled by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonTooltipSettingsModel/#visible) property to **true** in the [tooltipSettings](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonTooltipSettingsModel/). Additionally, you need to set the desired content as a value to the [tooltipText](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingModel/#tooltiptext) property in the `polygons` property to show the tooltip. If you add 'n' numbers of polygon shapes, you can add the `tooltipText` property to each polygon, which will display the tooltip for the associated polygon shape.

### Tooltip customization

The following properties are available in the [tooltipSettings](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonTooltipSettingsModel/) to customize the appearance of the tooltip.

* [border](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonTooltipSettingsModel/#border) - To change the color, width, and opacity of the border of the tooltip in the polygon shape.
* [fill](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonTooltipSettingsModel/#fill) - Applies the color of the tooltip in the polygon shape.
* [textStyle](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonTooltipSettingsModel/#textstyle) - To change the style of the text in the tooltip of the polygon shape.

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

Any HTML element can be rendered in the tooltip of the polygon shapes using the [tooltipTemplate](https://ej2.syncfusion.com/angular/documentation/api/maps/polygonSettingModel/#tooltiptemplate) property of the `polygons` property. If you add 'n' numbers of polygon shapes, you can add the `tooltipTemplate` property to each polygon, which will display the tooltip for the associated polygon shape.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/polygon-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/polygon-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/polygon-cs5" %}
