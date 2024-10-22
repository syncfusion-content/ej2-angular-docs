import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule, DiagramContextMenuService,DiagramComponent } from '@syncfusion/ej2-angular-diagrams';
import { ContextMenuSettingsModel,DiagramBeforeMenuOpenEventArgs, } from '@syncfusion/ej2-diagrams';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
imports: [
         DiagramModule
    ],

providers: [DiagramContextMenuService],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px"  [contextMenuSettings]="contextMenuSettings" (contextMenuBeforeItemRender)="contextMenuBeforeItemRender($event)" (contextMenuOpen)="contextMenuOpen($event)" (contextMenuClick)="contextMenuClick($event)">
        <e-nodes>
            <e-node id='node1' [offsetX]=100 [offsetY]=100>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Rectangle1" [width]=100 [height]=100>
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [offsetX]=300 [offsetY]=100 [width]=100 [height]=100>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Rectangle2" >
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector' type='Orthogonal' sourceID='node1' targetID='node2'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public contextMenuSettings?: ContextMenuSettingsModel;
    ngOnInit(): void {
        //Enables the context menu
        this.contextMenuSettings = {
            //Enables the context menu
            show: true,
            items: [
                {
                    text: 'menu item 1',
                    id: 'item1',
                },
                {
                    text: 'menu item 2',
                    id: 'item2'
                },
            ],
            // Hides the default context menu items
            showCustomMenuOnly: true,
        } as ContextMenuSettingsModel;
    }

    public contextMenuBeforeItemRender(args: MenuEventArgs): void {
        //Triggers for each menu item
        console.log('context menu before item render');
    }
    public contextMenuOpen(args: DiagramBeforeMenuOpenEventArgs): void {
        //Triggers when the menu is openned
        console.log('context menu openned');
    }
      
    public contextMenuClick(args: MenuEventArgs): void {
        //Triggers when the item is clicked
        console.log('context menu clicked');
    }
    
}


