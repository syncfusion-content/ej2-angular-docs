---
layout: post
title: Performance metrics in Angular Pivot Table | Syncfusion
description: Performance benchmarks for the Syncfusion Angular Pivot Table: initial rendering, sorting, filtering, and drill operations on a 1M-record dataset.
platform: ej2-angular
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

# Performance metrics in Angular Pivot Table

The [Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Pivot Table](https://www.syncfusion.com/angular-components/angular-pivot-table) is a high-performance control that summarizes and analyzes large volumes of business data with ease. When working with large data sources, enabling [virtual scrolling](./virtual-scrolling) or [paging](./paging) is required to keep the Pivot Table responsive — only the rows and columns in the current view are rendered, and the rest of the aggregated data loads on demand. This performance benchmark uses the **virtual scrolling (virtualization)** feature, and highlights the speed and efficiency of key operations — initial rendering, sorting, filtering, and drill operations — measured on a generated dataset of one million records, demonstrating how the Pivot Table handles large-scale, real-world datasets.

## Environment details

The following system configurations were used for benchmarking:

* **Operating System:** Microsoft Windows 11 Enterprise (64-bit, Build 26200)
* **Processor:** 11th Gen Intel Core (Tiger Lake) ~2.40 GHz
* **RAM:** 20GB
* **Browser:** Google Chrome 137 (64-bit)
* **Angular Version:** Angular 15
* **Syncfusion<sup>&reg;</sup> Version:** @syncfusion/ej2-angular-pivotview 35.1.37 (2026 Vol 3)
* **Dataset:** 1 million generated university records

## Initial rendering

The table below illustrates the time taken to initially render the Pivot Table with a relational (JSON) data source of one million records.

| Records | Time (sec) |
|---|---|
| 1 million | 3.69 |

## Sorting performance

The table below illustrates the time taken to apply [sorting](./sorting) on a column field and a row field of the Pivot Table after initial rendering.

| Operation | Time (sec) |
|---|---|
| Sort a column field | 0.213 |
| Sort a row field | 0.275 |

## Filtering performance

The table below illustrates the time taken to apply [filtering](./filtering) on a column field and a row field of the Pivot Table after initial rendering, and to clear the applied filters.

| Operation | Time (sec) |
|---|---|
| Filter a column field | 1 |
| Clear the column filter | 0.207 |
| Filter a row field | 0.584 |
| Clear the row filter | 2.922 |

## Drill performance

The table below illustrates the time taken to [drill down](./drill-down) into a member's child items and drill back up, on both column and row headers of the Pivot Table after initial rendering.

| Operation | Time (sec) |
|---|---|
| Drill down a column header | 5.307 |
| Drill up a column header | 0.254 |
| Drill down a row header | 0.281 |
| Drill up a row header | 0.187 |

A complete working sample used for these performance evaluations is available for download on [GitHub](https://github.com/SyncfusionExamples/grid-sdk-samples/tree/master/pivot-table/angular-samples/performance-benchmark).

N> Benchmarks were measured on a freshly configured system. Performance results such as speed and memory usage may differ when additional processes are running on the machine.
