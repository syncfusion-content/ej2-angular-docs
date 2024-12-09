---
layout: post
title: Constraints in Angular Diagram component | Syncfusion®
description: Learn here all about Constraints in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Constraints 
documentation: ug
domainurl: ##DomainURL##
---

# Constraints in Angular Diagram component

Constraints are used to enable/disable certain behaviors of the diagram, nodes and connectors. Constraints are provided as flagged enumerations, so that multiple behaviors can be enabled/disabled using Bitwise operators `(&, |, ~, <<, etc.)`.

To know more about Bitwise operators, refer to [`Bitwise Operations`](#bitwise-operations).

## Diagram constraints

The following table displays the list of all diagram constraints.

| Constraints | Description |
| -------- | -------- |
|None|Disable all diagram functionalities.|
|Bridging|Enables or disables Bridging support for connector in diagram.|
|Undo/redo|Enables or disables the Undo/Redo support for the diagram.|
|UserInteraction|Enables or disables user interaction support for the diagram.|
|ApiUpdate|Enables or disables Api update support for the diagram.|
|PageEditable|Enables or disables Page Editable support for the diagram.|
|Zoom|Enables or disables Zoom support for the diagram.|
|PanX|Enables or disables Panning X coordinate support for the diagram.|
|PanY|Enables or disables Panning Y coordinate support for the diagram.|
|Pan|Enables or disables panning both X and Y coordinates support for the diagram.|
|ZoomTextEdit|Enables or disables zooming the text box while editing the text.|
|Tooltip|Enables or disables the tooltip for the diagram.|
|Virtualization|Enables or disables Virtualization support for the diagram.|
|LineRouting|Enables or disables the line routing.|
|Default|Enables or disables all constraints in diagram.|

The following example illustrates how to give page editing using the diagram constraints.

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { DiagramConstraints } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [constraints]='diagramConstraints'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public diagramConstraints: DiagramConstraints;
    ngOnInit(): void {
        this.diagramConstraints = DiagramConstraints.Default & ~DiagramConstraints.PageEditable;
    }
}

```
The following example shows how to enable Bridging constraint to the default constraints of diagram.

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { DiagramConstraints } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [constraints]='diagramConstraints'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public diagramConstraints: DiagramConstraints;
    ngOnInit(): void {
        this.diagramConstraints = DiagramConstraints.Default | DiagramConstraints.Bridging
    }
}

```

Multiple behaviors can be added or removed from the default constraints using the Bitwise Operations in the diagram.

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { DiagramConstraints } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [constraints]='diagramConstraints'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public diagramConstraints: DiagramConstraints;
    ngOnInit(): void {
        this.diagramConstraints = DiagramConstraints.Default & ~(DiagramConstraints.PageEditable|DiagramConstraints.Zoom);
    }
}

```

For more information about diagram constraints, refer to [`DiagramConstraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramConstraints/).

N> By default, the following constraints are enabled in the diagram,
<br/>* Zoom
<br/>* ApiUpdate
<br/>* PanX
<br/>* PanY
<br/>* Pan
<br/>* Undo/Redo
<br/>* PageEditable
<br/>* Default


## Node constraints

Node constraints allows to enable or disable the following behaviors of node. They are as follows:

