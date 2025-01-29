import {
  DiagramModule,
  DiagramComponent,
  NodeModel,
  FlipDirection
} from '@syncfusion/ej2-angular-diagrams';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
@Component({
  imports: [DiagramModule],

  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `
    <button (click)="flipHorizontal()">flipHorizontal</button>
    <button (click)="flipVertical()">flipVertical</button>
    <button (click)="flipBoth()">flipBoth</button>
    <button (click)="flipNone()">flipNone</button>

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
  public flipHorizontal() {
    this.diagram.nodes[0].flip ^= FlipDirection.Horizontal;
    this.diagram.dataBind();
  }
  public flipVertical() {
    this.diagram.nodes[0].flip ^= FlipDirection.Vertical;
    this.diagram.dataBind();
  }
  public flipBoth() {
    this.diagram.nodes[0].flip ^= FlipDirection.Both;
    this.diagram.dataBind();
  }
  public flipNone() {
    this.diagram.nodes[0].flip = FlipDirection.None;
    this.diagram.dataBind();
  }
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.shape = {
      type: 'Basic',
      shape: 'RightTriangle',
    };
    node.height = 100;
    node.width = 100;
    node.flip = FlipDirection.Horizontal;
    return node;
  }
}
