---
layout: post
title: Tooltip in Angular Chart component | Syncfusion
description: Learn here all about Tooltip in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Angular Chart component

<!-- markdownlint-disable MD036 -->

The chart displays detailed information about a data point through a tooltip when the mouse pointer moves over the point.

![Tooltip](../../images/tooltip.gif)

## Default tooltip

By default, tooltip is not visible. You can enable the tooltip by setting the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart/tooltipSettingsModel#enable) property to **true** and by injecting `TooltipService` into the `@NgModule.providers`.

To know about tooltip, you can check out this video:

{% youtube "https://www.youtube.com/watch?v=GaJ16060GZ8" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/tooltip-cs1" %}

<!-- markdownlint-disable MD013 -->

## Fixed tooltip

By default, the tooltip tracks the mouse movement, but you can set a fixed position for the tooltip by using the [`location`](https://ej2.syncfusion.com/angular/documentation/api/chart/tooltipSettingsModel#location) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/tooltip-cs11" %}

## Format the tooltip

<!-- markdownlint-disable MD013 -->

By default, the tooltip displays the x- and y-values of a data point. Additional information can be shown by specifying a custom format. For example, the format `${series.name} ${point.x}` displays the series name along with the x-value of the data point.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/tooltip-cs2" %}

<!-- markdownlint-disable MD013 -->

## Individual series format

<!-- markdownlint-disable MD013 -->

You can format each series tooltip separately using the series [`tooltipFormat`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#tooltipformat) property.

>Note: If the series [`tooltipFormat`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#tooltipformat) is given, it shows the tooltip for that series in that format, or else it will take the chart's global tooltip format.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/tooltip-cs3" %}

<!-- markdownlint-disable MD013 -->

## Tooltip template

Custom HTML content can be rendered in the tooltip using the [`template`](https://ej2.syncfusion.com/angular/documentation/api/chart/tooltipSettingsModel#template) property. You can use placeholders like `${x}` and `${y}` within the template to display the x- and y-values of the corresponding data point.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/tooltip-cs4" %}

## Enable highlight

By setting the [`enableHighlight`](https://ej2.syncfusion.com/angular/documentation/api/chart/tooltipSettingsModel#enablehighlight) property to **true**, all points in the hovered series are highlighted while the remaining points are dimmed. This behavior improves focus and readability during data analysis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/tooltip-cs12" %}

## Tooltip mapping name

By default, the tooltip displays only the x- and y-values of a data point. Additional information from the data source can be shown using the [`tooltipMappingName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#tooltipmappingname) property of the series. Use the `${point.tooltip}` placeholder in the tooltip format to display the mapped value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/tooltip-cs5" %}

## Customize the appearance of tooltip

The appearance of the tooltip can be customized using the following properties:

- [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/tooltipSettingsModel#fill) - Specifies the background color of the tooltip.
- [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/tooltipSettingsModel#border) - Configures the tooltip border.
- [`textStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart/tooltipSettingsModel#textstyle) - Customizes the tooltip text style.

The [`highlightColor`](https://ej2.syncfusion.com/angular/documentation/api/chart#highlightcolor) property is used to change the color of a data point when it is highlighted during tooltip interaction.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/tooltip-cs6" %}

## Hide tooltip in Angular Chart component

Use the [`tooltipRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#tooltiprender) event to hide tooltips for deselected series. When a series is deselected, cancel the tooltip in the event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs9" %}

## Percentage tooltip in Angular Chart component

Use the [`tooltipRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#tooltiprender) event to display percentage values for pie points. Compute the percentage from `args.point.y` and `args.series.sumOfPoints`, then set the formatted result on `args.content`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs15" %}

## Tooltip format in Angular Chart component

Use the [`tooltipRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#tooltiprender) event to read the current point's x value and format it with `formatDate` for display in the tooltip.

The output will appear as follows,

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs21/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs21" %}

## Tooltip as table in Angular Chart component

Render a table in the tooltip using the tooltip template.

- Define the template HTML as shown below.
- Assign the template's element id to the tooltip [template](https://ej2.syncfusion.com/angular/documentation/api/chart/tooltipSettingsModel#template) property.

```
   <script id="Female-Material" type="text/x-template">
    <div id='templateWrap'>
        <table style="width:100%;  border: 1px solid black;">
        <tr><th colspan="2" bgcolor="#00FFFF">Female</th></tr>
        <tr><td bgcolor="#00FFFF">${x}:</td><td bgcolor="#00FFFF">${y}</td></tr>
        </table>
    </div>
   </script>

``` 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/table-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/table-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/table-cs1" %}

## Closest tooltip

The [`showNearestTooltip`](https://ej2.syncfusion.com/angular/documentation/api/chart/tooltipSettingsModel#shownearesttooltip) property displays the tooltip for the data point nearest to the mouse pointer, even when the pointer is not directly positioned over the point.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/tooltip-cs13" %}

## Split Tooltip

The split tooltip displays a separate tooltip for each series at the same data point, making it easier to compare values across multiple series.

Enable this feature by setting the [`split`](https://ej2.syncfusion.com/angular/documentation/api/chart/tooltipSettingsModel#split) property to **true** in the `tooltip` configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/split-tooltip/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/split-tooltip/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/user-interaction/split-tooltip/src/datasource.ts %}
{% endhighlight %}

{% endtabs %}
{% previewsample "page.domainurl/samples/chart/user-interaction/split-tooltip" %}

## Follow pointer

The follow pointer feature enables the tooltip to follow the mouse cursor or touch pointer as users interact with the chart. This provides a more dynamic and intuitive experience by keeping the tooltip close to the user's point of interaction.
Enable this feature by setting the [`followPointer`](https://ej2.syncfusion.com/angular/documentation/api/chart/tooltipSettingsModel#followpointer) property to true

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/follow-pointer/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/follow-pointer/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/user-interaction/follow-pointer/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/user-interaction/follow-pointer" %}

## Tooltip Distance

The tooltip distance property controls the spacing between the tooltip and the mouse pointer or target data point. This prevents the tooltip from overlapping with the cursor or nearby chart elements, improving readability.
Set the [`distance`](https://ej2.syncfusion.com/angular/documentation/api/chart/tooltipSettingsModel#distance) property to specify the gap in pixels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-distance/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-distance/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/user-interaction/tooltip-distance/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/user-interaction/tooltip-distance" %}

## See Also

* [Hide Tooltip for Truncated Data Labels](https://support.syncfusion.com/kb/article/21374/how-to-hide-tooltip-for-truncated-data-labels-in-angular-pie-chart)
* [Hide Tooltips for Truncated Axis Labels](https://support.syncfusion.com/kb/article/21369/how-to-hide-tooltips-for-truncated-axis-labels-in-angular-charts)