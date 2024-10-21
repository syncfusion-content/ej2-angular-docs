import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, NodeModel, FlowShapeModel, ConnectorModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='Start' [offsetX]=300 [offsetY]=100 [shape] = "shape1">
                <e-node-annotations>
                    <e-node-annotation 
                    id='label1' content="Start">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='Init' [offsetX]=300 [offsetY]=300 [shape] = "shape2">
                <e-node-annotations>
                    <e-node-annotation content="var i = 0;">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node> 
        </e-nodes>
        <e-connectors>
            <e-connector id='connector1' type='Orthogonal' sourceID='Start' targetID='Init' connectorSpacing='connectorSpacing'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public connectorSpacing?: number;

    public shape1: FlowShapeModel = {
        type: 'Flow',
        shape: 'Terminator'
    };
    public shape2: FlowShapeModel = {
        type: 'Flow',
        shape: 'Process'
    };

    ngOnInit(): void {
        this.connectorSpacing = 7;
    };

    public getNodeDefaults(node: NodeModel): void {
        node.height = 100;
        node.width = 100;
        (node.style as ShapeStyleModel).fill = "#6BA5D7";
    };


};