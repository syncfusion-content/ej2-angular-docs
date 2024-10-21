import {
  DiagramModule, DiagramComponent,
  NodeModel,
  ShapeStyleModel,
} from '@syncfusion/ej2-angular-diagrams';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  imports: [DiagramModule],

  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' [nodes]='nodes' (created)='create()'>
    </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;
  public create() {
    (this.diagram as DiagramComponent).select([(this.diagram as DiagramComponent).nodes[0]]);
  }
  public nodes: NodeModel[] = [
    {
      id: 'node1',
      // Position of the node
      offsetX: 250,
      offsetY: 250,
      // Size of the node
      width: 100,
      height: 100,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      //Pivot point
      pivot: { x: 0, y: 0 },
    },
  ];
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 100;
    node.width = 100;
    return node;
  }
}
