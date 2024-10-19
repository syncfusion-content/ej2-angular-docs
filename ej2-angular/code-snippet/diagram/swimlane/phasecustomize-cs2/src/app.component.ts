import { DiagramModule, DiagramComponent, NodeModel, Diagram, ShapeModel } from '@syncfusion/ej2-angular-diagrams';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
    imports: [
        DiagramModule
    ],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `
        <button (click)="updatePhase()">updatePhase</button>
        <ejs-diagram #diagram id="diagram" width="100%" height="600px" [nodes]="nodes"></ejs-diagram>
    `,
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
                        offset: 150,
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
                phaseSize: 40,
            },
            offsetX: 300,
            offsetY: 200,
            height: 200,
            width: 350,
        },
    ];

    @ViewChild("diagram")
    public diagram?: DiagramComponent;

    public updatePhase(): void {
        let swimlane:NodeModel = (this.diagram as Diagram).getObject('swimlane');
        if (swimlane) {
            const phase =  ((swimlane.shape) as ShapeModel | any).phases[0];
            phase.header.style.fill = 'orange';
            phase.header.annotation.content = 'phase updated';
            (this.diagram as Diagram).dataBind();
        }
    }
}


