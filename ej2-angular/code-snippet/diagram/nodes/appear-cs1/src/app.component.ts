

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [borderColor]='borderColor' [borderWidth]='borderWidth' [style]='style'></e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public style?: ShapeStyleModel;
    public borderColor?: string;
    public borderWidth?: number;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }
    ngOnInit(): void {
        this.style = { fill: '#6BA5D7', strokeDashArray: '5,5' };
        this.borderColor = 'red';
        this.borderWidth = 2;
    }
}


