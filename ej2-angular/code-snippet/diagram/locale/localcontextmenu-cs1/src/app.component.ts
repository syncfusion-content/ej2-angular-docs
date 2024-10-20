import { L10n, setCulture } from '@syncfusion/ej2-base';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, ShapeStyleModel, DiagramModule, DiagramContextMenuService  } from '@syncfusion/ej2-angular-diagrams';
import { ContextMenuSettingsModel, NodeModel } from '@syncfusion/ej2-diagrams';
setCulture('de');
L10n.load({
  'de-DE': {
    diagram: {
      Cut: 'Corte',
      Copy: 'Copia',
      Paste: 'Pasta',
      Undo: 'Deshacer',
      Redo: 'Rehacer',
      SelectAll: 'Seleccionar todo',
      Grouping: 'Agrupación',
      Group: 'Grupo',
      Ungroup: 'Desagrupar',
      Order: 'Fin',
      BringToFront: 'Traer a delante',
      MoveForward: 'Movimiento adelante',
      SendToBack: 'Enviar a espalda',
      SendBackward: 'Enviar hacia atrás',
    },
  },
});
@Component({
imports: [
         DiagramModule
    ],
providers: [DiagramContextMenuService],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [locale]='"de-DE"' [getNodeDefaults] ='getNodeDefaults' [contextMenuSettings]="contextMenuSettings">
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
            show: true,
        }
    }
    public getNodeDefaults(node: NodeModel): void {
        node.height = 100;
        node.width = 100;
       ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
       ((node as NodeModel).style as ShapeStyleModel ).strokeColor = "White";
       node.shape = { shape: 'Ellipse'}
    }
}