import {
  DiagramModule,
PortConstraints,
PortVisibility,
DiagramComponent,
NodeModel
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
          { content: 'tooltip enabled', offset: { x: 0.5, y: 0.1 } },
          { content: 'draw enabled', offset: { x: 0.2, y: 0.5 } },
          { content: 'drg enabled', offset: { x: 0.8, y: 0.5 } },
          { content: 'InConnect disabled', offset: { x: 0.2, y: 0.9 } },
          { content: 'OutConnect disabled', offset: { x: 0.8, y: 0.9 } },
        ],
        ports: [
          {
            id: 'left',
            offset: { x: 0, y: 0.5 },
            visibility: PortVisibility.Visible,
            constraints:
              PortConstraints.Default |
              PortConstraints.Draw,
          },
          {
            id: 'right',
            offset: { x: 1, y: 0.5 },
            visibility: PortVisibility.Visible,
            constraints:
              PortConstraints.Default |
              PortConstraints.Drag,
          },
          {
            id: 'top',
            offset: { x: 0.5, y: 0 },
            visibility: PortVisibility.Visible,
            constraints:
              PortConstraints.Default |
              PortConstraints.ToolTip,
            tooltip: { content: 'Port tooltip' },
          },
          {
            id: 'bottomLeft',
            offset: { x: 0.2, y: 1 },
            visibility: PortVisibility.Visible,
            constraints:PortConstraints.Default &
              ~PortConstraints.InConnect,
          },
          {
            id: 'bottomRight',
            offset: { x: 0.8, y: 1 },
            visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default &
              ~PortConstraints.OutConnect,
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
