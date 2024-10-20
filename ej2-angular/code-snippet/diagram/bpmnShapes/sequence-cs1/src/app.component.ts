import { DiagramModule, BpmnDiagramsService,BpmnFlowModel, PointModel  } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
imports: [
         DiagramModule
    ],

providers: [BpmnDiagramsService],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px" [constraints]='diagramConstraints'>
        <e-connectors>
            <e-connector id='connector' type='Orthogonal' [sourcePoint]='sourcePoint0' [targetPoint]='targetPoint0' [constraints]='connectorConstraints' [shape]='shape0'>
            </e-connector>
            <e-connector id='connector1' type='Orthogonal' [sourcePoint]='sourcePoint1' [targetPoint]='targetPoint1' [constraints]='connectorConstraints' [shape]='shape1'>
            </e-connector>
            <e-connector id='connector2' type='Orthogonal' [sourcePoint]='sourcePoint2' [targetPoint]='targetPoint2' [constraints]='connectorConstraints' [shape]='shape2'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public sourcePoint?: PointModel;
    public targetPoint?:PointModel;
    public shape?: BpmnFlowModel;
     public sourcePoint0?: PointModel;
    public targetPoint0?:PointModel;
    public shape0?: BpmnFlowModel;
    public sourcePoint1?: PointModel;
    public targetPoint1?:PointModel;
    public shape1?: BpmnFlowModel;
    public sourcePoint2?: PointModel;
    public targetPoint2?:PointModel;
    public shape2?: BpmnFlowModel;
diagramConstraints: any;
connectorConstraints: any;
    ngOnInit(): void {
        this.sourcePoint0 = { x: 100, y: 100 };
        this.targetPoint0 = { x: 300, y: 100 };
        this.shape0 = {
            type: 'Bpmn',
            flow: 'Sequence',
            sequence: 'Default'
        };
        this.sourcePoint1 = { x: 100, y: 200 };
        this.targetPoint1 = { x: 300, y: 200 };
        this.shape1 = {
            type: 'Bpmn',
            flow: 'Sequence',
            sequence: 'Normal'
        };
        this.sourcePoint2 = { x: 100, y: 300 };
        this.targetPoint2 = { x: 300, y: 300 };
        this.shape2 = {
            type: 'Bpmn',
            flow: 'Sequence',
            sequence: 'Conditional'
        };
    }
}


