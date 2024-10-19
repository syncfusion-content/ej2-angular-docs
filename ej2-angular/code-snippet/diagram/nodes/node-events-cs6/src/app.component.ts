import {
  DiagramModule,
  ICollectionChangeEventArgs,
  DiagramComponent,
  NodeModel,
} from '@syncfusion/ej2-angular-diagrams';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  imports: [DiagramModule],

  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<button (click)= 'add()'>Add</button>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'  (collectionChange)="collectionChange($event)">
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
  public node: NodeModel = {
    // Position of the node
    offsetX: 500,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
      fill: 'skyblue',
    },
  };
  public collectionChange(args: ICollectionChangeEventArgs): void {
    if (args.state === 'Changed') {
      console.log('Collection Change');
    }
  }
  public add() {
    (this.diagram as any).add(this.node);
  }
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 100;
    node.width = 100;
    return node;
  }
}