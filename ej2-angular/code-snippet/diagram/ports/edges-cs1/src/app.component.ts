import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule,DiagramComponent, PointPortModel, PortVisibility } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<button (click)='getInEdges()'>Get InEdges</button>
    <button (click)='getOutEdges()'>Get OutEdges</button>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [offsetX]=250 [offsetY]=250 [width]=100 [height]=100 [ports]='port1'>
            </e-node>
            <e-node id='node2' [offsetX]=250 [offsetY]=400 [width]=100 [height]=100 [ports]='port2'>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector1' type='Orthogonal' sourceID='node1' sourcePortID='port1' targetID='node2' targetPortID='port3'>
            </e-connector>
            <e-connector id='connector2' type='Orthogonal' sourceID='node2' sourcePortID='port4' targetID='node1' targetPortID='port2'>
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
            visibility: PortVisibility.Visible,
        }, 
        {
            id: 'port2',
            offset: {
                x: 0.5,
                y: 0
            },
            visibility: PortVisibility.Visible,
        },  
    ]
    public port2: PointPortModel[] = [
        {
            id: 'port3',
            offset: {
                x: 0,
                y: 0.5
            },
            visibility: PortVisibility.Visible,
        },  
        {
            id: 'port4',
            offset: {
                x: 0.5,
                y: 1
            },
            visibility: PortVisibility.Visible,
        }
    ]

    //get in edges
    getInEdges(){
        let port = (this.diagram as any).nodes[0].ports[1];
        console.log(port.inEdges[0]);      
    }

    // get out edges
    getOutEdges(){
        let port = (this.diagram as any).nodes[0].ports[0];
        console.log(port.outEdges[0]);      
    }
}