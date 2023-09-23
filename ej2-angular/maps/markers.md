---
layout: post
title: Markers in Angular Maps component | Syncfusion
description: Learn here all about Markers in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Markers 
documentation: ug
domainurl: ##DomainURL##
---

# Markers in Angular Maps component

Markers are notes that are used to leave a message on the Maps. It indicates or marks a specific location with desired symbols on the Maps. It can be enabled by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#visible) property of the [`markerSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/) to **true**.

## Adding marker

To add the markers, the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#datasource) property of the [`markerSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/) has a list of objects that contains the data for markers. Using this property, any number of markers can be added to the layers of the Maps. By default, it displays the markers based on the specified latitude and longitude in the given data source. Each data source object contains the following list of properties.

* latitude - The latitude point which determines the X location of the marker.
* longitude - The longitude point which determines the Y location of the marker.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs63/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs63/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs63/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs63" %}

## Adding marker template

The Marker can be added as a template in the Maps component. The [`template`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#template) property of the [`markerSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/) is used to set the HTML string or id of an element as a template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs64/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs64/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs64/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs64" %}

## Customization

The following properties are available in [`markerSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/) to customize the Markers of the Maps component.

* [`border`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#border) - To customize the color, width and opacity of the border for the markers in Maps.
* [`fill`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#fill) - To apply the color for markers in Maps.
* [`dashArray`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#dasharray) - To define the pattern of dashes and gaps that is applied to the outline of the markers in Maps.
* [`height`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#height) - To customize the height of the markers in Maps.
* [`width`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#width) - To customize the width of the markers in Maps.
* [`offset`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#offset) - To customize the position of the markers in Maps.
* [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#opacity) - To customize the transparency of the markers in Maps.
* [`animationDelay`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#animationdelay) - To change the time delay in the transition for markers.
* [`animationDuration`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#animationduration) - To change the time duration of animation for markers.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs65/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs65/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs65/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs65" %}

## Marker shapes

The Maps component supports the following marker shapes. To set the shape of the marker, the [`shape`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#shape) property in [`markerSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel) is used.

* Balloon
* Circle
* Cross
* Diamond
* Image
* Rectangle
* Start
* Triangle
* VerticalLine
* HorizontalLine

### Rendering marker shape as image

To render a marker as an image in Maps, set the [`shape`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#shape) property of [`markerSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/) as **Image** and specify the path of the image to [`imageUrl`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#imageurl) property. There is another way to render a marker as an image using the [`imageUrlValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#imageurlvaluepath) property of the [`markerSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/). Bind the field name that contains the path of the image in the data source to the [`imageUrlValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#imageurlvaluepath) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs66/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs66/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs66/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs66" %}

## Multiple marker groups

Multiple groups of markers can be added to the Maps using the [`markerSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel) in which the properties of markers are added as an array. The customization for the markers can be done with the [`markerSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs67/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs67/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs67/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs67" %}

## Customize marker shapes from data source

### Bind different colors and shapes to the marker from data source

Using the [`shapeValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#shapevaluepath) and [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#colorvaluepath) properties, the color and shape of the marker can be applied from the given data source. Bind the data source to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#datasource) property of the [`markerSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/) and set the field names that contains the shape and color values in the data source to the [`shapeValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#shapevaluepath) and [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#colorvaluepath) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs68/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs68/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs68/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs68" %}

### Setting value path from the data source

The latitude and longitude values are used to determine the location of each marker in the Maps. The [`latitudeValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#latitudevaluepath) and [`longitudeValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#longitudevaluepath) properties are used to specify the value path that presents in the data source of the marker. In the following example, the field name from the data source is set to the [`latitudeValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#latitudevaluepath) and [`longitudeValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#longitudevaluepath) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs69/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs69/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs69/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs69" %}

## Repositioning the marker using drag and drop

The markers on the map can be dragged and dropped to change their position. To enable marker drag and drop, set the [enableDrag](https://helpej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#enabledrag) property to **true** in the [markerSettings](https://helpej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs103/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs103/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs103/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs103" %}

The data of the drag and dropped marker in the marker data source can be customized using the [markerDragStart](https://helpej2.syncfusion.com/angular/documentation/api/maps/#markerdragstart) and [markerDragEnd](https://helpej2.syncfusion.com/angular/documentation/api/maps/#markerdragend) events. When you change the appropriate marker data, the tooltip and legend item text of that marker are automatically updated. The following properties are available in the event argument of the marker drag events.

|   Argument Name      |   Description                               |
|----------------------| --------------------------------------------|
|   dataIndex          |   It represents the index of the data of the dragged marker in the marker data source.                          |
|   latitude           |   It represents the latitude coordinate point of the dragged marker.                                            |
|   longitude          |   It represents the longitude coordinate point for the dragged marker.                                          |
|   markerIndex        |   It represents the index of the marker setting.                                                                |
|   layerIndex         |   It represents the index of the layer in which the marker belongs.                                             |
|   name               |   It represents the name of the event.                                                                          |
|   x                  |   It represents the horizontal location of the mouse pointer on the map when the drag action is performed.      |
|   y                  |   It represents the vertical location of the mouse pointer on the map when the drag action is performed.        |

The following example shows how to use marker drag events to customize the data of the drag and dropped marker in the marker data source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs104/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs104/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs104/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs104" %}

## Marker zooming

The Maps can be initially scaled to the center value based on the marker distance. This can be achieved by setting the [`shouldZoomInitially`](https://ej2.syncfusion.com/angular/documentation/api/maps/zoomSettingsModel/#shouldzoominitially) property in [`zoomSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/zoomSettingsModel/) as **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs70/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs70/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs70/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs70" %}

## Marker clustering

Maps provide support to cluster the markers when they overlap each other. The number on a cluster indicates how many overlapped markers it contains. If zooming is performed on any of the cluster locations in Maps, the number on the cluster will decrease, and the individual markers will be seen on the map. When zooming out, the overlapping marker will increase. So that it can cluster again and increase the count over the cluster.

To enable clustering in markers, set the [`allowClustering`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerClusterSettingsModel/#allowclustering) property of [`markerClusterSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerClusterSettingsModel) as **true** and customization of clustering can be done with the [`markerClusterSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerClusterSettingsModel).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs71/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs71/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs71/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs71" %}

## Customization of marker cluster

The following properties are available to customize the marker clustering in the Maps component.

* [`border`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerClusterSettingsModel/#border) -  To customize the color, width and opacity of the border of cluster in Maps.
* [`connectorLineSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/connectorLineSettingsModel/) - To customize the connector line in cluster separating the markers.
* [`dashArray`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerClusterSettingsModel/#dasharray) - To customize the dash array for the marker cluster in Maps.
* [`fill`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerClusterSettingsModel/#fill) - Applies the color of the cluster in Maps.
* [`height`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerClusterSettingsModel/#height) - To customize the height of the marker cluster in Maps.
* [`imageUrl`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerClusterSettingsModel/#imageurl) - To customize the URL path for the marker cluster when the cluster shape is set as image in Maps.
* [`labelStyle`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerClusterSettingsModel/#labelstyle) -  To customize the text in marker cluster.
* [`offset`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerClusterSettingsModel/#offset) - To customize the offset position for the marker cluster in Maps.
* [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerClusterSettingsModel/#opacity) - To customize the opacity of the marker cluster.
* [`shape`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerClusterSettingsModel/#shape) - To customize the shape for the cluster of markers.
* [`width`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerClusterSettingsModel/#width) - To customize the width of the marker cluster in Maps.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs72/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs72/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs72/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs72" %}

## Expanding the marker cluster

The cluster is formed by grouping an identical and non-identical marker from the surrounding area. By clicking on the cluster and setting the [`allowClusterExpand`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerClusterSettingsModel/#allowclusterexpand) property in [`markerClusterSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerClusterSettingsModel) as **true** to expand the identical markers. If zooming is performed in any of the locations of the cluster, the number on the cluster will decrease and the overlapping marker will be split into an individual marker on the map. When performing zoom out, it will increase the marker count and then cluster it again.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs73/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs73/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs73/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs73" %}

## Tooltip for marker

Tooltip is used to display more information about a marker on mouse over or touch end event. This can be enabled separately for marker by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel/#visible) property of [`tooltipSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel) to **true**. The [`valuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel/#valuepath) property in the [`tooltipSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel) takes the field name that presents in data source and displays that value as tooltip text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs74/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs74/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs74/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs74" %}