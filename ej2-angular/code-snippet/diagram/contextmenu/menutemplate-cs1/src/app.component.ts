import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { createElement } from "@syncfusion/ej2-base";
import { DiagramModule, DiagramContextMenuService ,DiagramComponent } from '@syncfusion/ej2-angular-diagrams';
import { ContextMenuSettingsModel } from '@syncfusion/ej2-diagrams';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
imports: [
         DiagramModule
    ],

providers: [DiagramContextMenuService],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [contextMenuSettings]="contextMenuSettings" (contextMenuBeforeItemRender)='contextMenuBeforeItemRender($event)'>
        <e-nodes>
            <e-node id='node1' [offsetX]=100 [offsetY]=100 [width]=100 [height]=100>
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
          items: [{
            text: 'Cut  ', id: 'cut', target: '.e-diagramcontent',
            iconCss: 'e-cut e-icons'
          },
          {
            text: 'Copy  ', id: 'copy', target: '.e-diagramcontent',
            iconCss: 'e-icons e-copy'
          },
          {
            text: 'Paste', id:'paste', target: '.e-diagramcontent',
            iconCss: 'e-icons e-paste'
          }],
          //hides the default context menu items
          showCustomMenuOnly: true,
        }
    }
    public contextMenuBeforeItemRender(args: MenuEventArgs) {
        // To render template in li.
        let shortCutSpan: HTMLElement = createElement('span');
        let text: string = args.item.text as string;
        let shortCutText: string = text === 'Cut  ' ? 'Ctrl + X' : (text === 'Copy  ' ?
        'Ctrl + C' : 'Ctrl + V');
        shortCutSpan.textContent = shortCutText;
        args.element.appendChild(shortCutSpan);
        shortCutSpan.setAttribute('class', 'shortcut');
         
    }
}