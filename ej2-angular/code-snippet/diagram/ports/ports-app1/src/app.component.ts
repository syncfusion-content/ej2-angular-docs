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
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" >
        <e-nodes>
            <e-node id='node1' [offsetX]=250 [offsetY]=250 [width]=100 [height]=100 [ports]='ports'></e-node>
        </e-nodes>
    </ejs-diagram>
    <button (click)="changeAppearance()">changeAppearance</button>`,
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public ports: PointPortModel[] = [{
        offset: {
            x: 1,
            y: 0.5
        },
        visibility: PortVisibility.Visible,
        //Set the style for the port
        style: {
            fill: 'red',
            strokeWidth: 2,
            strokeColor: 'black',
            opacity: 0.7,
            strokeDashArray: '2 2',
        },
        width: 12,
        height: 12,
        // Sets the shape of the port as Circle
        shape: 'Circle'
    }]

    //To change the appearance of the ports through run time
    changeAppearance(){
        let port = (this.diagram as any).nodes[0].ports[0];
        port.style.fill = 'yellow';
        port.style.opacity = 1;
        port.width = 25;
        port.height = 25;
        (this.diagram as any).dataBind();
    }
}


