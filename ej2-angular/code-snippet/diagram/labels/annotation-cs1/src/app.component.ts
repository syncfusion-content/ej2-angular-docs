

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, PointModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' [getConnectorDefaults] ='getConnectorDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation content="Annotation">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector' type='Orthogonal' [sourcePoint]='sourcePoint1' [targetPoint]='targetPoint1'>
                <e-connector-annotations>
                    <e-connector-annotation content='Annotation'>
                    </e-connector-annotation>
                </e-connector-annotations>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public sourcePoint1?: PointModel;
    public targetPoint1?: PointModel;
    ngOnInit(): void {
        this.sourcePoint1 = { x: 300, y: 100 };
        this.targetPoint1 = { x: 400, y: 300 };
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        return node;
    }
    public getConnectorDefaults(obj: ConnectorModel): void {
        obj.style = {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        }
        obj.targetDecorator = {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        }
    }
}


