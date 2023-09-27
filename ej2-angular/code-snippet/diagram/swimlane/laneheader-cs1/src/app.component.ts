

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
                // Intialize header to swimlane
                header: {
                    annotation: { content: 'ONLINE PURCHASE STATUS', style: { fill: 'pink' } },
                    height: 50, style: { fontSize: 11 },
                },
                 // Intialize lane to swimlane
                lanes: [
                  {
                        id: 'stackCanvas1',
                        height: 100,
                        // Intialize header to lane
                        header: {
                            annotation: { content: 'CUSTOMER' }, width: 50,
                            style: { fontSize: 11 }
                        },
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
        },
      ]
    @ViewChild("diagram")
    public diagram?: DiagramComponent;  
}


