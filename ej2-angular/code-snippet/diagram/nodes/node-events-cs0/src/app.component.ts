import {
  Connector,
  DiagramModule,
  IClickEventArgs,
  PointModel,
  DiagramComponent,
  Node,
  NodeModel,
} from '@syncfusion/ej2-angular-diagrams';
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';

@Component({
  imports: [DiagramModule],

  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'  (click)="click($event)">
        <e-nodes>
            <e-node id='node1' [offsetX]=350 [offsetY]=250>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector' type='Straight' sourceID='node1' [targetPoint]='targetPoint'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;
  public targetPoint?: PointModel;
  ngOnInit(): void {
    this.targetPoint = { x: 350, y: 500 };
  }
  public click(args: IClickEventArgs): void {
    if (args.actualObject instanceof Node) {
      alert('Node is clicked');
    } else if (args.actualObject instanceof Connector) {
      alert('Connector is clicked');
    }
  }
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 100;
    node.width = 100;
    return node;
  }
}
