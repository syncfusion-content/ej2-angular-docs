---
layout: post
title: Connectors in Angular Diagram component | Syncfusion
description: Learn here all about Connectors in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Connectors 
documentation: ug
domainurl: ##DomainURL##
---

# Connectors in Angular Diagram component

Connectors are objects used to create link between two points, nodes or ports to represent the relationships between them.

## Create connector

Connector can be created by defining the source and target point of the connector. The path to be drawn can be defined with a collection of segments. To explore the properties of a [`connector`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector), refer to [`Connector Properties`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector).

To create and customize the connectors easily in the Angular Diagram component, refer to the below video link.

{% youtube "youtube:https://www.youtube.com/watch?v=fwK8CWWBwZ4" %}

## Add connectors through connectors collection

The [`sourcePoint`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#sourcepoint-PointModel) and [`targetPoint`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#targetpoint-PointModel) properties of connector allow you to define the end points of a connector.

The following code example illustrates how to add a connector through connector collection.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectors-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectors-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectors-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectors-cs1" %}

## Add connector at runtime

Connectors can be added at runtime by using public method, `diagram.add` and can be removed at runtime by using public method, `diagram.remove`.

The following code example illustrates how to add connector at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsatruntime-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorsatruntime-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsatruntime-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsatruntime-cs1" %}

## Connectors from palette

Connectors can be predefined and added to the symbol palette. You can drop those connectors into the diagram, when required.

For more information about adding connectors from symbol palette, refer to `Symbol Palette`.

## Draw connectors

Connectors can be interactively drawn by clicking and dragging on the diagram surface by using `drawingObject`.

For more information about drawing connectors, refer to [`Draw Connectors`](https://ej2.syncfusion.com/angular/documentation/api/diagram#drawingObject-ConnectorModel).

## Update connector at runtime

Various connector properties such as `sourcePoint`, `targetPoint`, `style`, `sourcePortID`, `targetPortID`, etc., can be updated at the runtime.

The following code example illustrates how to update a connector's source point, target point, styles properties at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsupdate-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorsupdate-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsupdate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsupdate-cs1" %}

## Connect nodes

* The [`sourceID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#sourceid-string) and [`targetID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#targetid-string) properties allow to define the nodes to be connected.
* The [`connectorSpacing`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#connectorSpacing-number) property allows you to define the distance between the source node and the connector. It is the minimum distance the connector will re-rout or the new segment will create.

The following code example illustrates how to connect two nodes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectNode-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectNode-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectNode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectNode-cs1" %}

* When you remove NodeConstraints [`InConnect`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeConstraints) from Default, the node accepts only an outgoing connection to dock in it. Similarly, when you remove NodeConstraints [`OutConnect`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeConstraints) from Default, the node accepts only an incoming connection to dock in it.

* When you remove both InConnect and OutConnect NodeConstraints from Default, the node restricts connector to establish connection in it.

The following code illustrates how to disable InConnect constraints.

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { NodeConstraints } from "@syncfusion/ej2-angular-diagrams";

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [height]=60 [width]=100 [offsetX]=300 [offsetY]=80 [constraints]='nodeConstraints'>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public nodeConstraints: NodeConstraints;
    ngOnInit(): void {
        this.nodeConstraints = NodeConstraints.Default & ~NodeConstraints.InConnect;
    }
}
```

## Connections with ports

The [`sourcePortID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#sourceportid-string) and [`targetPortID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#targetportid-string) properties allow to create connections between some specific points of source/target nodes.

The following code example illustrates how to create port to port connections.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsport-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorsport-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsport-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsport-cs1" %}

Similarly, the `sourcePortID` or `targetPortID` can be changed at the runtime by changing the port [`sourcePortID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#sourceportid-string) or [`targetPortID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#targetportid-string).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsportupdate-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorsportupdate-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsportupdate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsportupdate-cs1" %}

* When you set PortConstraints to [`InConnect`](https://ej2.syncfusion.com/angular/documentation/api/diagram/portConstraints), the port accepts only an incoming connection to dock in it. Similarly, when you set PortConstraints to [`OutConnect`](https://ej2.syncfusion.com/angular/documentation/api/diagram/portConstraints), the port accepts only an outgoing connection to dock in it.

* When you set PortConstraints to None, the port restricts connector to establish connection in it.

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { PointPortModel, PortConstraints } from "@syncfusion/ej2-angular-diagrams";

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [height]=60 [width]=100 [offsetX]=300 [offsetY]=80 [ports]='port1'>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public port1: PointPortModel[];
    ngOnInit(): void {
        this.port1 = [{
            id: 'port1',
            shape: 'Circle',
            offset: { x: 0, y: 0.5 },
            text: 'In - 1',
            constraints: PortConstraints.InConnect
        }];
    }
}
```

## Segments

The path of the connector is defined with a collection of segments. There are three types of segments.

## Straight

To create a straight line, specify the [`type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/segments) of the segment as **straight** and add a straight segment to [`segments`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#segments) collection and need to specify [`type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#type-Segments) for the connector. The following code example illustrates how to create a default straight segment.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorssegments-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorssegments-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorssegments-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorssegments-cs1" %}

The [`point`](https://ej2.syncfusion.com/angular/documentation/api/diagram/straightSegment#point-PointModel) property of straight segment allows you to define the end point of it. The following code example illustrates how to define the end point of a straight segment.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorssegmentspoints-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorssegmentspoints-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorssegmentspoints-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorssegmentspoints-cs1" %}

## Orthogonal

Orthogonal segments is used to create segments that are perpendicular to each other.

Set the segment [`type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/segments) as orthogonal to create a default orthogonal segment and need to specify [`type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#type-Segments). The following code example illustrates how to create a default orthogonal segment.

If we set the segments for the connector in the diagram, the connector's first segment is rendered based on the given segment by default. Then the remaining segments are considered as single segment. Please refer the below screenshot.
![connector_segments](images/connector_segments.png)
If no segments are defined for the connector means, then the whole connector is considered as a single segment. We adopted this method for rendering the connector and its segments.

Multiple segments can be defined one after another. To create a connector with multiple segments, define and add the segments to [`connector.segments`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#segments) collection. The following code example illustrates how to create a connector with multiple segments.

The property [`maxSegmentThumb`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#maxSegmentThumb) is used to limit the segment thumb in the connector.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsortho-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorsortho-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsortho-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsortho-cs1" %}

The [`length`](https://ej2.syncfusion.com/angular/documentation/api/diagram/orthogonalSegment) and [`direction`](https://ej2.syncfusion.com/angular/documentation/api/diagram/orthogonalSegment) properties allow to define the flow and length of segment. The following code example illustrates how to create customized orthogonal segments.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsorthosegments-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorsorthosegments-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsorthosegments-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsorthosegments-cs1" %}

>Note: You need to mention the segment type as same as what you mentioned in connector type. There should be no contradiction between connector type and segment type.

## Avoid overlapping

Orthogonal segments are automatically re-routed, in order to avoid overlapping with the source and target nodes. The following preview illustrates how orthogonal segments are re-routed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectoroverlapping-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectoroverlapping-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectoroverlapping-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectoroverlapping-cs1" %}

## How to customize Orthogonal Segment Thumb Shape

The orthogonal connector has a number of segments in between the source and the target point. The segments are rendered with the default shape rhombus. Now, the option has been provided to change the segment thumb shape using the [`segmentThumbShape`](https://ej2.syncfusion.com/angular/documentation/api/diagram#segmentThumbShape-SegmentThumbShapes) property. The predefined shapes provided are as follows:
* Rhombus
* Square
* Rectangle
* Ellipse
* Arrow
* Diamond
* OpenArrow
* Circle
* Fletch
* OpenFetch
* IndentedArrow
* OutdentedArrow
* DoubleArrow

 You can customize the style of the thumb shape by overriding the class e-orthogonal-thumb.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsThumbshape-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorsThumbshape-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsThumbshape-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsThumbshape-cs1" %}

![Segment Thumb Shape](./images/thumbshape.png)

Use the following CSS to customize the segment thumb shape.

```scss

.e-orthogonal-thumb {
    fill: rgb(126, 190, 219);
    stroke:  #24039e;
    stroke-width: 3px;
  }

```

## Bezier

Bezier segments are used to create curve segments and the curves are configurable either with the control points or with vectors.

To create a bezier segment, the [`segment.type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/segments) is set as `bezier` and need to specify [`type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#type-Segments) for the connector. The following code example illustrates how to create a default bezier segment.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsbezier-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorsbezier-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsbezier-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsbezier-cs1" %}

The [`point1`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bezierSegment#point1-PointModel) and [`point2`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bezierSegment#point2-PointModel) properties of bezier segment enable you to set the control points. The following code example illustrates how to configure the bezier segments with control points.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsbezierpoints-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorsbezierpoints-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsbezierpoints-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsbezierpoints-cs1" %}

The [`vector1`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bezierSegment#vector1-VectorModel) and [`vector2`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bezierSegment#vector2-VectorModel) properties of bezier segment enable you to define the vectors. The following code illustrates how to configure a bezier curve with vectors.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsbeziervector-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorsbeziervector-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsbeziervector-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsbeziervector-cs1" %}

## Avoid overlapping with bezier

By default, when there are no segments defined for a bezier connector, the bezier segments will be created automatically and routed in such a way that avoids overlapping with the source and target nodes.

```typescript
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent,Diagram,NodeModel,ConnectorModel,ConnectorEditing,ConnectorConstraints } from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(ConnectorEditing);
@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="600px" [getNodeDefaults]='getNodeDefaults' [getConnectorDefaults] ='getConnectorDefaults'>
         <e-nodes>
            <e-node id=''Start'' [offsetX]=250 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation content="Start">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='End' [offsetX]=450 [offsetY]=200>
                <e-node-annotations>
                    <e-node-annotation content="End">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector1' type='Bezier' sourceID='Start' targetID='End'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
      encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
        public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        node.shape = { type: 'Basic', shape: 'Rectangle' };
        node.style.fill = "#6BA5D7";
        node.style.strokeColor = "White";
        return node;
    }
    public getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
     connector.style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    connector.targetDecorator: { shape: 'None' },
    connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
    }
}

```

Also, the intermediate point of two adjacent bezier segments can be edited interactively based on the `bezierSettings.segmentEditOrientation` property of the connector class.

### How to interact with the bezier segments efficiently

While interacting with multiple bezier segments, maintain their control points at the same distance and angle by using the bezierSettings.smoothness property of the connector class.

| BezierSmoothness value | Description |
|-------- | -------- |
| SymmetricDistance| Both control points of adjacent segments will be at the same distance when any one of them is editing. |
| SymmetricAngle | Both control points of adjacent segments will be at the same angle when any one of them is editing. |
| Default | Both control points of adjacent segments will be at the same angle and same distance when any one of them is editing. |
| None | Segment’s control points are interacted independently from each other. |

```typescript
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent,Diagram,NodeModel,ConnectorModel,ConnectorEditing,ConnectorConstraints } from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(ConnectorEditing);
@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="600px" [getNodeDefaults]='getNodeDefaults' [getConnectorDefaults] ='getConnectorDefaults'>
         <e-nodes>
            <e-node id=''Start'' [offsetX]=250 [offsetY]=150 [ports]='StartPort'>
                <e-node-annotations>
                    <e-node-annotation content="Start">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='End' [offsetX]=450 [offsetY]=200 [ports]='EndPort'>
                <e-node-annotations>
                    <e-node-annotation content="End">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector1' type='Bezier' sourceID='Start' targetID='End' sourcePortID='StartPort'targetPortID='EndPort' [bezierSettings]='bezierSettings'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
      encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public StartPort:PointPortModel[];
    public EndPort:PointPortModel[];
    public bezierSettings;
     ngOnInit(): void {
        this.StartPort = [{
            id: 'StartPort',
            visibility: PortVisibility.Visible,
            shape: 'Circle',
            offset: { x: 1, y: 0.5 },
            style: { strokeColor: '#366F8C', fill: '#366F8C' }
        }];
        this.EndPort = [{
            id: 'EndPort',
            visibility: PortVisibility.Visible,
            shape: 'Circle',
            offset: { x: 0, y: 0.5 },
            style: { strokeColor: '#366F8C', fill: '#366F8C' }
        }];
        this.bezierSettings = { smoothness: BezierSmoothness.SymmetricAngle };
    }
        public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        node.shape = { type: 'Basic', shape: 'Rectangle' };
        node.style.fill = "#6BA5D7";
        node.style.strokeColor = "White";
        return node;
    }
    public getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
     connector.style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    connector.targetDecorator: { shape: 'None' },
    connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
    }
}

```

Also, the visibility of control points can be controlled using the bezierSettings.controlPointsVisibility property of the connector class.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorBezierAvoidOverlapping-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorBezierAvoidOverlapping-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorBezierAvoidOverlapping-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorBezierAvoidOverlapping-cs1" %}

## Decorator

* Starting and ending points of a connector can be decorated with some customizable shapes like arrows, circles, diamond, or path. The connection end points can be decorated with the [`sourceDecorator`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#sourcedecorator-DecoratorModel) and [`targetDecorator`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#targetdecorator-DecoratorModel) properties of the connector.

* The [`shape`](https://ej2.syncfusion.com/angular/documentation/api/diagram/decoratorShapes) property of `sourceDecorator` allows to define the shape of the decorators. Similarly, the [shape](https://ej2.syncfusion.com/angular/documentation/api/diagram/decoratorShapes) property of `targetDecorator` allows to define the shape of the decorators.

* To create custom shape for source decorator, use [`pathData`](https://ej2.syncfusion.com/angular/documentation/api/diagram/decorator#pathdata-string) property. Similarly, to create custom shape for target decorator, use [`pathData`](https://ej2.syncfusion.com/angular/documentation/api/diagram/decorator#pathData-string) property.

The following code example illustrates how to create decorators of various shapes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsdecorator-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorsdecorator-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsdecorator-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsdecorator-cs1" %}

## Padding

Padding is used to leave the space between the Connector's end point and the object to where it is connected.

* The [`sourcePadding`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#sourcepadding) property of connector defines space between the source point and the source node of the connector.

* The [`targetPadding`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#targetpadding) property of connector defines space between the end point and the target node of the connector.

The following code example illustrates how to leave space between the connection end points and source and target nodes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectNode-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectNode-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectNode-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectNode-cs2" %}

## Hit padding

* The [`hitPadding`](../api/diagram/connector#hitpadding) property enables you to define the clickable area around the connector path.The default value for hitPadding is 10.

* The following code example illustrates how to specify hit padding for connector.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorHitPadding-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorHitPadding-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorHitPadding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorHitPadding-cs1" %}

## Flip

The diagram Provides support to flip the connector. The [`flip`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#flip) is performed to give the mirrored image of the original element.

The flip types are as follows:

* HorizontalFlip - [`Horizontal`](https://ej2.syncfusion.com/angular/documentation/api/diagram/flipDirection) is used to interchange the connector source and target x points.
* VerticalFlip - [`Vertical`](https://ej2.syncfusion.com/angular/documentation/api/diagram/flipDirection) is used to interchange the connector source and target y points.
* Both - [`Both`](https://ej2.syncfusion.com/angular/documentation/api/diagram/flipDirection) is used to interchange the source point as target point and target point as source point

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsdecorator-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorsdecorator-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsdecorator-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsdecorator-cs2" %}

>Note: The flip is not applicable when the connectors connect in nodes.

## Bridging

Line bridging creates a bridge for lines to smartly cross over the other lines, at points of intersection. By default, [`bridgeDirection`](https://ej2.syncfusion.com/angular/documentation/api/diagram#bridgeDirection-BridgeDirection) is set to top. Depending upon the direction given bridging direction appears.

Bridging can be enabled/disabled either with the `connector.constraints` or `diagram.constraints`. The following code example illustrates how to enable line bridging.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsbridging-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorsbridging-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsbridging-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsbridging-cs1" %}

>Note: You need to inject connector bridging module into the diagram.

The [`bridgeSpace`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#bridgespace-number) property of connectors can be used to define the width for line bridging.

**Limitation**: Bezier segments do not support bridging.

## Corner radius

Corner radius allows to create connectors with rounded corners. The radius of the rounded corner is set with the [`cornerRadius`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#cornerradius-number) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorscornerradius-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorscornerradius-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorscornerradius-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorscornerradius-cs1" %}

## Appearance

* The connector’s [`strokeWidth`](https://ej2.syncfusion.com/angular/documentation/api/diagram/strokeStyle#strokewidth-number), [`strokeColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/strokeStyle#strokecolor-string), [`strokeDashArray`](https://ej2.syncfusion.com/angular/documentation/api/diagram/strokeStyle#strokedasharray-string), and [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/diagram/strokeStyle#opacity-number) properties are used to customize the appearance of the connector segments.

* The [`visible`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#visible-boolean) property of the connector enables or disables the visibility of connector.

* Default values for all the `connectors` can be set using the `getConnectorDefaults` properties. For example, if all connectors have the same type or having the same property then such properties can be moved into `getConnectorDefaults`.

## Segment appearance

The following code example illustrates how to customize the segment appearance.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorssegappear-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorssegappear-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorssegappear-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorssegappear-cs1" %}

## Decorator appearance

* The source decorator’s [`strokeColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/strokeStyle#strokecolor-string), [`strokeWidth`](https://ej2.syncfusion.com/angular/documentation/api/diagram/strokeStyle#strokewidth-number), and [`strokeDashArray`](https://ej2.syncfusion.com/angular/documentation/api/diagram/strokeStyle#strokedasharray-string) properties are used to customize the color, width, and appearance of the decorator.

* To set the border stroke color, stroke width, and stroke dash array for the target decorator, use [`strokeColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/strokeStyle#strokecolor-string), [`strokeWidth`](https://ej2.syncfusion.com/angular/documentation/api/diagram/strokeStyle#strokewidth-number), and [`strokeDashArray`](https://ej2.syncfusion.com/angular/documentation/api/diagram/strokeStyle#strokedasharray-string).

* To set the size for source and target decorator, use width and height property.

The following code example illustrates how to customize the appearance of the decorator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsdecappearance-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorsdecappearance-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsdecappearance-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsdecappearance-cs1" %}

## Interaction

Diagram allows to edit the connectors at runtime. To edit the connector segments at runtime, refer to [`Connection Editing`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectorEditing).

## Automatic line routing

Diagram provides additional flexibility to re-route the diagram connectors. A connector will frequently re-route itself when a shape moves next to it. The following screenshot illustrates how the connector automatically re-routes the segments.  

1.Dependency LineRouting module should be injected to the application as the following code snippet.

```typescript

import {  LineRouting, Diagram } from '@syncfusion/ej2-diagrams';
/**
 * Injecting the automatic line routing module.
 */
Diagram.Inject(LineRouting);

```

2.Now, the line routing constraints must be included to the default diagram constraints to enable automatic line routing support like below.

```html

/**
 *  Initialize the Diagram
 */
  <ejs-diagram #diagram [constraints]='constraints'>

```

```typescript
  // Enable line routing constraints.
 public constraints: DiagramConstraints = DiagramConstraints.Default | DiagramConstraints.LineRouting;

```

3.The following code block shows how to create the diagram with specifying nodes, connectors, constraints, and necessary modules for line routing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorslinerouting-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorslinerouting-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorslinerouting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorslinerouting-cs1" %}

4.In some situations, automatic line routing enabled diagram needs to ignore a specific connector from automatic line routing. So, in this case, auto routing feature can be disabled to the specific connector using the [`constraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#constraints-ConnectorConstraints) property of the connector like the following code snippet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorslineroutingdisabled-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorslineroutingdisabled-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorslineroutingdisabled-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorslineroutingdisabled-cs1" %}

## Constraints

The [`constraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#constraints-ConnectorConstraints) property of connector allows to enable/disable certain features of connectors. To enable or disable the constraints, refer [`constraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectorConstraints).

The following code illustrates how to disable selection.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsconstraints-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/connectorsconstraints-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsconstraints-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsconstraints-cs1" %}

## Custom properties

The [`addInfo`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#addinfo-Object) property of connectors allow you to maintain additional information to the connectors.

```html

<e-connectors>
    <e-connector id='connector1' type='Straight' addInfo='centralconnector' [sourcePoint]='sourcePoint1' [targetPoint]='targetPoint1' [constraints]='constraints'></e-connector>
</e-connectors>

```

## Stack order

The connectors [`zIndex`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#zindex-number) property specifies the stack order of the connector. A connector with greater stack order is always in front of a connector with a lower stack order.

The following code illustrates how to render connector based on the stack order.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/zindex-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/zindex-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/zindex-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/zindex-cs1" %}

## Enable Connector Splitting

The connectors are used to create a link between two points, ports, or nodes to represent the relationship between them. Split the connector between two nodes when dropping a new node onto an existing connector and create a connection between the new node and existing nodes by setting the [`enableConnectorSplit`](https://ej2.syncfusion.com/angular/documentation/api/diagram/enableConnectorSplit) as true. The default value of the [`enableConnectorSplit`](https://ej2.syncfusion.com/angular/documentation/api/diagram/enableConnectorSplit) is false.

The following code illustrates how to split the connector and create a connection with new node.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/ConnectorSplit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/connectors/ConnectorSplit-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/ConnectorSplit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/ConnectorSplit-cs1" %}

![Enable Connector Split](./images/EnableSplit.gif)

## See Also

* [How to add annotations to the connector](./labels)
* [How to enable/disable the behavior of the node](./constraints)
* [How to add connectors to the symbol palette](./symbol-palette)
* [How to perform the interaction on the connector](./interaction#connection-editing)
* [How to create diagram connectors using drawing tools](./tools)