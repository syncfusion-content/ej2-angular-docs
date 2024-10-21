import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent ,RulerSettingsModel} from '@syncfusion/ej2-angular-diagrams';


@Component({
imports: [
         DiagramModule
    ],
    providers: [ ],
    standalone: true,
    selector: "app-container",
    template: `<div><ejs-diagram #diagram id="diagram" width="100%" height="600px" [rulerSettings]='rulerSettings'></ejs-diagram></div>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
     @ViewChild('diagram')
    public diagram?: DiagramComponent;
    public rulerSettings: RulerSettingsModel = { showRulers: true, 
        horizontalRuler:{
            interval:8, 
            segmentWidth:100, 
            thickness:25, 
            //Align horizontal ruler tick to the bottom side.
            tickAlignment:"RightOrBottom"
        },
        verticalRuler:{
            interval:10, 
            segmentWidth:200, 
            thickness:35, 
            //Align vertical ruler tick to the left side.
            tickAlignment:"LeftOrTop"
        } 
    }
}


