import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DiagramComponent,
    DiagramModule,
    NodeModel,
    NodeConstraints,
    ShapeStyleModel,PointModel 
} from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [DiagramModule],

    providers: [],
    standalone: true,
    selector: 'app-container',
    template: `
     <button (click)="showTooltip()">showTooltip</button>
    <button (click)="hideTooltip()">hideTooltip</button>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]="getNodeDefaults">
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150  [tooltip]="tooltip2" [constraints]="constraints1">
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
    public sourcePoint?: PointModel;
    public targetPoint?: PointModel;
    ngOnInit(): void {
        this.sourcePoint = { x: 150, y: 250 };
        this.targetPoint = { x: 200, y: 300 }; 
      }
      public tooltip ={
        content: 'Diagram',
      }
      public tooltip2 ={
        content: 'Node',
        //To show tooltip on button click
        openOn: 'Custom',
    }
    public constraints1 = NodeConstraints.Default | NodeConstraints.Tooltip;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = '#6BA5D7';
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = 'White';
        return node;
    }
    showTooltip()
    {
        /**
         * parameter -  The object for which the tooltip will be shown.
         */
        (this.diagram as any).showTooltip((this.diagram as any).nodes[0]);
    }
    hideTooltip()
    {
        /**
         * parameter - The object for which the tooltip should be hidden.
         */
        (this.diagram as any).hideTooltip((this.diagram as any).nodes[0]);
    }
}
