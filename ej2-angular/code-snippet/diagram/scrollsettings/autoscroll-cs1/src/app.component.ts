

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ScrollSettingsModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' [scrollSettings]="scrollSettings">
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public scrollSettings?: ScrollSettingsModel;
    ngOnInit(): void {
        // Defines the pageSettings for the diagram
        this.scrollSettings = {
            left: 100,
            right: 100,
            top: 100,
            bottom: 100
        } as ScrollSettingsModel;
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        return node;
    }
}