| Constraints | Description |
| -------- | -------- |
|None|Disable all node Constraints|
|Select|Enables or disables the node to be selected.|
|Drag|Enables or disables the node to be dragged.|
|Rotate|Enables or disables the node to be rotated.|
|Shadow|Enables or disables the node to display shadow.|
|PointerEvents|Enables or disables the node to provide pointer option.|
|Delete|Enables or disables node to be deleted.|
|InConnect|Enables or disables node to provide in connect option.|
|OutConnect|Enables or disables node to provide out connect option.|
|AllowDrop|Enables node to provide allow to drop option.|
|Individual|Enables node to provide individual resize option |
|ResizeNorthEast|Enable or disable to resize NorthEast side of the node.|
|ResizeEast|Enable or disable to resize East side of the node.|
|ResizeSouthEast|Enable or disable to resize SouthEast side of the node.|
|ResizeSouth|Enable or disable to resize South side of the node.|
|ResizeSouthWest|Enable or disable to resize SouthWest side of the node.|
|ResizeWest|Enable or disable to resize West side of the node.|
|ResizeNorthWest|Enable or disable to resize NorthWest side of the node.|
|ResizeNorth|Enable or disable to resize North side of the node.|
|AspectRatio|Enables the Aspect ratio of the node.|
|ReadOnly|Enables the ReadOnly support for annotation in the node.|
|HideThumbs|Enable to hide all resize thumbs for the node.|
|Tooltip|Enables or disables tooltip for the Nodes.|
|InheritTooltip|Enables or disables inherit tooltip option from the parent object.|
|Resize|Enables or Disables the expansion or compression of a node.|
|Inherit|Enables the node to inherit the interaction option from the parent object.|
|Expandable|Enables node to provide Expandable option|
|AllowMovingOutsideLane| Enables or disables child in parent for the swimLane node |
|Default|Enables all default constraints for the node.|

The following example illustrates how to disable rotation using the node constraints.

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
        this.nodeConstraints = NodeConstraints.Default & ~NodeConstraints.Rotate;
    }
}
```

The following example shows how to add Shadow constraint to the default constraints of node.

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
        this.nodeConstraints = NodeConstraints.Default | NodeConstraints.Shadow ;
    }
}
```

The following code example shows how the tooltip can be enabled for the node.

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { NodeConstraints, DiagramTooltipModel } from "@syncfusion/ej2-angular-diagrams";

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [height]=60 [width]=100 [offsetX]=300 [offsetY]=80 [constraints]='nodeConstraints' [tooltip]='tooltip'>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild("diagram")
    public nodeConstraints: NodeConstraints;
    public tooltip: DiagramTooltipModel;
    ngOnInit(): void {
        this.nodeConstraints = NodeConstraints.Default | NodeConstraints.Tooltip ;
        this.tooltip = {content: 'Node'},
    }
}
```

Multiple behaviors can be added or removed from the default constraints using the `Bitwise Operations`.

The following code example shows how to remove rotate and resize constraints from node.

```typescript
@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [height]=60 [width]=100 [offsetX]=300 [offsetY]=80 [constraints]='nodeConstraints' [tooltip]='tooltip'>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild("diagram")
    public nodeConstraints: NodeConstraints;
    ngOnInit(): void {
        this.nodeConstraints = NodeConstraints.Default &~ NodeConstraints.Rotate | NodeConstraints.Resize ;
    }
}
```
Refer sample below

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/constraints/constraints-cs1" %}

For more information about node constraints, refer to [`NodeConstraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeConstraints/).

N>By default, the following constraints are enabled for the node,
<br/>* Select
<br/>* Drag
<br/>* Resize
<br/>* Rotate
<br/>* InConnect
<br/>* OutConnect
<br/>* PointerEvents
<br/>* ResizeNorthEast
<br/>* ResizeEast
<br/>* ResizeSouthEast
<br/>* ResizeSouth
<br/>* ResizeSouthWest
<br/>* ResizeWest
<br/>* ResizeNorthWest
<br/>* ResizeNorth
<br/>* Inherit
<br/>* Expandable
<br/>* Individual
<br/>* InheritTooltip
<br/>* Default

## Connector constraints

Connector constraints allow to enable or disable certain behaviors of connectors.

