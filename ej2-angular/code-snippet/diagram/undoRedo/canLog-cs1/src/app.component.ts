


import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { DiagramComponent, Diagram, NodeModel, HistoryEntry, ShapeStyleModel } from "@syncfusion/ej2-angular-diagrams";
@Component({
    selector: "app-container",
    template: `<ejs-diagram  #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]='getNodeDefaults' (created)='created($event)'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = '#6BA5D7';
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = 'white';
        return node;
    };
    public created(args: Object): void {
        // canLog decide whether the entry add or not in history List
        (this.diagram as Diagram | any).historyList.canLog = function(entry: HistoryEntry) {
            entry.cancel = true;
            return entry;
        }
    }
}


