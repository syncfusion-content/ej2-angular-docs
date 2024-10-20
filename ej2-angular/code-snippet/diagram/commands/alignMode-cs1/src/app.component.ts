import { DiagramModule, DiagramComponent, NodeModel, ConnectorModel } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' (created)='created($event)'>
        <e-nodes>
        <e-node id='node1' [offsetX]=100 [offsetY]=100 [width]=90>
            </e-node>
            <e-node id='node2' [offsetX]=100 [offsetY]=170 [width]=100>
            </e-node>
            <e-node id='node3' [offsetX]=100 [offsetY]=240 [width]=140>
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
        node.height = 60;
        return node;
    }
    public created(args: Object): void {
        this.selArray = [];
        this.selArray.push(this.diagram.nodes[0], this.diagram.nodes[1], this.diagram.nodes[2]);
        //Selects the nodes
        this.diagram.select(this.selArray);
        //Sets direction as left
        this.diagram.align('Left', this.diagram.selectedItems.nodes, 'Selector');
        this.diagram.dataBind();
    }
}