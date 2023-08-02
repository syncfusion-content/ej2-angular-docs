

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';
import { ContextMenuSettingsModel,DiagramBeforeMenuOpenEventArgs, Diagram, NodeModel, ConnectorModel } from '@syncfusion/ej2-diagrams';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' [getConnectorDefaults]='getConnectorDefaults' [contextMenuSettings]="contextMenuSettings">
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Rectangle1" [horizontalAlignment]="horizontalAlignment">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [offsetX]=350 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Rectangle2" [horizontalAlignment]="horizontalAlignment">
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
    public contextMenuSettings?: ContextMenuSettingsModel
    horizontalAlignment: any;
    ngOnInit(): void {
        //Enables the context menu
        let $this = this as any;
        this.contextMenuSettings = {
            //Enables the context menu
            show: true,
            items: [{
                text: 'delete',
                id: 'delete',
            }],
            // Hides the default context menu items
            showCustomMenuOnly: false,
            contextMenuOpen: function(args: DiagramBeforeMenuOpenEventArgs) {
                //do your custom action here.
                for (let item of args.items) {
                    if (item.text === 'delete') {
                        if (!$this.diagram.selectedItems.nodes.length && !$this.diagram.selectedItems.connectors.length) {
                            args.hiddenItems.push(item.text);
                        }
                    }
                }
            },
            contextMenuClick: function(args: MenuEventArgs) {
                //do your custom action here.
                if (args.item.id === 'delete') {
                    if (($this.diagram.selectedItems.nodes.length + $this.ddiagram.selectedItems.connectors.length) > 0) {
                        $this.diagram.cut();
                    }
                }
            }
        } as ContextMenuSettingsModel;
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel ).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel ).strokeColor = "White";
        return node;
    }
    public getConnectorDefaults(obj: ConnectorModel): void {
        obj.style = {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        }
        obj.targetDecorator = {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        }
    }
}


