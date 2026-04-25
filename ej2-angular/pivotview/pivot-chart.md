---
layout: post
title: Pivot chart in Angular Pivotview component | Syncfusion
description: Learn here all about Pivot chart in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Pivot chart 
documentation: ug
domainurl: ##DomainURL##
---

# Pivot chart in Angular Pivotview component

The Pivot Chart in the Syncfusion Angular Pivot Table component helps users visualize aggregated values in a clear and graphical format. It provides essential options like drill down and drill up operations, over 15 chart types, and various display settings for series, axes, legends, export, print, and tooltips. The main purpose of the Pivot Chart is to present Pivot Table data in a way that is easy to understand and interact with.

Users can display the pivot chart component individually with pivot values and modify the report dynamically using the field list and grouping bar. The [`displayOption`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/displayOptionModel/) property in the Pivot Table allows users to control the visibility of both the grid and chart components. This property includes the following options:

* [`view`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/displayoptionmodel#view): Determines whether the Pivot Table component displays only the grid, only the chart, or both components.
* [`primary`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/displayoptionmodel#primary): Specifies which component (grid or chart) appears as the primary view during initial loading. This option applies only when the [`view`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/displayoptionmodel#view) property is set to **Both**.

> To use the Pivot Chart, be sure to inject the `PivotChartService` module into your application.

The following sample shows the pivot chart component based on the pivot report bound to it.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs222/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs222/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs222" %}

## Data Binding

The Pivot Table component supports both local and remote data binding options to populate data in the pivot chart. Users can bind data to the component using the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#datasource) property, which accepts either an instance of [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/datamanager) for remote data sources or a JavaScript object array collection for local data. For further details, [refer here](./data-binding).

## Chart Types

The Pivot Chart offers 21 different chart types, allowing users to visualize and analyze data in various ways. You can choose any of these chart types based on your needs:

- Line
- Column
- Area
- Bar
- StepArea
- StackingLine
- StackingColumn
- StackingArea
- StackingBar
- StepLine
- Pareto
- Bubble
- Scatter
- Spline
- SplineArea
- StackingLine100
- StackingColumn100
- StackingBar100
- StackingArea100
- Polar
- Radar

By default, the **Line** chart type is displayed in the Pivot Chart. Users can change the chart type at any time using the [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeries/#type) property under [`chartSeries`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeries/).

For example, to display a **Bar** chart, set the chart type to 'Bar' within the Pivot Chart settings. Review the following code samples to see how to set this option:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs223/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs223/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs223" %}

## Accumulation Charts

Pivot Chart supports four types of accumulation charts:

- Pie
- Doughnut
- Funnel
- Pyramid

You can use any of these chart types to visualize your aggregated data clearly. To select a specific accumulation chart, set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeriesModel/#type) property in the [`chartSeries`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeriesModel/) option.

In the code example below, the **Pie** chart is displayed by default. You can switch to other accumulation chart types, such as Doughnut, Funnel, or Pyramid, using the dropdown list.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs224/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs224/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs224" %}

### Drill down and up

In accumulation charts, you can use the drill down and drill up options to explore data at different levels. When you click on a chart series, a built-in context menu appears with the following options:

- **Expand**: Drill down to view more detailed data for the selected series, continuing until the lowest level is reached.
- **Collapse**: Drill up to view higher-level, summarized information for that series, returning to the top level as needed.
- **Exit**: Close the context menu without making any changes.

> You can use the drill operation for row headers only in accumulation charts.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs225/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs225/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs225" %}

![output](images/expand_collapse.png)

### Column Headers and Delimiters

In accumulation charts, only the values from a single column in the pivot chart are displayed. By default, the first column is used. If you want to show values from a different column, you can specify the column headers with the [`columnHeader`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettingsModel/#columnheader) property in [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#chartsettings).

If the column has more than one header, enter all the headers separated by a delimiter, such as **Germany-Road Bikes**. You can set your preferred delimiter using the [`columnDelimiter`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettingsModel/#columndelimiter) property in [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#chartsettings). This allows you to display the correct values in your accumulation chart according to how your columns are grouped in the Pivot Table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs226/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs226/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs226" %}

### Label Customization

By default, the data labels in accumulation charts display the header name. You can control their visibility using the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotChartDataLabelModel/#visible) property in the [`dataLabel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeriesModel/#datalabel) settings.

To improve label arrangement and prevent overlapping, the **Smart Labels** option arranges labels efficiently. You can disable this option by setting the [`enableSmartLabels`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettingsModel/#enablesmartlabels) property to **false** in the [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#chartsettings).

The [`position`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotChartDataLabelModel/#position) property in [`dataLabel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeriesModel/#datalabel) allows you to specify where the data label appears. The available options are:

* `Outside`: Places the label outside the chart point. This is the default option.
* `Inside`: Places the label inside the chart point.

In the following code sample, the data labels are placed inside the chart points.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs227/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs227/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs227" %}

The **Connector Line** appears when data labels are positioned outside the chart. You can style this connector line using the [`connectorStyle`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotChartDataLabelModel/#connectorstyle) property in [`dataLabel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeriesModel/#datalabel) to modify its color, length, width, and other properties. In the example below, the connector line appearance is changed to show a different style.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs228/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs228/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs228" %}

### Pie and Doughnut Customization

You can draw pie and doughnut charts within a specific range by using the [`startAngle`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeriesModel/#startangle) and [`endAngle`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeriesModel/#endangle) properties in the [`chartSeries`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeriesModel/) configuration. The default value for the [`startAngle`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeriesModel/#startangle) property is **0**, and the [`endAngle`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeriesModel/#endangle) property is **360**. By modifying these properties, you can create semi-pie and semi-doughnut charts.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs229/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs229/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs229" %}

You can convert a pie chart to a doughnut chart and vice-versa using the [`innerRadius`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeriesModel/#innerradius) property in the [`chartSeries`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeriesModel/) configuration. When this property is set to a value greater than **0** percent, the chart appears as a doughnut instead of a pie chart.

> This property accepts values only in percentage format.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs230/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs230/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs230" %}

### Exploding Series Points

You can make an individual point in a pivot chart stand out by enabling the exploding option. To do this, set the [`explode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeriesModel/#explode) property in the [`chartSeries`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeriesModel/) to **true**. When this option is turned on, a chart point will separate from the rest of the series when a user clicks it with a mouse or taps it on a touch device. This makes it easier for users to highlight and identify specific data points in accumulation charts like Pie, Doughnut, Funnel, or Pyramid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs231/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs231/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs231" %}

## Field List

The field list makes it easy to add, remove, or rearrange fields in the pivot chart, so you can display exactly the data you need. To show the field list in the Pivot Chart, set the [`showFieldList`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#showfieldlist) property of the Pivot Table to **true**. When you make changes with the field list, the pivot chart updates right away to show the new results. To learn more about the field list and how it works, see the [field list](./field-list) topic in the documentation.

The sample below demonstrates the field list shown in `Popup` mode within the pivot chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs232/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs232/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs232" %}

## Grouping Bar

You can display the grouping bar in the Pivot Chart by setting the [`showGroupingBar`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#showgroupingbar) property to **true**. When enabled, the grouping bar in the pivot chart shows a drop-down list on the value axis. This drop-down lets users select from the value fields defined in [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings). Users can switch between these fields to update the chart based on the selected value field. This method of selection is the default behavior in the Pivot Chart component. For more details about how the grouping bar works, refer to the [grouping bar](./grouping-bar) documentation.

> When there are multiple axes, buttons appear on the value axis instead of the drop-down list.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs233/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs233/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs233" %}

When using accumulation charts, the drop-down list appears on the column axis. This list contains the column headers available in the Pivot Chart. Users can switch column headers using this drop-down, and the accumulation chart will update with the selected header.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs234/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs234/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs234" %}

## Single Axis

By default, the pivot chart uses the first value field (measure) from your report as the value axis. If you want to display data using a different value field, you can do this easily. Use the [`value`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/#value) property inside [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/). This option lets you show a specific value field in the pivot chart, allowing you to focus on the data you need.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs235/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs235/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs235" %}

## Multiple Axis

The pivot chart can be drawn with multiple value fields by setting the [`enableMultipleAxis`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/#enablemultipleaxis) property to **true** in the [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/). In the following code sample, the pivot chart displays both value fields "Sold" and "Amount" from the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings).

> Multiple axis support is not applicable for accumulation chart types like pie, doughnut, pyramid, and funnel.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs236/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs236/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs236" %}

When binding more value fields, the result displays multiple pivot charts, with each chart shrinking within the parent container height. To prevent this behavior, set the [`enableScrollOnMultiAxis`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/#enablescrollonmultiaxis) property to **true** in the [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/). This ensures each pivot chart maintains a minimum height of "160px" to "180px" and displays a vertical scroll bar for better visibility.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs237/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs237/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs237" %}

Alternatively, you can display multiple values in a single chart. In this approach, the series from multiple values are grouped and displayed together. Based on the values, multiple Y-axis scales are created with different ranges. This can be achieved by setting [`enableMultipleAxis`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/#enablemultipleaxis) to **true** and [`multipleAxisMode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/#multipleaxismode) to `Single` in the [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/).

In the following code sample, the pivot chart appears as a single chart with multiple value fields such as **Sold** and **Amount**, each represented with its own Y-axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs238/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs238/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs238" %}

To display chart series for multiple values within a single Y-axis, set the [`enableMultipleAxis`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettingsModel/#enablemultipleaxis) property to **true** and the [`multipleAxisMode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettingsModel/#multipleaxismode) property to **Combined** in the [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettingsModel/).

> The Y-axis range values are formatted using the first value field on the value axis. For example, if the first value field uses currency format and the remaining value fields use different number formats or no format, the Y-axis range values will display in the currency format of the first value field.

The following code sample shows a pivot chart with multiple value fields such as **Sold** and **Amount** displayed on a single Y-axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs305/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs305/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs305" %}

### Show point color based on members

When you enable multiple axes in the pivot chart, you can use the [`showPointColorByMembers`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettingsModel/#showpointcolorbymembers) property in the [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettingsModel/) to display the same color for each member on the column axis across all measures. Setting this property to **true** makes it easy for users to spot and compare each member throughout the entire chart.

In addition, users can show or hide specific members from all measures in the chart by clicking the corresponding legend item. This interaction allows users to focus on the members they want to analyze without distraction.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs239/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs239/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs239" %}

## Series customization

You can customize the series in the pivot chart by using the [`chartSeries`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeries/) property inside [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/). Any changes you make to the [`chartSeries`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeries/) property will apply to all series in the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs240/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs240/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs240" %}

If you want to change each series separately, use the [`chartSeriesCreated`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotViewModel/#chartseriescreated) event. This event happens after the pivot chart series are created, making it possible to work with each series one at a time.

The sample below shows how you can hide every even-numbered series in the pivot chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs241/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs241/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs241" %}

## Axis Customization

Users can customize the x-axis and y-axis of the pivot chart using the [`primaryXAxis`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/#primaryxaxis) and [`primaryYAxis`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/#primaryyaxis) options in the [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/) property of the Pivot Table. 

> Please note that axis customization is not supported for accumulation chart types, such as pie, doughnut, pyramid, and funnel.

For example, in the sample below, the titles for the y-axis and x-axis are set to custom values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs242/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs242/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs242" %}

Users can also modify multi-level labels on the primary x-axis by using the [`multiLevelLabelRender`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettingsModel/#multilevellabelrender) event in [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/). This event is triggered whenever a multi-level label is rendered on the chart. The event provides the following options:

- `axis`: Information about the current axis.
- `text`: Option to change the content of the multi-level label.
- `textStyle`: Option to adjust the font of the label.
- `alignment`: Option to set how the label text is aligned.

The example below shows how to update the text and style for multi-level labels on the pivot chart’s x-axis:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs243/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs243/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs243" %}

## Legend customization

Users can easily change the legend in the pivot chart by using the [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotChartSettingsLegendSettings/) option inside the [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/) property. By default, the legend is shown. If you want to hide it, set the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotChartSettingsLegendSettings/#visible) property in [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotChartSettingsLegendSettings/) to **false**.

The pivot chart allows users to select from various legend shapes, including:

- Circle
- Rectangle
- VerticalLine
- Pentagon
- InvertedTriangle
- SeriesType (default)
- Triangle
- Diamond
- Cross
- HorizontalLine

The default shape for the legend is **SeriesType**, but you can change it by setting the [`legendShape`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeries/#legendshape) property in [`chartSeries`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSeries/#legendshape).

Users can also choose where the legend appears in the pivot chart by setting the [`position`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotChartSettingsLegendSettings/#position) property in [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotChartSettingsLegendSettings/). The available positions include:

- **Auto**: Places the legend based on the chart area (default).
- **Top**: Shows the legend above the pivot chart.
- **Left**: Displays the legend to the left of the chart.
- **Bottom**: Places the legend below the chart.
- **Right**: Shows the legend on the right side.
- **Custom**: Positions the legend using specific x and y values you provide.

> Note: Legends are not shown by default for accumulation charts such as pie, doughnut, pyramid, and funnel.

In the following code example, you can see how to set a different legend shape and position.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs244/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs244/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs244" %}

## User interaction

### Marker and crossHair

You can show and customize markers and crosshair's on the pivot chart. To do this, use the [`marker`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotChartSeriesMarkerSettings/) and [`crosshair`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/#crosshair) options within the [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/) property.

If you want to display a tooltip when hovering over an axis crosshair, use the [`crosshairTooltip`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotAxisModel/#crosshairtooltip) option.

> Please note, marker and crosshair options do not work with accumulation chart types, such as pie, doughnut, pyramid, or funnel.

In the following code sample, both marker and crosshair options are enabled and set up using the above properties:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs245/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs245/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs245" %}

### Zooming and panning

Users can customize the zooming and panning options in the pivot chart by using the [`zoomSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotZoomSettings/) property within [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/). The pivot chart supports four zooming options:

- [`enablePinchZooming`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotZoomSettingsModel/#enablepinchzooming) – Zooms by pinching on touch devices.
- [`enableSelectionZooming`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotZoomSettingsModel/#enableselectionzooming) – Zooms into a selected region on the chart.
- [`enableDeferredZooming`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotZoomSettingsModel/#enabledeferredzooming) – Applies zooming only after the selection is complete, which helps improve performance for large data.
- [`enableMouseWheelZooming`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotZoomSettingsModel/#enablemousewheelzooming) – Zooms using the mouse wheel.

The direction of zooming can be controlled using the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotZoomSettings/#mode) property in [`zoomSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotZoomSettings/). The available options are:

- `x`: zooms horizontally,
- `y`: zooms vertically,
- `x,y`: zooms both horizontally and vertically.

When the pivot chart is zoomed, a toolbar appears at the top of the chart with tools for Zoom, Zoom In, Zoom Out, Pan, and Reset actions. This toolbar can be customized using the [`toolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotZoomSettings/#toolbaritems) property in [`zoomSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotZoomSettings/).

> Zooming and panning are not available for accumulation chart types, such as pie, doughnut, pyramid, and funnel.

In the code sample below, all four zooming types are enabled, along with the toolbar options for the pivot chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs246/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs246/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs246" %}

### Tooltip

The tooltip in the Pivot Chart is enabled by default, showing detailed information about each data point when users move the pointer over the chart. Users can change how the tooltip looks and functions by using the [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotTooltipSettings/) option inside the [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/) property.

If users do not want to show the tooltip, they can disable it by setting the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotTooltipSettings/#enable) property in [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotTooltipSettings/) to **false**.

The code below shows how to change the default tooltip appearance and settings in the Pivot Chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs247/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs247/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs247" %}

## Export

You can export the pivot chart to various file formats by using the [`chartExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#chartexport) method. This method requires the `type` parameter, which specifies the file format. The supported export formats are:

- PNG
- JPEG
- SVG
- PDF

Other optional parameters for the [`chartExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#chartexport) method include:

- `pdfExportProperties`: Lets you set specific export options for the PDF format.
- `isMultipleExport`: Use this to export several charts or reports into one PDF document.
- `pdfDoc`: Allows you to include another external PDF document as part of the export.
- `isBlob`: If enabled, saves the PDF as blob data.

The example below shows how to export the pivot chart using an external button labeled "Export":

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs248/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs248/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs248" %}

## Print

You can print the current view of the pivot chart directly from the browser by using the [`printChart`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#printchart) method. This allows you to create a physical or digital copy of your pivot chart as displayed on the screen.

In the example below, clicking an external button labeled "Print Chart" calls the [`printChart`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#printchart) method and prints the rendered pivot chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs249/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs249/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs249" %}

## Events

### MultiLevelLabelRender

The [multiLevelLabelRender](https://helpej2.syncfusion.com/angular/documentation/api/pivotview/chartSettingsModel/#multilevellabelrender) event triggers during the rendering of each multi-level label in the pivot chart. It allows you to customize each multi-level label's appearance and content based on your specific visualization needs. It includes the following parameters:

* [`alignment`](https://helpej2.syncfusion.com/angular/documentation/api/pivotview/multiLevelLabelRenderEventArgs/#alignment) - It holds the text alignment for multi-level labels, as **Center, Far, or Near**.
* [`axis`](https://helpej2.syncfusion.com/angular/documentation/api/pivotview/multiLevelLabelRenderEventArgs/#axis) - It holds the current axis details of the multi-level labels.
* [`cancel`](https://helpej2.syncfusion.com/angular/documentation/api/pivotview/multiLevelLabelRenderEventArgs/#cancel) - It's a boolean property that allows user to restrict the rendering of the current label.
* [`customAttributes`](https://helpej2.syncfusion.com/angular/documentation/api/pivotview/multiLevelLabelRenderEventArgs/#customattributes) -  It holds the custom objects for multi-level labels.
* [`text`](https://helpej2.syncfusion.com/angular/documentation/api/pivotview/multiLevelLabelRenderEventArgs/#text) -  It contains the current text of the axis label.
* [`textStyle`](https://helpej2.syncfusion.com/angular/documentation/api/pivotview/multiLevelLabelRenderEventArgs/#textstyle) - It holds the font style, including font size, weight, color, and other font properties for the multi-level labels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs323/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs323/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs323" %}