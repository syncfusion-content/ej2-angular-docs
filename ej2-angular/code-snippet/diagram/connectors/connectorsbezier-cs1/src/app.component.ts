

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, BezierSegmentModel, PointModel, OrthogonalSegmentModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getConnectorDefaults] ='getConnectorDefaults'>
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
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 200, y: 200 };
        this.segments = [
            {
                type: 'Bezier'
            }
        ]
    }
    public getConnectorDefaults(obj: ConnectorModel): void {
        obj.style = {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        }
        obj.targetDecorator = {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        }
    }
}


