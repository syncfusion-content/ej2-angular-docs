import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, SelectorModel, NodeModel, SelectorConstraints, DiagramTooltipModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]="getNodeDefaults" [tooltip]="tooltip"  [selectedItems]='selectedItems'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150>
            <e-node-annotations>
                    <e-node-annotation content="Default tooltip disabled">
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
    public tooltip?: DiagramTooltipModel | any;
    public selectedItems?: SelectorModel;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        return node;
    }
    ngOnInit(): void {
        this.selectedItems = { constraints: SelectorConstraints.All & ~SelectorConstraints.ToolTip };
    }
}