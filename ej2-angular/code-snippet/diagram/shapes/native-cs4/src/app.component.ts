import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { HtmlModel, NativeModel } from '@syncfusion/ej2-diagrams';
import { DiagramModule, DiagramComponent } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [DiagramModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" [nodeTemplate]="this.template()" >
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [width]=100 [height]=100 [shape]='shape'></e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

    @ViewChild('diagram')
    public diagram?: DiagramComponent;

    public shape: NativeModel = {
        type: 'Native',
        scale: 'Stretch'
    };

    public template(): string {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <rect width="24" height="24" fill="#007BFF" />
                    <path d="M6.5 7.5L17.5 16.5L12 21V3L17.5 7.5L6.5 16.5" fill="none" stroke="white" stroke-width="2" />
                </svg>`;
    };
};