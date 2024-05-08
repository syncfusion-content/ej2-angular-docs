---
layout: post
title: Tooltip in Angular 3D Chart control | Syncfusion
description: Learn here all about tooltip in Syncfusion Angular 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: 3D Chart
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Angular 3D Chart control

<!-- markdownlint-disable MD036 -->

The 3D Chart will display details about the points through tooltip, when the mouse is moved over the specific point.

## Default tooltip

By default, tooltip is not visible. The tooltip can be enabled by setting the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalTooltipSettingsModel/#enable) property in `tooltipSettings` to **true** and by injecting `Tooltip3DService` module into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/tooltip/tooltip-cs1" %}

<!-- markdownlint-disable MD013 -->

## Fixed tooltip

By default, tooltip track the mouse movement, but the tooltip can be set in fixed position by using the [`location`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalTooltipSettingsModel/#location) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/tooltip/tooltip-cs2" %}

## Format the tooltip

<!-- markdownlint-disable MD013 -->

By default, tooltip shows information of x and y value in points. In addition to that, more information can be shown in tooltip by using the [`format`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalTooltipSettingsModel/#format) property. For example the format `${series.name} : ${point.y}` shows series name and point y value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/tooltip/tooltip-cs3" %}

## Tooltip template

Any HTML elements can be displayed in the tooltip by using the [`template`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalTooltipSettingsModel/#template) property of the tooltip. The ${x} and ${y} can be used as place holders in the HTML element to display the x and y values of the corresponding data point.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/tooltip/tooltip-cs4" %}

## Customize the appearance of tooltip

The [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalTooltipSettingsModel/#fill) and [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalTooltipSettingsModel/#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalTooltipSettingsModel/#textstyle) property in the tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/tooltip/tooltip-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/tooltip/tooltip-cs5" %}