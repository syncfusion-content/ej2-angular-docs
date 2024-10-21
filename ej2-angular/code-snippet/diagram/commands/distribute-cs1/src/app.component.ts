import { DiagramModule,DiagramComponent, NodeModel, ConnectorModel } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' (created)='created($event)'>
        <e-nodes>
        <e-node id='node1' [offsetX]=140 [offsetY]=100><e-node-annotations>
                    <e-node-annotation content="Node 1">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [offsetX]=200 [offsetY]=170><e-node-annotations>
                    <e-node-annotation content="Node 2">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node3' [offsetX]=400 [offsetY]=240><e-node-annotations>
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
        node.width = 100;
        node.height = 60;
        return node;
    }
    public created(args: Object): void {
        this.selArray = [];
        this.selArray.push(this.diagram.nodes[0], this.diagram.nodes[1], this.diagram.nodes[2]);
        //Selects the nodes
        this.diagram.select(this.selArray);
        //Distributes space between the nodes
        this.diagram.distribute('RightToLeft', this.diagram.selectedItems.nodes);
    }
}