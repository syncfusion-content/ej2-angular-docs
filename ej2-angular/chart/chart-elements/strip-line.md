---
layout: post
title: Strip Line in Angular Chart Component | Syncfusion
description: Learn here all about strip line in Syncfusion Essential Angular Chart component, it's elements and more.
platform: ej2-angular
control: Strip line 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Strip Line in Angular Chart Component

<!-- markdownlint-disable MD036 -->

EJ2 chart supports horizontal and vertical strip lines and customization of stripline in both orientation.
To use Stripline in axis, we need to inject `StriplineService` into the `@NgModule.providers`

<img src="../../images/stripline.png" alt="Yes">

## Horizontal Strip lines

You can create Horizontal stripline by adding the `stripline` in the vertical axis and set `visible` option to true.
Striplines are rendered in the specified start to end range and you can add more than one stripline for an axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/strip-line-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/strip-line-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/strip-line-cs5" %}

## Vertical Striplines

You can create vertical stripline by adding the`stripline` in the horizontal axis and set `visible` option to true.
Striplines are rendered in the specified start to end range and you can add more than one stripline for an axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/strip-line-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/strip-line-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/strip-line-cs6" %}

## Stripline as band and line

We can utilize the stripline to visualize both the frequency band and transmission line characteristics by specifying its [start](https://ej2.syncfusion.com/angular/documentation/api/chart/striplinesettingsmodel#start) and [end](https://ej2.syncfusion.com/angular/documentation/api/chart/striplinesettingsmodel#end) properties in `StripLineSettingsModel`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/strip-line-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/strip-line-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/strip-line-cs12" %}

## Customize the strip line

Starting value in specific strip line can be customized by `start` property in strip line. Similarly, ending value is customized by `end`. It can be also set for starting from the corresponding origin of the axis by `startFromOrigin`.
Size of the strip line is customized by `size`. Border for the stripline is customized by `border`. Order of the strip line such that whether it should be rendered in behind or over the series elements is customized by `zIndex`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/strip-line-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/strip-line-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/strip-line-cs7" %}

## Customize the stripline text

You can customize the text rendered in stripline by `textStyle` property. Rotation of the strip line text can be changed by `rotation` property.
Horizontal and Vertical alignment of stripline text can be changed by `horizontalAlignment` and `verticalAlignment` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/strip-line-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/strip-line-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/strip-line-cs8" %}

## Dash Array

You can create dash array stripline by using `dashArray` property. The Striplines are rendered with specified dash array values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/strip-line-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/strip-line-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/strip-line-cs9" %}

## Recurrence Stripline

The strip lines to be drawn repeatedly at the regular intervals – this will be useful when you want to mark an event that occurs recursively along the timeline of the chart. Following properties are used to configure this feature.

* `isRepeat`       - It is used for enable / disable the recurrence strip line.
* `repeatEvery`    - It is used for mention the stripline interval.
* `repeatUntil`    - It specifies the end value at which point strip line has to stop repeating.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/strip-line-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/strip-line-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/strip-line-cs10" %}

## Size Type

The `sizeType` property refers the size of the stripline. They are,

* `Auto`
* `Pixel`
* `Years`
* `Months`
* `Days`
* `Hours`
* `Minutes`
* `Seconds`

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs18" %}

## Segment Stripline

You can create stripline in a particular region with respect to segment. You can enable the segment stripline using `isSegmented` property. The start and end value of this type of stripline can be defined using `segmentStart` and `segmentEnd` properties.

* `isSegmented`     - It is used for enable the segment stripline.
* `segmentStart`    - Used to change the segment start value. Value correspond to associated axis.
* `segmentEnd`      - Used to change the segment end value. Value correspond to associated axis.
* `segmentAxisName` - Used to specify the name of the associated axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/strip-line-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/strip-line-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/strip-line-cs11" %}

## See Also

* [Mark the threshold in chart](./how-to/threshold#mark-a-threshold-in-chart)