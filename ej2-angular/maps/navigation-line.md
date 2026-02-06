---
layout: post
title: Navigation line in Angular Maps component | Syncfusion
description: Learn here all about Navigation line in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Navigation line 
documentation: ug
domainurl: ##DomainURL##
---

# Navigation line in Angular Maps component

Navigation lines are curved paths used to denote the route between two locations on the Maps. This feature is commonly used to draw flight routes, sea routes, or any path connecting two geographic points. Navigation lines are enabled by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/navigationLineSettingsModel#visible) property of the [`navigationLineSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/navigationLineSettingsModel) to **true**.

## Customization

The following properties are available in [`navigationLineSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/navigationLineSettingsModel) to customize the navigation line of the Maps component.

* [`color`](https://ej2.syncfusion.com/angular/documentation/api/maps/navigationLineSettingsModel#color) - To apply the color for navigation lines in Maps.
* [`dashArray`](https://ej2.syncfusion.com/angular/documentation/api/maps/navigationLineSettingsModel#dasharray) - To define the pattern of dashes and gaps that is applied to the outline of the navigation lines.
* [`width`](https://ej2.syncfusion.com/angular/documentation/api/maps/navigationLineSettingsModel#width) - To customize the width of the navigation lines.
* [`angle`](https://ej2.syncfusion.com/angular/documentation/api/maps/navigationLineSettingsModel#angle) - To customize the angle of the navigation lines.
* [`highlightSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/navigationLineSettingsModel#highlightsettings) - To customize the highlight settings of the navigation line.
* [`selectionSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/navigationLineSettingsModel#selectionsettings) - To customize the selection settings of the navigation line.

To draw a navigation line between two cities on the world map, the [`latitude`](https://ej2.syncfusion.com/angular/documentation/api/maps/navigationLineSettingsModel#latitude) and [`longitude`](https://ej2.syncfusion.com/angular/documentation/api/maps/navigationLineSettingsModel#longitude) properties are used to specify the start and end points of the navigation line.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs75/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs75/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs75" %}

## Enabling the arrows

To enable the arrow in the navigation line, set the [`showArrow`](https://ej2.syncfusion.com/angular/documentation/api/maps/arrowModel#showarrow) property of [`arrowSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/navigationLineSettingsModel#arrowsettings) to **true**. The following properties are available in [`arrowSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/navigationLineSettingsModel#arrowsettings) to customize the arrow in the navigation lines.

* [`color`](https://ej2.syncfusion.com/angular/documentation/api/maps/arrowModel#color) - To apply the color for the arrow in the navigation line.
* [`offset`](https://ej2.syncfusion.com/angular/documentation/api/maps/arrowModel#offset) - To customize the offset position of the arrow in the navigation line.
* [`position`](https://ej2.syncfusion.com/angular/documentation/api/maps/arrowModel#position) - To customize the position of the arrow in the navigation line. The possible values are **Start** and **End**.
* [`size`](https://ej2.syncfusion.com/angular/documentation/api/maps/arrowModel#size) - To customize the size of the arrow in pixels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs76/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs76/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs76" %}