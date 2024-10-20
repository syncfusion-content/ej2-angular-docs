import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram, ScrollSettingsModel, RulerSettingsModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [scrollSettings]="scrollSettings" [rulerSettings]="rulerSettings" (created)='created($event)'>
        <e-nodes>
            <e-node id='node1' [offsetX]=200 [offsetY]=200>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public rulerSettings: RulerSettingsModel = { showRulers: true}
    public scrollSettings?: ScrollSettingsModel;
    ngOnInit(): void {
        // Defines the pageSettings for the diagram
        this.scrollSettings = {
            scrollLimit: 'Infinity',
        }
    }
    //Sets scroll status
    public created(args: Object): void {
        (this.diagram as Diagram).scrollSettings.horizontalOffset = 100;
        (this.diagram as Diagram).scrollSettings.verticalOffset = 100;
        (this.diagram as Diagram).dataBind();
    }
}


