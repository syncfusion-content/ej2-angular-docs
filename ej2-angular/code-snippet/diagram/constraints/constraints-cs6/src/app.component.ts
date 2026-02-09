import {
  DiagramModule,
  SnapConstraints,
  SnapSettingsModel,
  SnappingService,
  DiagramComponent, 
  NodeModel
} from '@syncfusion/ej2-angular-diagrams';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  imports: [DiagramModule],

  providers: [SnappingService],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [nodes]='nodes' [getNodeDefaults] ='getNodeDefaults' [snapSettings]='snapSettings'>
        </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;
  public snapSettings?: SnapSettingsModel;
  ngOnInit(): void {
    this.snapSettings = {
      constraints: SnapConstraints.ShowHorizontalLines | SnapConstraints.SnapToObject
    };
  }
  public nodes: NodeModel[] = [
    {
      id: 'Node1',
      offsetX: 200,
      offsetY: 200,
      annotations: [{ content: 'Node 1' }],
    },
    {
      id: 'Node2',
      offsetX: 400,
      offsetY: 200,
      annotations: [{ content: 'Node 2' }],
    },
  ];
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 100;
    node.width = 100;
    node.pivot = { x: 0, y: 0 };
    return node;
  }
}
