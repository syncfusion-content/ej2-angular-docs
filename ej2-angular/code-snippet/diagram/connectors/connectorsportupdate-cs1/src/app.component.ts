import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, NodeModel, PointPortModel ,PortVisibility, ShapeStyleModel} from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `
     <button (click)="Update()">Update</button>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' >
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
            <e-connector id='connector' type='Orthogonal' sourceID='node1' sourcePortID='port1' targetID='node2' targetPortID='port3'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public port1: PointPortModel[] = [
        {
        id: 'port1',
        offset: {
            x: 0,
            y: 0.5
        },
        shape: 'X',
        visibility: PortVisibility.Visible
        
    },
    {
        id: 'port2',
        offset: {
            x: 1,
            y: 0.5
        },
        shape: 'Circle',
        visibility: PortVisibility.Visible
    },
]
    public port2: PointPortModel[] = [
        {
            id: 'port3',
            offset: {
                x: 0.5,
                y: 0
            },
            visibility: PortVisibility.Visible
        },
        {
            id: 'port4',
            offset: {
                x: 0.5,
                y: 1
            },
            shape: 'Circle',
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
    Update()
    {
        //update port at runtime
        if (this.diagram ) {
            this.diagram.connectors[0].sourcePortID = 'port2';
            this.diagram.connectors[0].targetPortID = 'port4';
            this.diagram.dataBind(); // Assuming dataBind is a method of the diagram
          }
    }
}


