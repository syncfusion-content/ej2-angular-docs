import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, NodeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [DiagramModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `
        <ejs-diagram #diagram id="diagram" width="100%" height="580px" [nodes]="nodes" ></ejs-diagram>
    `,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public nodes: NodeModel[] = [
        {
            id: 'swimlane1',
            shape: {
                type: 'SwimLane',
                orientation: 'Horizontal',
                header: {
                    annotation: { content: 'Horizontal Swimlane' },
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
                        addInfo: { name: 'phase1' },
                        header: {
                            annotation: {
                                content: 'First phase'
                            },
                        },
                    },
                    {
                        id: 'phase2',
                        offset: 200,
                        header: { annotation: { content: 'Second phase' } }
                    },
                ],
                phaseSize: 40,
            },
            offsetX: 300,
            offsetY: 200,
            height: 200,
            width: 350,
        },
        {
            id: 'swimlane2',
            shape: {
                type: 'SwimLane',
                orientation: 'Vertical',
                header: {
                    annotation: { content: 'Vertical Swimlane' },
                    height: 50,
                    style: { fontSize: 11 },
                },
                lanes: [
                    {
                        id: 'stackCanvas2',
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
                        addInfo: { name: 'phase1' },
                        header: {
                            annotation: {
                                content: 'First phase',
                            },
                        },
                    },
                    {
                        id: 'phase2',
                        offset: 200,
                        header: { annotation: { content: 'Second phase' } }
                    },
                ],
                phaseSize: 40,
            },
            offsetX: 800,
            offsetY: 200,
            height: 200,
            width: 350,
        },
    ];

    @ViewChild("diagram")
    public diagram?: DiagramComponent;

}
