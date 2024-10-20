import { DiagramModule,DiagramComponent, NodeModel, ConnectorModel,  } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: ` <label>(CTRL+X)</label><button (click)="cut()">Cut</button>
    <label>(CTRL+C)</label> <button (click)="copy()">Copy</button>
    <label>(CTRL+V)</label><button (click)="past()">Past</button>
    <button (click)="pastObject()">Past Defined Object</button>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' >
        <e-nodes>
        <e-node id='node1' [offsetX]=140 [offsetY]=100 [width]=100 [height]=80><e-node-annotations>
                    <e-node-annotation content="Node 1">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [offsetX]=140 [offsetY]=200 [width]=100 [height]=60><e-node-annotations>
                    <e-node-annotation content="Node 2">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node3' [offsetX]=140 [offsetY]=300 [width]=200 [height]=30><e-node-annotations>
                    <e-node-annotation content="Node 3">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram!: DiagramComponent;
    public selArray: (NodeModel | ConnectorModel)[] = [];
    public getNodeDefaults(node: NodeModel): NodeModel {
        return node;
    }
    public cut(): void {
        (this.diagram as DiagramComponent).cut()
    }

    public copy(): void {
        (this.diagram as DiagramComponent).copy()
    }
    public past(): void {
        (this.diagram as DiagramComponent).paste()
    }

    public pastObject(): void {
        let nodes = [
            {
                id: 'n1',
                offsetX: 400,
                offsetY: 100,
                width: 100,
                style: { fill: '#6BA5D7' },
            },
            {
                id: 'n2',
                offsetX: 400,
                offsetY: 200,
                width: 100,
                style: { fill: '#6BA5D7' },
            },
        ];
        (this.diagram as DiagramComponent).paste(nodes)
    }

}