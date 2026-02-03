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

The Angular Chart component supports horizontal and vertical strip lines, providing visual guides to highlight specific ranges in the chart area. Strip lines can be added to both axes and fully customized based on visual and functional requirements. To use strip line features, inject `StriplineService` into the `@NgModule.providers`

## Horizontal Strip lines

Horizontal strip lines are created by adding the `stripline` configuration to the vertical axis and setting the `visible` property to `true`. They highlight horizontal ranges in the chart, and multiple strip lines can be added to the same axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/strip-line-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/strip-line-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/strip-line-cs5" %}

## Vertical striplines

Striplines are rendered in the specified start to end range and you can add more than one stripline for an axis.
Vertical strip lines are created by adding the `stripline` configuration to the horizontal axis and enabling the `visible` property. They highlight vertical regions in the chart and support multiple entries for an axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/strip-line-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/strip-line-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/strip-line-cs6" %}

## Customize the strip line

Strip lines can be customized to highlight specific regions more effectively:
- Use `start` to set the beginning value of the strip line.
- Use `end` to define the ending value.
- Use `startFromOrigin` to begin the strip line from the axis origin.
- Use `size` to specify the strip line height or width (based on orientation).
- Use `border` to customize border appearance.
- Use `zIndex` to control whether the strip line appears behind or above chart series.

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
- Use `textStyle` to set text appearance.
- Use `rotation` to rotate the strip line text.
- Use `horizontalAlignment` and `verticalAlignment` to adjust label placement.

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

Dashed strip lines can be rendered using the `dashArray` property. The dash pattern is defined using a series of numbers representing dash and gap lengths.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/strip-line-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/strip-line-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/strip-line-cs9" %}

## Recurrence stripline

Recurring strip lines help mark repeating events across the chart axis. The following properties configure recurrence:

- `isRepeat` – Enables or disables repeating strip lines.
- `repeatEvery` – Specifies the interval at which the strip line repeats.
- `repeatUntil` – Defines the end value up to which strip lines should repeat.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/strip-line-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/strip-line-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/strip-line-cs10" %}

## Size type

The `sizeType` property determines how strip line size is interpreted. Supported units include:

- `Auto`
- `Pixel`
- `Years`
- `Months`
- `Days`
- `Hours`
- `Minutes`
- `Seconds`

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

Segment strip lines highlight a specific region corresponding to another axis. This is useful for marking regions that depend on values across two dimensions.

Key properties:
- `isSegmented` – Enables segmented strip lines.
- `segmentStart` – Defines the starting point of the segment line.
- `segmentEnd` – Defines the ending point of the segment line.
- `segmentAxisName` – Specifies the associated axis for segmentation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/strip-line-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/strip-line-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/strip-line-cs11" %}

## See also

- [Mark the threshold in chart](./how-to/threshold#mark-a-threshold-in-chart)