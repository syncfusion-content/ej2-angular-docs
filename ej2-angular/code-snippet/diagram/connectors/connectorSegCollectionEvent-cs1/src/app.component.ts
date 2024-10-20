import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram, PointModel, ConnectorEditing, ConnectorConstraints, ISegmentCollectionChangeEventArgs } from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(ConnectorEditing);

@Component({
    imports: [DiagramModule],

    providers: [],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (segmentCollectionChange)="segmentCollectionChange($event)" >
        <e-connectors>
            <e-connector id='connector1' type='Straight'[sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [constraints] ='constraints'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
    @ViewChild('diagram')
    public diagram?: DiagramComponent;
    public sourcePoint?: PointModel;
    public targetPoint?: PointModel;

    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 200, y: 200 };
    };

    public segmentCollectionChange = function (args: ISegmentCollectionChangeEventArgs): void {
        if (args.type === 'Addition') {
            console.log('segmentCollectionChange');
          };
    };    
    constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
};