import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, ViewEncapsulation, AfterViewInit, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram, NodeModel, TextElement, StackPanel, randomId, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [DiagramModule],
    selector: "app-container",
    standalone: true,
    template: `
      <ejs-diagram #diagram id="diagram" width="100%" height="580px" 
                   [getNodeDefaults]="getNodeDefaults" [nodes]="nodes">
      </ejs-diagram>
    `,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
    @ViewChild("diagram") public diagram?: DiagramComponent;
    public nodes: NodeModel[] = [
        {
            id: 'stacknode',
            offsetX: 100,
            offsetY: 100,
            annotations: [{
                content: 'CustomTemplate',
                offset: { y: 1 },
                verticalAlignment: 'Top'
            }]
        }
    ];
    private createTextElement(text: string): TextElement {
        let textElement: TextElement = new TextElement();
        textElement.id = "text" + randomId();
        textElement.width = 50;
        textElement.height = 20;
        textElement.content = text;
        return textElement;
    }
    private addTextRows(stackPanel: StackPanel): void {
        const rows = ['Row1', 'Row2', 'Row3', 'Row4'];
        rows.forEach(row => stackPanel.children.push(this.createTextElement(row)));
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        (node.style as ShapeStyleModel).fill = '#6BA5D7';
        (node.style as ShapeStyleModel).strokeColor = 'white';
        return node;
    }
    ngAfterViewInit(): void {
        (this.diagram as DiagramComponent).setNodeTemplate = (obj: NodeModel | undefined, diagram: Diagram): StackPanel | undefined => {
            if ((obj as any).id.includes('stacknode')) {
                const table = new StackPanel();
                table.orientation = 'Horizontal';

                const column1 = new StackPanel();
                column1.children = [this.createTextElement('Column1')];
                this.addTextRows(column1);

                const column2 = new StackPanel();
                column2.children = [this.createTextElement('Column2')];
                this.addTextRows(column2);

                table.children = [column1, column2];
                return table;
            }
            return undefined;
        };
    }
}
