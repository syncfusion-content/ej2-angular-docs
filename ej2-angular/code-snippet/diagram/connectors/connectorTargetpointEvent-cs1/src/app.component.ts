import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, ConnectorModel, PointModel, IEndChangeEventArgs } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [DiagramModule],

    providers: [],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (targetPointChange)="targetPointChange($event)" >
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

    public targetPointChange = function (args: IEndChangeEventArgs): void {
        if (args.state === 'Completed') {
            console.log('targetPointChange');
        };
    };
};