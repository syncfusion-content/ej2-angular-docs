

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ScrollSettingsModel, MarginModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' [scrollSettings]="scrollSettings" nodes =nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public nodes: NodeModel[] = [
        {
            id: 'Start',
    width: 100, height: 100,
    offsetX: 350, offsetY: 350,
    shape: {
        type: 'Flow',
        shape: 'Terminator'
    }
        }]
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public scrollSettings?: ScrollSettingsModel;
    ngOnInit(): void {
        // Defines the pageSettings for the diagram
        this.scrollSettings = {
            //Sets the scroll limit
             padding: { right: 50, bottom: 50 }
        }
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        ((node as NodeModel).margin as MarginModel).top = 0;
        ((node as NodeModel).margin as MarginModel).bottom = 0;
        ((node as NodeModel).margin as MarginModel).left = 25;
        ((node as NodeModel).margin as MarginModel).right = 0;
        return node;
    }
}


