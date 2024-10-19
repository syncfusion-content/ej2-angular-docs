import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel,DiagramModule, ShapeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [
        DiagramModule
    ],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `
        <button (click)="addPhase()">addPhase</button>
        <button (click)="removePhase()">removePhase</button>
        <ejs-diagram #diagram id="diagram" width="100%" height="600px" [nodes]="nodes"></ejs-diagram>
       
    `,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public nodes: NodeModel[] = [
        {
            id: 'swim1',
            shape: {
                type: 'SwimLane',
                orientation: 'Horizontal',
                header: {
                    annotation: {
                        content: 'ONLINE PURCHASE STATUS',
                    },
                    height: 50,
                    style: { fontSize: 11 },
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
                    },
                ],
                phases: [
                    {
                        id: 'phase1',
                        offset: 120,
                        header: { annotation: { content: 'Phase' } },
                    },
                    {
                        id: 'phase2',
                        offset: 200,
                        header: { annotation: { content: 'Phase' } },
                    },
                ],
                phaseSize: 20,
            },
            offsetX: 300,
            offsetY: 200,
            height: 200,
            width: 350,
        },
    ];

    @ViewChild("diagram")
    public diagram?: DiagramComponent;

    public addPhase(): void {
        let swimlane = this.diagram?.getObject('swim1');
        const newPhase = [
            {
                id: 'phase3',
                offset: 250,
                header: { annotation: { content: 'New Phase' } },
            },
        ];
        if (swimlane) {
            /**
             * To add phases
             * parameter 1 - object representing the swimlane to which phases will be added.
             * parameter 2 - objects representing the phases to be added.
             */
            (this.diagram as Diagram).addPhases(swimlane, newPhase);
        }
    }

    public removePhase(): void {
        let swimlane:NodeModel = (this.diagram as Diagram).getObject('swim1');
        if (swimlane) {
            let phase = ((swimlane.shape) as ShapeModel | any).phases[
                ((swimlane.shape) as ShapeModel | any).phases.length - 1
            ];
            /**
             * To remove phase
             * parameter 1 - representing the swimlane to remove the phase from.
             * paramter 2 - representing the phase to be removed.
             */
            (this.diagram as Diagram).removePhase(swimlane, phase);
        }
    }
}
