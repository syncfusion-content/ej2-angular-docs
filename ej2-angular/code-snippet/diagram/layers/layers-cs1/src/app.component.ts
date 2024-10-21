import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule,DiagramComponent,LayerModel,BasicShapeModel,FlowShapeModel } from '@syncfusion/ej2-angular-diagrams';


@Component({
imports: [
             DiagramModule
    ],
providers: [ ],
standalone: true,
    selector: "app-container",
    template: `
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" [layers]="layers">
    <e-nodes>
            <e-node id='node1' [width]=100 [height]=100 [offsetX]=100 [offsetY]=100 [shape]='shape1' >
                <e-node-annotations>
                    <e-node-annotation content="Basic Rectangle">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [width]=100 [height]=100 [offsetX]=250 [offsetY]=100 [shape]='shape2'>
                <e-node-annotations>
                    <e-node-annotation content="Basic Ellipse">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node3' [width]=100 [height]=100 [offsetX]=400 [offsetY]=100 [shape]='shape3' >
                <e-node-annotations>
                    <e-node-annotation content="Basic RightTriangle">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node4' [width]=100 [height]=100 [offsetX]=550 [offsetY]=100 [shape]='shape4' >
                <e-node-annotations>
                    <e-node-annotation content="Basic Plus">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node5' [width]=100 [height]=100 [offsetX]=100 [offsetY]=300 [shape]='shape5' >
                <e-node-annotations>
                    <e-node-annotation content="Flow Terminator">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node6' [width]=100 [height]=100 [offsetX]=250 [offsetY]=300 [shape]='shape6' >
                <e-node-annotations>
                    <e-node-annotation content="Flow Process">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node7' [width]=100 [height]=100 [offsetX]=400 [offsetY]=300 [shape]='shape7' >
                <e-node-annotations>
                    <e-node-annotation content="Flow Decision">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node8' [width]=100 [height]=100 [offsetX]=550 [offsetY]=300 [shape]='shape8' >
                <e-node-annotations>
                    <e-node-annotation content="Flow Document">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node> 
    </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public layers: LayerModel[] =[];

    ngOnInit(): void {
        this.layers = [
            {
                id: 'layer1',
                visible: true,
                //Layer 1 objects
                objects: ['node1','node2','node3','node4'],
                lock: false
            },
            {
                id: 'layer2',
                visible: true,
                //Layer 2 objects
                objects: ['node5','node6','node7','node8'],
                lock: false
            }
        ]
    }
    public shape1: BasicShapeModel = {
        type: 'Basic',
        shape: 'Rectangle',
    };
    public shape2: BasicShapeModel = {
        type: 'Basic',
        shape: 'Ellipse',
    };
    public shape3: BasicShapeModel = {
        type: 'Basic',
        shape: 'RightTriangle',
    };
    public shape4: BasicShapeModel = {
        type: 'Basic',
        shape: 'Plus',
    };
    public shape5: FlowShapeModel = {
        type: 'Flow',
        shape: 'Terminator',
    };
    public shape6: FlowShapeModel = {
        type: 'Flow',
        shape: 'Process',
    };
    public shape7: FlowShapeModel = {
        type: 'Flow',
        shape: 'Decision',
    };
    public shape8: FlowShapeModel = {
        type: 'Flow',
        shape: 'Document',
    };
}