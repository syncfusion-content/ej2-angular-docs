import { BpmnDiagrams, BpmnFlowModel, BpmnGatewayModel, Diagram, DiagramModule, SymbolPaletteModule,SymbolPalette, NodeModel, PaletteModel, DiagramComponent  } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation } from '@angular/core';
SymbolPalette.Inject(BpmnDiagrams);
Diagram.Inject(BpmnDiagrams);

@Component({
    imports: [
        DiagramModule, SymbolPaletteModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<div style="width: 100%">
    <div id="palette-space" class="sb-mobile-palette">
      <ejs-symbolpalette
        id="symbolpalette"
        width="100%"
        height="160px"
        [symbolHeight]="100"
        [symbolWidth]="100"
        [palettes]="palettes"
        [getNodeDefaults]="getSymbolDefaults"
      >
      </ejs-symbolpalette>
    </div>
    <div id="diagram-space" class="sb-mobile-diagram">
      <div class="content-wrapper">
        <ejs-diagram #diagram id="diagram" width="100%" height="700px">
        </ejs-diagram>
      </div>
    </div>
  </div>
  `,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public palettes?: PaletteModel[];
    public diagram?: DiagramComponent;
    public shape: BpmnFlowModel = {
        type: 'Bpmn',
        flow: 'Association',
        association: 'Directional',
    };
    public getBPMNShapes(): NodeModel[] {
        let bpmnShapes: NodeModel[] = [
            {
                id: 'Start',
                width: 35,
                height: 35,
                shape: {
                    type: 'Bpmn',
                    shape: 'Event',
                    event: { event: 'Start' },
                },
            },
            {
                id: 'Gateway',
                width: 35,
                height: 35,
                offsetX: 100,
                offsetY: 100,
                shape: {
                    type: 'Bpmn',
                    shape: 'Gateway',
                    gateway: { type: 'Exclusive' } as BpmnGatewayModel,
                },
            },
            {
                id: 'DataObject',
                width: 35,
                height: 35,
                offsetX: 500,
                offsetY: 100,
                shape: {
                    type: 'Bpmn',
                    shape: 'DataObject',
                    dataObject: { collection: false, type: 'None' },
                },
            },
            {
                id: 'textAnnotation',
                width: 35,
                height: 35,
                shape: {
                    type: 'Bpmn',
                    shape: 'TextAnnotation',
                },
            },
        ];
        return bpmnShapes;
    };
    public getSymbolDefaults(symbol: NodeModel): void {
        symbol.width = 100;
        symbol.height = 100;
    };
    ngOnInit(): void {
        this.palettes = [{
            id: 'bpmn',
            expanded: true,
            symbols: this.getBPMNShapes(),
            iconCss: 'shapes',
            title: 'BPMN Shapes',
        }]
    }
}