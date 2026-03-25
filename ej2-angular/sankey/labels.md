---
layout: post
title: Labels in Angular Sankey component \ Syncfusion
description: Learn here all about Labels in Syncfusion Angular Sankey component of Syncfusion Essential JS 2 and more.
control: Labels
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Labels in Angular Sankey component

Labels display descriptive text associated with nodes in the Sankey diagram, improving readability and interpretation. Additionally, labels make the diagram more understandable and interpretable, and the component provides comprehensive label customization options including visibility control, font styling, individual label configuration, and dynamic rendering events.

This guide covers label appearance configuration, visibility control, font styling, and advanced label customization.

## Label Settings Properties

The `labelSettings` property provides options to control label appearance, text styling, and visibility. These properties apply globally to all node labels.

### Label Configuration Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| visible | boolean | true | Shows or hides node labels. |
| fontSize | string \\ number | '12px' | Font size for labels. |
| color | string | '' | Text color for labels. |
| fontFamily | string | null | Font family for label text. |
| fontWeight | string | '400' | Font weight (e.g., '700' for bold). |
| fontStyle | string | 'normal' | Font style (e.g., 'italic'). |
| padding | number | 10 | Padding around label text. |

Configure global label styling for all nodes by setting properties like font size, color, font family, and font weight

Here is an example of customizing label appearance:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/labels/customization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/labels/customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/samples/sankey/labels/customization-cs1" %}

## Hiding Labels

Set `labelSettings.visible` to `false` to hide labels when space is limited. Additionally: hiding labels can be useful for creating cleaner visualizations when labels take up too much space.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/labels/hidden-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/labels/hidden-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/samples/sankey/labels/hidden-cs1" %}

## Font Styling

Apply custom font styling to all labels using properties such as:

- **`fontSize`**: Adjust text size (e.g., '12px', '14px')
- **`fontFamily`**: Specify font family (e.g., 'Arial', 'Times New Roman')
- **`fontWeight`**: Control text thickness ('400' = normal, '700' = bold)
- **`fontStyle`**: Apply text styling ('normal' or 'italic')
- **`color`**: Set text color (hex or color names)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/labels/fontstyle-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/labels/fontstyle-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/samples/sankey/labels/fontstyle-cs1" %}

## Individual Node Labels

Customize the appearance of specific node labels by configuring the `label` property on each node object. This allows you to override global label settings for specific nodes, enabling data-driven label customization:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/labels/individual-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/labels/individual-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/samples/sankey/labels/individual-cs1" %}

## Advanced Label Configuration

### Dynamic Label Customization

Use the `labelRendering` event to customize each label dynamically before rendering. Additionally: this event triggers for each label before drawing, allowing conditional formatting, modifying text, or adjusting label styling based on data values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/labels/rendering-event-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/labels/rendering-event-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/samples/sankey/labels/rendering-event-cs1" %}