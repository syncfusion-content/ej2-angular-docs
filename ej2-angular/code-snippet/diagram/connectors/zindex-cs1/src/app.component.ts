

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, ConnectorModel, DecoratorModel, PointModel, ConnectorConstraints } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getConnectorDefaults] ='getConnectorDefaults'>
        <e-connectors>
            <e-connector id='connector1' type='Straight' zIndex=2 [sourcePoint]='sourcePoint1' [targetPoint]='targetPoint1'></e-connector>
            <e-connector id='connector2' type='Straight' zIndex=1 [sourcePoint]='sourcePoint2' [targetPoint]='targetPoint2'></e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public sourcePoint1?: PointModel;
    public targetPoint1?: PointModel;
    public sourcePoint2?: PointModel;
    public targetPoint2?: PointModel;
    ngOnInit(): void {
        this.sourcePoint1 = { x: 100, y: 100 };
        this.targetPoint1 = { x: 200, y: 200 };
        this.sourcePoint2 = { x: 200, y: 100 };
        this.targetPoint2 = { x: 100, y: 200 };
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
}



