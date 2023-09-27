

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, PointPortModel ,PortVisibility, ShapeStyleModel} from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'  (created)='created($event)'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [ports]='port1'>
                <e-node-annotations>
                    <e-node-annotation content="Node1">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [offsetX]=350 [offsetY]=150 [ports]='port2'>
                <e-node-annotations>
                    <e-node-annotation content="Custom Template">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector' type='Straight' sourceID='node1' sourcePortID='port1' targetID='node2' targetPortID='port2'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public port1: PointPortModel[] = [{
        id: 'port1',
        offset: {
            x: 0,
            y: 0.5
        },
        visibility: PortVisibility.Visible
    }]
    public port2: PointPortModel[] = [
        {
            id: 'port2',
            offset: {
                x: 1,
                y: 0.5
            },
            visibility: PortVisibility.Visible
        },
        {
            id: 'port3',
            offset: {
                x: 0.5,
                y: 0
            },
            visibility: PortVisibility.Visible
        }
    ]
    public getNodeDefaults(node: NodeModel | any): NodeModel {
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

    public created(args: Object): void {
        // Update the target portID at the run time
        (this.diagram as DiagramComponent).connectors[0].targetPortID = 'port3';
    }
}


