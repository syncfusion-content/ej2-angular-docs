

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (created)='created($event)'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public created(args: Object): void {
        //Updates scroll settings
        (this.diagram as Diagram).scrollSettings.horizontalOffset = 200;
        (this.diagram as Diagram).scrollSettings.verticalOffset = 30;
        (this.diagram as Diagram).dataBind();
    }
}


