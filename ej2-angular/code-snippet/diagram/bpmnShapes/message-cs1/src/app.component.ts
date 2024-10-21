import { DiagramModule, BpmnDiagramsService, BpmnFlowModel, DiagramConstraints, ConnectorConstraints, PointModel } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';

@Component({
imports: [
         DiagramModule
    ],

providers: [BpmnDiagramsService],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px" [constraints]='diagramConstraints'>
        <e-connectors>
            <e-connector id='connector1' type='Orthogonal' [sourcePoint]='sourcePoint1' [targetPoint]='targetPoint1' [constraints]='connectorConstraints' [shape]='shape1'>
            </e-connector>
            <e-connector id='connector2' type='Orthogonal' [sourcePoint]='sourcePoint2' [targetPoint]='targetPoint2' [constraints]='connectorConstraints' [shape]='shape2'>
            </e-connector>
            <e-connector id='connector3' type='Orthogonal' [sourcePoint]='sourcePoint3' [targetPoint]='targetPoint3' [constraints]='connectorConstraints' [shape]='shape3'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagramConstraints?: DiagramConstraints;
    public connectorConstraints?: ConnectorConstraints;
    public sourcePoint?: PointModel;
    public targetPoint?: PointModel;
    public shape?: BpmnFlowModel;
    public sourcePoint1?: PointModel;
    public targetPoint1?: PointModel;
    public shape1?: BpmnFlowModel;
    public sourcePoint2?: PointModel;
    public targetPoint2?: PointModel;
    public shape2?: BpmnFlowModel;
    public sourcePoint3?: PointModel;
    public targetPoint3?: PointModel;
    public shape3?: BpmnFlowModel;
    ngOnInit(): void {
        this.sourcePoint1 = { x: 100, y: 100 };
        this.targetPoint1 = { x: 300, y: 100 };
        this.shape1 = {
            type: 'Bpmn',
            flow: 'Message',
            message: 'Default'
        };
        this.sourcePoint2 = { x: 100, y: 200 };
        this.targetPoint2 = { x: 300, y: 200 };
        this.shape2 = {
            type: 'Bpmn',
            flow: 'Message',
            message: 'NonInitiatingMessage'
        };
        this.sourcePoint3 = { x: 100, y: 300 };
        this.targetPoint3 = { x: 300, y: 300 };
        this.shape3 = {
            type: 'Bpmn',
            flow: 'Message',
            message: 'InitiatingMessage'
        };
    }
}