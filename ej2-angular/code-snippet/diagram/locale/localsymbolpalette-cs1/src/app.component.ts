import { L10n, setCulture } from '@syncfusion/ej2-base';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {  DiagramModule,ConnectorModel, SymbolPaletteModule, NodeModel, PaletteModel } from '@syncfusion/ej2-angular-diagrams';
import { ExpandMode } from '@syncfusion/ej2-navigations';
// Set the default culture to German
setCulture('de')
// Load locale text for the SearchShapes
L10n.load({
    'de-DE': {
        SymbolPalette: {
            'SearchShapes': 'Formen suchen',
        }
    }
});

@Component({
    imports: [
        DiagramModule, SymbolPaletteModule
    ],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-symbolpalette [locale]='"de-DE"'id="symbolpalette" width="100%" height="700px"   [expandMode]="expandMode" [palettes]="palettes" [symbolHeight]=80 [symbolWidth]=80 [enableSearch]='true'>
                </ejs-symbolpalette>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public expandMode: ExpandMode = 'Multiple';
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
    getConnectors() {
        var connectors: ConnectorModel[] = [
            {
                id: 'Straight',
                type: 'Straight',
                sourcePoint: { x: 0, y: 0 },
                targetPoint: { x: 60, y: 60 },
                targetDecorator: {
                    shape: 'Arrow',
                    style: { strokeColor: '#757575', fill: '#757575' },
                },
                style: { strokeWidth: 1, strokeColor: '#757575' },
            },
            {
                id: 'Orthogonal',
                type: 'Orthogonal',
                sourcePoint: { x: 0, y: 0 },
                targetPoint: { x: 60, y: 60 },
                targetDecorator: {
                    shape: 'Arrow', style: { strokeColor: '#757575', fill: '#757575' },
                },
                style: { strokeWidth: 1, strokeColor: '#757575' },
            },
            {
                id: 'Bezier',
                type: 'Bezier',
                sourcePoint: { x: 0, y: 0 },
                targetPoint: { x: 60, y: 60 },
                targetDecorator: {
                    shape: 'Arrow',
                    style: { strokeColor: '#757575', fill: '#757575' },
                },
                style: { strokeWidth: 1, strokeColor: '#757575' },
            }
        ];
        return connectors;
    }
    ngOnInit(): void {
            this.palettes = [{
                //Sets the id of the palette
                id: 'basic',
                //Sets whether the palette expands/collapse its children
                expanded: true,
                //Adds the palette items to palette
                symbols: this.getBasicShapes(),
                //Sets the header text of the palette
                title: 'Basic Shapes',
                iconCss: 'e-ddb-icons e-basic',
                //Sets the locale
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
