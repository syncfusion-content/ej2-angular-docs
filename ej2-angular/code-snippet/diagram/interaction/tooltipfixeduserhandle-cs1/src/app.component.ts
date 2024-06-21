import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams'



import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, DiagramTooltipModel, DiagramConstraints, NodeModel, MarginModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

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
                <e-node-fixeduserhandles>
                    <e-node-fixeduserhandle [width]=20 [height]=20 [margin]='margin1' [tooltip]="tooltip"  pathData='M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3,0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z M68.5,72.5h-30V34.4h30V72.5z'>
                    </e-node-fixeduserhandle>
                </e-node-fixeduserhandles>
             </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public margin1?: MarginModel;
    public tooltip?: DiagramTooltipModel;
    public constraints?: DiagramConstraints;
    ngOnInit(): void {
        this.margin1 = { right: 20 };
        this.tooltip = {
            //Sets the content of the Tooltip
            content: 'Handle1',
            //Sets the position of the Tooltip
            position: 'BottomRight',
            //Sets the tooltip position relative to the node
            relativeMode: 'Object'
        }
    }
    public diagram?: DiagramComponent;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        return node;
    }
}