import { Component, ViewEncapsulation, ViewChild } from '@angular/core'
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
    </ejs-diagram>`,
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public ports: PointPortModel[] = [
        {
            offset: {
                x: 1,
                y: 0.5
            },
            visibility: PortVisibility.Visible,
            // Sets the shape of the port as Circle
            shape: 'Circle'
       },
       {
            offset: {
                x: 0,
                y: 0.5
            },
            visibility: PortVisibility.Visible,
            // Sets the shape of the port as Square
            shape: 'Square'
       },
       {
            offset: {
                x: 0.5,
                y: 0
            },
            visibility: PortVisibility.Visible,
            // Sets the shape of the port as X
            shape: 'X'
       },
       {
            offset: {
                x: 0.5,
                y: 1
            },
            visibility: PortVisibility.Visible,
            // Sets the shape of the port as Custom
            shape: 'Custom',
            pathData:
                'M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z',
        },
    ]

}


