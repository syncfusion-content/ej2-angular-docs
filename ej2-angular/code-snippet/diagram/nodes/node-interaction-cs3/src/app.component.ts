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
  template: `<button (click) = "reSize()">Resize</button>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=350 [offsetY]=250 ></e-node>
        </e-nodes>
    </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;
  public style?: ShapeStyleModel;
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 100;
    node.width = 100;
    return node;
  }
  reSize() {
    (this.diagram as any).scale((this.diagram as any).nodes[0], 0.5, 0.5, {
      x: 0.5,
      y: 0.5,
    });
  }
}
