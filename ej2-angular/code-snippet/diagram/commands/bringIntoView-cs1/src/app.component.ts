import { DiagramModule, DiagramTools, Rect,DiagramComponent, NodeModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `
    <button (click)="bringToView()">Bring To View</button><ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'[scrollSettings]='scrollSettings' [tool]='tool' >
        <e-nodes>
            <e-node id='node1' [offsetX]=1000 [offsetY]=100>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public bounds!: Rect;
    public scrollSettings = { scrollLimit: 'Infinity' };
    public tool = DiagramTools.ZoomPan
    public getNodeDefaults(node: NodeModel | any): NodeModel {
        node.height = 40;
        node.width = 70;
        return node;
    }
    public bringToView(): void {
        let nodeBounds = ((this.diagram as DiagramComponent).nodes[0].wrapper as any).bounds;
        let bounds = new Rect(
            nodeBounds.x,
            nodeBounds.y,
            nodeBounds.width,
            nodeBounds.height
        );
        (this.diagram as DiagramComponent).bringIntoView(bounds);
    }

}