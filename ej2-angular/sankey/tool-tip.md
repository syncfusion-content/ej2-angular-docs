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

Tooltips display contextual information for hovered nodes and links. Configure tooltip behavior with the `tooltip` property and inject the `SankeyTooltip` provider when necessary. Additionally: Tooltips surface contextual details for hovered elements without cluttering the diagram and display additional information for nodes or links.

## Tooltip Settings Properties

The following table lists the main tooltip configuration properties:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| enable | boolean | true | Enables or disables the tooltip. |
| fill | string | null | Tooltip background color. |
| opacity | number | 0.75 | Tooltip container opacity (0 to 1). |
| textStyle | object | null | Text styling for tooltip content. |
| nodeFormat | string | '$name : $value' | Format for node tooltips. |
| linkFormat | string | '$start.name $start.value → $target.name $target.value' | Format for link tooltips. |
| enableAnimation | boolean | true | Enables or disables tooltip animation. |
| duration | number | 300 | Animation duration in milliseconds. |
| fadeOutDuration | number | 1000 | Fade-out duration of the tooltip in milliseconds. |
| fadeOutMode | string | 'Move' | Fade-out animation mode ('Move', 'Fade', 'Delay'). |

## Basic Tooltip

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

## Customization and Formatting

Use `nodeFormat` and `linkFormat` for simple text formatting. For richer content, use template-based tooltips. Additionally:

- **Enable** – Shows or hides tooltips.
- **Fill** – Background color.
- **Opacity** – Transparency (0 to 1).
- **TextStyle** – Font size, family, weight, and color.
- **EnableAnimation** – Toggles animation.
- **Duration** – Animation duration in milliseconds.
- **FadeOutDuration** – Duration before tooltip fades.
- **FadeOutMode** – Fade-out behavior style.

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

- `$name` – Node label  
- `$value` – Node value (sum of incoming links)

### Link Tooltip Format

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

## Tooltip Rendering Event

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