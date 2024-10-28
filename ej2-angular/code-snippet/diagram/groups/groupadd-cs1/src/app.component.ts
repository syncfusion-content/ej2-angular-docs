import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, NodeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [nodes]="nodes" (created)='created($event)'>
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
        }
    ];
    public group: NodeModel = {
        id: 'group2',
        children: ['rectangle1', 'rectangle2']
    }
    public created(args: Object): void {
        // Add the group into the diagram
        (this.diagram as DiagramComponent).add(this.group as NodeModel);
    }
}
