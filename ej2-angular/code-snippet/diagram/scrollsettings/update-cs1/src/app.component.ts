import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram, RulerSettingsModel, ScrollSettingsModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `
    <div class="button">
        <button id="UpdateScrollOffset" (click)='onClick($event)'>Update Scroll Offset</button>
    </div>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" [rulerSettings]="rulerSettings" [scrollSettings]="scrollSettings">
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public rulerSettings: RulerSettingsModel = { showRulers: true}
    public scrollSettings?: ScrollSettingsModel = {
        scrollLimit: 'Infinity',
    }
    onClick = (args: MouseEvent) => {
        //Updates scroll settings
        (this.diagram as Diagram).scrollSettings.horizontalOffset = 200;
        (this.diagram as Diagram).scrollSettings.verticalOffset = 100;
        (this.diagram as Diagram).dataBind();
    }
}


