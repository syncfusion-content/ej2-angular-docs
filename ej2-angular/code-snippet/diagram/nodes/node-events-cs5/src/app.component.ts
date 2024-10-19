import {
  DiagramModule,
  IPropertyChangeEventArgs,
  DiagramComponent,
  NodeModel,
} from '@syncfusion/ej2-angular-diagrams';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  imports: [DiagramModule],

  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'  (propertyChange)="propertyChange($event)">
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
  public propertyChange(args: IPropertyChangeEventArgs): void {
    console.log(args.newValue);
  }
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 100;
    node.width = 100;
    return node;
  }
}