import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, DiagramModule, ConnectorModel,  PointModel, OrthogonalSegmentModel,ConnectorEditing } from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(ConnectorEditing);
@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" >
        <e-connectors>
            <e-connector id='connector' type='Bezier' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [segments]='segments'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public sourcePoint?: PointModel;
    public targetPoint?: PointModel;
    public segments?: OrthogonalSegmentModel;
    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 200 };
        this.targetPoint = { x: 200, y: 100 };
        this.segments = [{
            type: 'Bezier',
            // First control point: an absolute position from the page origin
            point1: {
                x: 100,
                y: 100
            },
            // Second control point: an absolute position from the page origin
            point2: {
                x: 200,
                y: 200
            }
        }]
    }
}


