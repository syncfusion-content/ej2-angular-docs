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

The Angular Chart component supports both horizontal and vertical strip lines, which act as visual guides to highlight specific ranges within the chart area. Strip lines can be added to both axes and fully customized based on visual and functional requirements. To use strip line features, inject `StriplineService` into the `@NgModule.providers`.

<img src="../../images/stripline.png" alt="Chart with striplines emphasizing ranges">

## Horizontal striplines

Horizontal strip lines are created by adding the [`stripline`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#striplines) configuration to the vertical axis and setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#visible) property to `true`. They highlight horizontal ranges in the chart, and multiple strip lines can be added to the same axis.

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

Vertical strip lines are created by adding the [`stripline`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#striplines) configuration to the horizontal axis and enabling the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#visible) property. They highlight vertical regions in the chart and support multiple entries for an axis.

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

You can utilize the stripline to visualize both the frequency band and transmission line characteristics by specifying its [`start`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#start) and [`end`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#end) properties in [`StripLineSettingsModel`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel).

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

Strip lines can be customized to highlight specific regions more effectively:
- Use [`start`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#start) to set the beginning value of the strip line.
- Use [`end`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#end) to define the ending value.
- Use [`startFromOrigin`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#startfromorigin) to begin the strip line from the axis origin.
- Use [`size`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#size) to specify the strip line height or width (based on orientation).
- Use [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#border) to customize border appearance.
- Use [`zIndex`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#zindex) to control whether the strip line appears behind or above chart series.

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

Strip line text labels can be customized for readability and visual presentation:
- Use [`textStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#textstyle) to set text appearance.
- Use [`rotation`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#rotation) to rotate the strip line text.
- Use [`horizontalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#horizontalalignment) and [`verticalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#verticalalignment) to adjust label placement.

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

Dashed strip lines can be rendered using the [`dashArray`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#dasharray) property. The dash pattern is defined using a series of numbers representing dash and gap lengths.

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

Strip lines can be drawn repeatedly at regular intervals – this will be useful when you want to mark an event that occurs recursively along the timeline of the chart. Following properties are used to configure this feature.

* [`isRepeat`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#isrepeat) - It is used to enable / disable the recurrence strip line.
* [`repeatEvery`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#repeatevery) - It is used to mention the stripline interval.
* [`repeatUntil`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#repeatuntil) - It specifies the end value at which point strip line has to stop repeating.

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

The [`sizeType`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#sizetype) property determines how strip line size is interpreted. Supported units include:

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

## Segment stripline

You can create stripline in a particular region with respect to segment. You can enable the segment stripline using [`isSegmented`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#issegmented) property. The start and end value of this type of stripline can be defined using [`segmentStart`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#segmentstart) and [`segmentEnd`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#segmentend) properties.

* [`isSegmented`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#issegmented) - It is used to enable the segment stripline.
* [`segmentStart`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#segmentstart) - Used to change the segment start value. Value correspond to associated axis.
* [`segmentEnd`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#segmentend) - Used to change the segment end value. Value correspond to associated axis.
* [`segmentAxisName`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripLineSettingsModel#segmentaxisname) - Used to specify the name of the associated axis.

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

* [Mark the threshold in chart](../how-to/threshold#mark-a-threshold-in-chart)