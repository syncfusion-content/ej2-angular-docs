import {Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule, DiagramContextMenuService, DiagramComponent} from '@syncfusion/ej2-angular-diagrams'
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
import { ContextMenuSettingsModel,DiagramBeforeMenuOpenEventArgs} from '@syncfusion/ej2-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [DiagramContextMenuService],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [contextMenuSettings]="contextMenuSettings" (contextMenuOpen)="contextMenuOpen($event)" (contextMenuClick)="contextMenuClick($event)">
        <e-nodes>
            <e-node id='node1' [offsetX]=100 [offsetY]=100 [width]=100 [height]=100 >
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Rectangle1">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [offsetX]=300 [offsetY]=100 [width]=100 [height]=100 >
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Rectangle2">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector1' type='Straight' sourceID='node1' targetID='node2'>
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
            show: true,
            items: [
                {
                  text: 'Change fill',
                  id: 'applyFill',
                  target: '.e-diagramcontent',
                  iconCss: 'e-icons e-paint-bucket',
                },
                {
                  text: 'Change stroke',
                  id: 'applyStroke',
                  target: '.e-diagramcontent',
                  iconCss: 'e-icons e-edit',
                },
                {
                  text: 'Select All',
                  id: 'selectAll',
                  target: '.e-diagramcontent',
                },
            ],
            // Hides the default context menu items
            showCustomMenuOnly: true,
        }
    }
    public contextMenuOpen(args: DiagramBeforeMenuOpenEventArgs): void {
        let hiddenItems = [];
        let selectedNode = (this.diagram as any).selectedItems.nodes[0];
        let selectedConnector = (this.diagram as any).selectedItems.connectors[0];
        if (selectedNode || selectedConnector) {
            hiddenItems.push('selectAll');
        } else {
        hiddenItems = ['applyFill', 'applyStroke'];
        }
        args.hiddenItems = hiddenItems
    }
      
    public contextMenuClick(args: MenuEventArgs): void {
        let selectedNode = (this.diagram as any).selectedItems.nodes[0];
        let selectedConnector = (this.diagram as any).selectedItems.connectors[0];
        if (selectedNode || selectedConnector) {
            if (selectedNode) {
                if (args.item.id === 'applyFill') {
                  selectedNode.style.fill =
                    selectedNode.style.fill === '#6BA5D7' ? 'green' : '#6BA5D7';
                } else if (args.item.id === 'applyStroke') {
                  selectedNode.style.strokeColor =
                    selectedNode.style.strokeColor === 'black' ? 'yellow' : 'black';
                }
            }
            if (selectedConnector) {
                if (args.item.id === 'applyFill') {
                  selectedConnector.targetDecorator.style.fill =
                    selectedConnector.targetDecorator.style.fill === 'yellow'? 'black': 'yellow';
                }
                selectedConnector.style.strokeColor =
                  selectedConnector.style.strokeColor === 'black' ? 'yellow': 'black';
                } 
        } else {
            (this.diagram as any).selectAll();
        }
          
    }
}
    



  