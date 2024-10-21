import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, PointModel, StrokeStyleModel, DecoratorModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: ` <button (click)="Update()">Update</button>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" >
        <e-connectors>
            <e-connector id='connector' type='Straight' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint'>
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
    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 200, y: 200 };
    }
    Update() {
        // Update the connector properties at the run time
        ((this.diagram as DiagramComponent).connectors[0].style as StrokeStyleModel).strokeColor = '#0000FF';
        ((this.diagram as DiagramComponent).connectors[0].style as StrokeStyleModel).fill = '#0000FF';
        ((this.diagram as DiagramComponent).connectors[0].style as StrokeStyleModel).strokeWidth = 2;
        (((this.diagram as DiagramComponent).connectors[0].targetDecorator as DecoratorModel).style as StrokeStyleModel).fill = '#0000FF';
        (((this.diagram as DiagramComponent).connectors[0].targetDecorator as DecoratorModel).style as ShapeStyleModel).strokeColor = '#0000FF';
        ((this.diagram as DiagramComponent).connectors[0].sourcePoint as PointModel).x = 150;
        ((this.diagram as DiagramComponent).connectors[0].targetPoint as PointModel).x = 150;
        (this.diagram as DiagramComponent).dataBind();
    }
}


