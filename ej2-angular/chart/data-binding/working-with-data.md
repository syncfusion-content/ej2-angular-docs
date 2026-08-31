---
layout: post
title: Working with Data in Angular Chart | Syncfusion
description: Learn here all about Working with data in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Working with Data
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Working with Data in Angular Chart

The Angular Chart component supports multiple data binding approaches to suit different application scenarios. Data can be bound from local JSON arrays, dynamically loaded on demand with lazy loading, or fetched from remote services using various adaptor patterns. This guide covers all available data binding methods, helping you choose the right approach for your use case based on data size, performance requirements, and backend architecture.

## Choosing a data binding approach

| Method                   | Best For                           | Advantages                                             | Considerations                         |
|--------------------------|-------------------------------------|---------------------------------------------------------|----------------------------------------|
| Local data               | Small to medium datasets            | Simple setup, no network latency, instant rendering     | All data must be in memory             |
| Common datasource        | Multiple series sharing data        | Reduces redundancy, single update point                 | Limited to data common across series   |
| Lazy loading             | Large datasets with scrolling       | Loads only visible data, better performance             | Requires server-side pagination        |
| Remote data (OData/WebAPI) | Backend-driven data               | Scalable, centralized data management, real-time updates | Network latency, requires service setup |
| Offline mode             | Data caching with client-side actions | Eliminates repeated requests, faster interactions       | Initial load time, memory constraints  |

## Local data

Bind simple JSON data to the chart using the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#datasource) property in the series configuration. Map the JSON fields to the [`xName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#yname) properties to specify which data fields represent the x and y axis values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs25/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs25/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs25" %}

## Common datasource

Bind the same JSON data to all series by setting the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart#datasource) property at the chart level instead of the series level. This approach is useful when multiple series share the same dataset and you want to update data from a single source. Each series independently maps its own [`xName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#yname) properties to the common data fields.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs26/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs26/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs26" %}

## Lazy loading

Lazy loading enables on-demand data retrieval, loading only the data required for the currently visible range. This approach is ideal for large datasets that would be expensive to load entirely into memory.

