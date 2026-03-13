---
layout: post
title: Understanding Angular Chart component | Syncfusion
description: Explore and understand the Syncfusion Angular Chart component in Essential JS 2 and discover its powerful features.
platform: ej2-angular
control: Understanding
documentation: ug
domainurl: ##DomainURL##
---
# Understanding the Angular Chart component

The Angular Chart component is a versatile visualization tool that presents data using a wide range of graphical formats. Each chart is composed of essential elements—such as the title, series, tooltip, legend, and axes—that work together to provide clear, interactive, and meaningful insights. Understanding these elements helps in configuring and customizing charts for various analytical needs.

The following image highlights the primary elements of a chart:
<img src="../images/chart_elements.png" alt="Annotated visual showing the main elements of an Angular Chart component, including the title, series area, axes, legend, and tooltip" />

## Title

The chart title conveys the overall purpose or subject of the visualization. It typically appears at the top of the chart and can be customized in terms of alignment, style, and formatting.  
For more details, see the [Title and Subtitle](https://ej2.syncfusion.com/angular/documentation/chart/title-subtitle) section.

## Series

A series represents a group of data points plotted on the chart. Charts can include one or more series depending on the scenario, and each series can use different chart types such as line, column, area, or other supported visualizations.  
For more details, see the [Series](https://ej2.syncfusion.com/angular/documentation/chart/chart-types/line) section.

## Tooltip

Tooltips display helpful information when users hover over a data point or series. They offer interactive and contextual insights, such as exact values or additional metadata, and can be customized to match the design or analytical needs of the application.  
For more details, see the [Tooltip](https://ej2.syncfusion.com/angular/documentation/chart/tool-tip) section.

## Legend

The legend identifies each series in the chart, making it easier for users to understand dataset distinctions. It also supports toggling the visibility of individual series to facilitate interactive data exploration.  
For more details, see the [Legend](https://ej2.syncfusion.com/angular/documentation/chart/legend) section.

## Axes

Axes organize and scale chart data.

### Cartesian axes

Standard rectangular (Cartesian) charts include a horizontal x-axis (for independent or category values) and a vertical y-axis (for dependent or numeric values). Cartesian axes support tick labels, gridlines, ranges, and formatting such as numeric or datetime label formats.

### Polar & Radar axes

Polar and radar charts use radial and angular axes. A radial axis measures distance from the chart center, while an angular axis defines the angular position or category around the circle.

These axes translate dataset values into positions on the chart so points, bars, and areas can be rendered accurately.