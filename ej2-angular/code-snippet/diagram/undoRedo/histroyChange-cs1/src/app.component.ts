import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { DiagramModule, UndoRedoService, DiagramComponent, NodeModel, IHistoryChangeArgs } from "@syncfusion/ej2-angular-diagrams";
@Component({
imports: [
         DiagramModule
    ],

providers: [UndoRedoService],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram  #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]='getNodeDefaults' (historyChange)="historyChange($event)">
        <e-nodes>
            <e-node id='node1' [offsetX]=250 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation content="Node 1">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [offsetX]=250 [offsetY]=350>
            <e-node-annotations>
                    <e-node-annotation content="Node 2">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector' sourceID='node1' targetID='node2'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    };
    public historyChange(args: IHistoryChangeArgs): void {
        console.log(args)
    }
}
