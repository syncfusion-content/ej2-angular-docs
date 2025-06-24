import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DiagramModule, DiagramComponent, NodeModel, DiagramConstraints,
    NodeConstraints, SnapConstraints, SnapSettingsModel
} from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [DiagramModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    // specifies the template string for the diagram component with constraints
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="500px" [nodes]='nodes'
                    [constraints]='diagramConstraints' [snapSettings]='snapSettings'>
               </ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    // Enable AutomaticPortCreation
    public diagramConstraints: DiagramConstraints = DiagramConstraints.Default |
        DiagramConstraints.AutomaticPortCreation;
    public snapSettings: SnapSettingsModel = { constraints: SnapConstraints.None };
    public nodes: NodeModel[] = [
        {
            id: 'node1', width: 100, height: 100, offsetX: 150, offsetY: 200, style: { fill: 'cornflowerblue' },
            constraints: NodeConstraints.Default &
                ~(NodeConstraints.InConnect | NodeConstraints.OutConnect)

        },
        {
            id: 'node2', width: 100, height: 100, offsetX: 400, offsetY: 200, style: { fill: 'cornflowerblue' },
            constraints: NodeConstraints.Default &
                ~(NodeConstraints.InConnect | NodeConstraints.OutConnect)
        },
    ];
}
