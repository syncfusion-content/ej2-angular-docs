
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Diagram, DiagramComponent, DiagramModule, ConnectorModel, ErConnectorShapeModel, ErDiagrams, NodeModel, ErShapeModel } from '@syncfusion/ej2-angular-diagrams';

Diagram.Inject(ErDiagrams);

@Component({
  selector: 'app-container',

  template: `
    <ejs-diagram #diagram id="diagram" width="100%" height="400px" [nodes]="nodes" [connectors]="connectors" [getConnectorDefaults] ="getConnectorDefaults"></ejs-diagram> `,

  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [DiagramModule],
})

export class AppComponent {
  @ViewChild('diagram')
  public diagram!: DiagramComponent;

  public nodes: NodeModel[] = [
    {
      id: 'Customer',
      offsetX: 250,
      offsetY: 100,
      shape: {
        type: 'Er',
        header: {
          annotation: {
            content: 'Customer'
          }
        },
        fields: [
          {
            id: 'customer_id',
            name: 'CustomerID',
            dataType: 'INT',
            isPrimaryKey: true
          }
        ]
      } as ErShapeModel,
      style: {
        fill: '#ffffff',
        strokeColor: '#7c3aed',
        strokeWidth: 1.5
      }
    },
    {
      id: 'Order',
      offsetX: 400,
      offsetY: 250,
      shape: {
        type: 'Er',
        header: {
          annotation: {
            content: 'Order'
          }
        },
        fields: [
          {
            id: 'order_id',
            name: 'OrderID',
            dataType: 'INT',
            isPrimaryKey: true
          },
          {
            id: 'customer_id_fk',
            name: 'CustomerID',
            dataType: 'INT',
            isForeignKey: true
          }
        ]
      } as ErShapeModel,
      style: {
        fill: '#ffffff',
        strokeColor: '#7c3aed',
        strokeWidth: 1.5
      }
    }
  ]

  // Define ER connectors with different multiplicities
  public connectors: ConnectorModel[] = [
    // One
    {
      id: 'customer_order',
      sourceID: 'Customer',
      targetID: 'Order',
      shape: {
        type: 'Er',
        sourceMultiplicity: {
          type: 'One'
        },
        targetMultiplicity: {
          type: 'OneOrMany'
        }
      } as ErConnectorShapeModel,
      style: {
        strokeColor: '#7c3aed',
        strokeWidth: 1.5
      },
      sourceDecorator: {
        style: {
          strokeColor: '#7c3aed',
          strokeWidth: 1.5
        }
      },
      targetDecorator: {
        style: {
          strokeColor: '#7c3aed',
          strokeWidth: 1.5
        }
      }
    },
  ];

  public getConnectorDefaults(connector: ConnectorModel): void {
    connector.cornerRadius = 10;
    connector.type = 'Orthogonal';
  }
}