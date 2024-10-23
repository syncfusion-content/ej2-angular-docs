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
    public rulerSettings: RulerSettingsModel = { showRulers: true, horizontalRuler:{interval:10, segmentWidth:50, thickness:50, arrangeTick: this.arrangeTicks },verticalRuler:{interval:20, segmentWidth:200, thickness:20, tickAlignment:"LeftOrTop", markerColor: 'blue' }  };

    // To arrange ruler tick.
    private arrangeTicks(args: any) {
        if (args.tickInterval % 10 === 0) {
          // Set the tick length to 25 when the interval is divisible by 10
          args.tickLength = 45;
        }
    }
}

