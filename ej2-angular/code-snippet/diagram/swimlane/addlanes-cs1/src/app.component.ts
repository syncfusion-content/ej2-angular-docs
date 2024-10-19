import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, NodeModel, LaneModel, DiagramModule, ShapeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [DiagramModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `
        <button (click)="addLane()">addLane</button>
        <button (click)="removeLane()">removeLane</button>
        <ejs-diagram #diagram id="diagram" width="100%" height="580px" [nodes]="nodes" >
        </ejs-diagram>
       
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
                //Intialize header to swimlane
                header: {
                    annotation: {
                        content: 'ONLINE PURCHASE STATUS'
                    },
                    height: 50,
                    style: { fontSize: 11 },
                },
                lanes: [
                    {
                        id: 'stackCanvas1',
                        height: 100,
                        // customization of lane header
                        header: {
                            annotation: { content: 'Online Consumer' },
                            style: { fontSize: 11, fill: 'red' },
                        },
                    },
                ],
                phases: [
                    {
                        id: 'phase1',
                        offset: 170,
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
    public addLane(): void {
        if (this.diagram) {
            let swimlane = this.diagram.getObject('swim1');
            let lane: LaneModel[] = [
                {
                    height: 100,
                    style: { fill: 'lightgrey' },
                    header: {
                        annotation: {
                            content: 'New Lane',
                            style: { fill: 'brown', color: 'white', fontSize: 15 },
                        },
                        style: { fill: 'pink' },
                    },
                },
            ];
            /**
             * To add lanes
             * parameter 1 - The swimlane to which lanes will be added.
             * parameter 2 - An array of LaneModel objects representing the lanes to be added.
             * paramter 3 - The index at which the lanes should be inserted (optional).
             */
            this.diagram.addLanes(swimlane, lane, 1);
        }
    }

    public removeLane(): void {
        if (this.diagram) {
            let swimlane: NodeModel = this.diagram.getObject('swim1');
            // To get the last lane in the lane collection
            let lane =  ((swimlane.shape)as ShapeModel | any).lanes[
                ((swimlane.shape) as ShapeModel | any).lanes.length - 1
            ];
            /**
             * To remove lane
             * parameter 1 - The swimlane to remove the lane from.
             * parameter 2 - The lane to be removed
             */
            this.diagram.removeLane(swimlane, lane);
        }
    }
}