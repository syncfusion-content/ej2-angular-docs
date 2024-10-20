import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, NodeModel, TextStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Annotation Text WrapWithOverflow" [style]="node1Style">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [offsetX]=350 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Annotation Text Wrapp" [style]="node2Style">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node3' [offsetX]=550 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Annotation Text NoWrap" [style]="node3Style">
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
    public node1Style?: TextStyleModel;
    public node2Style?: TextStyleModel;
    public node3Style?: TextStyleModel;
    ngOnInit(): void {
        this.node1Style = {
            textWrapping: 'WrapWithOverflow'
        }
        this.node2Style = {
            textWrapping: 'Wrap'
        }
        this.node3Style = {
            textWrapping: 'NoWrap'
        }
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }
}


