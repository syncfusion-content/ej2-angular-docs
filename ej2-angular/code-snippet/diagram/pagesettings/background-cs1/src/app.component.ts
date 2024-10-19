import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, PageSettingsModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [pageSettings]="pageSettings">
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public pageSettings?: PageSettingsModel;
    ngOnInit(): void {
        // Defines the pageSettings for the diagram
        this.pageSettings = {
            orientation: 'Landscape',
            showPageBreaks: true,
            // Defines the background Image source
            background: {
                source: 'https://www.w3schools.com/images/w3schools_green.jpg',
                // Defines the scale values for the background image
                scale:'Meet',
                // Defines the align values for the background image
                align:'XMinYMin'
            },
            width: 300,
            height: 300,
            margin: {
                left: 10,
                top: 10,
                bottom: 10
            },
        }
    }
}


