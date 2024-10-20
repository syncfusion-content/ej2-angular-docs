import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, ConnectorModel, PointModel, ISelectionChangeEventArgs } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [DiagramModule],

    providers: [],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (selectionChange)="selectionChange($event)" >
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

    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 200, y: 200 };
    };

    public selectionChange = function (args: ISelectionChangeEventArgs): void {
        if (args.state === 'Changed') {
            console.log('selectionChange');
        };
    };
};