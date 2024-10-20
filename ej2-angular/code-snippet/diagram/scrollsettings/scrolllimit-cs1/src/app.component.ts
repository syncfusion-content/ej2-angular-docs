import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, DiagramTools, IScrollChangeEventArgs } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px"  (scrollChange)="scrollChange($event)" [tool]='tool'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [width]=100 [height]=100>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public tool?: DiagramTools;
    ngOnInit(): void {
        this.tool = DiagramTools.ZoomPan
    }
    public scrollChange(args: IScrollChangeEventArgs): void {
        console.log(args.panState);
        // Handle scrollChange event for custom logic
    }
}


