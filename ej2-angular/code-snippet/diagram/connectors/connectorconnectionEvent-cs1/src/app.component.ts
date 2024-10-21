import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, NodeModel, ShapeStyleModel, ConnectorModel, IConnectionChangeEventArgs } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [DiagramModule],

    providers: [],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (connectionChange)="connectionChange($event)" [getNodeDefaults] ='getNodeDefaults'>
    <e-nodes>
            <e-node id='node1' [offsetX]=200 [offsetY]=200>
            </e-node>
            <e-node id='node2' [offsetX]=500 [offsetY]=200>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector1' type='Straight' sourceID='node1' targetID='node2' >
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
    @ViewChild('diagram')
    public diagram?: DiagramComponent;

    public connectionChange = function (args: IConnectionChangeEventArgs) {
        if (args.state === 'Changed') {
            console.log('connectionChange');
        };
    };

    public getNodeDefaults(node: NodeModel): void {
        node.height = 50;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "Black";
    };

};