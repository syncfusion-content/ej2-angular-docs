import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SymbolPaletteModule,PaletteModel,DiagramComponent, DiagramModule, ConnectorModel } from '@syncfusion/ej2-angular-diagrams';
@Component({
imports: [
         DiagramModule,SymbolPaletteModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `
    <ejs-symbolpalette #symbolpalette id="symbolpalette"width="100%" height="120px" [palettes]="palettes" [getConnectorDefaults] ='getConnectorDefaults' [symbolHeight]=80 [symbolWidth]=80 >
    </ejs-symbolpalette>
    <ejs-diagram #diagram id="diagram" width="100%" height="480px" >
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public connectorSymbols: ConnectorModel[] = [
        {
          id: 'orthogonal',
          type: 'Orthogonal',
          sourcePoint: { x: 0, y: 0 },
          targetPoint: { x: 40, y: 40 },
         
        },
        {
          id: 'orthogonaldashed',
          type: 'Orthogonal',
          sourcePoint: { x: 0, y: 0 },
          targetPoint: { x: 40, y: 40 },
          
        },
        {
          id: 'straight',
          type: 'Straight',
          sourcePoint: { x: 0, y: 0 },
          targetPoint: { x: 40, y: 40 },
          
        },
        {
          id: 'bezier',
          type: 'Bezier',
          sourcePoint: { x: 0, y: 0 },
          targetPoint: { x: 40, y: 50 },
         
        },
      ];
    public palettes: PaletteModel[] = [
        {
          id: 'connectors',
          expanded: true,
          symbols: this.connectorSymbols,
          title: 'Connectors',
          iconCss: 'e-ddb-icons e-connector',
        },
      ];
      public getConnectorDefaults(obj: ConnectorModel): void {
        obj.style= { strokeWidth: 2, strokeColor: '#757575' },
        obj.targetDecorator = {
            shape: 'Arrow',
            style: { strokeColor: '#757575', fill: '#757575' },
        }
    }
}


