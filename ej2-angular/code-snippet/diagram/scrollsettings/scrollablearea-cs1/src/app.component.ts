import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram, ScrollSettingsModel, RulerSettingsModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `
    <div id='container'>
      <label>Scrollable Area</label>
      <select id="scrollLimit" (change)="onScrollLimitChange($event)">
        <option value="Limited">Limited</option>
        <option value="Infinity">Infinity</option>
        <option value="Diagram">Diagram</option>
      </select>
    </div>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" [scrollSettings]="scrollSettings" [rulerSettings]="rulerSettings">
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [width]=100 [height]=100>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public scrollSettings?: ScrollSettingsModel;
    public rulerSettings: RulerSettingsModel = { showRulers: true}
    ngOnInit(): void {
        // Defines the pageSettings for the diagram
        this.scrollSettings = {
            canAutoScroll: true,
            //Sets the scroll limit
            scrollLimit: 'Limited',
            //Sets the scrollable Area
            scrollableArea: {
                x: 0,
                y: 0,
                width: 1500,
                height: 1500
            }
        } as any;
    } 
    public onScrollLimitChange(args: any): void {
        (this.diagram as Diagram).scrollSettings.scrollLimit = args.target.value;
        (this.diagram as Diagram).dataBind();
    }
}


