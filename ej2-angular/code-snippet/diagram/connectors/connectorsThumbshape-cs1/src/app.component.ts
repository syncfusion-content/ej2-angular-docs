

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel,ConnectorEditing, ConnectorModel,ConnectorConstraints, OrthogonalSegmentModel, PointModel } from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(ConnectorEditing);

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="900px" height="500px" [getConnectorDefaults] ='getConnectorDefaults'>
        <e-connectors>
            <e-connector id='connector2' type='Orthogonal' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [segments]='segments'>
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
        this.sourcePoint = { x: 250, y: 250 };
        this.targetPoint = { x: 350, y: 350 };
        this.segments = [
            {
            type: 'Orthogonal',
            // Defines the direction for the segment lines
            direction: "Right",
            // Defines the length for the segment lines
            length: 70
            },
            {
            type: 'Orthogonal',
            direction: "Bottom",
            length: 20
            }
        ]
    }
    public getConnectorDefaults(connector: ConnectorModel): void {
        connector.style = {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        }
        connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
    }
}


