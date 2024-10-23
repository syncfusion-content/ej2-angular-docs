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
            <e-connector id='connector2' type='Orthogonal' [sourcePoint]='sourcePoint2' [targetPoint]='targetPoint2' [ports]='ports3'>
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
    public sourcePoint2?: PointModel;
    public targetPoint2?: PointModel;
    
    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 200 };
        this.targetPoint = { x: 300, y: 220 };
        this.sourcePoint1 = { x: 320, y: 200 };
        this.targetPoint1 = { x: 500, y: 220 };
        this.sourcePoint2 = { x: 520, y: 200 };
        this.targetPoint2 = { x: 700, y: 220 };
    }

    public ports1: PathPortModel[] = [{

        offset: 0.5,
        alignment: 'Before',
        visibility: PortVisibility.Visible,
        
    }]
    public ports2: PathPortModel[] = [{

        offset: 0.5,
        alignment: 'Center',
        visibility: PortVisibility.Visible,
        
    }]
    public ports3: PathPortModel[] = [{

        offset: 0.5,
        alignment: 'After',
        visibility: PortVisibility.Visible,
        
    }]

}


