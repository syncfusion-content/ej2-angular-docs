

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { createElement } from "@syncfusion/ej2-base";
import { DiagramComponent, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';
import { ContextMenuSettingsModel, Diagram, NodeModel, ConnectorModel } from '@syncfusion/ej2-diagrams';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' [getConnectorDefaults]='getConnectorDefaults' [contextMenuSettings]="contextMenuSettings" (contextMenuBeforeItemRender)='contextMenuBeforeItemRender($event)'>
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
        this.contextMenuSettings = {
          //Enables the context menu
          show: true,
          items: [{
            text: 'Cut  ', id: 'cut', target: '.e-diagramcontent',
            iconCss: 'e-Cut'
          },
          {
            text: 'Copy  ', id: 'copy', target: '.e-diagramcontent',
            iconCss: 'e-Copy'
          }],
          // Hides the default context menu items
          showCustomMenuOnly: true,
        }
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel ).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel ).strokeColor = "White";
        return node;
    }
    public getConnectorDefaults(obj: ConnectorModel): ConnectorModel {
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
        return obj;
    }
    public contextMenuBeforeItemRender(args: MenuEventArgs) {
    // To render template in li.
         let shortCutSpan: HTMLElement = createElement('span');
         let text: string = args.item.text as string;
         let shortCutText: string = text === 'Cut  ' ? 'Ctrl + S' : (text === 'Copy  ' ?
         'Ctrl + U' : 'Ctrl + Shift + I');
         shortCutSpan.textContent = shortCutText;
         args.element.appendChild(shortCutSpan);
         shortCutSpan.setAttribute('class', 'shortcut');
  }
}



