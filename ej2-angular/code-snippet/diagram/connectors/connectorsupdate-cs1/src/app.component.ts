

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, PointModel, StrokeStyleModel, DecoratorModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getConnectorDefaults] ='getConnectorDefaults'  (created)='created($event)'>
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
    public getConnectorDefaults(obj: ConnectorModel): void {
        obj.style = {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        }
        obj.targetDecorator = {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        }
    }
    public created(args: Object): void {
        // Update the connector properties at the run time
        ((this.diagram as DiagramComponent).connectors[0].style as StrokeStyleModel).strokeColor = '#6BA5D7';
        ((this.diagram as DiagramComponent).connectors[0].style as StrokeStyleModel).fill = '#6BA5D7';
        ((this.diagram as DiagramComponent).connectors[0].style as StrokeStyleModel).strokeWidth = 2;
        (((this.diagram as DiagramComponent).connectors[0].targetDecorator as DecoratorModel).style as StrokeStyleModel).fill = '#6BA5D7';
        (((this.diagram as DiagramComponent).connectors[0].targetDecorator as DecoratorModel).style as ShapeStyleModel).strokeColor = '#6BA5D7';
        ((this.diagram as DiagramComponent).connectors[0].sourcePoint as PointModel).x = 150;
        ((this.diagram as DiagramComponent).connectors[0].targetPoint as PointModel).x = 150;
        (this.diagram as DiagramComponent).dataBind();
    }
}


