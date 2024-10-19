import {
  DiagramModule,
  ShapeStyleModel,
  DiagramComponent,
  Diagram,
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
    <button (click) = "ChangeColor()">Change Color</button>
    <button (click) = "ChangeSize()">Change Size</button>`,
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
  ChangeColor() {
    if (
      ((this.diagram as Diagram).nodes[0].style as ShapeStyleModel).fill ==
      'orange'
    ) {
      ((this.diagram as Diagram).nodes[0].style as ShapeStyleModel).fill =
        '#6AA8D7';
    } else {
      ((this.diagram as Diagram).nodes[0].style as ShapeStyleModel).fill =
        'orange';
    }
  }
  ChangeSize() {
    if (
      (this.diagram as Diagram).nodes[0].width == 200 &&
      (this.diagram as Diagram).nodes[0].height == 200
    ) {
      (this.diagram as Diagram).nodes[0].width = 100;
      (this.diagram as Diagram).nodes[0].height = 100;
    } else {
      (this.diagram as Diagram).nodes[0].width = 200;
      (this.diagram as Diagram).nodes[0].height = 200;
    }
  }
}