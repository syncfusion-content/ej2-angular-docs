

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SymbolPaletteComponent, SymbolPalette, NodeModel, MarginModel, PaletteModel,SymbolInfo,DiagramComponent } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<div style="width: 100%">
    <div id="palette-space" class="sb-mobile-palette">
      <ejs-symbolpalette
        id="symbolpalette"
        width="100%"
        height="700px"
        [symbolHeight]="80"
        [symbolWidth]="80"
        [palettes]="palettes"
        [getSymbolInfo]="getSymbolInfo"
        [symbolMargin]="symbolMargin"
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
    public symbolMargin?: MarginModel;
    public getUmlShapes(): NodeModel[] {
        let umlShapes: NodeModel[] = [
            {
                id: 'class',
                style: {
                    fill: '#26A0DA',
                },
                borderColor: 'white',
                shape: {
                    type: 'UmlClassifier',
                    classShape: {
                        attributes: [
                            { name: 'accepted', type: 'Date', style: { color: "red", fontFamily: "Arial", textDecoration: 'Underline',  italic: true },isSeparator: true },
                        ],
                        methods: [{ name: 'getHistory', style: {}, parameters: [{ name: 'Date', style: {} }], type: 'History' }],
                        name: 'Patient'
                    },
                    classifier: 'Class'
                },
            },
            {
                id: 'Interface',
                style: {
                    fill: '#26A0DA',
                }, borderColor: 'white',
                shape: {
                    type: 'UmlClassifier',
                    interfaceShape: {
                        name: "Bank Account",
                    },
                    classifier: 'Interface'
                },
            },
            {
                id: 'Enumeration',
                style: {
                    fill: '#26A0DA',
                }, borderColor: 'white',
                shape: {
                    type: 'UmlClassifier',
                    enumerationShape: {
                        name: 'AccountType',
                        members: [
                            {
                                name: 'Checking Account', style: {}
                            },
                        ]
                    },
                    classifier: 'Enumeration'
                },
            },
        ];
        return umlShapes;
    };
    public getSymbolInfo(symbol: NodeModel): SymbolInfo {
        return { fit: true,description: { text: symbol.id, } };
    };
    public getSymbolDefaults(symbol: NodeModel): void {
        symbol.width = 100;
        symbol.height = 100;
    };
    ngOnInit(): void {
        this.palettes = [{
            id: 'uml',
            expanded: true,
            symbols: this.getUmlShapes(),
            title: 'UML Shapes',
        }]
        //Sets the space to be left around a symbol
        this.symbolMargin = {
            left: 12, right: 12, top: 12, bottom: 12 
        }
    }
}