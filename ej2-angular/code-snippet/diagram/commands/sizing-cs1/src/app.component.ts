import { DiagramModule, SizingOptions,DiagramComponent, NodeModel, ConnectorModel } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `     <label for="region">Size option: </label>
    <select id="region"  #sizing (change)="sizeChange ($event)">
      <option value="Width">Width</option>
      <option value="Height">Height</option>
      <option value="Size">Size</option>
    </select><ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' >
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
    public sizeChange(args: Event): void {
        this.selArray = [];
        this.selArray.push(this.diagram.nodes[0], this.diagram.nodes[1], this.diagram.nodes[2]);
        //Selects the nodes
        this.diagram.select(this.selArray);
        //Resizes the selected nodes with the same width
        this.diagram.sameSize((args.target as HTMLSelectElement).value as SizingOptions, this.diagram.selectedItems.nodes);
    }
}