| Constraints | Description |
| -------- | -------- |
|None|Disable all connector Constraints.|
|Select|Enables or disables connector to be selected.|
|Delete|Enables or disables connector to be deleted.|
|Drag|Enables or disables connector to be dragged.|
|DragSourceEnd|Enables connectors source end to be selected.|
|DragTargetEnd|Enables connectors target end to be selected.|
|DragSegmentThumb|Enables control point and end point of every segment in a connector for editing.|
|Interaction|Enables or disables Interaction for the connector.|
|AllowDrop|Enables allow drop support to the connector.|
|Bridging|Enables bridging to the connector.|
|InheritBridging|Enables to inherit bridging option from the parent object.|
|BridgeObstacle| Enables or Disables Bridge Obstacles with overlapping of connectors.|
|PointerEvents|Enables to set the pointer events.|
|ConnectToNearByNode|Enables to connect to the nearest node.|
|ConnectToNearByPort|Enables to connect to the nearest port.|
|Tooltip|Enables or disables tooltip for the connectors.|
|LineRouting| Enables or disables routing to the connector.|
|InheritLineRouting|Enables or disables routing to the connector. |
|InheritTooltip|Enables or disables inherit tooltip option from the parent object
|ConnectToNearByElement|Enables to connect to the nearest elements.|
|InheritSegmentThumbShape|Enables or disables to inherit the value of segmentThumbShape.|
|ReadOnly|Enables or disables readonly for the connector.|
|Default|Enables all constraints for the connector.|

The following code illustrates how to disable selection by using connector constraints.

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { ConnectorConstraints, PointModel } from "@syncfusion/ej2-angular-diagrams";

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px">
        <e-connectors>
            <e-connector id='connector' type='Straight' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [constraints]='connectorConstraints'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public connectorConstraints: ConnectorConstraints;
    public sourcePoint: PointModel;
    public targetPoint:PointModel;
    ngOnInit(): void {
        this.sourcePoint: { x: 100, y: 100 },
        this.targetPoint: { x: 200, y: 200 },
        this.connectorConstraints = ConnectorConstraints.Default & ~ConnectorConstraints.Select;
    }
}
```

The following example shows how to add Bridging constraint to the default constraints of connector.

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { ConnectorConstraints, PointModel } from "@syncfusion/ej2-angular-diagrams";

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px">
        <e-connectors>
            <e-connector id='connector' type='Straight' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [constraints]='connectorConstraints'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild("diagram")
    public connectorConstraints: ConnectorConstraints;
    public sourcePoint: PointModel;
    public targetPoint:PointModel;
    ngOnInit(): void {
        this.sourcePoint: { x: 100, y: 100 },
        this.targetPoint: { x: 200, y: 200 },
        this.connectorConstraints = ConnectorConstraints.Default | ConnectorConstraints.Bridging;
    }
}
```

N> To visualize connector bridging, we need to inject ConnectorBridgin module.

The following example shows how to add Bridging constraint to the default constraints of connector.

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { ConnectorConstraints, DiagramTooltipModel, PointModel } from "@syncfusion/ej2-angular-diagrams";

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px">
        <e-connectors>
            <e-connector id='connector' type='Straight' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [constraints]='connectorConstraints' [tooltip]='tooltip'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild("diagram")
    public connectorConstraints: ConnectorConstraints;
    public sourcePoint: PointModel;
    public targetPoint:PointModel;
    public tooltip: DiagramTooltipModel;
    ngOnInit(): void {
        this.sourcePoint: { x: 100, y: 100 },
        this.targetPoint: { x: 200, y: 200 },
        this.connectorConstraints = ConnectorConstraints.Default | ConnectorConstraints.Tooltip;
        this.tooltip = {content: 'Connector'},
    }
}
```

The connector constraints are provided as flagged enumerations, so that multiple behaviors can be added or removed from the default constraints using the Bitwise Operations.

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { ConnectorConstraints, PointModel } from "@syncfusion/ej2-angular-diagrams";

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px">
        <e-connectors>
            <e-connector id='connector' type='Straight' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [constraints]='connectorConstraints'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild("diagram")
    public connectorConstraints: ConnectorConstraints;
    public sourcePoint: PointModel;
    public targetPoint:PointModel;
    ngOnInit(): void {
        this.sourcePoint: { x: 100, y: 100 },
        this.targetPoint: { x: 200, y: 200 },
        //Removing multiple constraints from default.
        this.connectorConstraints = ConnectorConstraints.Default &~ (ConnectorConstraints.DragSourceEnd | ConnectorConstraints.DragTargetEnd);
    }
}
```

