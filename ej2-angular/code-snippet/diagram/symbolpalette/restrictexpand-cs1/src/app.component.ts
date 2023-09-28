

import { Component, ViewEncapsulation } from '@angular/core';
import {  NodeModel,  PaletteModel, SymbolPreviewModel } from '@syncfusion/ej2-angular-diagrams';
import { ExpandMode } from '@syncfusion/ej2-navigations';

@Component({
    selector: "app-container",
    template: `<ejs-symbolpalette id="symbolpalette"width="100%" height="100%" [expandMode]="expandMode" [enableSearch]=true [palettes]='palettes'
     [symbolHeight]=80 [symbolWidth]=80 [symbolPreview]='symbolPreview' (paletteExpanding)='paletteExpanding($event)'>
    </ejs-symbolpalette>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public expandMode?: ExpandMode;
    public palettes?: PaletteModel[];
    public symbolPreview?: SymbolPreviewModel[];
    public paletteExpanding(args: any) {
        if(args.palette.id === 'basic') {
            // Basic shapes panel does not collapse
            args.cancel = true;
            } else {
            // Swimlane shapes panel collapse and expand
            args.cancel = false;
        }   
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
            }
        ];
        return flowShapes;
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
            }
        ],
        this.symbolPreview = [{
          height: 100,
          width: 100
        }]
    }
}



