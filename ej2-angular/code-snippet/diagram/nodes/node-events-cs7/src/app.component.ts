import {
  DiagramModule,
  IMouseEventArgs,
  DiagramComponent,
  NodeModel,
} from '@syncfusion/ej2-angular-diagrams';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  imports: [DiagramModule],

  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'  (mouseEnter)="mouseEnter($event)" (mouseLeave)="mouseLeave($event)" (mouseOver)="mouseOver($event)">
          <e-nodes>
              <e-node id='node1' [offsetX]=350 [offsetY]=250>
              </e-node>
          </e-nodes>
      </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;
  public mouseEnter(args: IMouseEventArgs): void {
    (args.actualObject as any).style.fill = 'red';
    (this.diagram as any).dataBind();
  }

  public mouseLeave(args: IMouseEventArgs): void {
    (args.element as any).style.fill = 'skyblue';
    (this.diagram as any).dataBind();
  }

  public mouseOver(args: IMouseEventArgs): void {
    //Customize
  }

  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 100;
    node.width = 100;
    return node;
  }
}
