import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram, OrthogonalSegmentModel,  ConnectorEditing, PointModel,ConnectorConstraints } from '@syncfusion/ej2-angular-diagrams';
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
            <e-connector id='connector' type='Orthogonal' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [segments]='segments' [constraints]= "constraints" [maxSegmentThumb]='maxSegmentThumb'>
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
    public maxSegmentThumb?: number;
    public constraints ?: ConnectorConstraints ;

    ngOnInit(): void {
        this.maxSegmentThumb = 4;
        this.constraints =ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
        this.sourcePoint = { x: 300, y: 100 };
        this.targetPoint = { x: 350, y: 150 };
        this.segments = [
            { type: 'Orthogonal', direction: 'Bottom', length: 150 },
            { type: 'Orthogonal', direction: 'Right', length: 150 },
            { type: 'Orthogonal', direction: 'Top', length: 100 },
            { type: 'Orthogonal', direction: 'Left', length: 100 }
        ];
    };

   
};