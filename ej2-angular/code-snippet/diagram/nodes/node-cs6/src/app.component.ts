import {
  DiagramModule,
  DiagramComponent,
  NodeModel,
} from '@syncfusion/ej2-angular-diagrams';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
@Component({
  imports: [DiagramModule],
  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [nodes]="nodes" >
    </ejs-diagram>
    <button (click) = "CloneNode()">Clone Node</button>`,
  styles: [
    `button {
      margin-left: 10px;
    }`,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public nodes: NodeModel[] = [
    {
      id: 'node1',
      offsetX: 420,
      offsetY: 270,
      height: 100,
      width: 100,
      style: { fill: '#6AA8D7', strokeWidth: 1 },
    },
  ];
  @ViewChild('diagram')
  public diagram?: DiagramComponent;
  public selectedNode?: NodeModel;
  CloneNode() {
    this.selectedNode =
      ((this.diagram as DiagramComponent).selectedItems.nodes
        ?.length as number) > 0
        ? (
            (this.diagram as DiagramComponent).selectedItems
              .nodes as NodeModel[]
          )[0]
        : (this.diagram as DiagramComponent).nodes[0];
    (this.diagram as DiagramComponent).select([this.selectedNode]);
    (this.diagram as DiagramComponent).copy();
    (this.diagram as DiagramComponent).paste();
  }
}