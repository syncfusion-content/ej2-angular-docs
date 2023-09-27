

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
            shape: {
                type: 'SwimLane',
                orientation: 'Horizontal',
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
                          children: [
                            {
                                id: 'Order',
                                margin: { left: 60, top: 20 },
                                height: 40, width: 100
                            }
                        ],
                    },

                ],
               // Set phase to swimlane
             phases: [
                 {
                     id: 'phase1', offset: 120,
                     header: { annotation: { content: 'Phase' } }
                 },{
                    id: 'phase2', offset: 200,
                    header: { annotation: { content: 'Phase' } }
                },
                 ],
                phaseSize: 20,
            },
            offsetX: 420, offsetY: 270,
            height: 100,
            width: 650
        },
      ]
    @ViewChild("diagram")
    public diagram?: DiagramComponent;  
}


