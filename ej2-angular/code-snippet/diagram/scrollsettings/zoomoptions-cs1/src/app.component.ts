import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram, RulerSettingsModel, ScrollSettingsModel, ZoomOptions } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `
    <div class="button">
        <button id="zoomIn" (click)='onZoomInClick($event)'>Zoom In</button>
        <button id="zoomOut" (click)='onZoomOutClick($event)'>Zoom Out</button>
    </div>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" [rulerSettings]="rulerSettings" [scrollSettings]="scrollSettings">
        <e-nodes>
            <e-node id='node1' [offsetX]=300 [offsetY]=300>
            </e-node>
        </e-nodes>
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
    public zoomInOptions: ZoomOptions = {
        type: 'ZoomIn',
        zoomFactor: 0.2,
        focusPoint: { x: 0.5, y: 0.5 },
    };
    public zoomOutOptions: ZoomOptions = {
        type: 'ZoomOut',
        zoomFactor: 0.2,
        focusPoint: { x: 0.5, y: 0.5 },
      };
    onZoomInClick = (args: MouseEvent) => {
        (this.diagram as Diagram).zoomTo(this.zoomInOptions);
        (this.diagram as Diagram).dataBind();
    }
    onZoomOutClick = (args: MouseEvent) => {
        (this.diagram as Diagram).zoomTo(this.zoomOutOptions);
        (this.diagram as Diagram).dataBind();
    }
}


