

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Diagram, NodeModel, HtmlModel, TextStyleModel } from '@syncfusion/ej2-diagrams';
import { DiagramComponent } from '@syncfusion/ej2-angular-diagrams';


@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" >
    <ng-template #nodeTemplate let-data >
        <ng-container *ngIf="data.id == 'Node'">
            <input type = "button" value= {{data.id}} >
        </ng-container>
        </ng-template>
        <e-nodes>
            <e-node id='Node' [offsetX]=150 [offsetY]=150 [height]=100 [width]=100 [shape]='shape'></e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

    @ViewChild('diagram')
    public diagram?: DiagramComponent;

    public shape: HtmlModel = {
        type:'HTML'
    };
}