**Prerequisite:** Enable scroll on the axis (e.g., `enableScrollOn: true` on the primaryXAxis) so the [`scrollEnd`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#scrollend) event can fire. Lazy loading is supported on numeric, datetime, and category axes.

**How lazy loading works:**

1. The user scrolls the chart to view a different data range.
2. The [`scrollEnd`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#scrollend) event fires with current axis range information.
3. In the handler, retrieve the minimum and maximum values from the scrolled axis and request the corresponding data from your server.
4. Append the new data to the existing dataset.
5. The chart automatically re-renders with the updated data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs27/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs27/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs27" %}

## Remote data

Bind remote data from a web service by using the [`DataManager`](https://ej2.syncfusion.com/angular/documentation/api/data/dataManager) class. The DataManager simplifies communication with REST APIs, OData services, and custom web endpoints. It requires minimal configuration—typically just the service URL and an appropriate adaptor—then handles all request/response processing.

Assign the DataManager instance to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart/series#datasource) property in the series, and map the response fields to [`xName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#yname).

Use the optional [`query`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#query) property to filter, sort, or paginate data on the server. For example:

```typescript
import { DataManager, Query } from '@syncfusion/ej2-data';

const dataManager = new DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders',
  adaptor: new ODataV4Adaptor()
});

const query = new Query().take(50).page(2).select(['OrderID', 'Freight']);
```

**CORS note:** When the chart and the web service run on different origins, ensure the server enables CORS and returns the appropriate `Access-Control-Allow-Origin` headers.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs28/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs28/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs28" %}

## Binding data using ODataAdaptor

[`OData`](https://www.odata.org/documentation/odata-version-3-0/) is a standardized protocol for creating and consuming data. You can retrieve data from an OData v3 service using the [`DataManager`](https://ej2.syncfusion.com/angular/documentation/api/data/dataManager). Refer to the following code example for remote data binding using an OData service.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs35/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs35/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs35" %}

## Binding data using ODataV4Adaptor

ODataV4 is an improved and more standardized version of the OData protocol, with enhanced query capabilities and better JSON support. Use the ODataV4Adaptor to consume ODataV4 services. For more information on ODataV4 specifications, refer to the [`odata documentation`](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197).
**When to use ODataV4Adaptor:** If your backend service implements OData v4.0, prefer this adaptor over the older ODataAdaptor for better compliance and features.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs36/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs36/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs36" %}

## Web API adaptor

Use the WebApiAdaptor to consume custom REST APIs that follow a standard response format. This adaptor is ideal for backends that do not implement OData but provide REST endpoints returning JSON data.

**Expected response format:**

The Web API must return a JSON object with two properties:
- `Items`: Array of data objects for the chart
- `Count`: Total number of records (useful for pagination)

The `Items` array contains the actual data records, and `Count` indicates the total available records (supporting server-side pagination).

```
{
    Items: [{..}, {..}, {..}, ...],
    Count: 830
}
```

**Sample server endpoint (ASP.NET Core):**

```csharp
[HttpGet("api/orders")]
public object Get([FromQuery] DataManagerRequest dm)
{
    var data = _context.Orders
        .Skip(dm.Skip)
        .Take(dm.Take)
        .ToList();
    var count = _context.Orders.Count();
    return new { Items = data, Count = count };
}
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs37/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs37/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs37" %}

## Custom adaptor

Create a custom adaptor by extending one of the built-in adaptors (typically ODataAdaptor) to add custom logic for request/response handling. Common use cases include adding serial numbers, reformatting dates, or adding computed fields before the chart renders the data.

**Basic skeleton:**

```typescript
import { ODataAdaptor } from '@syncfusion/ej2-data';

export class CustomAdaptor extends ODataAdaptor {
  override processResponse(data: any, ds: any, query: any, xhr: any): any {
    // Transform the response here
    return data;
  }
}
```

**Commonly overridden methods:**

- `processResponse` – transform the response before binding.
- `processQuery` – modify the URL or query before the request is sent.
- `beforeSend` – add custom headers or handle errors before the request.
- `insert`, `update`, `remove` – customize CRUD operations.

For the full list and signatures, see the [DataManager adaptor documentation](https://ej2.syncfusion.com/angular/documentation/api/data/adaptor).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs38/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs38/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs38" %}

## Offline mode

When using remote data binding, all filtering, sorting, and pagination normally happen on the server. To improve responsiveness and reduce server load, enable offline mode: the chart loads all data once during initialization, then handles all interactions client-side. Set the [`offline`](https://ej2.syncfusion.com/angular/documentation/api/data/dataManager#offline) property of [`DataManager`](https://ej2.syncfusion.com/angular/documentation/api/data/dataManager) to `true` to activate this behavior.
**Use offline mode when:**
- Your dataset is relatively small (fits comfortably in browser memory)
- You want instant filtering and sorting without server round-trips
- Network latency is a significant usability concern
- You prefer to minimize server requests during user interactions
**Caution:** Offline mode loads the entire dataset at once, which may impact initial load time and memory usage for large datasets.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs39/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs39/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs39" %}

## Empty points

Data points with `null` or `undefined` values are treated as empty points. By default, empty points are not rendered as data — they create a gap in the series line, bar, or column. You can customize this behavior with the [`emptyPointSettings`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#emptypointsettings) property in the series configuration.

**Default behavior:** Empty points use the `Gap` mode, which leaves a blank space in the chart visualization.

**Available `emptyPointSettings.mode` values:**

| Mode     | Description                                                                 |
|----------|-----------------------------------------------------------------------------|
| `Gap`    | Leaves a blank space at the empty point (default).                          |
| `Zero`   | Treats the empty point as a zero value.                                     |
| `Average`| Replaces the empty point with the average of the surrounding data points.  |
| `Drop`   | Drops (skips) the empty point entirely.                                     |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs29/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs29/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs29" %}

**Customizing empty point**

Assign a specific color to empty points by setting the [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/emptyPointSettings#fill) property in the [`emptyPointSettings`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#emptypointsettings) object. This allows you to visually distinguish empty data points from regular data in your chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs30/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs30/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs30" %}

## Handling no data

When the chart has no data available to render, use the [`noDataTemplate`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#nodatatemplate) property to display a custom layout within the chart area. This template can include messages, images, icons, or interactive elements (such as a load button) to guide the user. The template maintains design consistency and improves user experience when data is unavailable. Once data becomes available, the chart automatically updates and replaces the template with the visualization.

**Template content:**

```html
<ng-template #noDataTemplate>
  <div class="no-data">
    <p>No data available. Click below to load data.</p>
    <button (click)="loadData()">Load Data</button>
  </div>
</ng-template>

<ejs-chart [noDataTemplate]="noDataTemplate">
  <e-series-collection>
    <e-series [dataSource]="chartData" xName="x" yName="y" type="Column"></e-series>
  </e-series-collection>
</ejs-chart>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs54/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs54/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs54" %}

## Troubleshooting

| Issue                                         | Likely cause                                                                              | Suggested fix                                                                                                  |
|-----------------------------------------------|-------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| Chart renders with no data when using `DataManager`. | CORS is not enabled on the server, or the URL/adaptor combination is wrong.        | Verify the endpoint in a browser/Postman, then add CORS headers and confirm the `adaptor` matches the response. |
| `scrollEnd` event never fires.                | Scroll/zoom is not enabled on the axis.                                                   | Set `enableScrollOn: true` on the relevant axis (or enable zoom selection).                                    |
| WebApiAdaptor returns no items.               | The response does not contain `Items`/`Count` properties.                                 | Ensure the response matches the expected JSON format shown in the **Web API adaptor** section.                  |
| `offline: true` causes slow initial render.   | The dataset is too large to fit comfortably in browser memory.                            | Keep offline mode for small datasets only; otherwise process filtering/sorting on the server.                  |
| Empty points appear as gaps unexpectedly.     | The `mode` is left at the default `Gap`.                                                  | Set `emptyPointSettings.mode` to `Zero`, `Average`, or `Drop` as needed.                                       |
