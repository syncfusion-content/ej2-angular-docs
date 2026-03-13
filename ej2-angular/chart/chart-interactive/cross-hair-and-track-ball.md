---
layout: post
title: Cross hair and track ball in Angular Chart component | Syncfusion
description: Learn here all about Cross hair and track ball in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Cross hair and track ball 
documentation: ug
domainurl: ##DomainURL##
---

# Cross hair and track ball in Angular Chart component

Crosshair has a vertical and horizontal line to view the value of the axis at mouse or touch position.

![Crosshair](../../images/crosshair.gif)

Crosshair lines can be enabled by using [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairSettings#enable) property in the [`crosshair`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#crosshair).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/crosshair-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/crosshair-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/crosshair-cs1" %}

## Tooltip for axis

Tooltip label for an axis can be enabled by using [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairTooltipModel#enable)
property of [`crosshairTooltip`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#crosshairtooltip) in the corresponding axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/crosshair-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/crosshair-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/crosshair-cs2" %}

## Customization

The [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairTooltip#fill) and [`textStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairTooltip#textstyle) property of the [`crosshairTooltip`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#crosshairtooltip) is used to customize the background color and font style of the crosshair label respectively. Color and width of the crosshair line can be customized by using the [`line`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairSettings#line) property in the [`crosshair`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#crosshair).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/crosshair-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/crosshair-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/crosshair-cs3" %}

>Note: To use crosshair feature, inject `CrosshairService` into the `@NgModule.providers`.

## Snap to data

Enabling the [`snapToData`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairSettingsModel#snaptodata) property in the [`crosshair`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#crosshair) aligns it with the nearest data point instead of following the exact mouse position.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/crosshair-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/crosshair-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/crosshair-cs9" %}

## Trackball

Trackball is used to track a data point closest to the mouse or touch position. Trackball marker indicates the closest point and trackball tooltip displays the information about the point. To use trackball feature, inject `CrosshairService` and `TooltipService` into the `@NgModule.providers`.

Trackball can be enabled by setting the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairSettings#enable) property of the [`crosshair`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#crosshair) to true and [`shared`](https://ej2.syncfusion.com/angular/documentation/api/chart/tooltipSettingsModel#shared) property in [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#tooltip) to true in chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/trackball-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/trackball-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/trackball-cs1" %}

To know more about Crosshair and Trackball, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=IiSuXTKG2ac" %}

## Crosshair highlight

The [`highlightCategory`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairSettings#highlightcategory) property in the [`crosshair`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#crosshair) highlights the background of the entire category when hovered over. The crosshair color can be customized using the [`color`](https://ej2.syncfusion.com/angular/documentation/api/chart/borderModel#color) property within the [`line`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairSettings#line) configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/crosshair-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/crosshair-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/crosshair-cs10" %}