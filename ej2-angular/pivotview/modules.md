---
layout: post
title: Modules in Angular Pivot Table | Syncfusion
description: Learn about the Angular Pivot Table feature modules, their provider services, relationships, and how to enable common features.
platform: ej2-angular
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

# Modules in Angular Pivot Table

The Angular Pivot Table provides optional service modules for features beyond its core rendering behavior. To use a feature, import its service module from `@syncfusion/ej2-angular-pivotview` and register it in the `providers` array of the standalone component or the `NgModule` that declares the Pivot Table. Set the corresponding Pivot Table property to enable the feature, if required. Register only the service modules your application uses.

The following table lists all Pivot Table feature service modules exported by the package, their related configuration, and data source support.

| Feature | Service module | Related configuration | Data source support |
| --- | --- | --- | --- |
| [Grouping Bar](./grouping-bar) | `GroupingBarService` | [`showGroupingBar`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#showgroupingbar) | Relational and OLAP |
| [Field List](./field-list) | `FieldListService` | [`showFieldList`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#showfieldlist) | Relational and OLAP |
| [Calculated Field](./calculated-field) | `CalculatedFieldService` | [`allowCalculatedField`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#allowcalculatedfield) | Relational and OLAP; formula syntax differs |
| [Conditional Formatting](./conditional-formatting) | `ConditionalFormattingService` | [`allowConditionalFormatting`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#allowconditionalformatting) | Relational and OLAP |
| [Number Formatting](./number-formatting) | `NumberFormattingService` | [`allowNumberFormatting`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#allownumberformatting) | Relational and OLAP |
| [Grouping](./grouping) | `GroupingService` | [`allowGrouping`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#allowgrouping) | Relational |
| [Drill Through](./drill-through) | `DrillThroughService` | [`allowDrillThrough`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#allowdrillthrough) | Relational and OLAP; OLAP access depends on cube permissions |
| [Toolbar](./tool-bar) | `ToolbarService` | [`showToolbar`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#showtoolbar) and [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#toolbar) | Relational and OLAP |
| [Pivot Chart](./pivot-chart) | `PivotChartService` | [`displayOption`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/displayOptionModel), [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#chartsettings), and [`chartSeries`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotseriesmodel) | Relational and OLAP |
| [Virtual Scrolling](./virtual-scrolling) | `VirtualScrollService` | [`enableVirtualization`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#enablevirtualization) | Relational and OLAP |
| [Paging](./paging) | `PagerService` | [`enablePaging`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#enablepaging), [`pageSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pagesettings), and [`pagerSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pagersettings) | Relational and OLAP |
| [Excel and CSV Export](./excel-export) | `ExcelExportService` | [`allowExcelExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview#allowexcelexport) | Relational and OLAP |
| [PDF Export](./pdf-export) | `PDFExportService` | [`allowPdfExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview#allowpdfexport) | Relational and OLAP |

> Registering a service makes it available to the Pivot Table; it does not enable the feature by itself. Set the associated configuration property when required. Core capabilities such as aggregation, member filtering, sorting, drill down, and value sorting do not require a feature service.

## Module relationships and limitations

Some features require additional service modules, and others have specific data-source or usage limitations:

* To display the toolbar, register `ToolbarService`. If the toolbar includes commands for optional features, register those features' services too, such as `ExcelExportService`, `PDFExportService`, `ConditionalFormattingService`, `NumberFormattingService`, `CalculatedFieldService`, or `PivotChartService`.
* Register `FieldListService` to show the field list popup within the Pivot Table. The standalone field list is a separate `<ejs-pivotfieldlist>` component, not another Pivot Table feature service module. Register any optional feature services required by commands available in that field list.
* `PagerService` enables paging, and `VirtualScrollService` enables virtual scrolling. These are alternative approaches to displaying large reports; do not enable both at the same time.
* `GroupingService` supports grouping relational data only. For OLAP data, grouping and calculations are defined by the cube and its report settings.
* `DrillThroughService` enables access to the underlying records for a value. Secure those records in the application and data service as well; enabling drill through in the Pivot Table does not authorize access to the data.

## Complete service reference

The following import lists all optional Pivot Table feature services exported by `@syncfusion/ej2-angular-pivotview`. Register only the services needed by the Pivot Table in the standalone component's `providers` array or the declaring `NgModule`'s `providers` array. Import the Pivot Table component module separately in the standalone component's or `NgModule`'s `imports`.

```ts
import {
  CalculatedFieldService,
  ConditionalFormattingService,
  DrillThroughService,
  ExcelExportService,
  FieldListService,
  GroupingBarService,
  GroupingService,
  NumberFormattingService,
  PagerService,
  PDFExportService,
  PivotChartService,
  ToolbarService,
  VirtualScrollService
} from '@syncfusion/ej2-angular-pivotview';
```

## Enabling basic features

This example enables the grouping bar, the built-in field list, and the calculated field feature for a relational report. The standalone Angular component imports `PivotViewAllModule`, registers the three corresponding services in `providers`, and enables the features through Pivot Table properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/module-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/module-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/module-cs1" %}
