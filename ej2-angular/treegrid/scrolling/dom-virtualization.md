---
layout: post
title: Angular Tree Grid DOM Virtualization | Syncfusion
description: Learn how DOM virtualization in Tree Grid improves large dataset performance through viewport rendering, and efficient scrolling.
platform: ej2-angular
control: DOM Virtualization
documentation: ug
domainurl: ##DomainURL##
---

# DOM Virtualization in Angular Tree Grid

DOM virtualization is a rendering technique that improves performance by displaying only the visible portion of data in the viewport, plus a configurable buffer zone. The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Tree Grid implements DOM virtualization to handle datasets ranging from thousands to millions of rows while maintaining smooth treegrid interactions.

Rendering every row and column in the DOM creates performance and memory challenges. Consider a dataset with 100,000 rows and 50 columns: without virtualization, the treegrid would create 5 million DOM elements. Modern browsers impose limits on DOM div heights (approximately 17.5-33.5 million pixels depending on the browser), constraining the maximum number of rows displayable at once. DOM virtualization addresses these constraints by rendering only cells within the current viewport, plus configurable buffer rows. Memory and processing requirements remain constant regardless of dataset size since only viewport and buffer cells render at any given time.

To enable DOM virtualization in the Angular Tree Grid, you need to import the **DomVirtualization** module. This module is responsible for managing the DOM pooling behavior and optimizing the rendering of data to enhance performance.

