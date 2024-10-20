import {
  AnnotationConstraints,
  DiagramModule, DiagramComponent, NodeModel
} from '@syncfusion/ej2-angular-diagrams';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  imports: [DiagramModule],

  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [nodes]='nodes' [getNodeDefaults] ='getNodeDefaults'>
          </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;
  public nodes: NodeModel[] = [
    {
      id: 'Node1',
      offsetX: 200,
      offsetY: 200,
      annotations: [
        {
          content: 'Interaction enabled',
          offset: { x: 0.5, y: 0.1 },
          constraints: AnnotationConstraints.Interaction,
        },
        {
          content: 'ReadOnly enabled',
          offset: { x: 0.2, y: 0.5 },
          constraints: AnnotationConstraints.ReadOnly,
        },
        {
          content: 'Select and drag enabled',
          offset: { x: 0.8, y: 0.5 },
          constraints:
            AnnotationConstraints.Select |
            AnnotationConstraints.Drag,
        },
        {
          content: 'Select and rotate enabled',
          offset: { x: 0.5, y: 0.9 },
          constraints:
            AnnotationConstraints.Select |
            AnnotationConstraints.Rotate,
        },
      ],
    },
  ];

  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 200;
    node.width = 300;
    node.pivot = { x: 0, y: 0 };
    return node;
  }
}
