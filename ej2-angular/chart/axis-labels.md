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

When axis labels overlap due to limited space or dense data points, the [`labelIntersectAction`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#labelintersectaction) property can be used to control how the labels are rendered. This helps improve readability by automatically adjusting label visibility or orientation.

When setting `labelIntersectAction` as `Hide`, overlapping labels are hidden to avoid visual clutter.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/multiple-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/multiple-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/multiple-cs1" %}

When setting `labelIntersectAction` as `Rotate45`, the labels are rotated by 45 degrees to reduce overlap.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/multiple-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/multiple-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/multiple-cs2" %}

When setting `labelIntersectAction` as `Rotate90`, the labels are rotated vertically to maximize space utilization.

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

By default, axis labels are positioned `outside` the axis line. Labels can also be placed `inside` the axis line using the `labelPosition` property, which is useful when optimizing space within the chart area.

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

Multiple levels of labels can be displayed on an axis using the `multiLevelLabels` property. This feature is useful for grouping related categories and improving data interpretation. The following configuration options are available:

• Categories
• Overflow
• Alignment
• Text style
• Border

>Note: To use multilevel label feature, inject `MultiLevelLabel` into the `@NgModule.providers`.

### Categories

Using the categories property, the `start`, `end`, `text`, and `maximumTextWidth` values of multilevel labels can be configured to define the label range and content.

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

Using the `overflow` property, multilevel labels can be configured to either `trim` or `wrap` when the text exceeds the available space.

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

The `alignment` property provides options to position multilevel labels at `far`, `center`, or `near` relative to the axis.

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

The `textStyle` property of multilevel labels provides options to customize the `size`, `color`, `fontFamily`, `fontWeight`, `fontStyle`, `opacity`, `textAlignment`, and `textOverflow`.

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

Using the `border` property, the `width`, `color`, and `type` of the multilevel label border can be customized. The supported border types are `Rectangle`, `Brace`, `WithoutBorder`, `WithoutTopBorder`, `WithoutTopandBottomBorder`, and `CurlyBrace`.

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

Labels with long text at the edges of an axis may appear partially outside the chart area. To avoid this, use the [`edgeLabelPlacement`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#edgelabelplacement) property in the axis. This property moves the label inside the chart area or hides it for better appearance. By default, the [`edgeLabelPlacement`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#edgelabelplacement) property is set to **Shift**, ensuring that labels are repositioned inside the chart area to prevent overlap.

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

The [`labelStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#labelstyle) property of an axis provides options to customize the `color`, `font-family`, `font-size`, and `font-weight` of axis labels.

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

Specific axis label text can be customized using the `axisLabelRender` event, which allows conditional formatting or dynamic text updates during label rendering.

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

The line break feature is used to display long axis label text across multiple lines. In the following example, the `x` value in the data source contains long text, which is split into two lines using the `<br>` tag.

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

The axis label template allows axis labels to be customized using HTML content. This enables conditional styling and the inclusion of dynamic elements such as icons, images, or additional contextual data. This customization is enabled by setting the template content in the [`labelTemplate`](https://ej2.syncfusion.com/angular/documentation/api/chart/axismodel#labelTemplate) property of the `AxisModel`.

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