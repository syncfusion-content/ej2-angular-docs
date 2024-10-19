import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { BasicShapeModel } from '@syncfusion/ej2-diagrams';
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
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [width]=100 [height]=100 [shape]='shape'></e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

    @ViewChild('diagram')
    public diagram?: DiagramComponent;

    public shape: BasicShapeModel = {
        type: 'Basic',
        shape: 'Rectangle',
        cornerRadius: 10
    };
}


