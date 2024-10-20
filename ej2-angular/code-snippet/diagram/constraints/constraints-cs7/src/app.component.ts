import {
  DiagramModule,
  PageSettingsModel, DiagramComponent, NodeModel
} from '@syncfusion/ej2-angular-diagrams';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  imports: [DiagramModule],

  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [nodes]='nodes' [getNodeDefaults] ='getNodeDefaults' [pageSettings]='pageSettings'>
        </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;
  public pageSettings?: PageSettingsModel;
  ngOnInit(): void {
    this.pageSettings = {
      boundaryConstraints: 'Page',
      width: 500,
      height: 500,
      showPageBreaks: true,
      background: { color: 'grey' },
    };
  }
  public nodes: NodeModel[] = [
    {
      id: 'Node1',
      offsetX: 200,
      offsetY: 200,
      annotations: [{ content: 'Node 1' }],
    }
  ];
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 100;
    node.width = 100;
    node.pivot = { x: 0, y: 0 };
    return node;
  }
}
