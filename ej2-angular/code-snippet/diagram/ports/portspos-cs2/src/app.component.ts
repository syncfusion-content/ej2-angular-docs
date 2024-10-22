import {Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, PointPortModel, PortVisibility } from '@syncfusion/ej2-angular-diagrams';

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
            <e-node id='node1' [offsetX]=200 [offsetY]=200 [width]=100 [height]=100 [ports]='ports1'>
                <e-node-annotations>
                    <e-node-annotation content=" margin:{left:50}">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
    </ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public ports1: PointPortModel[] = [{
        id: 'ports1',
        offset: { x: 1, y: 0 },
        visibility: PortVisibility.Visible,
        //set the margin of the ports
        margin: { left: 50 },
    }]
}


