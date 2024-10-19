import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ImageElement } from '@syncfusion/ej2-diagrams';
import { DiagramModule, DiagramComponent } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [offsetX]=250 [offsetY]=250 [height]=100 [width]=300 [shape]='shape'></e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

    @ViewChild('diagram')
    public diagram?: DiagramComponent;
    public shape: ImageElement = {
        type: 'Image',
        source: 'https://ej2.syncfusion.com/demos/src/diagram/employees/image16.png',
        scale: 'Stretch',
        align: 'None',
    } as unknown as ImageElement;
}



