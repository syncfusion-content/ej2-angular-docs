---
layout: post
title: Expand and collapse nodes in Angular Diagram component | Syncfusion®
description: Learn how to implement expand and collapse functionality for nodes in Syncfusion® Angular Diagram component with customizable icons and states.
platform: ej2-angular
control: Expand and collapse of nodes
documentation: ug
domainurl: ##DomainURL##
---

# Expand and Collapse Nodes in Angular Diagram Component

The Angular Diagram component provides built-in support for expanding and collapsing nodes, enabling users to create hierarchical views where child nodes can be hidden or shown dynamically. This functionality is particularly useful for organizational charts, mind maps, and tree structures where managing visual complexity is essential.

The expand and collapse feature allows users to:
- Compress hierarchical views to show only root elements
- Toggle visibility of child nodes interactively
- Customize the appearance of expand and collapse icons
- Control the initial state of nodes programmatically

## Key properties

The following properties control the expand and collapse behavior of nodes:

* **expandIcon** - Defines the icon displayed when a node can be expanded
* **collapseIcon** - Defines the icon displayed when a node can be collapsed  
* **isExpanded** - Determines whether the node is currently expanded or collapsed

N> Icons are only created when the node has outgoing edges (outEdges).

For detailed API information, refer to [`expandIcon`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel#expandicon) and [`collapseIcon`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel#collapseicon).

## Customizing expand and collapse icons

### Size and shape configuration

Define the size of icons using the [`width`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iconShapeModel#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iconShapeModel#height) properties.

The [`shape`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iconShapeModel#shape) property of expandIcon and collapseIcon allows customization of the icon appearance.

The following code example demonstrates how to create icons with various shapes:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-expandAndCollapse-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-expandAndCollapse-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-expandAndCollapse-cs1" %}

### Styling and appearance

Customize the visual appearance of icons using the following properties:
- [`borderColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iconShapeModel#bordercolor) - Sets the border color
- [`borderWidth`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iconShapeModel#borderwidth) - Defines the border thickness  
- [`fill`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iconShapeModel#fill) - Sets the background color
- [`cornerRadius`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iconShapeModel#cornerradius) - Rounds the corners of the icon
- [`iconColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iconShapeModel#iconcolor) - Sets the stroke color of the icon

Icons can be precisely positioned relative to node boundaries using margin, offset, horizontalAlignment, and verticalAlignment settings. While combining all four alignment properties provides maximum control, it requires careful consideration of their interactions.

The following code example illustrates comprehensive icon customization:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-expandAndCollapse-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-expandAndCollapse-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-expandAndCollapse-cs2" %}

## Managing node expansion state

The [`isExpanded`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel#isexpanded) property controls whether a node displays its child nodes. When set to `true`, child nodes are visible; when `false`, they are hidden.

**Default value:** `true`

The following example demonstrates how to configure the expansion state of nodes:

```typescript
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    
    public nodes: NodeModel[] = [
        {
            id: 'parentNode', 
            width: 140, 
            height: 50, 
            offsetX: 300, 
            offsetY: 50,
            // Set initial state to collapsed
            isExpanded: false,
            expandIcon: {
                shape: 'ArrowDown',
                width: 20,
                height: 15
            },
            collapseIcon: {
                shape: 'ArrowUp',
                width: 20,
                height: 15
            }
        }
    ];
}
```