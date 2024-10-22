import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, PathPortModel, PortVisibility, PointModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],
providers: [ ],
standalone: true,
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px">
         <e-connectors>
            <e-connector id='connector' type='Orthogonal' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [ports]='ports1'>
            </e-connector>
            <e-connector id='connector1' type='Orthogonal' [sourcePoint]='sourcePoint1' [targetPoint]='targetPoint1' [ports]='ports2' >
            </e-connector>
        </e-connectors>
    </ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent; 
    public sourcePoint?: PointModel;
    public targetPoint?: PointModel;
    public sourcePoint1?: PointModel;
    public targetPoint1?: PointModel;
    
    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 200 };
        this.targetPoint = { x: 100, y: 320 };
        this.sourcePoint1 = { x: 300, y: 200 };
        this.targetPoint1 = { x: 500, y: 220 };
    }

    public ports1: PathPortModel[] = [{

        alignment: 'Before',
        displacement: { x: 50, y: 0 },
        visibility: PortVisibility.Visible,
        
    }]
    public ports2: PathPortModel[] = [{

        alignment: 'Before',
        displacement: { x: 0, y: 50 },
        visibility: PortVisibility.Visible,
        
    }]

}


