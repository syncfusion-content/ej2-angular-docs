import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent,DiagramModule,NodeModel,NodeConstraints,ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [DiagramModule],

    providers: [],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]="getNodeDefaults">
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150  [tooltip]="tooltip" [constraints]="constraints">
                <e-node-annotations>
                    <e-node-annotation content="Node">
                    </e-node-annotation>
                </e-node-annotations>

            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    @ViewChild('diagram')
    public diagram?: DiagramComponent;
    public tooltip = {
        content: 'Node',
        position: 'BottomCenter',
        relativeMode: 'Object',
        //Hide tip pointer
      showTipPointer: false
    }
    public constraints = NodeConstraints.Default | NodeConstraints.Tooltip;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = '#6BA5D7';
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = 'White';
        return node;
    }
}
