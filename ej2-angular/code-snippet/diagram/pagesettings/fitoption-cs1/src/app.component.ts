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
        <e-nodes>
            <e-node id='node1' [offsetX]=200 [offsetY]=200 [width]=100 [height]=100>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Node fits at the center of view port">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
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
            width: 500,
        height: 500,
        background: { color: 'grey' },
        fitOptions: {
            // Fits the content to the center of the viewport
            canFit: true,
            // Allows zooming in to fit smaller content
            canZoomIn: true,
            // Specifies the region to fit to the center
            region: 'Content',
            // Specifies the mode of fitOptions
            mode: 'Page',
            // Defines the margin around the fitted content
            margin: { left: 50, right: 50, top: 50, bottom: 50 },
        }
        }
    }
}


