---
layout: post
title: ToolTip in Angular Sankey component | Syncfusion
description: Learn here all about ToolTip in Syncfusion Angular Sankey component of Syncfusion Essential JS 2 and more.
control: ToolTip
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# ToolTip in Angular Sankey component

The Sankey Chart provides tooltips that surface contextual details for hovered elements without cluttering the diagram. Tooltips display additional information when users hover over nodes or links in the Sankey Chart. You can enable and customize tooltips using the tooltip property and by injecting the SankeyTooltip module.

This guide outlines how to enable and customize tooltips in the React Sankey Chart.

## Tooltip Settings Properties

The following table lists the main tooltip configuration properties:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| enable | boolean | true | Enables or disables the tooltip display. |
| fill | string | null | Background fill color of the tooltip. |
| opacity | number | 0.75 | Opacity of the tooltip container (0 to 1). |
| textStyle | object | null | Text styling for the tooltip content. |
| nodeFormat | string | '$name : $value' | Format string for node tooltips. |
| linkFormat | string | '$start.name $start.value → $target.name $target.value' | Format string for link tooltips. |
| enableAnimation | boolean | true | Toggles tooltip animation. |
| duration | number | 300 | Animation duration in milliseconds. |
| fadeOutDuration | number | 1000 | Fade-out duration in milliseconds. |
| fadeOutMode | string | 'Move' | Fade-out animation mode ('Move', 'Fade', 'Delay'). |

##  Basic Tooltip Configuration

Enable tooltips with default formatting.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/tooltip/basic-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/tooltip/basic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/tooltip/basic-cs1" %}

##  Customizing Tooltip Appearance

Adjust tooltip appearance and behavior using tooltip configuration properties:

- **Enable**: Shows or hides tooltips.
- **Fill**: Sets background color.
- **Opacity**: Controls transparency (0 to 1). The default value is 0.75.
- **TextStyle**: Configures font size, family, weight, and color for the tooltip text.
- **EnableAnimation**: Toggles animation. Default: true.
- **Duration**: Animation duration in milliseconds. The default value is 300.
- **FadeOutDuration**: Fade-out duration in milliseconds. The default value is 1000.

Example customization:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/tooltip/customization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/tooltip/customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/tooltip/customization-cs1" %}

## Format Strings

Format strings provide a simple way to customize tooltip content without custom templates.

### Node Tooltip Format

Format string placeholders for node tooltips:

- `$name` – Node label  
- `$value` – Node value (sum of incoming links)

### Link Tooltip Format

Format string placeholders for link tooltips:

- `$start.name` – Source node label  
- `$start.value` – Source node value  
- `$target.name` – Target node label  
- `$target.value` – Target node value  
- `$value` – Link value  

**Example with custom format strings:**

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/tooltip/format-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/tooltip/format-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/tooltip/format-cs1" %}

## Inline tooltip formatting

The tooltip content can be formatted directly within the `nodeFormat` and `linkFormat` properties by adding DateTime or number format specifiers to supported tooltip tokens. This allows you to control how node and link values are displayed without using additional events.

A format specifier is applied by adding a colon (`:`) followed by the required format. Sankey tooltip supports both `$` placeholders and `${}` placeholders for displaying tooltip values. When a value needs to be formatted, use the `${}` placeholder syntax with a colon (`:`) followed by the required format specifier.

For example:

```js
public tooltip = {
    enable: true,
    nodeFormat: '$name : ${value:n2}',
    linkFormat: '$start.name (${start.out:n2}) → ${target.name} (${target.in:n2}) : ${value:n2}'
};
```

In the above example, `$name` and `$start.name` display text values directly, while `${value:n2}`, `${start.out:n2}`, and `${target.in:n2}` display numeric values with two decimal places.

Sankey tooltip values can be displayed in either of the following ways:

- `$start.name` or `${start.name}` – Displays the source node name.
- `$target.name` or `${target.name}` – Displays the target node name.
- `$value` or `${value}` – Displays the node or link value.

To apply formatting, use the `${}` syntax with the required format specifier. For example, `${value:n2}` displays the value with two decimal places.

Inline formatting can be applied to the following tooltip placeholders:

- `$name` or `${name}` – Specifies the name or label of the hovered node.
- `$value`, `${value}`, or `${value:n2}` – Specifies the value of the hovered node or link.
- `$start.name` or `${start.name}` – Specifies the name of the source node in a link tooltip.
- `$start.value`, `${start.value}`, or `${start.value:n2}` – Specifies the value of the source node in a link tooltip.
- `$start.out`, `${start.out}`, or `${start.out:n2}` – Specifies the outgoing value from the source node in a link tooltip.
- `$target.name` or `${target.name}` – Specifies the name of the target node in a link tooltip.
- `$target.value`, `${target.value}`, or `${target.value:n2}` – Specifies the value of the target node in a link tooltip.
- `$target.in`, `${target.in}`, or `${target.in:n2}` – Specifies the incoming value to the target node in a link tooltip.

**Important:** Sankey tooltip placeholders can be used in both `$placeholder` and `${placeholder}` formats, such as `$start.name` or `${start.name}`. However, when applying number formatting, the `${placeholder:format}` syntax must be used, such as `${value:n2}`, `${start.out:n2}`, and `${target.in:n2}`. Formatting is applied only when the resolved value supports the specified format. String tokens, such as `${name}`, `${start.name}`, and `${target.name}`, are displayed as plain text and do not support number formatting.

The following number formats are supported:

- `n2` – number with two decimal places
- `n0` – number without decimals
- `c2` – currency format
- `p1` – percentage format
- `e1` – exponential notation

If the specified format does not match the resolved value type, the original value is displayed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/tooltip/inline-tooltip-format/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/tooltip/inline-tooltip-format/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/tooltip/inline-tooltip-format" %}

## Advanced Tooltip Configuration

### Tooltip Rendering Event

Use `tooltipRendering` to programmatically modify tooltip content before display.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/tooltip/rendering-event-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/tooltip/rendering-event-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/tooltip/rendering-event-cs1" %}

## Disabling Tooltips

To disable tooltips:

```typescript
const tooltip = { enable: false };
```
## Key Considerations

- **Keep Text Concise**: Keep tooltip text concise and readable.
- **Ensure Contrast**: Ensure sufficient contrast for tooltip text and background.
- **Use Format Strings**: Prefer `nodeFormat` and `linkFormat` for simple content customization without requiring custom rendering logic.
- **Animation Tuning**: Tune animation durations to balance responsiveness and polish.
- **Performance**: Use format strings instead of complex rendering logic for better performance.
- **Relevant Information**: Show only relevant and helpful information.
- **Consistent Styling**: Maintain consistent tooltip styling across your application.