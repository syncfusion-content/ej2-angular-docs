import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, NodeModel, PointModel, TextStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="900px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Clip Wrap" [offset]='offset'>
                    </e-node-annotation>
                    <e-node-annotation id="label2" content="Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text long annotation text long annotation text" [style]="node1Style">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [offsetX]=350 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Clip NoWrap" [offset]='offset'>
                    </e-node-annotation>
                    <e-node-annotation id="label2" content="Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text" [style]="node2Style">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node3' [offsetX]=550 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Clip WrapWithOverflow" [offset]='offset'>
                    </e-node-annotation>
                    <e-node-annotation id="label2" content="Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text" [style]="node3Style">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node4' [offsetX]=150 [offsetY]=350>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Ellipsis Wrap" [offset]='offset'>
                    </e-node-annotation>
                    <e-node-annotation id="label2" content="Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text" [style]="node4Style">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node5' [offsetX]=350 [offsetY]=350>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Ellipsis NoWrap" [offset]='offset'>
                    </e-node-annotation>
                    <e-node-annotation id="label2" content="Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text" [style]="node5Style">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node6' [offsetX]=550 [offsetY]=350>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Ellipsis WrapWithOverflow" [offset]='offset'>
                    </e-node-annotation>
                    <e-node-annotation id="label2" content="Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text" [style]="node6Style">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node7' [offsetX]=350 [offsetY]=550>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Wrap NoWrap" [offset]='offset'>
                    </e-node-annotation>
                    <e-node-annotation id="label2" content="Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text" [style]="node7Style">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node8' [offsetX]=150 [offsetY]=750>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Wrap Wrap" [offset]='offset'>
                    </e-node-annotation>
                    <e-node-annotation id="label2" content="Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text" [style]="node8Style">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node9' [offsetX]=550 [offsetY]=750>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Wrap WrapWithOverflow" [offset]='offset'>
                    </e-node-annotation>
                    <e-node-annotation id="label2" content="Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text" [style]="node9Style">
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
    public node4Style?: TextStyleModel;
    public node5Style?: TextStyleModel;
    public node6Style?: TextStyleModel;
    public node7Style?: TextStyleModel;
    public node8Style?: TextStyleModel;
    public node9Style?: TextStyleModel;
    public offset?: PointModel;
    ngOnInit(): void {
        this.node1Style = {
            textOverflow: 'Clip', textWrapping: 'Wrap'
        }
        this.node2Style = {
            textOverflow: 'Clip', textWrapping: 'NoWrap'
        }
        this.node3Style = {
            textOverflow: 'Clip', textWrapping: 'WrapWithOverflow'
        }
        this.node4Style = {
            textOverflow: 'Ellipsis', textWrapping: 'Wrap'
        }
        this.node5Style = {
            textOverflow: 'Ellipsis', textWrapping: 'NoWrap'
        }
        this.node6Style = {
            textOverflow: 'Ellipsis', textWrapping: 'WrapWithOverflow'
        }
        this.node7Style = {
            textOverflow: 'Wrap', textWrapping: 'NoWrap'
        }
        this.node8Style = {
            textOverflow: 'Wrap', textWrapping: 'Wrap'
        }
        this.node9Style = {
            textOverflow: 'Wrap', textWrapping: 'WrapWithOverflow'
        }
        this.offset = { x: 0.5, y: 1.4 }
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }
}


