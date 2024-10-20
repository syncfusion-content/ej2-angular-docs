import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, PointModel, ConnectorConstraints } from '@syncfusion/ej2-angular-diagrams';
@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" >
        <e-connectors>
          <e-connector id='connector1' type='Straight' [sourcePoint]='sourcePoint1' [targetPoint]='targetPoint1' [constraints]='constraints1'>
            <e-connector-annotations>
                    <e-connector-annotation content="Connector Selection disabled">
                    </e-connector-annotation>
                </e-connector-annotations>
            </e-connector>
        
            <e-connector id='connector2' type='Straight' [sourcePoint]='sourcePoint2' [targetPoint]='targetPoint2' [constraints]='constraints2'>
            <e-connector-annotations>
                    <e-connector-annotation content="Connector Drag disabled">
                    </e-connector-annotation>
                </e-connector-annotations>
            </e-connector>
       
            <e-connector id='connector3' type='Straight' [sourcePoint]='sourcePoint3' [targetPoint]='targetPoint3' [constraints]='constraints3'>
            <e-connector-annotations>
                    <e-connector-annotation content="Connector Source end disabled">
                    </e-connector-annotation>
                </e-connector-annotations>
            </e-connector>
        
            <e-connector id='connector4' type='Straight' [sourcePoint]='sourcePoint4' [targetPoint]='targetPoint4' [constraints]='constraints4'>
            <e-connector-annotations>
                    <e-connector-annotation content="Connector Target end disabled">
                    </e-connector-annotation>
                </e-connector-annotations>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public sourcePoint1?: PointModel;
    public targetPoint1?: PointModel;
    public sourcePoint2?: PointModel;
    public targetPoint2?: PointModel;
    public sourcePoint3?: PointModel;
    public targetPoint3?: PointModel;
    public sourcePoint4?: PointModel;
    public targetPoint4?: PointModel;
    public constraints1?: ConnectorConstraints;
    public constraints2?: ConnectorConstraints;
    public constraints3?: ConnectorConstraints;
    public constraints4?: ConnectorConstraints;
    ngOnInit(): void {
        this.sourcePoint1 = { x: 100, y: 100 };
        this.targetPoint1 = { x: 200, y: 200 };
        this.sourcePoint2 = { x: 300, y: 100 };
        this.targetPoint2 = { x: 400, y: 200 };
        this.sourcePoint3 = { x: 500, y: 100 };
        this.targetPoint3 = { x: 600, y: 200 };
        this.sourcePoint4 = { x: 700, y: 100 };
        this.targetPoint4 = { x: 800, y: 200 };
        this.constraints1 = ConnectorConstraints.Default & ~ConnectorConstraints.Select;
        this.constraints2 = ConnectorConstraints.Default & ~ConnectorConstraints.Drag;
        this.constraints3 = ConnectorConstraints.Default & ~ConnectorConstraints.DragSourceEnd;
        this.constraints4 = ConnectorConstraints.Default & ~ConnectorConstraints.DragTargetEnd;
    }
    
}


