import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, NodeModel, PointModel, TextStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=100 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Text align is set as Right" [style]="node1Style">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [offsetX]=300 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation id="label2" content="Text align is set as Center" [style]="node2Style">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node3' [offsetX]=500 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation id="label3" content="Text align is set as Left" [style]="node3Style">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node4' [offsetX]=700 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation id="label4" content="Text align is set as Justify" [style]="node4Style">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector1' type='Orthogonal' [sourcePoint]='{ x: 100, y: 250 }' [targetPoint]='{ x: 200, y: 400 }'>
                <e-connector-annotations>
                    <e-connector-annotation content='Text align is set as Right' [style]="connector1Style" >
                    </e-connector-annotation>
                </e-connector-annotations>
            </e-connector>
            <e-connector id='connector2' type='Orthogonal' [sourcePoint]='{ x: 300, y: 250 }' [targetPoint]='{ x: 400, y: 400 }'>
                <e-connector-annotations>
                    <e-connector-annotation content='Text align is set as Center' [style]="connector2Style" >
                    </e-connector-annotation>
                </e-connector-annotations>
            </e-connector>
            <e-connector id='connector3' type='Orthogonal' [sourcePoint]='{ x: 500, y: 250 }' [targetPoint]='{ x: 600, y: 400 }'>
                <e-connector-annotations>
                    <e-connector-annotation content='Text align is set as Left' [style]="connector3Style" >
                    </e-connector-annotation>
                </e-connector-annotations>
            </e-connector>
            <e-connector id='connector4' type='Orthogonal' [sourcePoint]='{ x: 700, y: 250 }' [targetPoint]='{ x: 800, y: 400 }'>
                <e-connector-annotations>
                    <e-connector-annotation content='Text align is set as Justify' [style]="connector4Style" >
                    </e-connector-annotation>
                </e-connector-annotations>
            </e-connector>
        </e-connectors>
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
    public connector1Style?: TextStyleModel;
    public connector2Style?: TextStyleModel;
    public connector3Style?: TextStyleModel;
    public connector4Style?: TextStyleModel;
    ngOnInit(): void {
        // Sets the textAlign as left for the content
        this.node1Style = {
            textAlign: 'Right'
        }
        this.node2Style = {
            textAlign: 'Center'
        }
        this.node3Style = {
            textAlign: 'Left'
        }
        this.node4Style = {
            textAlign: 'Justify'
        }
        this.connector1Style = {
            textAlign: 'Right'
        }
        this.connector2Style = {
            textAlign: 'Center'
        }
        this.connector3Style = {
            textAlign: 'Left'
        }
        this.connector4Style = {
            textAlign: 'Justify'
        }
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }
}


