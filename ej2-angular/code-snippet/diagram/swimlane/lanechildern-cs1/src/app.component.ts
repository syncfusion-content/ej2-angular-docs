

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, SwimLaneModel,Diagram, NodeModel,Node, LaneModel,HeaderModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [nodes]="nodes">
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
      public nodes: NodeModel[] = [
        {
          id: 'swimlane',
          orientation: 'Horizontal' as any,
          shape: {
            type: 'SwimLane',
            header: {
              annotation: { content: 'ONLINE PURCHASE STATUS', style: { fill: 'pink' } },
              height: 50, style: { fontSize: 11 },
            },
            lanes: [
              {
                id: 'stackCanvas1',
                height: 100,
                header: {
                  annotation: { content: 'CUSTOMER' }, width: 50,
                  style: { fontSize: 11 }
                },
                // Set the children of lane
                children: [
                  {
                    id: 'node1',
                    annotations: [
                      {
                        content: 'Consumer learns \n of product',
                        style: { fontSize: 11 }
                      }
                    ],
                    margin: { left: 60, top: 30 },
                    height: 40, width: 100,
                  }, {
                    id: 'node2',
                    shape: { type: 'Flow', shape: 'Decision' },
                    annotations: [
                      {
                        content: 'Does \n Consumer want \nthe product',
                        style: { fontSize: 11 }
                      }
                    ],
                    margin: { left: 200, top: 20 },
                    height: 60, width: 120,
                  },
                ],
              },
            ],
            phases: [{
              id: 'phase1', offset: 170,
              header: { annotation: { content: 'Phase' } }
            }
            ],
            phaseSize: 20,
          },
          offsetX: 420, offsetY: 270,
          height: 100,
          width: 650
        }
      ] as unknown as  NodeModel[]
    @ViewChild("diagram")
    public diagram?: DiagramComponent;  
}