Refer sample below

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/constraints/constraints-cs2" %}

For more information about connector constraints, refer to [`ConnectorConstraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectorConstraints/).

N>By default, the following constraints are enabled for the connector,
<br/>* Select
<br/>* Delete
<br/>* Drag
<br/>* Interaction
<br/>* ConnectToNearByNode
<br/>* ConnectToNearByPort
<br/>* ConnectToNearByElement
<br/>* BridgeObstacle
<br/>* InheritBridging
<br/>* PointerEvents
<br/>* InheritLineRouting
<br/>* InheritTooltip
<br/>* InheritSegmentThumbShape
<br/>* Default

## Port constraints

The constraints property of the Port allows you to enable or disable the following behaviors of port.

| Constraints | Description |
| -------- | -------- |
|None|Disable all port Constraints.|
|Draw|Enables to create the connection when mouse hover on the port.|
|Drag|Enables or disables port dragging|
|InConnect|Enables or disables to connect only the target end of connector.|
|OutConnect|Enables or disables to connect only the source end of connector.|
|ToolTip|Enables or disables the Tooltip  for the ports.|
|InheritTooltip|Enables or disables the Tooltip for the ports.|
|Default|Enables all constraints for the port.|

The following code illustrates how to disable creating connections with a port.

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
            constraints: PortConstraints.None
        }];
    }
}
```

The following code example shows how to modify the port constraints to accept target connection alone.

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

The port constraints are provided as flagged enumerations, so that multiple behaviors can be added or removed from the default constraints using the Bitwise Operations.

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
            constraints: PortConstraints.Default | PortConstraints.Draw;
        }];
    }
}
```

Refer sample below

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/constraints/constraints-cs3" %}

For more information about port constraints, refer to [`PortConstraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/portConstraints/).

N> By default, the following constraints are enabled for the port,
<br/>* InConnect
<br/>* OutConnect

## Annotation constraints

The constraints property of the Annotations allows you to enable or disable certain behaviors of annotation.

| Constraints | Description |
| -------- | -------- |
|ReadOnly|Enables or disables the ReadOnly Constraints,|
|InheritReadOnly|Enables or disables to inherit the ReadOnly option from the parent object.|
|Select|Enables or Disable select support for the annotation|
|Drag|Enables or Disable drag support for the annotation|
|Resize| Enables or Disable resize support for the annotation |
|Rotate| Enables or Disable rotate support for the annotation|
|Interaction|Enables interaction of annotation|
|None|Disables all constraints for the annotation.|

The read-only mode for the annotation is enabled by settings ReadOnly constraints to the annotation.

The following code illustrates how to enable read-only mode for the annotations.

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { AnnotationConstraints } from "@syncfusion/ej2-angular-diagrams";

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [height]=60 [width]=100 [offsetX]=300 [offsetY]=80>
            <e-node-annotations>
                <e-node-annotation content='Start' [constraints]='annotationConstraints'></e-node-annotation>
            </e-node-annotations>
        </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public annotationConstraints: AnnotationConstraints;
    ngOnInit(): void {
        this.annotationConstraints = AnnotationConstraints.ReadOnly;
    }
}
```

Interactions such as select, drag, resize, and rotate can be enabled for the annotation as shown below.

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { AnnotationConstraints } from "@syncfusion/ej2-angular-diagrams";

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [height]=60 [width]=100 [offsetX]=300 [offsetY]=80>
            <e-node-annotations>
                <e-node-annotation content='Start' [constraints]='annotationConstraints'></e-node-annotation>
            </e-node-annotations>
        </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public annotationConstraints: AnnotationConstraints;
    ngOnInit(): void {
        this.annotationConstraints = AnnotationConstraints.Select | AnnotationConstraints.Drag | AnnotationConstraints.Resize | AnnotationConstraints.Rotate,
    }
}
```

Refer sample below

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/constraints/constraints-cs4" %}

