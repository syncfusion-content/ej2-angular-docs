import { DiagramModule, BpmnDiagramsService, NodeConstraints,DiagramComponent, NodeModel } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [BpmnDiagramsService],
    standalone: true,
    selector: "app-container",
    template: `<button (click)="addProcess()">Add Process</button><button (click)="removeProcess()">Remove Process</button><ejs-diagram #diagram id="diagram" width="100%" height="580px" >
        <e-nodes>
            <e-node id='node1' [offsetX]=355 [offsetY]=230 [shape]='shape1' [height]=250 [width]=520></e-node>
            <e-node id='start'  [shape]='shape2'[height]=50 [width]=50 [margin]='margin' > </e-node>
            <e-node id='event2'  [shape]='shape3'[height]=50 [width]=50 [offsetX]=30 [offsetY]=40 [margin]='margin1' > </e-node>
           
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public margin = { left: 50, top: 50 }
    public margin1 = { left: 150, top: 50 }
    public shape1 = {
        constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
        shape: 'Activity',
        type: 'Bpmn',
        activity: {
            activity: 'SubProcess',
            subProcess: {
                collapsed: false,
                processes: ['start'],
            },
        },
    }
    public shape2 = {
        type: 'Bpmn', shape: 'Event',
    }
    public shape3 = {
        type: 'Bpmn', shape: 'Event', event: { type: '' }
    }
    public addProcess(): void {
        let event1: NodeModel = (this.diagram as any).nameTable['event2'];
        (this.diagram as DiagramComponent).addProcess(event1, 'node1');
    }

    public removeProcess(): void {
        (this.diagram as DiagramComponent).removeProcess('event2');
    }

}