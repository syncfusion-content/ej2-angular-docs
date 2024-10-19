import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, NodeModel, ScrollSettingsModel,RulerSettingsModel, MarginModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [scrollSettings]="scrollSettings" [rulerSettings]="rulerSettings" [nodes] ="nodes">
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public nodes: NodeModel[] = [
        {
            id: 'Start',
            width: 100, height: 100,
            offsetX: 350, offsetY: 350,
        }]
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public scrollSettings?: ScrollSettingsModel;
    public rulerSettings: RulerSettingsModel = { showRulers: true};
    ngOnInit(): void {
        // Defines the pageSettings for the diagram
        this.scrollSettings = {
            //Sets the scroll limit
             padding: { left: 100, top: 100 }
        }
    }
}


