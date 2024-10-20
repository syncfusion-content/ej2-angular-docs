import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, PointModel, ICollectionChangeEventArgs } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [DiagramModule],

    providers: [],
    standalone: true,
    selector: 'app-container',
    template: `
    <input type="button" value="Add" id="add" (click)="onAddClick()"/>
    <input type="button" value="Remove" id="remove" (click)="onRemoveClick()"/>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" (collectionChange)="collectionChange($event)" >
        <e-connectors>
            <e-connector id='connector1' type='Straight'[sourcePoint]='sourcePoint1' [targetPoint]='targetPoint1' >
            </e-connector>
            <e-connector id='connector2' type='Straight'[sourcePoint]='sourcePoint2' [targetPoint]='targetPoint2' >
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
    @ViewChild('diagram')
    public diagram?: DiagramComponent;
    public sourcePoint1?: PointModel;
    public targetPoint1?: PointModel;
    public sourcePoint2?: PointModel;
    public targetPoint2?: PointModel;

    ngOnInit(): void {
        this.sourcePoint1 = { x: 100, y: 100 };
        this.targetPoint1 = { x: 200, y: 200 };
        this.sourcePoint2 = { x: 300, y: 100 };
        this.targetPoint2 = { x: 400, y: 200 };
    };

    public collectionChange = function (args: ICollectionChangeEventArgs): void {
        if (args.state === 'Changed') {
            console.log('collectionChange');
        };
    };

    public onAddClick(): void {
        let connector = {
            type: 'Straight',
            style: { strokeColor: '#6BA5D7' },
            sourcePoint: { x: 100, y: 300 },
            targetPoint: { x: 200, y: 500 }
        };
        (this.diagram as DiagramComponent).add(connector);
    };

    public onRemoveClick(): void {
        (this.diagram as DiagramComponent).remove((this.diagram as DiagramComponent).connectors[0]);
    };
};