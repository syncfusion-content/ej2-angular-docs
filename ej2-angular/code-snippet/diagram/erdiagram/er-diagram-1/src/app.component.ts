import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Diagram, NodeModel, ErShapeModel, ErDiagrams, DiagramComponent, DiagramModule } from '@syncfusion/ej2-angular-diagrams';

Diagram.Inject(ErDiagrams);

@Component({
  selector: 'app-container',
  template: `
    <ejs-diagram #diagram id="diagram" width="100%" height="400px"
    [nodes]="nodes"></ejs-diagram> `,

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
      offsetX: 300,
      offsetY: 200,
      shape: {
        type: 'Er',
        header: {
          annotation: {
            content: 'Customer',
          },
        },
        fields: [
          {
            id: 'cust_id',
            name: 'CustomerID',
            dataType: 'INT',
            isPrimaryKey: true,
            constraints: ['NotNull'],
          },
          {
            id: 'cust_firstname',
            name: 'FirstName',
            dataType: 'VARCHAR(50)',
            constraints: ['NotNull'],
          },
          {
            id: 'cust_email',
            name: 'Email',
            dataType: 'VARCHAR(100)',
            constraints: ['Unique'],
          },
        ],
      } as ErShapeModel
    }
  ];
}