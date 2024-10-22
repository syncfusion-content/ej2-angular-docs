import { DiagramModule, DiagramContextMenuService, DiagramComponent } from '@syncfusion/ej2-angular-diagrams'
import {Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { ContextMenuSettingsModel } from '@syncfusion/ej2-diagrams';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
imports: [
         DiagramModule
    ],

providers: [DiagramContextMenuService],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [contextMenuSettings]="contextMenuSettings" (contextMenuClick)="contextMenuClick($event)">
        <e-nodes>
            <e-node id='node1' [offsetX]=100 [offsetY]=100 [width]=100 [height]=100 >
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Rectangle1" >
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [offsetX]=350 [offsetY]=150 [width]=100 [height]=100>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Rectangle2">
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
    public contextMenuSettings?: ContextMenuSettingsModel;

    ngOnInit(): void {

        //Enables the context menu
        this.contextMenuSettings = {
            //Enables the context menu
            show: true,
            // Defines the custom context menu items
            items: [{
                // Text to be displayed
                text: 'Fill',
                items: [
                  { id: 'red', text: 'Red' },
                  { id: 'yellow', text: 'Yellow' },
                  { id: 'green', text: 'Green' },
                  { id: 'blue', text: 'Blue' },
                ],
                //Sets the id for the item
                id: 'fill',
                target: '.e-elementcontent',
                // Sets the css icons for the item
                iconCss: 'e-icons e-paint-bucket',
              },
              {
                text: 'Annotation color',
                id: 'annotationColor',
                items: [
                  { id: 'pink', text: 'Pink' },
                  { id: 'orange', text: 'Orange' },
                  { id: 'violet', text: 'Violet' },
                  { id: 'brown', text: 'Brown' },
                ],
                target: '.e-elementcontent',
                iconCss: 'e-icons e-font-color',
              },
              {
                text: 'Clone',
                id: 'clone',
                target: '.e-elementcontent',
                iconCss: 'e-icons e-copy',
              },
            ],
            // Hides the default context menu items
          showCustomMenuOnly: true,
        }
    }

    public contextMenuClick(args: MenuEventArgs): void {
        let selectedNode = (this.diagram as any).selectedItems.nodes[0];
        if (selectedNode && args.item.id !== 'fill' &&  args.item.id !== 'annotationColor') {
            if (
              args.item.text === 'Red' ||
              args.item.text === 'Blue' ||
              args.item.text === 'Yellow' ||
              args.item.text === 'Green'
            ) {
              selectedNode.style.fill = args.item.text;
              (this.diagram as any).dataBind();
            } else if (
              args.item.text === 'Pink' ||
              args.item.text === 'Violet' ||
              args.item.text === 'Orange' ||
              args.item.text === 'Brown'
            ) {
              selectedNode.annotations[0].style.fill = args.item.text;
              (this.diagram as any).dataBind();
            } else {
                (this.diagram as any).copy();
              (this.diagram as any).paste();
            }
        }

    }
    
}


