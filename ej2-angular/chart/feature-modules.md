---
layout: post
title: Feature Modules in Angular Chart | Syncfusion
description: Learn here all about Module in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Module 
documentation: ug
domainurl: ##DomainURL##
---

# Feature Modules in Angular Chart

The following feature modules are available in the Syncfusion Angular Chart component. Inject the appropriate module into the `NgModule.providers` (or standalone component `providers`) to enable the corresponding feature.

> **Version compatibility:** This documentation is valid for Syncfusion Essential JS 2 `Angular Charts` (`@syncfusion/ej2-angular-charts`) version 20.x and above, and supports Angular 14+.

## Module Registration

Import the required services from `@syncfusion/ej2-angular-charts` and register them in the `providers` array of your `NgModule` or standalone component.

### Registering in an NgModule

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartAllModule, LineSeriesService, CategoryService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, ChartAllModule],
  declarations: [AppComponent],
  // Register the required feature modules here.
  providers: [LineSeriesService, CategoryService, LegendService, TooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Registering in a Standalone Component

```typescript
import { Component } from '@angular/core';
import { ChartAllModule, LineSeriesService, CategoryService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChartAllModule],
  // Register the required feature modules here.
  providers: [LineSeriesService, CategoryService, LegendService, TooltipService],
  template: `<ejs-chart>...</ejs-chart>`
})
export class AppComponent { }
```

> Inject only the modules you need; injecting unused modules increases the application bundle size.

## Axis Type Feature Modules

The following modules enable the corresponding axis `valueType` for the chart.

| Module | Description |
|------|-------------|
| [`CategoryService`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#valuetype) | Inject this module to use the category axis type to visualize category (string type) values. |
| [`DateTimeService`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#valuetype) | Inject this module to use the date time axis type to visualize datetime values. |
| [`LogarithmicService`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#valuetype) | Inject this module to use the log axis type to visualize logarithmic values. |
| [`DateTimeCategoryService`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#valuetype) | Inject this module to use the date time category axis type to visualize datetime category values. |

## Series Type Feature Modules

The following modules enable the corresponding series `type` in the chart.

| Module | Description |
|------|-------------|
| [`LineSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the line type series in the chart. |
| [`StepLineSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the step line type series in the chart. |
| [`StackingLineSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the stacking line type series in the chart. |
| [`MultiColoredLineSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the multi colored line type series in the chart. |
| [`SplineSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the spline type series in the chart. |
| [`AreaSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the area type series in the chart. |
| [`RangeAreaSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the range area type series in the chart. |
| [`RangeStepAreaSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the range step area type series in the chart. |
| [`SplineRangeAreaSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the spline range area type series in the chart. |
| [`StackingAreaSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the stacking area type series in the chart. |
| [`StackingStepAreaSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the stacking step area type series in the chart. |
| [`StepAreaSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the step area type series in the chart. |
| [`SplineAreaSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the spline area type series in the chart. |
| [`MultiColoredAreaSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the multi colored area type series in the chart. |
| [`ColumnSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the column type series in the chart. |
| [`RangeColumnSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the range column type series in the chart. |
| [`StackingColumnSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the stacking column type series in the chart. |
| [`BarSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the bar type series in the chart. |
| [`StackingBarSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the stacking bar type series in the chart. |
| [`ScatterSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the scatter type series in the chart. |
| [`BubbleSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the bubble type series in the chart. |
| [`PolarSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the polar type series in the chart. |
| [`RadarSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the radar type series in the chart. |
| [`HiloSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the hilo type series in the chart. |
| [`HiloOpenCloseSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the hilo open close type series in the chart. |
| [`CandleSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the candle type series in the chart. |
| [`BoxAndWhiskerSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the box and whisker type series in the chart. |
| [`WaterfallSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the waterfall type series in the chart. |
| [`HistogramSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#type) | Inject this module to use the histogram type series in the chart. |

## Indicator Type Feature Modules

The following modules enable the corresponding [technical indicators](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalindicator) on the chart.

| Module | Description |
|------|-------------|
| [`AccumulationDistributionIndicatorService`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalindicator) | Inject this module to use the accumulation distribution indicator. |
| [`AtrIndicatorService`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalindicator) | Inject this module to use the average true range (ATR) indicator. |
| [`BollingerBandsService`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalindicator) | Inject this module to use the bollinger band indicator. |
| [`EMAIndicatorService`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalindicator) | Inject this module to use the exponential moving average (EMA) indicator. |
| [`MomentumIndicatorService`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalindicator) | Inject this module to use the momentum indicator. |
| [`MACDIndicatorService`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalindicator) | Inject this module to use the moving average convergence divergence (MACD) indicator. |
| [`RsiIndicatorService`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalindicator) | Inject this module to use the Relative Strength Index (RSI) indicator. |
| [`SmaIndicatorService`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalindicator) | Inject this module to use the simple moving average (SMA) indicator. |
| [`StochasticIndicatorService`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalindicator) | Inject this module to use the stochastic indicator. |
| [`TmaIndicatorService`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalindicator) | Inject this module to use the triangular moving average indicator. |

## Other Feature Modules

The following modules enable additional chart features such as tooltips, legends, annotations, and exporting.

| Module | Description |
|------|-------------|
| [`StripLineService`](https://ej2.syncfusion.com/angular/documentation/api/chart/stripline) | Inject this module to use the strip line feature. |
| [`TrendlinesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/trendline) | Inject this module to use the trendline feature. |
| [`ParetoSeriesService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#paretooptions) | Inject this module to use the pareto series in the chart. |
| [`ErrorBarService`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#errorbar) | Inject this module to use the error bar feature on a series. |
| [`DataLabelService`](https://ej2.syncfusion.com/angular/documentation/api/chart/datalabel) | Inject this module to use the data label feature. |
| [`ChartAnnotationService`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartannotationsettings) | Inject this module to use the annotation feature. |
| [`LegendService`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendsettings) | Inject this module to use the legend feature. |
| [`TooltipService`](https://ej2.syncfusion.com/angular/documentation/api/chart/tooltipsettings) | Inject this module to use the tooltip feature. |
| [`ZoomService`](https://ej2.syncfusion.com/angular/documentation/api/chart/zoomsettings) | Inject this module to use the zooming and panning feature. |
| [`DataEditingService`](https://ej2.syncfusion.com/angular/documentation/api/chart/dragsettings) | Inject this module to use the data editing feature. |
| [`CrosshairService`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshair) | Inject this module to use the crosshair feature. |
| [`SelectionService`](https://ej2.syncfusion.com/angular/documentation/api/chart/selection) | Inject this module to use the selection feature. |
| [`HighlightService`](https://ej2.syncfusion.com/angular/documentation/api/chart/highlight) | Inject this module to use the highlight feature. |
| [`ExportService`](https://ej2.syncfusion.com/angular/documentation/api/chart/export) | Inject this module to use the export feature. |
| [`MultiLevelLabelService`](https://ej2.syncfusion.com/angular/documentation/api/chart/multiLevelLabels) | Inject this module to use the multi level label feature. |

## Troubleshooting

If a feature does not render or appears to be missing, verify the following:

- The corresponding feature service is registered in the `providers` array of your `NgModule` or standalone component.
- The package `@syncfusion/ej2-angular-charts` is installed and up to date.
- The service is imported from `@syncfusion/ej2-angular-charts` (not from a different package, such as `@syncfusion/ej2-charts`).

N> Looking for the full Angular Charts component overview, features, pricing, and documentation? Visit the [Angular Charts](https://www.syncfusion.com/angular-components/angular-charts) page.
