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
  template: `<button (click)='updatePorts()'>Update Ports</button>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" >
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [width]=100 [height]=100 [ports]='ports'></e-node>
        </e-nodes>
    </ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public ports: PointPortModel[] = [
        {
            id: 'port1',
            offset: { x: 0, y: 0.5 },
            visibility: PortVisibility.Visible,
        },
    ]

    // Method to add ports through run time
    updatePorts(){
        ((this.diagram as Diagram).nodes[0] as any).ports[0].offset = {
            x: 1,
            y: 1
        };
        (this.diagram as Diagram).dataBind();
    }
}


