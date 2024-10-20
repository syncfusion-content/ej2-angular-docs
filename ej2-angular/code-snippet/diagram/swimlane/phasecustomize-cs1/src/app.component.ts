import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, NodeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
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
                    annotation: { content: 'ONLINE PURCHASE STATUS' },
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
                    },

                ],
                phases: [
                    {
                      id: 'phase1',
                      offset: 150,
                      addInfo: { name: 'phase1' },
                      header: {
                        annotation: {
                          content: 'First phase',
                          style: { fill: 'yellow', color: 'red' },
                        },
                      },
                    },
                    {
                      id: 'phase2',
                      offset: 200,
                      header: { annotation: { content: 'Second phase' } },
                      style: { fill: 'violet' },
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