For more details about annotation constraints, refer to [`AnnotationConstraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationConstraints#AnnotationConstraints/).

## Selector constraints

Selector visually represents the selected elements with certain editable thumbs. The visibility of the thumbs can be controlled with selector constraints. The part of selector is categorized as follows:

| Constraints | Description |
| -------- | -------- |
|None|Hides all the selector elements.|
|ConnectorSourceThumb|Shows or hides the source thumb of the connector.|
|ConnectorTargetThumb|Shows or hides the target thumb of the connector.|
|ResizeSouthEast|Shows or hides the bottom right resize handle of the selector.|
|ResizeSouthWest|Shows or hides the bottom left resize handle of the selector.|
|ResizeNorthEast|Shows or hides the top right resize handle of the selector.|
|ResizeNorthWest|Shows or hides the top left resize handle of the selector.|
|ResizeEast|Shows or hides the middle right resize handle of the selector.|
|ResizeWest|Shows or hides the middle left resize handle of the selector.|
|ResizeSouth|Shows or hides the bottom center resize handle of the selector.|
|ResizeNorth|Shows or hides the top center resize handle of the selector.|
|Rotate|Shows or hides the rotate handle of the selector.|
|UserHandle|Shows or hides the user handles of the selector.|
|ToolTip| Shows or hides the default tooltip for the drag, resize, and rotate operation of nodes and connectors. |
|ResizeAll|Shows or hides all resize handles of the selector.|
|All|Shows all handles of the selector.|

The following code illustrates how to hide rotator.

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SelectorModel, SelectorConstraints } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [selectedItems]='selectedItems'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public selectedItems: SelectorModel;
    ngOnInit(): void {
        this.selectedItems = { constraints: SelectorConstraints.All & ~SelectorConstraints.Rotate };
    }
}
```

The following code demonstrates how to hide the default tooltip during the drag, resize, and rotate operations on nodes:

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SelectorModel, SelectorConstraints } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [selectedItems]='selectedItems'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public selectedItems: SelectorModel;
    ngOnInit(): void {
        this.selectedItems = { constraints: SelectorConstraints.All & ~SelectorConstraints.Tooltip };
    }
}
```

The following code example shows how to disable the userhandle functionality for the selected item.

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SelectorModel, SelectorConstraints } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [selectedItems]='selectedItems'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public selectedItems: SelectorModel;
    ngOnInit(): void {
        this.selectedItems = { constraints: SelectorConstraints.All & ~SelectorConstraints.UserHandle };
    }
}
```

Refer sample below

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/constraints/constraints-cs5" %}


For more information about selector constraints, refer to [`SelectorConstraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/selectorConstraints/).

N> By default, the following constraints are enabled for the selected items,
<br/>* Rotate
<br/>* UserHandel
<br/>* ResizeAll
<br/>* All
<br/>* ToolTip

## Snap constraints

Snap constraints control the visibility of gridlines and enable/disable snapping.

The following list of snapping constraints are used to enable or disable certain features of snapping.

| Constraints | Description |
| -------- | -------- |
|None|Disable snapping for the nodes/connectors in diagram.|
|ShowHorizontalLines|Displays only the horizontal gridlines in diagram.|
|ShowVerticalLines|Displays only the Vertical gridlines in diagram.|
|ShowLines|Display both Horizontal and Vertical gridlines.|
|SnapToHorizontalLines|Enables the object to snap only with horizontal gridlines.|
|SnapToVerticalLines|Enables the object to snap only with Vertical gridlines.|
|SnapToLines|Enables the object to snap with both horizontal and Vertical gridlines.|
|SnapToObject|Enables the object to snap with the other objects in the diagram.|
|All|Shows gridlines and enables snapping.|

The following code illustrates how to show only horizontal gridlines.

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SnapSettingsModel, SnapConstraints } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [snapSettings]='snapSettings'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public snapSettings: SnapSettingsModel;
    ngOnInit(): void {
        this.snapSettings: {
            constraints: SnapConstraints.ShowHorizontalLines
        };
    }
}
```

The snap constraints are provided as flagged enumerations, so that multiple behaviors can be added or removed from the default constraints using the Bitwise Operations.

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SnapSettingsModel, SnapConstraints } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [snapSettings]='snapSettings'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public snapSettings: SnapSettingsModel;
    ngOnInit(): void {
        this.snapSettings: {
            constraints: SnapConstraints.ShowHorizontalLines | SnapConstraints.ShowVerticalLines
        };
    }
}
```

Refer sample below

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/constraints/constraints-cs6" %}

For more information about snap constraints, refer to [`SnapConstraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/snapConstraints/).