DOM virtualization can be enabled by setting the [enableDomVirtualization](../../api/treegrid#enabledomvirtualization) property to `true`.

## Height configuration requirement

You must define a fixed height using the [height](../../api/treegrid#height) property in the Tree Grid configuration. The height property is mandatory for DOM virtualization because:

- Virtualization calculations depend on a defined viewport height to determine how many rows are visible

## DOM virtualization settings

The `domVirtualizationSettings` property allows you to configure various aspects of Dom virtualization behavior. All settings are optional with sensible defaults.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **virtualDomType** | string | 'Row' | Specifies the virtualization dimension. Currently supports 'Row' only |
| **rowBuffer** | number | 5 | Number of extra rows to render above and below the viewport |
| **scrollThrottle** | number | 0 | Scroll event debounce in milliseconds |
| **maxPoolSize** | number | 500 | Maximum number of DOM rows to render at once |
| **autoRowHeight** | boolean | false | Enable automatic row height measurement for variable-height rows with column templates and text wrap features |

### Row virtualization

DOM row virtualization renders only rows visible in the viewport, plus configurable buffer rows above and below, while all columns remain in the DOM at all times. This approach improves vertical scrolling while keeping all column headers visible and accessible.

Row virtualization is ideal for datasets with many rows (10,000+) but manageable column counts (fewer than 30). It simplifies horizontal scrolling since no columns are hidden, and ensures all columns remain accessible.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/dom-virtualization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/dom-virtualization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/dom-virtualization-cs1" %}

## Viewport buffer configuration

Buffer configuration defines how many extra rows the Tree Grid renders beyond the visible viewport. The [rowBuffer](../../api/treegrid/domVirtualizationSettings#rowbuffer) property controls this behavior. The default buffer value is `rowBuffer: 5`, which balances scroll smoothness against DOM size.

The following example demonstrates how to configure the buffer size with an interactive slider control for adjusting buffer values from 1 to 20:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/dom-virtualization-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/dom-virtualization-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/dom-virtualization-cs2" %}

> Buffer Tuning: Larger buffers (5-10) reduce visible gaps during fast scrolling but increase DOM nodes and memory. Smaller buffers (2-3) minimize DOM nodes but may show gaps during very fast scrolling. Start with default values and adjust based on scroll speed and device constraints.

## Row height configuration impact on virtualization

Row height configuration affects how virtualization performs. Different row height approaches have different implications for virtualization and memory usage.

### Static row height

The [rowHeight](../../api/treegrid#rowheight) property allows you to set a fixed height for all rows in the Tree Grid. This performs virtualization calculations instantly without measurement overhead, ideal for large datasets since all rows have equal height.

### Dynamic row height with lazy height calculation

DOM virtualization also supports variable row heights through automatic height measurement and custom height callbacks. The Tree Grid measures row heights only for visible and buffer rows, not upfront for all rows, providing optimal performance with large datasets containing templates or custom height calculations.

#### Automatic row height measurement

Enable [autoRowHeight](../../api/treegrid/domVirtualizationSettings#autorowheight) to have the Tree Grid automatically measure each visible row's height after rendering. This is useful when using column templates or text wrap features that result in varying row heights.

**Scenarios with lazy height calculation:**

- Auto height enabled (`autoRowHeight: true`): The treegrid renders content dynamically and measures heights as rows enter the viewport.
- Dynamic row height callbacks (`setRowHeight` callback): The treegrid calls the callback function to calculate heights incrementally for visible rows during scrolling.

**Lazy height behavior during scrolling:**

- Dynamic scroll range: As new rows are measured, the vertical scroll range adjusts. The scroll thumb may lag or jump if row heights vary significantly.
- Row position shifts: When scrolling up and revealing previously unmeasured rows, their calculated heights may cause rows below to shift down.
- Variable scroll speed: Scrolling speed appears variable if row heights differ substantially due to content variation or callback-determined heights.

These behaviors are inherent to lazy height calculation and occur because heights are measured incrementally as rows enter the DOM, not calculated upfront. This trade-off enables efficient handling of large datasets with complex templates or custom height logic.

#### Custom row height callback

Use the [setRowHeight](../../api/treegrid#setrowheight) callback to programmatically define row heights based on row data. This approach provides control over row sizing logic without DOM measurement overhead.

## Limit maximum rendered rows

The [maxPoolSize](../../api/treegrid/domVirtualizationSettings#maxpoolsize) property sets a hard cap on the maximum number of DOM rows rendered at any time, preventing performance issues from excessive DOM nodes. The default value is `500`.

When `maxPoolSize: 500` (default), the Tree Grid automatically limits DOM rendering to 500 rows maximum. If `rowBuffer` is set, calculated buffer rows are capped at 500.

When you set a custom `maxPoolSize` value, more rows render to DOM. Use larger values for tall viewports on high-performance devices:

Configuration options:

- Keep default `maxPoolSize: 500` for optimal performance. Avoid values > 1000 as they increase memory usage.

## Scroll event throttling

The [scrollThrottle](../../api/treegrid/domVirtualizationSettings#scrollthrottle) property controls the debounce delay for scroll events in milliseconds, reducing re-render frequency during fast scrolling. The default value is `0` (synchronous, no throttle).

When `scrollThrottle: 0` (default), DOM virtualization uses synchronous scroll handling for immediate responsiveness, ideal for local data on modern devices.

**Comparison:** Virtual scroll uses automatic throttle (200ms Chrome, 100ms others) for data fetching. DOM virtualization defaults to 0 for pre-loaded datasets.

When you set a custom `scrollThrottle` value, it reduces CPU usage during rapid scrolling:

Configuration options:

- Keep default `scrollThrottle: 0` for local data with DOM virtualization. For virtual scroll mode (`enableVirtualization: true`) with slower networks, set 300ms to handle data fetching delays.

## Virtual scroll mode

Virtual scroll mode seamlessly enables server-side data loading for handling massive datasets by calculating row positions mathematically and loading only visible data from the server. Set [enableVirtualization](../../api/treegrid#enablevirtualization) to `true` when working with datasets exceeding browser DOM height limits or implementing server-side pagination.

### Configuration

Virtual scroll mode calculates all row positions mathematically without rendering rows initially. Set [enableVirtualization](../../api/treegrid#enablevirtualization) to `true` to enable server-side data loading for massive datasets.

#### Request size configuration

Request size configuration controls the batch size of requests (rows fetched per scroll request) using [pageSettings.pageSize](../../api/treegrid/pageSettings#pagesize).

Configuration guidance:

- Faster networks: Increase to 100+ rows per request for better performance with low-latency connections.
- Slower networks: Decrease to 25-50 rows per request to reduce server load and timeouts.

> Request batching with virtual scroll mode determines row fetch counts per request. The `pageSettings.pageSize` property controls the batch size.

### Performance best practices

This section describes recommended patterns for achieving robust server-side virtualization performance with virtual scroll mode.

- **Server request optimization**: Page size adjustment balances `pageSettings.pageSize` against network latency. Increase to 100+ for faster networks or larger datasets. Decrease to 25-50 for slower connections to reduce server load per request. Monitor network waterfall to identify bottlenecks.

- **Buffer tuning for server-side virtualization**: Buffer size tuning adjusts preload capacity from 8-10 for faster networks with low latency (preload more rows ahead) to 2-3 for slow networks or server-side constraints. Balance buffer size against network round-trip time. Test with actual network conditions before production deployment.

## Detail template support

DOM virtualization supports detail templates with proper height configuration. You must specify the [detailTemplateHeight](../../api/treegrid#detailtemplateheight) property in pixels to ensure correct virtual height calculations.

The `detailTemplateHeight` property is required when using detail templates with DOM virtualization because the treegrid needs to know the height of detail rows to calculate scroll positions and determine which rows to render in the viewport.

## Browser support and massive row count handling

Browser virtualization capabilities vary across modern browsers, each with specific DOM height limitations. These limitations determine the maximum number of rows the treegrid can virtualize within browser constraints.

### Browser DOM height limits

Each browser imposes a maximum height for DOM elements:

| Browser | Max Div Height | Max Rows @ 100px Height |
|---------|----------------|-------------------------|
| Chrome 120+ | ~32,000,000px | ~320,000 |
| Firefox 121+ | ~32,000,000px | ~320,000 |
| Safari 17+ | ~16,000,000px | ~160,000 |
| Edge 120+ | ~32,000,000px | ~320,000 |

When datasets exceed these browser limits, virtualization alone is insufficient. The treegrid applies row offset calculations to map logical row positions to physical screen positions, enabling display of 500,000+ rows while remaining within browser constraints.

### Configuration for massive row count datasets (100,000+)

Massive row count handling is a core DOM virtualization capability. The treegrid uses row offset calculations to map logical row positions to physical screen positions, enabling support for 100,000+ rows while remaining within browser DOM height constraints.

Configuration approach: Enable DOM row virtualization with minimal buffer size using the [rowBuffer](../../api/treegrid/domVirtualizationSettings#rowbuffer) property to reduce DOM node count while maintaining smooth scrolling performance.

### Constraints with massive datasets

Grids handling very large row counts have specific characteristics:

- **Scroll speed**: Apparent scroll speed increases due to row offset calculations. For example, 1,000,000 rows compress into available browser height, making scroll motion faster than standard visualization.
- **Scroll thumb position**: Scroll thumb represents logical row position, not physical screen position.
- **Row rendering**: Only viewport and buffer rows render to the DOM, memory usage remains constant regardless of dataset size.
- **Pagination alternative**: For datasets significantly exceeding browser limits, combine virtualization with pagination or implement progressive data loading from the server.

## Performance best practices

Performance optimization with DOM virtualization requires specific recommended patterns and approaches.

- **Enable DOM row virtualization for large datasets**: DOM row virtualization for large datasets (1,000+ rows) maintains responsive performance and prevents excessive DOM creation.

- **Adjust buffer size based on dataset characteristics**: Buffer size adjustment based on dataset characteristics: Larger buffers (8-10) reduce visible gaps during fast scrolling with local data. Smaller buffers (2-3) minimize DOM nodes for memory-constrained devices.

- **Use fixed row height for large datasets**: Fixed row height (`rowHeight` property) for very large datasets avoids measurement overhead. This is the recommended approach for optimal performance with DOM virtualization.

- **Improve column templates**: Avoid `autoRowHeight` with 100,000+ rows when possible. Use simple text or lightweight inline elements in column templates without complex components to reduce render time.

## Troubleshooting

This section provides solutions to common issues encountered when using DOM virtualization.

### Blank rows or gaps appear while scrolling

**Symptoms**: White space or missing rows visible briefly during scrolling.

**Cause**: Buffer size configured too small for current scroll pattern.

**Solution**: Increase [rowBuffer](../../api/treegrid/domVirtualizationSettings#rowbuffer) property to 8-10 rows.

### Tree Grid freezes or becomes unresponsive

**Symptoms**: Tree Grid becomes unresponsive during scrolling or data interaction.

**Cause**: Too many DOM nodes being rendered due to buffer being too large.

**Solution**: For datasets exceeding 100,000 rows, reduce [rowBuffer](../../api/treegrid/domVirtualizationSettings#rowbuffer) property to 2-3.

### Scrollbar position appears incorrect

**Symptoms**: Scrollbar thumb position does not match expected row position or scrollbar jumps.

**Cause**: Row heights are inconsistent or dynamic height calculations conflict with virtualization.

**Solution**: Use consistent row heights with fixed [rowHeight](../../api/treegrid#rowheight) property or implement [setRowHeight](../../api/treegrid#setrowheight) callback that returns consistent values based on row data.

### Memory usage increases during extended scrolling

**Symptoms**: Browser memory increases over time during prolonged treegrid usage.

**Cause**: Buffer size too large.

**Solution**: Reduce [rowBuffer](../../api/treegrid/domVirtualizationSettings#rowbuffer) property to 2-3 for very large datasets.

### Data misalignment after sorting or filtering

**Symptoms**: After sort or filter operation, rows appear blank, misaligned, or in wrong position.

**Cause**: Virtualization state not synchronized with data changes.

**Solution**: Force treegrid re-render by calling the [refresh](../../api/treegrid#refresh) method when data changes.

## See Also

* [Virtual Scrolling](../scrolling/virtual-scrolling)
* [Infinite Scrolling](../scrolling/infinite-scrolling)
* [Performance Best Practices](../performance)
