import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, ConnectorModel, PointModel, ConnectorEditing, ConnectorConstraints, ISegmentChangeEventArgs } from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(ConnectorEditing);

@Component({
    imports: [DiagramModule],

    providers: [],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (segmentChange)="segmentChange($event)" [getConnectorDefaults] ='getConnectorDefaults'>
        <e-connectors>
            <e-connector id='connector1' type='Straight'[sourcePoint]='sourcePoint' [targetPoint]='targetPoint' >
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
    public segments: any;

    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 200, y: 200 };
    };

    public segmentChange = function (args: ISegmentChangeEventArgs): void {
        if (args.state === 'Completed') {
            console.log('segmentChange');
        };
    };

    public getConnectorDefaults(connector: ConnectorModel): void {
        connector.segments = [{ type: 'Straight', point: { x: 170, y: 150 } }]
        connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
    };
};