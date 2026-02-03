---
layout: post
title: Axis labels in Angular Chart component | Syncfusion
description: Learn here all about Axis labels in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Axis labels 
documentation: ug
domainurl: ##DomainURL##
---

# Axis labels in Angular Chart component

## Smart axis labels

When the axis labels overlap with each other, you can use [`labelIntersectAction`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#labelintersectaction) property in the axis, to place them smartly.

When setting `labelIntersectAction` as `Hide`

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/multiple-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/multiple-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/multiple-cs1" %}

When setting `labelIntersectAction` as `Rotate45`

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/multiple-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/multiple-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/multiple-cs2" %}

When setting `labelIntersectAction` as `Rotate90`

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/multiple-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/multiple-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/multiple-cs3" %}

## Axis labels positioning

By default, the axis labels can be placed at `outside` the axis line and this also can be placed at `inside` the axis line using the `labelPosition` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs9" %}

## Multilevel labels

Any number of levels of labels can be added to an axis using the `multiLevelLabels` property. This property can be configured using the following properties:

• Categories
• Overflow
• Alignment
• Text style
• Border

>Note: To use multilevel label feature, we need to inject `MultiLevelLabel` into the `@NgModule.providers`.

### Categories

Using the categories property, you can configure the `start`, `end`, `text`, and `maximumTextWidth` of multilevel labels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs10" %}

### Overflow

Using the `overflow` property, you can `trim` or `wrap` the multilevel labels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs11" %}

### Alignment

The `alignment` property provides option to position the multilevel labels at `far`, `center`, or `near`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs12" %}

### Text customization

The `textStyle` property of multilevel labels provides options to customize the `size`, `color`, `fontFamily`, `fontWeight`, `fontStyle`, `opacity`, `textAlignment` and `textOverflow`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs13" %}

### Border customization

Using the `border` property, you can customize the `width`, `color`, and `type`. The `type` of border
are `Rectangle`, `Brace`, `WithoutBorder`, `WithoutTopBorder`, `WithoutTopandBottomBorder` and `CurlyBrace`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs14" %}

## Edge label placement

Labels with long text at the edges of an axis may appear partially in the chart. To avoid this,
use [`edgeLabelPlacement`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#edgelabelplacement) property in axis, which moves the label inside the chart area for better appearance or hides it. By default, the [`edgeLabelPlacement`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#edgelabelplacement) property is set to Shift to ensure that labels are shifted inside the chart area, avoiding any overlap or coincidence.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs1" %}

## Trim using maximum label width

You can trim the label using [`enableTrim`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#enabletrim) property and width of the labels can also be customized using [`maximumLabelWidth`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#maximumlabelwidth) property in the axis, the value maximum label width is `34` by default.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs15" %}

## Labels customization

The [`labelStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#labelstyle) property of an axis provides options to customize the `color`, `font-family`, `font-size` and `font-weight` of the axis labels.

To known more about labels customization, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=gjO67nmQIwY" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs16" %}

### Label rotation

The axis labels can be rotated based on the `labelRotation` property in `primaryXAxis`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs17" %}

## Customizing specific point

You can customize the specific text in the axis labels using `axisLabelRender` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs18" %}

## Line break support

Line break feature used to customize the long axis label text into multiple lines by using tag. Refer the below example in that dataSource x value contains long text, it breaks into two lines by using  `<br>` tag.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs19/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs19" %}

## Maximum labels

`MaximumLabels` property is set, then the labels will be rendered based on the count in the property per 100 pixel. If you have set range (minimum, maximum, interval) and maximumLabels, then the priority goes to range only. If you haven’t set the range, then we have considered priority to maximumLabels property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs20/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs20" %}

## Axis label template

The axis label template allows you to customize axis labels by formatting them with HTML content, applying conditional styling, and including dynamic elements such as icons, images or additional data. This customization is enabled by setting the template content in the [labelTemplate](https://ej2.syncfusion.com/angular/documentation/api/chart/axismodel#labelTemplate) property of the `AxisModel`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs54/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs54/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs54" %}

## See Also

* [Allow Only Integer Values in the Y-Axis Labels](https://support.syncfusion.com/kb/article/21487/how-to-allow-only-integer-values-in-the-y-axis-labels-in-angular-chart)