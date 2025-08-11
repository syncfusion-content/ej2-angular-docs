import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, NodeModel, Diagram } from '@syncfusion/ej2-angular-diagrams';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<button (click)="unGroup()">unGroup</button>
     <ejs-diagram #diagram id="diagram" width="100%" height="600px" [nodes]='nodes' (created)='created($event)'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public nodes: NodeModel[] = [
        {
            id: 'rectangle1',
            offsetX: 100,
            offsetY: 100,
            width: 100,
            height: 100,
            style: {
                strokeColor: '#6BA5D7',
                fill: '#6BA5D7',
            },
            annotations: [
                {
                    content: 'rectangle1',
                },
            ],
        },
        {
            id: 'rectangle2',
            offsetX: 200,
            offsetY: 200,
            width: 100,
            height: 100,
            style: {
                strokeColor: '#6BA5D7',
                fill: '#6BA5D7',
            },
            annotations: [
                {
                    content: 'rectangle2',
                },
            ],
        },
        {
            id: 'group',
            children: ['rectangle1', 'rectangle2'],
        }
    ];
    public created(args: Object): void {
        (this.diagram as DiagramComponent).select([(this.diagram as DiagramComponent).getObject('group')]);
    }
    public unGroup(): void {
        // Ungroups the selected nodes and connectors in the diagram.
        (this.diagram as DiagramComponent).unGroup();
    }
}


