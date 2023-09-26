---
layout: post
title: Error Bar in Angular Chart component | Syncfusion
description: Learn here all about Error Bar in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Error Bar
documentation: ug
domainurl: ##DomainURL##
---

# Error Bar in Angular Chart component

## Error bar

Error bars are graphical representations of the variability of data and used on graphs to indicate the error or uncertainty in a reported measurement. To render the error bar for the series, set [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#type) as `true` in error bar object and inject `ErrorBar` module into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/errorbar-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/errorbar-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/errorbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/errorbar-cs1" %}

## Error bar type

To change the error bar rendering type using [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel/#type) option of error bar. To change the error bar line length you can use [`verticalError`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel/#verticalError) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/errorbar-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/errorbar-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/errorbar-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/errorbar-cs2" %}

## Customizing error bar type

To customize the error bar type, set error bar [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel/#type) as `Custom` and then change the horizontal/vertical positive and negative error of error bar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/errorbar-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/errorbar-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/errorbar-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/errorbar-cs3" %}

## Error bar mode

Error bar mode is used to define whether the error bar line has to be drawn horizontally, vertically or in both side. To change the error bar mode use [`mode`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel/#mode) option.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/errorbar-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/errorbar-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/errorbar-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/errorbar-cs4" %}

## Error bar direction

To change the error bar direction to plus, minus or both side using [`direction`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel/#direction) option.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/errorbar-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/errorbar-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/errorbar-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/errorbar-cs5" %}

## Customizing error bar cap

To customize the error bar cap length, width and fill color, you can use [`errorBarCap`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarCapSettingsModel/) option.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/errorbar-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/errorbar-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/errorbar-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/errorbar-cs6" %}

## Customizing error bar color

To customize the error bar color for individual errors, use the [`errorBarColorMapping`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel/#errorbarcolormapping) property. You can also customize the vertical error, horizontal error, horizontal negative and positive error and vertical negative and positive error for an individual point using [`verticalError`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel/#verticalerror), [`horizontalError`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel/#horizontalerror), [`horizontalNegativeError`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel/#horizontalnegativeerror), [`horizontalPositiveError`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel/#horizontalpositiveerror), [`verticalNegativeError`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel/#verticalnegativeerror) and [`verticalPositiveError`](https://ej2.syncfusion.com/angular/documentation/api/chart/errorBarSettingsModel/#verticalpositiveerror) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/errorbar-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/errorbar-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/errorbar-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/errorbar-cs7" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)