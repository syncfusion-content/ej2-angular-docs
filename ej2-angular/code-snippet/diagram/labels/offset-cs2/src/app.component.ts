import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, VerticalAlignment, HorizontalAlignment } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [width]=100 [height]=100>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Annotation" [horizontalAlignment]="horizontalAlignment" [verticalAlignment]="verticalAlignment">
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
    public verticalAlignment?: VerticalAlignment;
    public horizontalAlignment?: HorizontalAlignment;
    ngOnInit(): void {
        // Sets the horizontal alignment as left
        this.horizontalAlignment = 'Left';
        // Sets the vertical alignment as Center
        this.verticalAlignment = 'Center';
    }
}


