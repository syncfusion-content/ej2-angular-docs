import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, Diagram, NodeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
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
                //Intialize header to swimlane
                header: {
                    annotation: { content: 'ONLINE PURCHASE STATUS' },
                    height: 50, style: { fontSize: 11 },
                },
                lanes: [
                    {
                      id: 'stackCanvas1',
                      height: 100,
                      header: {
                        annotation: { content: 'CUSTOMER' },
                        width: 50,
                        style: { fontSize: 11 },
                      },
                      canMove: false,
                      // Set the children of lane
                      children: [
                        {
                          id: 'node1',
                          annotations: [
                            {
                              content: 'Consumer learns \n of product',
                              style: { fontSize: 11 },
                            },
                          ],
                          margin: { left: 60, top: 30 },
                          height: 40,
                          width: 100,
                        },
                        {
                          id: 'node2',
                          shape: { type: 'Flow', shape: 'Decision' },
                          annotations: [
                            {
                              content: 'Does \n Consumer want \nthe product',
                              style: { fontSize: 11 },
                            },
                          ],
                          margin: { left: 200, top: 20 },
                          height: 60,
                          width: 120,
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
           offsetX: 300, offsetY: 200,
            height: 200,
            width: 350
        },
      ]
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
     public created(args: Object): void {
         let lane = [{id:"lane1",height:100,canMove: false}];
        (this.diagram as Diagram).addLanes((this.diagram as Diagram).nodes[0],lane,1);
        (this.diagram as Diagram).dataBind();
    }
}