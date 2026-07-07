
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Diagram, NodeModel, DiagramComponent, DiagramModule, ErShapeModel, ErFieldModel, ErDiagrams } from '@syncfusion/ej2-angular-diagrams';

Diagram.Inject(ErDiagrams);

@Component({
  selector: 'app-container',

  template: `
    <ejs-diagram #diagram id="diagram" width="100%" height="400px"
    [nodes]="[product]"></ejs-diagram> `,

  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [DiagramModule],
})

export class AppComponent {
  @ViewChild('diagram')
  public diagram!: DiagramComponent;

  public product: NodeModel = {
    id: 'Product',
    offsetX: 300,
    offsetY: 200,
    shape: {
      type: 'Er',
      header: {
        annotation: {
          content: 'Product'
        }
      },
      fields: [
        {
          id: 'prod_id',
          name: 'ProductID',
          dataType: 'INT',
          isPrimaryKey: true,
          constraints: ['NotNull']
        },
        {
          id: 'prod_code',
          name: 'ProductCode',
          dataType: 'VARCHAR(50)',
          constraints: ['NotNull', 'Unique']
        },
        {
          id: 'prod_name',
          name: 'ProductName',
          dataType: 'VARCHAR(150)',
          constraints: ['NotNull']
        },
        {
          id: 'prod_price',
          name: 'Price',
          dataType: 'DECIMAL(10,2)',
          constraints: ['NotNull']
        },
        {
          id: 'prod_desc',
          name: 'Description',
          dataType: 'TEXT'
        },
        {
          id: 'prod_catid',
          name: 'CategoryID',
          dataType: 'INT',
          isForeignKey: true
        }
      ] as ErFieldModel[]
    } as ErShapeModel
  };
}
