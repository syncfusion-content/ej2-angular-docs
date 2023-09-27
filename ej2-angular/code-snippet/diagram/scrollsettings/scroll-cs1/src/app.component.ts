

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, ScrollSettingsModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [scrollSettings]="scrollSettings">
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public scrollSettings?: ScrollSettingsModel;
    ngOnInit(): void {
        // Defines the pageSettings for the diagram
        this.scrollSettings = {
            horizontalOffset: 100,
            verticalOffset: 50
        }
    }
}


