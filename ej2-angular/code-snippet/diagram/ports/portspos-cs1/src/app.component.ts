import {Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, NodeModel, PointPortModel, PortVisibility } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=100 [offsetY]=120 [ports]='ports1'>
                <e-node-annotations>
                    <e-node-annotation content="Left Top">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [offsetX]=250 [offsetY]=120 [ports]='ports2'>
                <e-node-annotations>
                    <e-node-annotation content="Left Bottom">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node3' [offsetX]=400 [offsetY]=120 [ports]='ports3'>
                <e-node-annotations>
                    <e-node-annotation content="Left Center">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node4' [offsetX]=100 [offsetY]=250 [ports]='ports4'>
                <e-node-annotations>
                    <e-node-annotation content="Right Top">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node5' [offsetX]=250 [offsetY]=250 [ports]='ports5'>
                <e-node-annotations>
                    <e-node-annotation content="Right Bottom">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node6' [offsetX]=400 [offsetY]=250 [ports]='ports6'>
                <e-node-annotations>
                    <e-node-annotation content="Right Center">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node7' [offsetX]=100 [offsetY]=400 [ports]='ports7'>
                <e-node-annotations>
                    <e-node-annotation content="Center Top">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node8' [offsetX]=250 [offsetY]=400 [ports]='ports8'>
                <e-node-annotations>
                    <e-node-annotation content="Center Bottom">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node9' [offsetX]=400 [offsetY]=400 [ports]='ports9'>
                <e-node-annotations>
                    <e-node-annotation content="Center Center">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
    </ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public ports1: PointPortModel[] = [{
        id: 'ports1',
        offset: { x: 0, y: 0 },
        visibility: PortVisibility.Visible,
        //set the Horizontal and vertical alignment of the ports.
        horizontalAlignment: 'Left',
        verticalAlignment: 'Top',
    }]
    public ports2: PointPortModel[] = [{
        id: 'ports2',
        offset: { x: 0, y: 0 },
        visibility: PortVisibility.Visible,
        horizontalAlignment: 'Left',
        verticalAlignment: 'Bottom',
    }]
    public ports3: PointPortModel[] = [{
        id: 'ports3',
        offset: { x: 0, y: 0 },
        visibility: PortVisibility.Visible,
        horizontalAlignment: 'Left',
        verticalAlignment: 'Center',
    }]
    public ports4: PointPortModel[] = [{
        id: 'ports4',
        offset: { x: 0, y: 0 },
        visibility: PortVisibility.Visible,
        horizontalAlignment: 'Right',
        verticalAlignment: 'Top',
    }]
    public ports5: PointPortModel[] = [{
        id: 'ports5',
        offset: { x: 0, y: 0 },
        visibility: PortVisibility.Visible,
        horizontalAlignment: 'Right',
        verticalAlignment: 'Bottom',
    }]
    public ports6: PointPortModel[] = [{
        id: 'ports6',
        offset: { x: 0, y: 0 },
        visibility: PortVisibility.Visible,
        horizontalAlignment: 'Right',
        verticalAlignment: 'Center',
    }]
    public ports7: PointPortModel[] = [{
        id: 'ports7',
        offset: { x: 0, y: 0 },
        visibility: PortVisibility.Visible,
        horizontalAlignment: 'Center',
        verticalAlignment: 'Top',
    }]
    public ports8: PointPortModel[] = [{
        id: 'ports8',
        offset: { x: 0, y: 0 },
        visibility: PortVisibility.Visible,
        horizontalAlignment: 'Center',
        verticalAlignment: 'Bottom',
    }]
    public ports9: PointPortModel[] = [{
        id: 'ports9',
        offset: { x: 0, y: 0 },
        visibility: PortVisibility.Visible,
        horizontalAlignment: 'Center',
        verticalAlignment: 'Center',
    }]
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }
}


