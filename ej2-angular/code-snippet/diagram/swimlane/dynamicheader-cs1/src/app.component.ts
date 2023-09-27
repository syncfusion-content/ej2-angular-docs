

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, SwimLaneModel,Diagram, NodeModel,Node, LaneModel,HeaderModel, ShapeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [nodes]="nodes" (created)='created($event)'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
      public nodes: NodeModel[] = [
        {
            shape: {
                type: 'SwimLane',
                orientation: 'Horizontal',
                // customize the swimlane header
                header: {
                    annotation: { content: 'SALES PROCESS FLOW CHART', },
                    height: 70, style: { fontSize: 11, fill: 'pink' }
                },
                lanes: [
                    {
                        id: 'stackCanvas1',
                        height: 100,
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
     public created(args: Object): void { 
        ((this.diagram as Diagram).nodes[0].shape as ShapeModel | any).header.style.fill = 'red';
        (this.diagram as Diagram).dataBind();
    }
}


