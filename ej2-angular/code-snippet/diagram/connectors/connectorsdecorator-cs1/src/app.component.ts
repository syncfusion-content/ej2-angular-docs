

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, ConnectorModel, DecoratorModel, PointModel, OrthogonalSegmentModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getConnectorDefaults] ='getConnectorDefaults'>
        <e-connectors>
                <e-connector id='connector' type='Bezier' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [sourceDecorator]='sourceDecorator' [targetDecorator]='targetDecorator'>
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
    public sourceDecorator?: DecoratorModel;
    public targetDecorator?: DecoratorModel;
    public segments?: OrthogonalSegmentModel;
    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 200, y: 200 };
        this.sourceDecorator = {
            shape: 'Circle',
            // Defines the style for the sourceDecorator
            style: {
                // Defines the strokeWidth for the sourceDecorator
                strokeWidth: 3,
                // Defines the strokeColor for the sourceDecorator
                strokeColor: 'red'
            },

        }
        // Decorator shape - Diamond
        this.targetDecorator = {
            // Defines the custom shape for the connector's target decorator
            shape: 'Custom',
            //Defines the  path for the connector's target decorator
            pathData: 'M80.5,12.5 C80.5,19.127417 62.59139,24.5 40.5,24.5 C18.40861,24.5 0.5,19.127417 0.5,12.5' +
                'C0.5,5.872583 18.40861,0.5 40.5,0.5 C62.59139,0.5 80.5,5.872583 80.5,12.5 z',
            //defines the style for the target decorator
            style: {
                // Defines the strokeWidth for the targetDecorator
                strokeWidth: 3,
                // Defines the strokeColor for the sourceDecorator
                strokeColor: 'green',
                // Defines the opacity for the sourceDecorator
                opacity: .8
            }
        } as DecoratorModel;
    }
    public getConnectorDefaults(obj: ConnectorModel): void {
        obj.style = {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        }
    }
}


