import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {DiagramModule, DiagramComponent, PointPortModel, PortVisibility, PortConnectionDirection } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<button (click)='portDirection()'>Update Port Direction</button>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" >
        <e-nodes>
            <e-node id='node1' [offsetX]=200 [offsetY]=300 [width]=100 [height]=100 [ports]='port1'>
            </e-node>
            <e-node id='node2' [offsetX]=400 [offsetY]=200 [width]=100 [height]=100 [ports]='port2'>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector' type='Orthogonal' sourceID='node1' sourcePortID='port1' targetID='node2' targetPortID='port2'>
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
            x: 0.5,
            y: 0.5
        },
        visibility: PortVisibility.Visible,
        // Specify the connection Direction
        connectionDirection:'Right',
    }]
    public port2: PointPortModel[] = [
        {
            id: 'port2',
            offset: {
                x: 0,
                y: 0
            },
            visibility: PortVisibility.Visible,
             // Specify the connection Direction
            connectionDirection:'Left',
        },
       
    ]

    //update port connection direction through run time.
    portDirection(){
        let port = (this.diagram as any).nodes[0].ports[0];
        port.connectionDirection= 'Top';       
    }
}