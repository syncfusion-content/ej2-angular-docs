import {
  DiagramModule,
  SelectorConstraints,
  SelectorModel, DiagramComponent, NodeModel
} from '@syncfusion/ej2-angular-diagrams';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  imports: [DiagramModule],

  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [nodes]='nodes' [getNodeDefaults] ='getNodeDefaults' [selectedItems]='selectedItems'>
        </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;
  public selectedItems?: SelectorModel;
  public nodes: NodeModel[] = [
    {
      id: 'Node1',
      offsetX: 200,
      offsetY: 200,
      annotations: [
        { content: 'Resize handle disabled in selector constraints' },
      ],
    },
  ];
  ngOnInit(): void {
    this.selectedItems = {
      constraints: SelectorConstraints.All & ~SelectorConstraints.ResizeAll,
    };
  }
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 100;
    node.width = 100;
    node.pivot = { x: 0, y: 0 };
    return node;
  }
}
