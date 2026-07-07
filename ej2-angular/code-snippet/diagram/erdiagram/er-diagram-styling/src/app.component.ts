
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Diagram, NodeModel, DiagramComponent, DiagramModule, ErShapeModel, ErDiagrams, ErFieldModel } from '@syncfusion/ej2-angular-diagrams';

Diagram.Inject(ErDiagrams);

@Component({
  selector: 'app-container',

  template: `
    <ejs-diagram #diagram id="diagram" width="100%" height="400px" [nodes]="[customer, product]"></ejs-diagram> `,

  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [DiagramModule],
})

export class AppComponent {
  @ViewChild('diagram')
  public diagram!: DiagramComponent;

  // Define ER entities with custom styling
  public customer: NodeModel = {
    id: 'Customer',
    offsetX: 200,
    offsetY: 200,
    shape: {
      type: 'Er',
      header: {
        annotation: { content: 'CUSTOMER TABLE', style: { bold: true, color: 'white' } },
        height: 35,
        style: {
          fill: '#2E75B6',
          color: 'white',
          fontSize: 12,
          bold: true
        }
      },
      fields: [
        {
          id: 'cust_id',
          name: 'CustomerID',
          dataType: 'INT',
          isPrimaryKey: true
        },
        {
          id: 'cust_firstname',
          name: 'FirstName',
          dataType: 'VARCHAR(50)'
        },
        {
          id: 'cust_email',
          name: 'Email',
          dataType: 'VARCHAR(100)'
        }
      ] as ErFieldModel[],
      fieldDefaults: {
        alternateRowColors: ['#ffffff', '#E7F0F7']
      },
    } as ErShapeModel,
    style: {
      fill: '#ffffff',
      strokeColor: '#2E75B6',
      strokeWidth: 1
    }
  };

  public product: NodeModel = {
    id: 'Product',
    offsetX: 600,
    offsetY: 200,
    shape: {
      type: 'Er',
      header: {
        annotation: { content: 'PRODUCT CATALOG', style: { bold: true, color: 'white' } },
        height: 35,
        style: {
          fill: '#70AD47',
          color: 'white',
          fontSize: 12,
          bold: true
        }
      },
      fields: [
        {
          id: 'prod_id',
          name: 'ProductID',
          dataType: 'INT',
          isPrimaryKey: true,
          style: { fill: '#FFE699' }
        },
        {
          id: 'prod_name',
          name: 'ProductName',
          dataType: 'VARCHAR(150)'
        },
        {
          id: 'prod_price',
          name: 'Price',
          dataType: 'DECIMAL(10,2)',
          style: { fill: '#C6E0B4' }
        }
      ] as ErFieldModel[],
      fieldDefaults: {
        alternateRowColors: ['#ffffff', '#F2F2F2']
      },
    } as ErShapeModel,
    style: {
      fill: '#ffffff',
      strokeColor: '#70AD47',
      strokeWidth: 1.5,
    }
  };
}