

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel,ConnectorEditing, OrthogonalSegmentModel, PointModel } from '@syncfusion/ej2-angular-diagrams';
import {ConnectorConstraints} from '@syncfusion/ej2-diagrams';
Diagram.Inject(ConnectorEditing);
@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getConnectorDefaults] ='getConnectorDefaults'>
        <e-connectors>
            <e-connector id='connector' type='Orthogonal' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' maxSegmentThumb='maxSegmentThumb' [constraints] ='constraints' [segments]='segments'>
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
    public maxSegmentThumb?: number;
    public constraints ?: ConnectorConstraints ;
    public segments?: OrthogonalSegmentModel;
    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 200, y: 200 };
        this.maxSegmentThumb = 3;
        this.constraints =ConnectorConstraints.Default & ~ConnectorConstraints.DragSegmentThumb;
        this.segments = [{
            // Defines the segment type of the connector
            type: 'Orthogonal'
        }]
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


