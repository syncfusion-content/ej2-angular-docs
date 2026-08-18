---
layout: post
title: How to convert complex JSON to flat JSON for Pivot Table | Syncfusion
description: Step-by-step example showing how to convert complex JSON to flat JSON in the Angular Pivot Table, with code snippets and property references.
platform: ej2-angular
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->
# How to convert complex JSON to flat JSON for Pivot Table

## Overview

The Angular Pivot Table component requires data in flat JSON format for proper binding. This guide explains how to convert complex, nested JSON structures to flat JSON format and bind it to the pivot table.

## Understanding complex vs flat JSON

Complex JSON contains nested objects and arrays, making it difficult to directly bind to the pivot table. For example:

```json
{
  "CustomerID": "VINET",
  "Freight": 32.38,
  "OrderDetails": [
    {
      "OrderID": 10248,
      "OrderDate": "1996-07-04T10:10:00.000Z"
    }
  ],
  "ShipDetails": [
    {
      "ShipName": "Vins et alcools Chevalier",
      "ShipAddress": "59 rue de l'Abbaye",
      "ShipCity": "Reims",
      "ShipRegion": null,
      "ShipCountry": "France",
      "ShippedDate": "1996-07-16T12:20:00.000Z"
    }
  ]
}
```

Flat JSON has a simple key-value structure without nesting, which is suitable for pivot table binding. The `complexToFlatJson` helper iterates the nested arrays (such as `OrderDetails` and `ShipDetails`) and flattens each combination into a single record, then the converted data is assigned to the Pivot Table's [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings#datasource).

```json
{
  "CustomerID": "VINET",
  "Freight": 32.38,
  "OrderID": 10248,
  "OrderDate": "1996-07-04T10:10:00.000Z",
  "ShipName": "Vins et alcools Chevalier",
  "ShipAddress": "59 rue de l'Abbaye",
  "ShipCity": "Reims",
  "ShipRegion": null,
  "ShipCountry": "France",
  "ShippedDate": "1996-07-16T12:20:00.000Z"
}
```

## Implementation

You can convert complex JSON to flat JSON programmatically and bind it to the pivot table using the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings#datasource) property in the [`load`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#load) event.

In the following example, the **complexToFlatJson()** method is used to convert complex JSON to flat JSON and bind it to the pivot table using the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings#datasource) property. The field names in the [`rows`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings#rows) and [`columns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings#columns) are then updated under [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#datasourcesettings) inside the [`load`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#load) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs316/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs316/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs316" %}