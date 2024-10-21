import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, ConnectorModel, DecoratorModel, PointModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `
    <input type="button" id="select" value="select" (click)="select()" />
  <input type="button" id="unSelect" value="unSelect" (click)='unSelect()'/>
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

    public select(): void {
        if (this.diagram) {
            this.diagram.select([this.diagram.connectors[0]]);
        }
    };

    public unSelect(): void {
        if (this.diagram) {
            this.diagram.clearSelection();
        };
    };
};