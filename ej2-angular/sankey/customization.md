---
layout: post
title: Customization in Angular Sankey component | Syncfusion
description: Learn here all about Customization in Syncfusion Angular Sankey component of Syncfusion Essential JS 2 and more.
control: Customization
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Angular Sankey component

The Sankey component provides extensive customization options to create visualizations that match your specific design requirements and data presentation needs. From styling and theming to advanced visual techniques, the component enables complete control over appearance and behavior.

This guide covers comprehensive customization techniques including styling, theming, color mapping, and visual customization strategies.

## Styling Overview

The Sankey Chart supports multiple levels of styling customization:

- **Global Styling**: Apply consistent styles to all elements
- **Element-Level Styling**: Customize specific nodes, links, or labels
- **Data-Driven Styling**: Apply styles based on data values or conditions
- **Theme-Based Styling**: Use predefined themes or create custom themes

## Node and Link Styling

Use the `nodeStyle` and `linkStyle` properties to configure global appearance for nodes and links. Individual nodes/links can override these values or be customized during rendering events.

### Global Node Styling

Apply consistent styling to all nodes using `nodeStyle`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/customization/node-styling-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/customization/node-styling-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/customization/node-styling-cs1" %}

### Global Link Styling

Configure link appearance using `linkStyle` to control opacity, curvature and color blending.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/customization/link-styling-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/customization/link-styling-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/customization/link-styling-cs1" %}

## Custom Node Appearance

You can set properties on each node object to override global styles or use rendering events such as `nodeRendering`, `linkRendering`, and `labelRendering` to apply dynamic, data-driven styles.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/customization/individual-nodes-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/customization/individual-nodes-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/customization/individual-nodes-cs1" %}

### Custom Node Labels

Override label settings per-node using the `label` object on node definitions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/customization/individual-labels-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/customization/individual-labels-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/customization/individual-labels-cs1" %}

## Color Customization

### Predefined Color Palettes

Assign colors to nodes directly in your data model:

```typescript
const nodes = [
	{ id: 'Source1', label: { text: 'Source 1' }, color: '#3DA6D4' },
	{ id: 'Source2', label: { text: 'Source 2' }, color: '#FFA500' },
	{ id: 'Target', label: { text: 'Target' }, color: '#28A745' }
];
```

### Color Mapping

Map colors to categories or value ranges using rendering events or by preprocessing your data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/customization/color-mapping-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/customization/color-mapping-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/customization/color-mapping-cs1" %}

## Theme Customization

Set a theme globally or on the component to apply consistent visuals across the diagram. For Angular, apply the theme via global styles or component inputs depending on the package.

```typescript
const theme = 'Material';
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/customization/custom-theme-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/customization/custom-theme-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/customization/custom-theme-cs1" %}

## Tooltip Customization

Create custom tooltip templates for rich content:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/customization/tooltip-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/customization/tooltip-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/customization/tooltip-template-cs1" %}

## Advanced Customization Patterns

### Conditional Styling Based on Data

Use the `nodeRendering` or `linkRendering` events to apply conditional styles:

```typescript
const onNodeRendering = (args) => {
	const value = args.node.value || 0;
	if (value > 200) {
		args.node.color = '#00A651';
	} else if (value > 100) {
		args.node.color = '#FFB81C';
	} else {
		args.node.color = '#E81B23';
	}
};
```

### Category-Based Styling

Assign styles based on categories in your preprocessing step or during rendering:

```typescript
const categoryColors = { Energy: '#FF6B6B', Transport: '#4ECDC4', Industry: '#95E1D3' };
const onNodeRendering = (args) => {
	const category = extractCategory(args.node.id);
	args.node.color = categoryColors[category] || '#999';
};
```

### Interactive Styling

Apply hover and focus visuals in interaction handlers:

```typescript
const onNodeEnter = (args) => { args.node.highlightOpacity = 1; };
const onNodeLeave = (args) => { args.node.highlightOpacity = 0.3; };
```

## Performance Optimization

For charts with many nodes and links, optimize rendering performance:

1. **Use Global Styles**: Apply global `nodeStyle` and `linkStyle` instead of individual customization
2. **Minimize Calculations**: Reduce complex calculations in rendering events
3. **Conditional Rendering**: Only customize visible elements in viewport
4. **Cache Results**: Cache computed styles and colors


## Customization Best Practices

### Key Considerations

1. **Consistency**
   - Maintain consistent color schemes across nodes and links
   - Use meaningful colors that represent data categories
   - Apply visual hierarchy through size and opacity

2. **Performance**
   - Avoid complex calculations in rendering events
   - Use global styles when possible
   - Optimize for large datasets

3. **Accessibility**
   - Don't rely solely on color for information
   - Ensure sufficient contrast ratios
   - Provide alternative representations

4. **User Experience**
   - Use intuitive color mapping
   - Provide clear visual feedback for interactions
   - Maintain visual consistency with your application

5. **Maintainability**
   - Document custom styling logic
   - Use reusable style functions
   - Separate styling from business logic

## Example: Comprehensive Customization

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/customization/comprehensive-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/customization/comprehensive-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/customization/comprehensive-cs1" %}

## Related Topics

- [Appearance](appearance.md)
- [Nodes](nodes.md)
- [Links](links.md)
- [Labels](labels.md)
- [Legend](legend.md)
- [Events](events.md)
