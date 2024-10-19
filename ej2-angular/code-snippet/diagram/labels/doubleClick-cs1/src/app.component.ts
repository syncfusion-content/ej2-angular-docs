import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, IDoubleClickEventArgs } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (doubleClick)="doubleClick($event)">
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [width]=100 [height]=100>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Annotation">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public doubleClick(args: IDoubleClickEventArgs): void {
        // Handle double-click event for custom logic
    }
}
