import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { HtmlModel } from '@syncfusion/ej2-diagrams';
import { DiagramModule, DiagramComponent } from '@syncfusion/ej2-angular-diagrams';


@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" >
        <ng-template #nodeTemplate let-data >
        <ng-container>
            <div style="background:#6BA5D7;height:100%;width:100%;"><input width="100%" style="width: 100px" type = "button" [value]= "data.id" ></div>
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


