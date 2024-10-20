import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, ConnectorModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [DiagramModule],
    providers: [],
    standalone: true,
    selector: 'app-container',
    template: ` <input type="button" value="clone" id="clone" (click)="cloneConnector()"/>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" (created)='created($event)' > 
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    @ViewChild('diagram')
    public diagram?: DiagramComponent;
    public connectors: ConnectorModel[] = [{
        id: "connector1",
        type: 'Straight',
        sourcePoint: {
            x: 100,
            y: 100
        },
        targetPoint: {
            x: 200,
            y: 200
        }
    }];

    public created(args: Object): void {
        //Add collection of connectors
        (this.diagram as DiagramComponent).add(this.connectors[0] as any);
    }

    cloneConnector() {
        if (this.diagram) {
            let diagram = this.diagram as DiagramComponent;
            diagram.copy();
            diagram.paste();
        }
    }
}