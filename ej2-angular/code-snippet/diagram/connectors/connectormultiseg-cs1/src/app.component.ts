import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram, ConnectorModel, ConnectorEditing, ConnectorConstraints } from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(ConnectorEditing);

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="600px" [connectors]='connectors'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    @ViewChild('diagram')
    public diagram?: DiagramComponent;
    public connectors: ConnectorModel[] = [
        {
            id: 'connector1',
            type: 'Orthogonal',
            segments: [{
                type: 'Orthogonal',
                direction: 'Bottom',
                length: 150,
            },
            {
                type: 'Orthogonal',
                direction: 'Right',
                length: 150,
            },
            {
                type: 'Orthogonal',
                direction: 'Top',
                length: 100,
            },
            {
                type: 'Orthogonal',
                direction: 'Left',
                length: 100,
            }],
            sourcePoint: { x: 300, y: 100 },
            targetPoint: { x: 350, y: 150 },
            constraints: ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb
        },
        {
            id: 'connector2',
            type: 'Bezier',
            constraints: ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
            segments: [
                { point: { x: 150, y: 150 }, type: 'Bezier' },
                { point: { x: 250, y: 250 }, type: 'Bezier' },
            ],
            sourcePoint: { x: 100, y: 100 },
            targetPoint: { x: 300, y: 300 },
        },
        {
            id: 'connector3',
            type: 'Straight',
            constraints: ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
            segments: [
                { point: { x: 500, y: 200 }, type: 'Straight' },
                { point: { x: 600, y: 300 }, type: 'Straight' },
            ],
            sourcePoint: { x: 600, y: 100 },
            targetPoint: { x: 800, y: 300 },
        }
    ];

}