N> By default, the following constraints are enabled for the snap functionality in the diagram,
<br/>* ShowLines
<br/>* ShowVerticalLines
<br/>* ShowHorizontalLines
<br/>* SnapToLines
<br/>* SnapToHorizontalLines
<br/>* SnapToVerticalLines
<br/>* SnapToObject
<br/>* All

## Boundary constraints

Boundary constraints defines a boundary for the diagram inside which the interaction should be done.

The following list of constraints are used to enable or disable certain features of boundary interactions of the diagram.

| Constraints | Description |
| -------- | -------- |
|Infinity|Allow the interactions to take place at the infinite height and width.|
|Diagram|Allow the interactions to take place around the diagram height and width.|
|Page|Allow the interactions to take place around the page height and width.|

The following code illustrates how to limit the interaction done inside a diagram within a page.

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { PageSettingsModel, BoundaryConstraints } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [pageSettings]='pageSettings'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public pageSettings: PageSettingsModel;
    ngOnInit(): void {
        this.pageSettings: {
            boundaryConstraints: 'Page'
        };
    }
}
```

Refer sample below

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/constraints/constraints-cs7" %}

For more information about selector constraints, refer to [`BoundaryConstraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/boundaryConstraints/).

## Inherit behaviors

Some of the behaviors can be defined through both the specific object (node/connector) and diagram. When the behaviors are contradictorily defined through both, the actual behavior is set through inherit options.

The following code example illustrates how to inherit the line bridging behavior from the diagram model.

```typescript

import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { DiagramConstraints, ConnectorBridging, ConnectorConstraints, PointModel } from "@syncfusion/ej2-angular-diagrams";
Diagram.Inject(ConnectorBridging);

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px" [constraints]='diagramConstraints'>
        <e-connectors>
            <e-connector id='connector' type='Straight' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [constraints]='connectorConstraints'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagramConstraints: DiagramConstraints;
    public connectorConstraints: ConnectorConstraints;
    public sourcePoint: PointModel;
    public targetPoint:PointModel;
    ngOnInit(): void {
        this.diagramConstraints = DiagramConstraints.Default | DiagramConstraints.Bridging;
        this.sourcePoint: { x: 100, y: 100 },
        this.targetPoint: { x: 200, y: 200 },
        this.connectorConstraints = ConnectorConstraints.Default & ConnectorConstraints.InheritBridging;
    }
}
```

## Bitwise operations

Bitwise operations are used to manipulate the flagged enumerations [enum]. In this section, Bitwise operations are illustrated by using node constraints. The same is applicable while working with node constraints, connector constraints, or port constraints.

## Add operation

You can add or enable multiple values at a time by using Bitwise `|` (OR) operator.

```typescript
node.constraints = NodeConstraints.Select | NodeConstraints.Rotate;
```

In the previous example, you can do both the selection and rotation operation.

## Remove Operation

You can remove or disable values by using Bitwise ‘&~’ (XOR) operator.

```typescript
node.constraints = node.constraints & ~(NodeConstraints.Rotate);
```

In the previous example, rotation is disabled but other constraints are enabled.

## Check operation

You can check any value by using Bitwise ‘&’ (AND) operator.

```typescript
if ((node.constraints & (NodeConstraints.Rotate)) == (NodeConstraints.Rotate));
```

In the previous example, check whether the rotate constraints are enabled in a node. When node constraints have rotate constraints, the expression returns a rotate constraint.