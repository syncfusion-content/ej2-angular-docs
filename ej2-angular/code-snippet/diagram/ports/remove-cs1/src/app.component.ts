import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, Diagram, DiagramComponent, PointPortModel, PortVisibility } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" >
        <e-nodes>
            <e-node id='node1' [offsetX]=250 [offsetY]=250 [width]=100 [height]=100 [ports]='ports'></e-node>
        </e-nodes>
    </ejs-diagram>
    <button (click)='removePorts()'>Remove Ports</button>`
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public ports: PointPortModel[] = [
        {
            id: 'port1',
            offset: {
                x: 0,
                y: 0.5
            },
            visibility: PortVisibility.Visible
        },
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
        },
        {
            id: 'port4',
            offset: {
                x: 0.5,
                y: 1
            },
            visibility: PortVisibility.Visible
        }
    ]
    // Method to remove ports through run time
    removePorts(){
        // Parameters:
        // - node: The node to which the port will be removed.
        // - port: The port collection to be removed to the node.
        (this.diagram as Diagram).removePorts((this.diagram as Diagram).nodes[0] as any, this.ports);
    }
}


