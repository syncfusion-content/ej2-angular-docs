import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, ConnectorModel, PointModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getConnectorDefaults] ='getConnectorDefaults'>
        <e-connectors>
            <e-connector id='connector' type='Straight' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint'>
            </e-connector>
            <e-connector id='connector2' type='Straight' [sourcePoint]='sourcePoint1' [targetPoint]='targetPoint1'>
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
    public sourcePoint1?: PointModel;
    public targetPoint1?: PointModel;
    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 200, y: 200 };

        this.sourcePoint1 = { x: 300, y: 100 };
        this.targetPoint1 = { x: 400, y: 200 };
    }
    public getConnectorDefaults(connector: ConnectorModel): void {
        connector.style = {
            strokeColor: 'red',
            fill: '#6BA5D7',
            strokeWidth: 2
        }
        connector.targetDecorator = {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7',
            },
            
        }
        connector.sourceDecorator = {
            style: {
                fill: 'black',
                strokeColor: 'black',
            },
            shape : 'Circle',
        }
    }
}


