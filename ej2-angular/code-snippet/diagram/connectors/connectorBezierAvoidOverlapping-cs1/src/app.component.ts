

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel,ConnectorEditing, ConnectorConstraints,BezierSegmentModel, PointPortModel, ControlPointsVisibility, PortVisibility, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(ConnectorEditing);
@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="600px" [getNodeDefaults]='getNodeDefaults' [getConnectorDefaults] ='getConnectorDefaults'>
        <e-nodes>
            <e-node id='Start' [offsetX]=250 [offsetY]=150 [ports]='StartPort'>
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
            <e-connector id='connector1' type='Bezier' sourceID='Start' targetID='End'  sourcePortID='StartPort' targetPortID='EndPort' bezierSettings='bezierSettings'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
      encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public StartPort?:PointPortModel[];
    public EndPort?:PointPortModel[];
    public bezierSettings?: any;
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
        this.bezierSettings = { controlPointsVisibility: ControlPointsVisibility.Source | ControlPointsVisibility.Target };
    }
        public getNodeDefaults(node: NodeModel | any): NodeModel {
        node.height = 100;
        node.width = 100;
        node.shape = { type: 'Basic', shape: 'Rectangle' };
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        return node;
    }
    public getConnectorDefaults(connector: ConnectorModel): void {
     connector.style = {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    connector.targetDecorator = { shape: 'None' },
    connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
    }
}



