

import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { DiagramComponent } from '@syncfusion/ej2-angular-diagrams';
import { NodeModel, UmlClassifierShapeModel } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `
  <button (click)="addMethod()">addMethod</button>
  <ejs-diagram #diagram id="diagram" width="100%" height="600" [nodes]="nodes" >
  </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent | undefined;
  addMethod() {
    let node: any = (this.diagram as any).nodes[0];
    let methods: any = {
      name: 'getHistory',
      style: { color: 'red' },
      parameters: [{ name: 'Date', style: {} }],
      type: 'History',
    };
    (this.diagram as any).addChildToUmlNode(node, methods, 'Method');
  }
  public nodes: NodeModel[] = [
    {
      id: 'node1',
      offsetX: 150,
      offsetY: 150,
      style: {
        fill: '#26A0DA',
      },
      shape: {
        type: 'UmlClassifier',
        classShape: {
          attributes: [{ name: 'accepted', type: 'Date' }],
          methods: [
            {
              name: 'getHistory',
              style: {},
              parameters: [{ name: 'Date', style: {} }],
              type: 'History',
            },
          ],
          name: 'Patient',
        },
        classifier: 'Class',
      },
    },
  ];
}


