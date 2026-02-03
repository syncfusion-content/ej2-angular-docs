---
layout: post
title: Data labels in Angular Chart component | Syncfusion
description: Learn here all about Data labels in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data labels 
documentation: ug
domainurl: ##DomainURL##
---

# Data labels in Angular Chart component

Data labels display the values of data points directly on the chart, reducing the need to reference axes for exact values. Enable data labels by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart/dataLabelSettings#visible) option to `true` in the `dataLabel` configuration. Labels automatically adjust to avoid overlapping and maintain readability.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/datalabel-cs1" %}

>Note: To use datalabel feature, inject `DataLabelService` into the `@NgModule.providers`.

## Position

Use the [`position`](https://ej2.syncfusion.com/angular/documentation/api/chart/dataLabelSettings#position) property to place data labels at `Top`, `Middle`, `Bottom`, or `Outer` (applicable to column and bar series). Appropriate label positioning enhances clarity and preserves chart readability.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/datalabel-cs2" %}

> Note: The `Outer` position applies only to column and bar series types.

## Data Label Template

Customize label content using templates. Use placeholders such as `${point.x}` and `${point.y}` to display data point values. The [`template`](https://ej2.syncfusion.com/angular/documentation/api/chart/dataLabelSettingsModel#template) property enables fully customizable and visually rich labels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/datalabel-cs3" %}

## Format

Apply number or date formatting using the  [`format`](https://ej2.syncfusion.com/angular/documentation/api/chart/dataLabelSettings#format)  property. Global formatting symbols include:
- `n` – number format  
- `p` – percentage format  
- `c` – currency format

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/datalabel-cs4" %}

<table>
  <tr>
    <th>Value</th>
    <th>Format</th>
    <th>Resultant Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1000</td>
    <td>n1</td>
    <td>1000.0</td>
    <td>Rounded to 1 decimal place.</td>
  </tr>
  <tr>
    <td>1000</td>
    <td>n2</td>
    <td>1000.00</td>
	  <td>Rounded to 3 decimal places.</td>
  </tr>
   <tr>
    <td>1000</td>
    <td>n3</td>
    <td>1000.000</td>
    <td>The number is rounded to 3 decimal place.</td>
  </tr>
  <tr>
    <td>0.01</td>
    <td>p1</td>
    <td>1.0%</td>
	  <td>Converted to percentage with 1 decimal place.</td>
  </tr>
  <tr>
    <td>0.01</td>
    <td>p2</td>
    <td>1.00%</td>
    <td>Converted to percentage with 2 decimal places.</td>
  </tr>
   <tr>
    <td>0.01</td>
    <td>p3</td>
    <td>1.000%</td>
	    <td>Converted to percentage with 3 decimal places.</td>
  </tr>
  <tr>
    <td>1000</td>
    <td>c1</td>
    <td>$1000.0</td>
    <td>Currency with 1 decimal place.</td>
  </tr>
   <tr>
    <td>1000</td>
    <td>c2</td>
    <td>$1000.00</td>
	  <td>Currency with 2 decimal places.</td>
  </tr>
</table>

## Text Mapping

Display custom text using the `name` property, which maps label text from a specific field in the data source. This feature is useful for descriptive or category‑based labels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/datalabel-cs5" %}

## Margin

Adjust spacing around labels using the `margin` property, which includes `left`, `right`, `bottom`, and `top` values. Margins help prevent labels from overlapping chart elements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/datalabel-cs6" %}

## Data label rotation

Rotate data labels using the `angle` property. Rotation improves readability when labels are long or when space is limited.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/datalabel-cs7" %}

## Customization

Enhance label appearance using properties such as `fill` (background), `border`, and corner radius (`rx`, `ry`). Refine text appearance using the `font` settings, which support `color`, `fontFamily`, `fontWeight`, and `size`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/datalabel-cs8" %}

 Note: The `rx` and `ry` properties require non‑null `border` values.

## Customizing specific point

Customize individual markers or labels using the [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/iPointRenderEventArgs) and [`textRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/iTextRenderEventArgs) events.  
- `pointRender` modifies shape, color, or border of a point.  
- `textRender` customizes the label text for specific points.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/datalabel-cs9" %}

## Show percentage based on each series points

Calculate and display percentage values based on each series’ total using the `seriesRender` and `textRender` events.  
- In `seriesRender`, compute the total of `y` values.  
- In `textRender`, calculate the percentage for each point and update the label text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/datalabel-cs10" %}

## Last value label

The `lastValueLabel` feature highlights the final data point in a series, making the latest trend or value easy to identify.

### Enable last value label

To show the last value label, make sure the `enable` property inside the `lastValueLabel` settings is set to `true` within the series configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/last-value-label/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/last-value-label/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/last-value-label" %}

>Note: To use last value label feature, inject `LastValueLabelService` into the `@NgModule.providers`.

### Customization in last label

Customize the appearance using properties such as `font`, `background`, `border`, `dashArray`, `lineWidth`, `lineColor`, `rx`, and `ry`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/last-value-label-customization/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/last-value-label-customization/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/last-value-label-customization" %}

## See Also

* [Show total stacking values in data label](./how-to/stacking-total#show-the-total-value-for-stacking-series-in-data-label)
* [Prevent the data label when the data value is 0](./how-to/prevent-data-label#prevent-the-data-label-when-the-data-value-is-0)
* [Add Images to Each Data Point](https://support.syncfusion.com/kb/article/21529/how-to-add-images-to-each-data-point-in-angular-chart-component)