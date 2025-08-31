---
layout: post
title: Org-chart layout in Angular Diagram component | Syncfusion®
description: Learn here all about Org-chart layout in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Org-chart layout 
documentation: ug
domainurl: ##DomainURL##
---

# Organizational Chart Layout in Angular Diagram Control

An organizational chart is a diagram that displays the hierarchical structure of an organization, showing reporting relationships and roles within the company. The Angular Diagram component provides specialized support for creating professional organizational charts through automatic layout algorithms. To create an organizational chart, set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout/#type) property of the layout to `OrganizationalChart`.

## Prerequisites

Before implementing organizational charts, ensure the following modules are injected:
- **HierarchicalTree module** - Required for organizational chart layout functionality
- **DataBinding module** - Required when using DataSource approach

## Creating Organizational Charts

The Angular Diagram component supports two primary approaches for creating organizational charts:

1. **DataSource approach** - Recommended for dynamic data scenarios
2. **Manual approach** - Using predefined nodes and connectors for static structures

### Organizational Chart with DataSource

This approach is ideal when working with dynamic data from databases, APIs, or when the organizational structure changes frequently. The component automatically generates nodes and connectors based on the provided data structure.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/organizationalchart-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/organizationalchart-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/organizationalchart-cs1" %}

> **Note:** When using organizational chart layout, both HierarchicalTree and DataBinding modules must be injected into the diagram component.

### Organizational Chart with Nodes and Connectors

This manual approach provides complete control over the chart structure and is suitable for static organizational hierarchies or when custom node designs are required.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/organizationalchart-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/organizationalchart-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/organizationalchart-cs2" %}

![Organizational chart](../images/org-chart.png)

## Advanced Layout Customization with getLayoutInfo

The [`getLayoutInfo`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layoutModel/#getlayoutinfo) method provides granular control over how each subtree within the organizational chart is arranged. This method is invoked for every node during the layout process, allowing customization of orientation, alignment, spacing, and special node types like assistants.

The organizational chart layout engine parses the hierarchy starting from the root node and processes each subtree. By overriding the `getLayoutInfo` method, developers can customize the arrangement of child nodes based on specific business requirements.

### getLayoutInfo Parameters

The `getLayoutInfo` method accepts the following parameters:

- **node**: The parent node for which layout options are being configured
- **options**: Configuration object containing customizable layout properties

### Layout Options Properties

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|options.assistants|Collection of child nodes to be treated as assistants with special positioning|Empty array|
|options.orientation|Controls the primary direction of child node arrangement|SubTreeOrientation.Vertical|
|options.type|Defines how child nodes are aligned relative to the parent|Horizontal: SubTreeAlignments.Center, Vertical: SubTreeAlignments.Alternate|
|options.offset|Horizontal spacing between parent and child nodes|20 pixels (vertical orientations only)|
|options.hasSubTree|Indicates whether the current node contains child subtrees|Boolean|
|options.level|Represents the depth level of the node from the root|Number|
|options.enableRouting|Controls whether automatic connector routing is applied|true|
|options.rows|Number of rows for arranging child nodes (balanced type only)|Number|

### Orientation and Alignment Options

The following table describes the available chart orientations and their corresponding alignment types:

|Orientation|Type|Description|Example|
| -------- | ----------- | ------------- |------|
|Horizontal|Left|Positions child nodes horizontally to the left of the parent|![Horizontal Left](../images/hleft.JPG)|
||Right|Positions child nodes horizontally to the right of the parent|![Horizontal Right](../images/hright.JPG)|
||Center|Arranges children in standard tree layout format|![Horizontal Center](../images/hcenter.JPG)|
||Balanced|Distributes leaf-level nodes across multiple rows for better space utilization|![Horizontal Balanced](../images/hbalanced.JPG)|
|Vertical|Left|Arranges children vertically on the left side of the parent|![Vertical Left](../images/vleft.JPG)|
||Right|Arranges children vertically on the right side of the parent|![Vertical Right](../images/vright.JPG)|
||Alternate|Distributes children on both left and right sides of the parent|![Vertical Alternate](../images/vAlternate.JPG)|

### Horizontal Subtree Orientation Example

The following example demonstrates customizing subtree alignment for horizontal organizational structures:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/organizationalchart-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/organizationalchart-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/organizationalchart-cs3" %}

### Vertical Subtree Orientation Example

This example shows how to implement vertical arrangement for leaf-level organizational trees:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/organizationalchart-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/organizationalchart-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/organizationalchart-cs4" %}

### Assistant Nodes

Assistant nodes represent positions with specialized relationships to their parent, such as executive assistants or advisor's. These nodes are positioned in a dedicated area separate from regular child nodes. To designate a node as an assistant, add it to the `assistants` collection within the `getLayoutInfo` options parameter.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/organizationalchart-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/organizationalchart-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/organizationalchart-cs5" %}

![Assistant](../images/assistant.png)

> **Important:** Assistant nodes cannot have child nodes and serve as terminal positions in the organizational hierarchy.

## Best Practices

- Use the DataSource approach for dynamic organizational structures that may change frequently
- Implement the manual approach when requiring custom node designs or static hierarchies
- Consider using assistant nodes for specialized roles like executive assistants or advisory positions
- Apply appropriate orientation and alignment settings based on the size and complexity of the organization
- Test layout performance with large datasets and consider implementing virtualization for extensive organizational charts