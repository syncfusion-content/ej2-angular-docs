import { DiagramModule, KeyModifiers, Keys, Rect } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, NodeModel, } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `
   <ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' [scrollSettings] ='scrollSettings' [commandManager]='commandManger'>
        <e-nodes>
            <e-node id='node1' [offsetX]=100 [offsetY]=100 [style]="style"  >
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public bounds!: Rect;
    public scrollSettings: any = { scrollLimit: 'Infinity' };
    public style = {
        fill: '#6BA5D7',
    }
    public commandManger: any = {
        commands: [
            {
                name: 'clone',
                canExecute: () => {
                    let execute: boolean = ((this.diagram as DiagramComponent).selectedItems as any).nodes.length > 0;
                    return execute;
                },
                execute: () => {
                    (this.diagram as DiagramComponent).copy();
                    (this.diagram as DiagramComponent).paste();
                },
                gesture: {
                    //Press G to clone node
                    key: Keys.G,
                    keyModifiers: null,
                },
            },
            {
                name: 'color',
                canExecute: () => {
                    let execute: boolean = ((this.diagram as DiagramComponent).selectedItems as any).nodes.length > 0;
                    return execute;
                },
                execute: () => {
                    ((this.diagram as DiagramComponent).selectedItems as any).nodes[0].style.fill =
                        ((this.diagram as DiagramComponent).selectedItems as any).nodes[0].style.fill === '#64abbb'
                            ? '#FFFF00'
                            : '#64abbb';
                    (this.diagram as DiagramComponent).dataBind();
                },
                gesture: {
                    //Press Shift+G of Alt+G to change node color
                    key: Keys.G,
                    keyModifiers: KeyModifiers.Shift | KeyModifiers.Alt,
                },
            },
        ],
    }

    public getNodeDefaults(node: NodeModel | any): NodeModel {
        node.height = 40;
        node.width = 70;
        return node;
    }
}