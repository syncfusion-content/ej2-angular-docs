

import { Component, ViewEncapsulation, ViewChild, } from '@angular/core';
import {
    DiagramComponent, NodeModel, ConnectorModel,
} from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: 'app-container',
    template: `<ejs-diagram #diagram id="diagram" width="1000px" height="700px" [nodes]='nodes' [connectors]="connectors">
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('diagram')
    public diagram?: DiagramComponent;
    public connectors: ConnectorModel[] = [{
      id: 'connector1', type: 'Orthogonal', sourceID: 'node1', targetID: 'node2'
    },
   ];
    public nodes: NodeModel[] = [{
     id: 'node1', height: 100, width: 100, offsetX: 100, offsetY: 100, annotations: [{ content: 'Node1'}]
   },
   {
     id: 'node2', height: 100, width: 100, offsetX: 300, offsetY: 100, annotations: [{ content: 'Node2'}]
   },
   {
     id: 'group', children: ['node1', 'node2', 'connector1',], style: { strokeWidth: 0}
   }];
}


