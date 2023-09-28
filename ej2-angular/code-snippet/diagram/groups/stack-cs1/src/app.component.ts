

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, TextElement, StackPanel, PointModel, VerticalAlignment, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
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
    public offset?: PointModel
    public verticalAlignment?: VerticalAlignment
    public getTextElement(text: string): TextElement {
        let textElement: TextElement = new TextElement();
        textElement.width = 50;
        textElement.height = 20;
        textElement.content = text;
        return textElement;
    };

    public addRows(column: StackPanel) {
        column.children.push(this.getTextElement('Row1'));
        column.children.push(this.getTextElement('Row2'));
        column.children.push(this.getTextElement('Row3'));
        column.children.push(this.getTextElement('Row4'));
    };
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = '#6BA5D7';
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = 'white';
        return node;
    }
    ngOnInit(): void {
        this.verticalAlignment = 'Top';
        this.offset = {y: 1};
        (this.diagram as DiagramComponent).setNodeTemplate = (obj: NodeModel | any, diagram: Diagram): StackPanel | any => {
            if (obj.id.indexOf('node1') !== -1) {
                // It will be replaced with grid panel
                let table: StackPanel = new StackPanel();
                table.orientation = 'Horizontal';
                let column1: StackPanel = new StackPanel();
                column1.children = [];
                column1.children.push(this.getTextElement('Column1'));
                this.addRows(column1);
                let column2: StackPanel = new StackPanel();
                column2.children = [];
                column2.children.push(this.getTextElement('Column2'));
                this.addRows(column2);
                table.children = [column1, column2];
                return table;
            }
            return undefined;
        }
    }
}


