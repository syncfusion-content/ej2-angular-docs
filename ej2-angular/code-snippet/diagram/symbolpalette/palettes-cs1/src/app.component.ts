

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SymbolPaletteComponent, SymbolPalette, NodeModel, ConnectorModel, PaletteModel } from '@syncfusion/ej2-angular-diagrams';
import { ExpandMode } from '@syncfusion/ej2-navigations';

@Component({
    selector: "app-container",
    template: `<ejs-symbolpalette id="symbolpalette"width="100%" height="700px" [expandMode]="expandMode" [palettes]="palettes" [symbolHeight]=80 [symbolWidth]=80>
    </ejs-symbolpalette>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public expandMode?: ExpandMode;
    public palettes?: PaletteModel[];
    public getBasicShapes(): NodeModel[] {
        let basicShapes: NodeModel[] = [{
                id: 'Rectangle',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                }
            },
            {
                id: 'Ellipse',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                }
            },
            {
                id: 'Hexagon',
                shape: {
                    type: 'Basic',
                    shape: 'Hexagon'
                }
            }
        ];
        return basicShapes;
    };
    public getFlowShapes(): NodeModel[] {
        let flowShapes: NodeModel[] = [{
                id: 'process',
                shape: {
                    type: 'Flow',
                    shape: 'Process'
                }
            },
            {
                id: 'document',
                shape: {
                    type: 'Flow',
                    shape: 'Document'
                }
            },
            {
                id: 'predefinedprocess',
                shape: {
                    type: 'Flow',
                    shape: 'PreDefinedProcess'
                }
            }
        ];
        return flowShapes;
    };
    public getConnectors(): ConnectorModel[] {
        let connectorSymbols: ConnectorModel[] = [{
                id: 'Link1',
                type: 'Orthogonal',
                sourcePoint: {
                    x: 0,
                    y: 0
                },
                targetPoint: {
                    x: 40,
                    y: 40
                },
                targetDecorator: {
                    shape: 'Arrow'
                }
            },
            {
                id: 'Link21',
                type: 'Straight',
                sourcePoint: {
                    x: 0,
                    y: 0
                },
                targetPoint: {
                    x: 40,
                    y: 40
                },
                targetDecorator: {
                    shape: 'Arrow'
                }
            },
            {
                id: 'link33',
                type: 'Bezier',
                sourcePoint: {
                    x: 0,
                    y: 0
                },
                targetPoint: {
                    x: 40,
                    y: 40
                },
                style: {
                    strokeWidth: 2
                },
                targetDecorator: {
                    shape: 'None'
                }
            }
        ];
        return connectorSymbols;
    };
    ngOnInit(): void {
        this.expandMode = 'Multiple'
        this.palettes = [{
                //Sets the id of the palette
                id: 'flow',
                //Sets whether the palette expands/collapse its children
                expanded: true,
                //Adds the palette items to palette
                symbols: this.getFlowShapes(),
                //Sets the header text of the palette
                title: 'Flow Shapes',
                iconCss: 'e-ddb-icons e-flow'
            },
            {
                id: 'basic',
                expanded: true,
                symbols: this.getBasicShapes(),
                title: 'Basic Shapes',
                iconCss: 'e-ddb-icons e-basic'
            },
            {
                id: 'connectors',
                expanded: true,
                symbols: this.getConnectors(),
                title: 'Connectors',
                iconCss: 'e-ddb-icons e-connector'
            }
        ]
    }
}


