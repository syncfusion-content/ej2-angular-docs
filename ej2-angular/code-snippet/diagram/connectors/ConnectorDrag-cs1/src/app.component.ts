import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, DecoratorModel, PointModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `
    <input type="button" id="drag" value="Drag" (click)="drag()" />
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" >
            <e-connectors>
                <e-connector id='connector' type='Straight' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [targetDecorator]='targetDecorator'>
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
    public targetDecorator?: DecoratorModel;

    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 200, y: 200 };

    };
    public drag(): void {
        if (this.diagram) {
            let connector = this.diagram.connectors[0];
            this.diagram.drag(connector, 20, 20);
        };
    };
};