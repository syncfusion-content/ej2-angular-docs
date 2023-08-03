

import { Component, ViewEncapsulation } from '@angular/core';
import {  NodeModel,  PaletteModel, SymbolPreviewModel ,NodeConstraints} from '@syncfusion/ej2-angular-diagrams';
import { ExpandMode } from '@syncfusion/ej2-navigations';

@Component({
    selector: "app-container",
    template: `<ejs-symbolpalette id="symbolpalette"width="100%" height="100%" [expandMode]="expandMode" [enableSearch]=true [palettes]='palettes'
     [symbolHeight]=80 [symbolWidth]=80 [symbolPreview]='symbolPreview' [getSymbolInfo]='getSymbolInfo'>
    </ejs-symbolpalette>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public expandMode?: ExpandMode;
    public palettes?: PaletteModel[];
    public symbolPreview?: SymbolPreviewModel[];
    public getSymbolInfo(symbol: any) {
    //Defines the symbol description
      return { width: 75, height: 40, description: { text: symbol.shape['shape'] } }
    };
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
                },
                tooltip:{
                    content: 'Customized Tooltip',
                },
                //Enable customized tooltip to display on the symbol
                constraints: NodeConstraints.Default | NodeConstraints.Tooltip
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
            }
        ];
        return flowShapes;
    };

    ngOnInit(): void {
        this.expandMode = 'Multiple'
        this.palettes = [{
                id: 'flow',
                expanded: true,
                symbols: this.getFlowShapes(),
                title: 'Flow Shapes',
                iconCss: 'e-ddb-icons e-flow'
            },
            {
                id: 'basic',
                expanded: true,
                symbols: this.getBasicShapes(),
                title: 'Basic Shapes',
                iconCss: 'e-ddb-icons e-basic'
            }
        ],
        this.symbolPreview = [{
          height: 100,
          width: 100
        }]
    }
}



