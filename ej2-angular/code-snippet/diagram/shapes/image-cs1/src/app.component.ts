

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Diagram, NodeModel, ImageElement, TextStyleModel } from '@syncfusion/ej2-diagrams';
import { DiagramComponent, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';


@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [shape]='shape'></e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

    @ViewChild('diagram')
    public diagram?: DiagramComponent;

    public shape: ImageElement = {
        type: 'Image',
        source: 'https://www.syncfusion.com/content/images/nuget/sync_logo_icon.png'
    } as unknown as ImageElement;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill =  'none';
        ((node as NodeModel).style as ShapeStyleModel).strokeColor =  'none';
        return node;
    }
}




