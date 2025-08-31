---
layout: post
title: Appearence of a nodes in Angular Diagram component | Syncfusion®
description: Learn here all about Nodes in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Appearence of a nodes 
documentation: ug
domainurl: ##DomainURL##
---

# Appearance of Nodes in Angular Diagram Component

## Setting default properties for nodes

The [`getNodeDefaults`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#getnodedefaults) property in the Angular Diagram control allows you to define default settings that apply to all nodes based on specific conditions or requirements. This approach ensures consistency across your diagram and reduces repetitive code.

The following code example shows how to use the getNodeDefaults function to apply common styling to all nodes:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-customization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-customization-cs1" %}

N> The values set in the getNodeDefaults function have higher priority than individual node properties during rendering.

## Appearance

### Apply style to nodes

The appearance of a node can be customized by changing its [`fill`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapeStyleModel/#fill) color, [`strokeDashArray`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapeStyleModel/#strokedasharray), [`strokeWidth`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapeStyleModel/#strokewidth), [`strokeColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapeStyleModel/#strokecolor) and [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapeStyleModel/#opacity). The [`visible`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node/#visible) property of the node enables or disables the visibility of the node.

The following code illustrates how to customize the appearance of nodes using style properties:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-customization-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-customization-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-customization-cs2" %}

### Apply gradient style to nodes

The [`gradient`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapeStyleModel/#gradient) property of the node allows you to define and apply gradient effects to create visually appealing nodes with smooth color transitions.

The gradient stop property defines the color and position where the previous color transition ends and a new color transition starts. The gradient stop's opacity property defines the transparency level of the region.

There are two types of gradients available:

* Linear gradient
* Radial gradient

#### Linear gradient

[`LinearGradient`](https://ej2.syncfusion.com/angular/documentation/api/diagram/linearGradientModel/) defines a smooth transition between a set of colors (called stops) along a straight line. This is ideal for creating directional color effects on nodes.

A linear gradient's x1, y1, x2, y2 properties are used to define the position (relative to the node) of the rectangular region that needs to be painted.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-customization-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-customization-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-customization-cs3" %}

#### Radial gradient

[`RadialGradient`](https://ej2.syncfusion.com/angular/documentation/api/diagram/radialGradientModel/) defines a smooth transition between stops that radiates from a central point in a circular pattern. This creates a spotlight or glow effect on nodes.

A radial gradient's cx, cy, fx, fy properties are used to define the position (relative to the node) of the outermost or innermost circle of the radial gradient.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-customization-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-customization-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-customization-cs4" %}

## Customize the style of node selector

### Customize the style of main node selector indicator

In the diagram, multiple nodes can be selected simultaneously. When selecting multiple nodes, a highlighter renders to indicate the selection of each node. The border style of the first node in the multiple selection can be customized using the CSS class name `e-diagram-first-selection-indicator`.

Use the following CSS to customize the style of the main node during multiple selection:

```css
.e-diagram-first-selection-indicator {
   stroke-width: 5px;
   stroke: red;
   stroke-dasharray: 1,1;
}
```

## Apply rotate angle and corner radius to nodes

Node appearance can be enhanced using rotation and corner radius properties:

- **Rotate angle**: The [`rotateAngle`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node/#rotateangle) property allows you to rotate nodes within the diagram. This is particularly useful when you want to represent nodes from different perspectives or angles to match your design requirements.

- **Corner radius**: The [`cornerRadius`](https://ej2.syncfusion.com/angular/documentation/api/diagram/basicShapeModel/#cornerradius) property allows you to round the corners of rectangular nodes in the diagram. It adds a visual styling effect to the nodes, making them appear softer and more polished.

The following code shows how to set the rotate angle and corner radius for nodes:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-customization-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-customization-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-customization-cs5" %}

## Apply shadow effect to nodes

Diagram provides support to add [`shadow`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node/#shadow) effects to nodes, which is disabled by default. Shadow effects can be enabled using the constraints property of the node to create depth and visual hierarchy in your diagrams.

The following code illustrates how to apply shadow effects to nodes:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-customization-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-customization-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-customization-cs6" %}

### Customizing shadow effects

The [`angle`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shadowModel/#angle), [`distance`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shadowModel/#distance), and [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shadowModel/#opacity) of the shadow can be customized using the `shadow` property of the node. These properties allow you to control the direction, positioning, and transparency of the shadow effect.

The following code example illustrates how to customize shadow properties:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-customization-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-customization-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-customization-cs7" %}

## Provide additional information to nodes

The [`addInfo`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node/#addinfo) property of the node allows you to maintain additional information with the node. You can specify either object or string values to store custom data that can be retrieved and used in your application logic.

The following code shows how to set the addInfo value:

```typescript
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public addInfo = { type: 'Node', info: 'Rectangle Node' };
    public nodes: NodeModel[] = [
        {
            // Position of the node
            offsetX: 400,
            offsetY: 250,
            // Additional information about the node
            addInfo: this.addInfo,
            // Size of the node
            width: 100,
            height: 100,
        },
    ];
}
```

## Constraints

The [`constraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node/#constraints) property of the node allows you to enable or disable certain behaviors of the node. This provides fine-grained control over node interactions and capabilities. For more information about node constraints, refer to the [Node Constraints](https://ej2.syncfusion.com/angular/documentation/diagram/constraints#node-constraints) documentation.

## Stack order

The [`zIndex`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node/#zindex) property of nodes specifies the stack order of the node. A node with a greater stack order is always rendered in front of a node with a lower stack order, allowing you to control the layering of overlapping elements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-customization-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-customization-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-customization-cs8" %}

N> By default, the zIndex is generated automatically based on the order in which diagram elements are added to the diagram. The default value is Number.MIN_VALUE.

## Pivot

Node rotation angle is based on [`Pivot`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node/#pivot) values which range from 0 to 1, similar to offset values. By default, the pivot values are set to X = 0.5 and Y = 0.5, meaning rotation occurs around the center of the node.

The following table illustrates how pivot relates to offset values with node boundaries:

| Pivot | Offset |
|-------- | -------- |
| (0.5,0.5)| offsetX and offsetY values are considered as the node's center point. |
| (0,0) | offsetX and offsetY values are considered as the top-left corner of the node. |
| (1,1) | offsetX and offsetY values are considered as the bottom-right corner of the node. |

The following code illustrates how to change the pivot value:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-customization-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-customization-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-customization-cs9" %}

## Get connected connectors from node

Node has the inEdges and outEdges read-only properties. These properties allow you to identify all connectors that are connected to the node. You can then retrieve these connectors using the [`getObject`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#getobject) method in the diagram.

```typescript
@Component({
    imports: [
        DiagramModule
    ],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="600px" [getNodeDefaults]='getNodeDefaults' (created)='created($event)'>
            <e-nodes>
                <e-node id='node1' [offsetX]=450 [offsetY]=100>
                    <e-node-annotations>
                        <e-node-annotation content="Node1">
                        </e-node-annotation>
                    </e-node-annotations>
                </e-node>
                <e-node id='node2' [offsetX]=350 [offsetY]=200>
                    <e-node-annotations>
                        <e-node-annotation content="Node2">
                        </e-node-annotation>
                    </e-node-annotations>
                </e-node>
                <e-node id='node3' [offsetX]=450 [offsetY]=200>
                    <e-node-annotations>
                        <e-node-annotation content="Node3">
                        </e-node-annotation>
                    </e-node-annotations>
                </e-node>
                <e-node id='node4' [offsetX]=550 [offsetY]=200>
                    <e-node-annotations>
                        <e-node-annotation content="Node4">
                        </e-node-annotation>
                    </e-node-annotations>
                </e-node>
            </e-nodes>
            <e-connectors>
                <e-connector id='connector1' type='Orthogonal' sourceID='node1' targetID='node2'>
                </e-connector>
                <e-connector id='connector2' type='Orthogonal' sourceID='node1' targetID='node3'>
                </e-connector>
                <e-connector id='connector3' type='Orthogonal' sourceID='node1' targetID='node4'>
                </e-connector>
            </e-connectors>
        </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 80;
        node.width = 50;
        (node.style as ShapeStyleModel).fill = "#6BA5D7";
        (node.style as ShapeStyleModel).strokeColor = "White";
        return node;
    }
    
    public created(args: Object): void {
        // Access outgoing connectors from node1
        const outConnectors = ((this.diagram as DiagramComponent).getObject('node1') as any).outEdges;
        console.log('Connected outgoing connectors:', outConnectors);
    }
}
```