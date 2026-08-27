---
layout: post
title: Overview of Angular Pivot Table | Syncfusion
description: Explore the Angular Pivot Table overview and feature matrix for data analysis, data sources, layouts, performance, exporting, accessibility, and AI integration.
control: Pivot Table
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Overview of Angular Pivot Table

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Pivot Table provides interactive tools for summarizing, organizing, exploring, and presenting multidimensional data. Use the following feature overview to identify the available capabilities, understand where they apply, and open the corresponding user guide topic for configuration details and limitations.

For supported Angular and browser versions, refer to the [system requirements](https://ej2.syncfusion.com/angular/documentation/system-requirement).

## Common use cases

* **Interactive business analysis** - Reorganize fields, filter members, drill into hierarchies, and compare aggregated values from different perspectives.
* **Operational and financial reporting** - Create summarized reports with calculated fields, conditional formatting, totals, and reusable report layouts.
* **Large dataset exploration** - Use virtual scrolling, paging, data compression, or server-side processing to analyze high-volume data.
* **Multidimensional analysis** - Connect to OLAP cubes and SSAS data sources to explore measures, dimensions, and hierarchies.
* **Visual reporting** - Present summarized data through Pivot Charts and export or print the resulting reports.

## Feature overview

The **Availability** column uses the following terms:

* **Built-in** - Works automatically when the relevant view or data structure is present, without a feature-specific property or module.
* **Configurable** - Requires feature-specific component properties, injected modules, server endpoints, or services.
* **Integration pattern** - Implemented by integrating the Pivot Table with another component or service; it is not a standalone Pivot Table feature.
* **Partial** - Qualifies standards conformance rather than the delivery method and indicates documented conformance gaps or limitations.

> Feature behavior can differ between relational and OLAP data sources. Review the linked topic before combining features because some options are mutually exclusive or have data-source-specific limitations. For example, virtual scrolling and paging cannot be enabled at the same time.

### Data sources

| Feature | Availability | Applies to | Learn more |
| --- | --- | --- | --- |
| Local JSON data | Configurable | Relational | [JSON data binding](./data-binding#json) |
| Local CSV data | Configurable | Relational | [CSV data binding](./data-binding#csv) |
| Remote JSON and CSV data | Configurable | Relational | [Data binding](./data-binding) |
| Remote services through data adaptors | Configurable | Relational | [Remote data binding](./data-binding#remote-data-binding) |
| OLAP cubes and SSAS through XMLA | Configurable | OLAP | [OLAP data binding](./olap) |
| Server-side pivot engine | Configurable | Relational; performs server-side aggregation, filtering, sorting, and grouping | [Server-side engine](./server-side-pivot-engine) |

### Data analysis

| Feature | Availability | Applies to | Learn more |
| --- | --- | --- | --- |
| Interactive report reconfiguration (slice and dice) | Configurable | Relational and OLAP | [Field List](./field-list) |
| Drill-down and drill-up operations | Built-in | Relational and OLAP | [Drill down and drill up](./drill-down) |
| Drill through to source records | Configurable | Relational; OLAP requires cube drill-through permission and appropriate SSAS roles | [Drill through](./drill-through) and [OLAP roles](./olap#roles) |
| Member sorting | Built-in | Relational and OLAP | [Sorting](./sorting) |
| Value sorting | Configurable | Relational and OLAP | [Value sorting](./sorting#value-sorting) |
| Member filtering | Configurable | Relational and OLAP | [Member filtering](./filtering#member-filtering) |
| Label filtering | Configurable | Relational and OLAP | [Label filtering](./filtering#label-filtering) |
| Value filtering | Configurable | Relational and OLAP | [Value filtering](./filtering#value-filtering) |
| Calculated fields | Configurable | Relational and OLAP; formulas differ by source type | [Calculated field](./calculated-field) |
| Conditional formatting | Configurable | Relational and OLAP | [Conditional formatting](./conditional-formatting) |
| Custom, date, and number grouping | Configurable | Relational only | [Grouping](./grouping) |
| Aggregation types | Configurable | Relational only; OLAP aggregation is defined by the cube | [Aggregation](./aggregation) |

### Field configuration and report layout

| Feature | Availability | Applies to | Learn more |
| --- | --- | --- | --- |
| Popup and stand-alone Field List | Configurable | Relational and OLAP | [Field List](./field-list) |
| Field search | Configurable | Relational and OLAP | [Search desired field](./field-list#search-desired-field) |
| Drag-and-drop field arrangement | Configurable | Relational and OLAP | [Grouping bar](./grouping-bar) |
| Member editor | Configurable | Relational and OLAP | [Filtering](./filtering) |
| Deferred layout update | Configurable | Relational and OLAP | [Defer update](./defer-update) |
| Compact layout | Built-in | Relational and OLAP | [Row and column](./row-and-column) |
| Classic (tabular) layout | Configurable | Relational only | [Classic layout](./classic-layout) |
| Show or hide subtotals and grand totals | Configurable | Relational and OLAP | [Show or hide totals](./summary-customization) |

### Performance

For large datasets, choose [virtual scrolling](./virtual-scrolling), [paging](./paging), [data compression](./data-compression), or the [server-side pivot engine](./server-side-pivot-engine) based on the data volume, data-source type, and processing requirements. Refer to [performance best practices](./performance-best-practices) for additional optimization guidance.

| Feature | Availability | Applies to | Learn more |
| --- | --- | --- | --- |
| Virtual scrolling | Configurable | Relational and OLAP | [Virtual scrolling](./virtual-scrolling) |
| Paging | Configurable | Relational and OLAP | [Paging](./paging) |
| Data compression | Configurable | Relational | [Data compression](./data-compression) |

### Editing

Editing changes the underlying raw records and is available only for relational data sources. The selected data adaptor or server endpoint must also support the corresponding create, read, update, and delete operations.

| Feature | Availability | Applies to | Learn more |
| --- | --- | --- | --- |
| Normal editing | Configurable | Relational only | [Editing](./editing#normal) |
| Dialog editing | Configurable | Relational only | [Dialog editing](./editing#dialog) |
| Batch editing | Configurable | Relational only; requires a compatible batch endpoint for remote data | [Batch editing](./editing#batch) |
| Command columns | Configurable | Relational only | [Command column](./editing#command-column) |
| Inline value editing | Configurable | Relational only | [Inline editing](./editing#inline-editing) |

### Visualization

| Feature | Availability | Applies to | Learn more |
| --- | --- | --- | --- |
| Integrated Pivot Chart | Configurable | Relational and OLAP | [Pivot Chart](./pivot-chart) |
| Pivot Table, Pivot Chart, or combined view | Configurable | Relational and OLAP | [Pivot Chart](./pivot-chart) |
| Multiple chart types | Configurable | Relational and OLAP | [Chart types](./pivot-chart#chart-types) |
| Chart drill interaction | Configurable | Relational and OLAP; requires the Pivot Chart module and a hierarchy with child levels | [Drill down and drill up](./pivot-chart#drill-down-and-up) |
| Interactive and customizable legend | Configurable | Relational and OLAP | [Legend customization](./pivot-chart#legend-customization) |

### Exporting and printing

| Feature | Availability | Applies to | Learn more |
| --- | --- | --- | --- |
| Excel export | Configurable | Relational and OLAP | [Excel export](./excel-export) |
| CSV export | Configurable | Relational and OLAP | [CSV export](./excel-export#export-data-to-a-csv-file) |
| PDF export | Configurable | Relational and OLAP | [PDF export](./pdf-export) |
| Export customization and conditional styles | Configurable | Relational and OLAP | [Excel export customization](./excel-export#apply-custom-styles-based-on-specific-conditions) and [PDF export customization](./pdf-export#apply-conditional-styles) |
| Combined Pivot Table and Pivot Chart PDF export | Configurable | Relational and OLAP | [Export table and chart](./pdf-export#export-table-and-chart-into-the-same-document) |
| Pivot Chart export | Configurable | Relational and OLAP | [Pivot Chart export](./pivot-chart#export) |
| Separate Pivot Table and Pivot Chart printing | Configurable | Relational and OLAP | [Print](./print) |

### User experience and formatting

| Feature | Availability | Applies to | Learn more |
| --- | --- | --- | --- |
| Toolbar | Configurable | Relational and OLAP | [Toolbar](./tool-bar) |
| Grouping bar | Configurable | Relational and OLAP | [Grouping bar](./grouping-bar) |
| Grouping context menu | Configurable | Relational only; available items depend on the selected field and enabled grouping settings | [Grouping](./grouping) |
| Touch interaction and mobile-device support | Built-in | Relational and OLAP | [Accessibility](./accessibility) and [touch support](https://www.syncfusion.com/angular-components/angular-pivot-table#touch-support) |
| Cell hyperlinks | Configurable | Relational and OLAP | [Hyperlinks](./hyper-link) |
| Cell tooltips | Built-in | Relational and OLAP | [Tooltips](./tool-tip) |
| Flexible width and height | Configurable | Relational and OLAP | [Width and height](./row-and-column#width-and-height) |
| Number, currency, percentage, and custom formatting | Configurable | Relational and OLAP | [Number formatting](./number-formatting) |
| Date and time formatting | Configurable | Relational; OLAP member captions and formats are supplied by the cube | [Customize date and time values](./how-to/customize-number-date-and-time-values#date-and-time-formatting) |
| Theme and style customization | Configurable | Relational and OLAP | [Style and appearance](./css-customization) |

### Report management and globalization

| Feature | Availability | Applies to | Learn more |
| --- | --- | --- | --- |
| Save and load report settings | Configurable | Relational and OLAP | [Save and load report](./save-and-load) |
| Browser state persistence | Configurable | Relational and OLAP | [State persistence](./state-persistence) |
| Localization | Configurable | Relational and OLAP | [Globalization and localization](./globalization-and-localization) |
| Culture-aware number and date formatting | Configurable | Relational and OLAP | [Globalization and localization](./globalization-and-localization) |
| Right-to-left rendering | Configurable | Relational and OLAP | [Right-to-left support](./globalization-and-localization#right-to-left-rtl) |

### Accessibility

| Feature | Availability | Applies to | Learn more |
| --- | --- | --- | --- |
| WAI-ARIA roles and attributes | Built-in | Component UI | [WAI-ARIA attributes](./accessibility#wai-aria-attributes) |
| Screen reader support | Built-in | Component UI | [Accessibility](./accessibility) |
| Keyboard accessibility | Built-in | Component UI; some shortcuts require the corresponding feature to be enabled | [Keyboard interaction](./accessibility#keyboard-interaction) |
| High Contrast theme support | Configurable | Component UI | [Themes](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio) |
| WCAG 2.2 and Section 508 alignment | Partial | Component UI | [Accessibility compliance](./accessibility) |

### AI-assisted report configuration

AI assistance is an application integration pattern rather than a built-in Pivot Table engine capability. The reference implementation combines Pivot Table with AI AssistView and a secured server-side large language model integration.

| Feature | Availability | Applies to |
| --- | --- | --- |
| Natural-language report configuration | Integration pattern | Operations allowed by the application's validated action contract |
| AI-assisted filtering, sorting, aggregation, layout, and chart changes | Integration pattern | Operations allowed by the application's validated action contract |

## Quick links

* [Getting started](./getting-started)
* [Live Pivot Table demos](https://ej2.syncfusion.com/angular/demos/#/tailwind3/pivot-table/overview)
* [Pivot Table API reference](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default)
* [Release notes](https://ej2.syncfusion.com/angular/documentation/release-notes)
