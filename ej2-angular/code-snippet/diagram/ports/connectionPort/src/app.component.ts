import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams'



import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, PointPortModel, PortVisibility, PortConnectionDirection } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=600 [offsetY]=300 [ports]='port1'>
                <e-node-annotations>
                    <e-node-annotation content="">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [offsetX]=800 [offsetY]=200 [ports]='port2'>
                <e-node-annotations>
                    <e-node-annotation content="">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector' type='Orthogonal' sourceID='node1' sourcePortID='port1' targetID='node2' targetPortID='port2'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public port1: PointPortModel[] = [{
        id: 'port1',
        offset: {
            x: 0.5,
            y: 0.5
        },
        visibility: PortVisibility.Visible,
        // Specify the connection Direction
        connectionDirection:'Right',
        style: {
            strokeColor: '#000000',
            fill: ' #FFFF00'
        },
    }]
    public port2: PointPortModel[] = [
        {
            id: 'port2',
            offset: {
                x: 0,
                y: 0
            },
            visibility: PortVisibility.Visible,
             // Specify the connection Direction
            connectionDirection:'Left',
            style: {
                strokeColor: '#000000',
                fill: ' #FFFF00'
            },
        },
       
    ]
    public getNodeDefaults(node: NodeModel | any): NodeModel {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
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