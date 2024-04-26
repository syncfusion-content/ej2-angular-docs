---
layout: post
title: Customization in Angular Range navigator component | Syncfusion
description: Learn here all about Customization in Syncfusion Angular Range navigator component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customization 
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Angular Range navigator component

## Navigator appearance

The Range Selector can be customized by using the [`navigatorStyleSettings`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#navigatorstylesettings). The [`selectedRegionColor`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/styleSettingsModel/#selectedregioncolor) property is used to specify the color for the selected region, whereas the [`unselectedRegionColor`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/styleSettingsModel/#unselectedregioncolor) property is used to specify the color for the unselected region.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/getting-started/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/getting-started/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/getting-started/default-cs1" %}

## Thumb

The thumb property allows to customize the border, fill color, size, and type of thumb. Thumbs can be of two shapes: **Circle** and **Rectangle**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/getting-started/default-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/getting-started/default-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/getting-started/default-cs2" %}

## Border customization

Using the [`navigatorBorder`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/thumbSettingsModel/#border), the [`width`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/borderModel/#width) and [`color`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/borderModel/#color) of the Range Selector border can be customized.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/getting-started/default-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/getting-started/default-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/getting-started/default-cs3" %}

## Deferred update

If the [`enableDeferredUpdate`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#enabledeferredupdate) property is set to **true**, then the changed event will be triggered after dragging the slider. If the [`enableDeferredUpdate`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#enabledeferredupdate) is **false**, then the changed event will be triggered when dragging the slider. By default, the [`enableDeferredUpdate`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#enabledeferredupdate) is set to **false**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/deferred-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/deferred-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/deferred-cs1" %}

## Allow snapping

The [`allowSnapping`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#allowsnapping) property toggles the placement of the slider exactly to the left or on the nearest interval.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/getting-started/default-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/getting-started/default-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/getting-started/default-cs4" %}

## Animation

The speed of the animation can be controlled using the [`animationDuration`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#animationduration) property. The default value of the [`animationDuration`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#animationduration) property is **500** milliseconds.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/getting-started/default-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/getting-started/default-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/getting-started/default-cs5" %}

## See Also

* [Grid and Tick Lines](./grid-tick/)
* [Labels](./labels/)