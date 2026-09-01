---
layout: post
title: Axis Labels in Angular Chart | Syncfusion
description: Learn here all about Axis labels in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Axis labels 
documentation: ug
domainurl: ##DomainURL##
---

# Axis Labels in Angular Chart

## Smart axis labels

When axis labels overlap due to limited space or dense data points, the [`labelIntersectAction`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#labelintersectaction) property can be used to control how the labels are rendered. This helps improve readability by automatically adjusting label visibility or orientation.

The supported values are `Hide`, `Rotate45`, `Rotate90`, `MultipleRows`, `Wrap`, `Trim`, and `None`. The most common scenarios are demonstrated below.

When `labelIntersectAction` is set to `Hide`, overlapping labels are hidden to avoid visual clutter.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/multiple-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/multiple-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/multiple-cs1" %}

When `labelIntersectAction` is set to `Rotate45`, the labels are rotated by 45 degrees to reduce overlap.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/multiple-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/multiple-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/multiple-cs2" %}

When `labelIntersectAction` is set to `Rotate90`, the labels are rotated vertically to maximize space utilization.

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

By default, axis labels are positioned `Outside` the axis line. Labels can also be placed `Inside` the axis line using the [`labelPosition`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#labelposition) property, which is useful when optimizing space within the chart area.

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

Multiple levels of labels can be displayed on an axis using the [`multiLevelLabels`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#multilevellabels) property. This feature is useful for grouping related categories and improving data interpretation. The following configuration options are available:

- Categories
- Overflow
- Alignment
- Text customization
- Border

> **Note:** To use the multilevel labels feature, register `MultiLevelLabelService` in the component's `providers` array (or inject `MultiLevelLabel` into `@NgModule.providers` when using module-based components).

### Categories

Using the [`categories`](https://ej2.syncfusion.com/angular/documentation/api/chart/multiLevelLabelsModel#categories) property, the [`start`](https://ej2.syncfusion.com/angular/documentation/api/chart/multiLevelCategoriesModel#start), [`end`](https://ej2.syncfusion.com/angular/documentation/api/chart/multiLevelCategoriesModel#end), [`text`](https://ej2.syncfusion.com/angular/documentation/api/chart/multiLevelCategoriesModel#text), and [`maximumTextWidth`](https://ej2.syncfusion.com/angular/documentation/api/chart/multiLevelCategoriesModel#maximumtextwidth) values of multilevel labels can be configured to define the label range and content. The `start` and `end` values are category indices (or numeric positions) that include half-step margins (for example, `-0.5` and `3.5`) to group categories under a parent label.

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

Using the [`overflow`](https://ej2.syncfusion.com/angular/documentation/api/chart/multiLevelLabelsModel#overflow) property, multilevel labels can be configured when the text exceeds the available space. The supported values are `Trim` (cuts off text at the boundary) and `Wrap` (wraps text to the next line).

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

The [`alignment`](https://ej2.syncfusion.com/angular/documentation/api/chart/multiLevelLabelsModel#alignment) property provides options to position multilevel labels relative to the axis:

- `Far` - aligns labels to the far edge of the axis.
- `Center` - centers the labels on the axis.
- `Near` - aligns labels to the near edge of the axis.

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

The [`textStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart/multiLevelLabelsModel#textstyle) property of multilevel labels provides options to customize the `size`, `color`, `fontFamily`, `fontWeight`, `fontStyle`, `opacity`, `textAlignment`, and `textOverflow`.

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

Using the [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/multiLevelLabelsModel#border) property, the [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart/borderModel#width), [`color`](https://ej2.syncfusion.com/angular/documentation/api/chart/borderModel#color), and `type` of the multilevel label border can be customized. The supported border `type` values are `Rectangle`, `Brace`, `WithoutBorder`, `WithoutTopBorder`, `WithoutTopandBottomBorder`, and `CurlyBrace`.

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

Labels with long text at the edges of an axis may appear partially outside the chart area. To avoid this, use the [`edgeLabelPlacement`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#edgelabelplacement) property in the axis. This property moves labels inside the chart area or hides them for a better appearance.

The supported values are:

- `None` - no repositioning; long labels may render outside the chart area.
- `Shift` (default) - reposition labels inside the chart area to prevent overlap.
- `Hide` - hide labels that would otherwise overflow.

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

You can trim axis labels that exceed a specified width by setting the [`enableTrim`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#enabletrim) property to `true` in the axis. The trimming width can be configured using the [`maximumLabelWidth`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#maximumlabelwidth) property; the default value of `maximumLabelWidth` is `34` pixels.

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

To know more about label customization, you can watch this video:

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

The axis labels can be rotated based on the [`labelRotation`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#labelrotation) property in the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs17" %}

## Customizing specific labels

Specific axis labels can be customized using the [`axisLabelRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#axislabelrender) event. The event arguments expose properties such as `text`, `value`, and `labelStyle`, which allow conditional formatting or dynamic text updates during label rendering.

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

When the [`maximumLabels`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#maximumlabels) property is set, the chart renders labels based on the configured count per 100 pixels.

- If the axis range (`minimum`, `maximum`, `interval`) and `maximumLabels` are both configured, the explicit range takes priority and `maximumLabels` is ignored.
- If the range is not configured, `maximumLabels` is used to determine the label density.

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