import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, ConnectorModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [connectors] ='connectors' [getConnectorDefaults] ='getConnectorDefaults'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public connectors: ConnectorModel[] = [
        {
          id: 'connector1',
          sourcePoint: { x: 100, y: 100 },
          targetPoint: { x: 200, y: 200 },
        },
        {
          id: 'connector2',
          // Set the visibility of the connector to false
          visible: true,
          type: 'Orthogonal',
          sourcePoint: { x: 300, y: 300 },
          targetPoint: { x: 400, y: 400 },
          segments: [{
            type: 'Orthogonal',
            direction: 'Right',
            length: 50,
          }]
        },
        {
          id: 'connector3',
          // Set the visibility of the connector to false
          visible: true,
          type: 'Bezier',
          sourcePoint: { x: 500, y: 100 },
          targetPoint: { x: 600, y: 300 },
          segments: [{ type: 'Bezier' }]
        }
      ];

    public getConnectorDefaults(connector: ConnectorModel): void {
        connector.targetDecorator = {
            style: {
              strokeColor: '#6BA5D7',
              fill: '#6BA5D7',
              strokeWidth: 2,
            }
          };
          connector.style = {
            // Stroke color
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            // Stroke width of the line
            strokeWidth: 5,
            // Line style
            strokeDashArray: '2,2'
          }
        }
}


