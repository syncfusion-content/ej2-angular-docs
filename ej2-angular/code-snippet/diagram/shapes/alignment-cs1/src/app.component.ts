import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams'



import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Diagram, NodeModel, ImageElement, TextStyleModel } from '@syncfusion/ej2-diagrams';
import { DiagramComponent, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';


@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
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
        source: 'https://ej2.syncfusion.com/demos/src/diagram/employees/image16.png',
        scale: 'None'
    } as unknown as ImageElement;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill =  'none';
        ((node as NodeModel).style as ShapeStyleModel).strokeColor =  'none';
        return node;
    }
}



