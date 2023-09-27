---
layout: post
title: Appearance in Angular Heatmap chart component | Syncfusion
description: Learn here all about Appearance in Syncfusion Angular Heatmap chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Angular Heatmap chart component

## Cell customization

You can customize the cell by using the [cellSettings](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#cellsettings) property.

### Border

Change the width, color, and radius of the heat map cells by using the [border](https://ej2.syncfusion.com/angular/documentation/api/heatmap/cellSettings/#border) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/cellborder-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/cellborder-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/cellborder-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/appearance/cellborder-cs1" %}

### Cell highlighting

Enable or disable the cell highlighting while hovering over the heat map cells by using the [enableCellHighlighting](https://ej2.syncfusion.com/angular/documentation/api/heatmap/cellSettings/#enablecellhighlighting) property.

>Note: The cell highlighting only works in a SVG rendering mode.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/cellhighlighting-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/cellhighlighting-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/cellhighlighting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/appearance/cellhighlighting-cs1" %}

### Color gradient mode

The [colorGradientMode](https://ej2.syncfusion.com/angular/documentation/api/heatmap/paletteSettingsModel/#colorgradientmode) property can be used to set the minimum and maximum values for colors based on row and column. Three types of color gradient modes are available.

* **Table**: The minimum and maximum value colors calculated for overall data.
* **Row**: The minimum and maximum value colors calculated for each row of data.
* **Column**: The minimum and maximum value colors calculated for each column of data.

>Note: The default value of `colorGradientMode` is **Table**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/colormode-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/colormode-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/colormode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/appearance/colormode-cs1" %}

## Background color

The background color of the heat map can be customized using the [backgroundColor](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#backgroundcolor) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/background-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/background-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/background-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/appearance/background-cs1" %}

## Margin

Set the margin for the heatmap from its container by using the [margin](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#margin) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/cellmargin-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/cellmargin-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/cellmargin-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/appearance/cellmargin-cs1" %}

## Title

The title is used to provide a quick information about the data plotted in heatmap. The [text](https://ej2.syncfusion.com/angular/documentation/api/heatmap/title/#text) property is used to set the title for the heatmap. The text style of the title can be customized by using the [textStyle](https://ej2.syncfusion.com/angular/documentation/api/heatmap/title/#textstyle) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/celltitle-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/celltitle-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/celltitle-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/appearance/celltitle-cs1" %}

## Data label

The visibility of data labels can be toggled using the [showLabel](https://ej2.syncfusion.com/angular/documentation/api/heatmap/cellSettings/#showlabel) property. By default, the data labels will be visible.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/datalabel-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/datalabel-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/datalabel-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/appearance/datalabel-cs1" %}

### Customize the data label

The label displayed in the heat map cell can be changed using the [cellRender](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#cellrender) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/cellrender-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/cellrender-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/cellrender-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/appearance/cellrender-cs1" %}

### Text style

The text attributes of the data label such as font-family, font-size, and color can be customized using the [textStyle](https://ej2.syncfusion.com/angular/documentation/api/heatmap/cellSettingsModel/#textstyle) in the [cellSettings](https://ej2.syncfusion.com/angular/documentation/api/heatmap/cellSettingsModel) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/textStyle-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/textStyle-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/textStyle-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/appearance/textStyle-cs1" %}

## Format

The format of the data label, such as currency, decimal, percent etc. can be changed using [format](https://ej2.syncfusion.com/angular/documentation/api/heatmap/cellSettingsModel/#format) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/format-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/format-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/format-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/appearance/format-cs1" %}

### Template

Any HTML elements can be added as a template in the data labels by using the [labelTemplate](https://ej2.syncfusion.com/angular/documentation/api/heatmap/cellSettings/#labeltemplate) property of [cellSettings](https://ej2.syncfusion.com/angular/documentation/api/heatmap/cellSettings) in the HeatMap.

The following examples show various data binding methods in the HeatMap using the `labelTemplate` property.

#### Array binding

By including `${value}` in the template content, the value from the data source for the corresponding cell can be displayed in the HeatMap cell as data label template content. Additionally, the x-axis and y-axis label values can be displayed by including `${xLabel}` and `${yLabel}` in the template content.

**Table**

The following example demonstrates how to add a data label template for array table binding.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/appearance/template-cs1" %}

*Cell**

The following example demonstrates how to add a data label template for array cell binding.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/template-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/template-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/template-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/appearance/template-cs2" %}

#### JSON binding

By including the desired field name in the template content, such as **${value}**, the value from the data source for the corresponding cell can be displayed in the HeatMap cell as data label template content.

**Table**

The following example demonstrates how to add a data label template for JSON table binding.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/template-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/template-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/template-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/appearance/template-cs3" %}

**Cell**

The following example demonstrates how to add a data label template for JSON cell binding.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/template-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/template-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/template-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/appearance/template-cs4" %}

## See Also

* [To customize the appearance of tool tip](./tooltip/#customize-the-appearance-of-tooltip)