import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule, DiagramContextMenuService, DiagramComponent, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';
import { ContextMenuSettingsModel } from '@syncfusion/ej2-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [DiagramContextMenuService],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px"[contextMenuSettings]="contextMenuSettings">
        <e-nodes>
            <e-node id='node1' [offsetX]=100 [offsetY]=100 [width]=100 [height]=100>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Rectangle1">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [offsetX]=300 [offsetY]=100 [width]=100 [height]=100>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Rectangle2">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector1' type='Straight' sourceID='node1' targetID='node2'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public contextMenuSettings?: ContextMenuSettingsModel
    ngOnInit(): void {
        //Enables the context menu
        this.contextMenuSettings = {
            show: true,
        }
    }
}


