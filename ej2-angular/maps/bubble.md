---
layout: post
title: Bubble in Angular Maps component | Syncfusion
description: Learn here all about Bubble in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Bubble 
documentation: ug
domainurl: ##DomainURL##
---

This section shows how to add and customize bubbles in the Maps component using the video below.

{% youtube "https://www.youtube.com/watch?v=xx3KmBK0If8" %}

# Bubble in Angular Maps component

Bubbles in the Maps component represent the underlying data values of the Maps. It can be scattered throughout the Maps shapes that contain values in the data source. Bubbles are enabled by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel/#visible) property of [`bubbleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel) to **true**. To add bubbles to the Maps, bind the data source to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel/#datasource) property of [`bubbleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel) and set the field name, that contains the numerical data, in the data source to the [`valuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel/#valuepath) property.

```typescript
export let world_map = // paste the World map from WorldMap.json GeoJSON file.
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs6" %}

## Bubble shapes

The following types of shapes are available to render the bubbles in Maps.

* Circle
* Square

By default, bubbles are rendered in the **Circle** type. To change the type of the bubble, set the [`bubbleType`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel/#bubbletype) property of [`bubbleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel) property as **Square** to render the square shape bubbles.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs7" %}

## Customization

The following properties are available in [`bubbleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel) to customize the bubbles of the Maps component.

* [`border`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel/#border) – To customize the color, width and opacity of the border of the bubbles in Maps.
* [`fill`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel/#fill) – To apply the color for bubbles in Maps.
* [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel/#opacity) – To apply opacity to the bubbles in Maps.
* [`animationDelay`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel/#animationdelay) - To change the time delay in the transition for bubbles.
* [`animationDuration`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel/#animationduration) - To change the time duration of animation for bubbles.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs8/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs8" %}

## Setting colors to the bubbles from the data source

The color for each bubble in the Maps can be set using the [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel/#colorvaluepath) property of [`bubbleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel). The value for the [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel/#colorvaluepath) property is the field name from the data source of the [`bubbleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel) which contains the color values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs9/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs9" %}

## Setting the range of the bubble size

The size of the bubbles is calculated from the values got from the [`valuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel/#valuepath) property. The range for the radius of the bubbles can be modified using [`minRadius`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel/#minradius) and [`maxRadius`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel/#maxradius) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs10/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs10" %}

## Multiple bubble groups

Multiple groups of bubbles can be added to the Maps using the [`bubbleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel) in which the properties of bubbles are added as an array. The customization for the bubbles can be done with the [`bubbleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel). In the following example, the gender-wise population ratio is demonstrated with two different bubble groups.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs11" %}

## Enable tooltip for bubble

The tooltip for the bubbles can be enabled by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel/#visible) of the [`tooltipSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel) as **true**. The content for the tooltip can be set using the [`valuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel/#valuepath) property in the [`tooltipSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel) of the [`bubbleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel) where the value for the [`valuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel/#valuepath) property is the field name from the data source of the [`bubbleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel). Also added any HTML element as the template in tooltip using the [`template`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel/#template) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs12/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs12/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs12" %}