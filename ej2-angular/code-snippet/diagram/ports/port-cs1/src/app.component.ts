import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule,DiagramComponent, PointPortModel, PortVisibility } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [offsetX]=250 [offsetY]=250 [width]=100 [height]=100  [ports]='ports'></e-node>
        </e-nodes>
    </ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public ports: PointPortModel[] = [{
        // Define a port with an ID to connect a connector to it
        id:'ports1',
        // Sets the position for the port
        offset: {
            x: 0.5,
            y: 0.5
        },
        visibility: PortVisibility.Visible
    }]
    
}


