import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram, NodeModel, TextElement, StackPanel, PointModel, VerticalAlignment, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' [setNodeTemplate]="setNodeTemplate">
        <e-nodes>
            <e-node id='node1' [offsetX]=100 [offsetY]=100>
                <e-node-annotations>
                    <e-node-annotation content="Custom Template" [offset]='offset' [verticalAlignment]='verticalAlignment'>
                </e-node-annotation>
        </e-node-annotations>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public offset?: PointModel = { y: 1 };
    public verticalAlignment?: VerticalAlignment = 'Top';

    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = '#6BA5D7';
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = 'white';
        return node;
    }
    public setNodeTemplate(obj: NodeModel | any, diagram: Diagram): StackPanel | undefined {
        if (obj.id.indexOf('node1') !== -1) {
            let table: StackPanel = new StackPanel();
            table.orientation = 'Horizontal';
            // stack panel - column 1
            let column1: StackPanel = new StackPanel();
            column1.children = [];
            // add coloumn 1 text element
            let textElement1: TextElement = new TextElement();
            textElement1.width = 50;
            textElement1.height = 20;
            textElement1.content = 'Column1';
            column1.children.push(textElement1);
            // row 1
            let row11: TextElement = new TextElement();
            row11.width = 50;
            row11.height = 20;
            row11.content = 'Row1';
            column1.children.push(row11);
            // row 2
            let row12: TextElement = new TextElement();
            row12.width = 50;
            row12.height = 20;
            row12.content = 'Row2';
            column1.children.push(row12);
            //row 3
            let row13: TextElement = new TextElement();
            row13.width = 50;
            row13.height = 20;
            row13.content = 'Row3';
            column1.children.push(row13);
            // row 4
            let row14: TextElement = new TextElement();
            row14.width = 50;
            row14.height = 20;
            row14.content = 'Row4';
            column1.children.push(row14);
            // stack panel - column 2
            let column2: StackPanel = new StackPanel();
            column2.children = [];
            // add coloumn 2 text element
            let textElement2: TextElement = new TextElement();
            textElement2.width = 50;
            textElement2.height = 20;
            textElement2.content = 'Column2';
            column2.children.push(textElement2);
            // row 1
            let row21: TextElement = new TextElement();
            row21.width = 50;
            row21.height = 20;
            row21.content = 'Row1';
            column2.children.push(row21);
            // row 2
            let row22: TextElement = new TextElement();
            row22.width = 50;
            row22.height = 20;
            row22.content = 'Row2';
            column2.children.push(row22);
            // row 3
            let row23: TextElement = new TextElement();
            row23.width = 50;
            row23.height = 20;
            row23.content = 'Row3';
            column2.children.push(row23);
            // row 4
            let row24: TextElement = new TextElement();
            row24.width = 50;
            row24.height = 20;
            row24.content = 'Row4';
            column2.children.push(row24);
            // add both the coloumn stack panel as children of a horizontal stack panel
            table.children = [column1, column2];
            return table;
        }
        return undefined;
    }
}