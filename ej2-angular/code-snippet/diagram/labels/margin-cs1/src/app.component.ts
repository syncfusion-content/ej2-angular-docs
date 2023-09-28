

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, VerticalAlignment, HorizontalAlignment, MarginModel, PointModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Annotation" [offset]="offset" [horizontalAlignment]="horizontalAlignment" [verticalAlignment]="verticalAlignment" [margin]="margin">
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
    public margin?: MarginModel;
    public offset?: PointModel;
    public verticalAlignment?: VerticalAlignment;
    public horizontalAlignment?: HorizontalAlignment;
    ngOnInit(): void {
        // Sets the margin for the content
        this.margin = { top: 10 }
        this.horizontalAlignment = 'Center'
        this.verticalAlignment = 'Top'
        this.offset = { x: 0.5, y: 1}
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        return node;
    }
}


