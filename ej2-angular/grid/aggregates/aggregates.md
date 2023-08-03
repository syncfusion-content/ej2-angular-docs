---
layout: post
title: Aggregates in Angular Grid component | Syncfusion
description: Learn here all about Aggregates in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Aggregates 
documentation: ug
domainurl: ##DomainURL##
---

# Aggregates in Angular Grid component

Aggregate values are displayed in the footer, group footer and group caption of Grid. It can be configured through **e-aggregates** directive. The [`field`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#field) and [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#type) are the minimum properties required to represent an aggregate column.

To use aggregate feature, you need to inject the **AggregateService** module into the **@NgModule.providers** section.

By default, the aggregate value can be displayed in footer, group and caption cells, to show the aggregate value in any of these cells, use the [`footerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn/#footertemplate), [`groupFooterTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn/#groupfootertemplate) and [`groupCaptionTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn/#groupcaptiontemplate) properties.

## Built-in aggregate types

Aggregate type must be specified in [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#type) property to configure an aggregate column.

The built-in aggregates are,
* Sum
* Average
* Min
* Max
* Count
* TrueCount
* FalseCount

> * Multiple aggregates can be used for an aggregate column by setting the [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#type) property with an array of aggregate type.
> * Multiple types for a column is supported only when one of the aggregate templates is used.

## See Also

* [Tooltip for aggregate footer in Angular Grid](https://www.syncfusion.com/forums/154190/tooltip-for-aggregate-footer-in-angular-grid)
* [How to export aggregate footer and apply outer border on excel data in Angular Grid](https://www.syncfusion.com/forums/151023/how-to-export-aggregate-footer-and-apply-outer-border-on-excel-data-in-angular-grid)