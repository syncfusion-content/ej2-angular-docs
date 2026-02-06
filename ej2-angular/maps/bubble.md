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

Bubbles in the Maps component provide a visual representation of data values across geographical regions. They appear as circular or square shapes scattered over map areas, with their size proportional to the underlying data values. To enable bubbles, set the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel#visible) property of [`bubbleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel) to **true**. Then, bind the data source to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel#datasource) property and specify the field containing numerical data using the [`valuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel#valuepath) property.

```typescript
export let world_map = // paste the World map from WorldMap.json GeoJSON file.
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs6/src/app.component.ts %}
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

By default, bubbles render as **Circle**. To display square-shaped bubbles, set the [`bubbleType`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel#bubbletype) property of [`bubbleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel) to **Square**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs7" %}

## Customization

The [`bubbleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel) provides the following properties to customize the appearance of bubbles in the Maps component:

* [`border`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel#border) – To customize the color, width and opacity of the border of the bubbles in Maps.
* [`fill`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel#fill) – To apply the color for bubbles in Maps.
* [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel#opacity) – To apply opacity to the bubbles in Maps.
* [`animationDelay`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel#animationdelay) - To change the time delay in the transition for bubbles.
* [`animationDuration`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel#animationduration) - To change the time duration of animation for bubbles.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs8" %}

## Setting colors to the bubbles from the data source

The color for each bubble in the Maps can be set using the [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel#colorvaluepath) property of [`bubbleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel). The value for the [`colorValuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel#colorvaluepath) property is the field name from the data source of the [`bubbleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel) which contains the color values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs9" %}

## Setting the range of the bubble size

The size of the bubbles is calculated from the values got from the [`valuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel#valuepath) property. The range for the radius of the bubbles can be modified using [`minRadius`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel#minradius) and [`maxRadius`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel#maxradius) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs10" %}

## Multiple bubble groups

Multiple bubble groups can be added to the Maps component by defining an array of bubble configuration objects in the [`bubbleSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/bubbleSettingsModel) property. Each bubble group can be customized independently. The following example demonstrates gender-wise population ratio using two different bubble groups.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs11" %}

## Enable tooltip for bubble

To enable tooltips for bubbles, set the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel#visible) of [`tooltipSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel) to **true**. The tooltip content is specified using the [`valuePath`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel#valuepath)  property, which should be set to the field name from the data source that contains the tooltip values. Additionally, custom HTML content can be displayed in the tooltip using the [`template`](https://ej2.syncfusion.com/angular/documentation/api/maps/tooltipSettingsModel#template) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs12" %}