---
layout: post
title: Customizing layout in Angular Diagram component | Syncfusion®
description: Learn how to customize layout orientation, spacing, alignment, and bounds in Syncfusion Angular Diagram component with comprehensive examples.
platform: ej2-angular
control: Customizing layout 
documentation: ug
domainurl: ##DomainURL##
---

# Customizing layout in Angular Diagram control

The Angular Diagram component provides extensive customization options for automatic layouts, allowing developers to control orientation, spacing, alignment, bounds, and visual behavior. These properties enable fine-tuned positioning and appearance of nodes within hierarchical, organizational, and tree-based diagrams.

To explore all available layout properties, refer to [`Layout Properties`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout/#properties).

## Layout bounds
The diagram supports aligning layouts within custom rectangular areas using layout bounds. This feature constrains the layout to a specific region of the canvas, providing precise control over where the layout appears.

Layout bounds define a rectangular area where the entire layout will be positioned. This is particularly useful when integrating diagrams into dashboards or when multiple layouts need to coexist on the same canvas.

The following example shows how to align the layout within specified layout bounds:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-bounds-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-bounds-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/layout-bounds-cs1" %}

For more information about bounds configuration, refer to [`bounds`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layoutModel/#bounds).

## Layout alignment

The layout can be positioned anywhere within the layout bounds using the [`horizontalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layoutModel/#horizontalalignment) and [`verticalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layoutModel/#verticalalignment) properties. These properties determine how the layout is positioned relative to its container.

Available alignment options include Left, Right, Center for horizontal alignment, and Top, Bottom, Center for vertical alignment. These settings work independently, allowing for precise positioning control.

The following code illustrates how to configure layout alignment and modify alignment properties at runtime:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-alignment-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-alignment-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/layout-alignment-cs1" %}

## Layout spacing

Layout spacing controls the distance between nodes in the layout. The [`horizontalSpacing`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layoutModel/#horizontalspacing) and [`verticalSpacing`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layoutModel/#verticalspacing) properties define the gaps between nodes horizontally and vertically respectively.

Proper spacing ensures visual clarity and prevents node overlap. Spacing values are measured in pixels and can be adjusted based on node sizes and content density requirements.

The following code illustrates how to set initial horizontal and vertical spacing for the layout and modify these values at runtime:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-spacing-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-spacing-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/layout-spacing-cs1" %}

## Layout margin

Layout margin creates blank space between the layout bounds and the actual layout content. The [`margin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout/#margin) property adds padding around the entire layout, ensuring adequate separation from container edges.

Margins are particularly useful when layouts are displayed within panels, cards, or other UI containers where visual separation is important for clarity and aesthetics.

The following code demonstrates how to set initial layout margin and modify margin values dynamically at runtime:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-margin-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-margin-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/layout-margin-cs1" %}

## Layout orientation

The layout orientation determines the primary direction in which the layout flows. Different orientations are suitable for various organizational structures and display requirements.

|Orientation|Description|
| -------- | ----------- |
|TopToBottom|Aligns the layout from top to bottom. All root nodes are placed at the top of the diagram.|
|LeftToRight|Aligns the layout from left to right. All root nodes are placed at the left of the diagram.|
|BottomToTop|Aligns the layout from bottom to top. All root nodes are placed at the bottom of the diagram.|
|RightToLeft|Aligns the layout from right to left. All root nodes are placed at the right of the diagram.|

The [`orientation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout/#orientation) property can be customized to match specific design requirements or cultural reading patterns.

N> The default orientation in diagram is `TopToBottom`.

The following code demonstrates how to set the initial orientation for the layout and change it dynamically at runtime:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-orientation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-orientation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/layout-orientation-cs1" %}

## Exclude from layout

In certain scenarios, specific nodes may need manual positioning rather than automatic arrangement by the layout algorithm. These nodes can be excluded from layout calculations by setting the [`excludeFromLayout`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel/#excludefromlayout) property to true.

This feature is useful for annotation nodes, floating panels, or special elements that require fixed positioning regardless of the overall layout structure.

The following code example demonstrates how to exclude a node from the layout and position it manually:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-exclude-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-exclude-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/layout-exclude-cs1" %}

## Fixed node

Layout arrangement can be anchored relative to a specific node by setting the [`fixedNode`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layoutModel/#fixednode) property. This ensures that the specified node maintains its position while other nodes are arranged around it.

This feature is particularly beneficial during expand/collapse operations, where maintaining the position of the interacted node provides better user experience and visual stability.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-fixed-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-fixed-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/layout-fixed-cs1" %}

## Expand and collapse

The diagram supports expanding and collapsing subtrees within layouts. The node's isExpanded property controls the visibility of child nodes, allowing users to focus on specific portions of large hierarchical structures.

This functionality is essential for managing complex organizational charts, decision trees, and other hierarchical data where progressive disclosure improves usability.

The following code example shows how to expand/collapse the children of a node:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-expandandcollapse-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-expandandcollapse-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/layout-expandandcollapse-cs1" %}

For more details about customizing the expand and collapse icons refer [`expand Collapse`](../nodes/nodes-expandAndCollapse)

## Layout animation

Expand and collapse operations can be animated by applying transitions during layout changes. The [`enableAnimation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layoutModel/#enableanimation) property controls this behavior, enhancing the visual experience during structural changes.

Animation provides visual continuity and helps users track changes in the layout structure. By default, `enableAnimation` is set to true.

The following example demonstrates how layout animation enhances the visual experience during expand and collapse operations:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-animation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/layout-animation-cs1" %}

N> To enable layout animation, inject the LayoutAnimation module in the diagram.

## Parent - child relation with dropped nodes from symbol palette

Layouts can be dynamically extended by creating parent-child relationships between existing nodes and items dropped from the symbol palette. The [`drop`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#drop) event provides the mechanism to establish these connections programmatically.

This functionality enables interactive diagram building, where users can expand existing structures by dragging and dropping new elements from a predefined set of symbols.

The following code example creates parent-child relationships between source and target nodes in the drop event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-parentChildren-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-parentChildren-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/layout-parentChildren-cs1" %}

![Layout drag and drop](../images/drag-drop-layout.gif)

## setNodeTemplate

The [`setNodeTemplate`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#setnodetemplate) function enables comprehensive customization of node visual representation and behavior within diagrams. This function is invoked during node initialization, allowing developers to define styling, properties, and data binding for each node.

The function typically accepts container elements such as StackPanel or Grid to organize visual components within nodes. The [`StackPanel`](https://ej2.syncfusion.com/angular/documentation/api/diagram/stackPanel/) can contain various elements including [`ImageElement`](https://ej2.syncfusion.com/angular/documentation/api/diagram/imageElement/), [`PathElement`](https://ej2.syncfusion.com/angular/documentation/api/diagram/pathElement/), [`NativeElement`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramNativeElement/), [`DiagramElement`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramElement/), and [`HtmlElement`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramHtmlElement/).

Additional customization options include [`cornerRadius`](https://ej2.syncfusion.com/angular/documentation/api/diagram/stackPanel/#cornerradius) for rounded appearances, [`horizontalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/diagram/stackPanel/#horizontalalignment) and [`verticalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/diagram/stackPanel/#verticalalignment) for positioning control, and [`orientation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/stackPanel/#orientation) for child element arrangement.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-setNodeTemplete-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/layout-setNodeTemplete-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/layout-setNodeTemplete-cs1" %}

## Refresh layout

The diagram supports refreshing layouts at runtime to reflect structural or data changes. The [`doLayout`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#dolayout) method recalculates and redraws the entire layout based on current data and configuration.

This functionality is essential when nodes are added, removed, or modified programmatically, ensuring the layout remains consistent with the updated structure.

```typescript
//To refresh layout
this.diagram.doLayout();
```