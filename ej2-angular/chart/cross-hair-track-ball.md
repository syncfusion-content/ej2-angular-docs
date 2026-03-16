---
layout: post
title: Cross hair track ball in Angular Chart component | Syncfusion
description: Learn here all about Cross hair track ball in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Cross hair track ball 
documentation: ug
domainurl: ##DomainURL##
---

# Cross hair track ball in Angular Chart component

Crosshair has a vertical and horizontal line to view the value of the axis at mouse or touch position.

Crosshair lines can be enabled by using [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairTooltip/#enable) property in the `crosshair`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/crosshair-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/crosshair-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/crosshair-cs4" %}

## Tooltip for axis

Tooltip label for an axis can be enabled by using [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairTooltipModel/#enable)
property of `crosshairTooltip` in the corresponding axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/crosshair-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/crosshair-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/crosshair-cs5" %}

## Customization

The [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairTooltip/#fill) and [`textStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairTooltip/#textstyle) property of the `crosshairTooltip` is used to customize the background color and font style of the crosshair label respectively. Color and width of the crosshair line can be customized by using the [`line`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairSettingsModel/#line) property in the crosshair.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/crosshair-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/crosshair-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/crosshair-cs6" %}

>Note: To use crosshair feature, we need to inject `CrosshairService` into the `NgModule.providers`.

## Trackball

Trackball is used to track a data point closest to the mouse or touch position. Trackball marker indicates the closest point and trackball tooltip displays the information about the point. To use trackball feature, we need to inject `CrosshairService` and `TooltipService` into the `NgModule.providers`.

Trackball can be enabled by setting the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairSettings/#enable) property of the crosshair to true and [`shared`](https://ej2.syncfusion.com/angular/documentation/api/chart/tooltipSettings/#shared) property in `tooltip` to true in chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/trackball-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/trackball-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/trackball-cs2" %}
