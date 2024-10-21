import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, NodeModel, NodeConstraints, DiagramTooltipModel,PointPortModel,PortVisibility, PortConstraints, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]="getNodeDefaults">
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150  [tooltip]="tooltip" [constraints]="constraints" [ports]='port1'>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public tooltip?: DiagramTooltipModel;
    public constraints?: NodeConstraints;
    public port1: PointPortModel[] = [{
        id: 'port1',
        offset: {
            x: 0.5,
             y: 0
        },
        style: {
            fill: '#FFFFFF',
            strokeWidth: 1,
            strokeColor: 'black'
        },
        tooltip: {
            content: 'Port Tooltip',
        },
        shape: 'Circle',
        constraints: PortConstraints.Default | PortConstraints.ToolTip ,
        visibility: PortVisibility.Visible
    }]
    public getNodeDefaults(node: NodeModel | any): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        return node;
    }
}