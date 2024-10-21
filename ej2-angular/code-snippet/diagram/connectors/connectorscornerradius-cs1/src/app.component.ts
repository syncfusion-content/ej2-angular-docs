import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, NodeModel, ConnectorModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' >
          <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150>
            </e-node>
            <e-node id='node2' [offsetX]=350 [offsetY]=350>
            </e-node>
        </e-nodes>
        <e-connectors>
        <e-connector id='connector' type='Orthogonal' sourceID='node1' sourcrPortID='port1' targetID='node2' targetPortID='port2' [cornerRadius]='cornerRadius'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public cornerRadius?: number;
    ngOnInit(): void {
        this.cornerRadius = 10;
    }
    public getNodeDefaults(node: NodeModel): void {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
    }
}