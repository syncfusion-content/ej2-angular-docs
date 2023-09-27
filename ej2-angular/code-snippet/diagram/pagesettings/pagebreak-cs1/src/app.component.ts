

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, PageSettingsModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' [getConnectorDefaults]='getConnectorDefaults' [pageSettings]="pageSettings">
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Rectangle1" [horizontalAlignment]="horizontalAlignment">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [offsetX]=350 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Rectangle2" [horizontalAlignment]="horizontalAlignment">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector' type='Orthogonal' [sourceID]='node1' [targetID]='node2'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public pageSettings?: PageSettingsModel;
    node1: any;
    node2: any;
    horizontalAlignment: any;
    ngOnInit(): void {
        // Defines the pageSettings for the diagram
        this.pageSettings = {
            orientation: 'Landscape',
            // Sets the Multiple page for diagram
            multiplePage: true,
            // Sets the Page Break for diagram
            showPageBreaks: true,
            width: 300,
            height: 300,
            margin: {
                left: 10,
                top: 10,
                bottom: 10
            },
        }
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        return node;
    }
    public getConnectorDefaults(obj: ConnectorModel): void {
        obj.style = {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        }
        obj.targetDecorator = {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        }
    }
}


