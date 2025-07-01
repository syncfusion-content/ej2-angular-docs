import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, SymbolPaletteModule, SymbolPaletteComponent, NodeModel, Connector, SymbolInfo, PaletteModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [DiagramModule, SymbolPaletteModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-symbolpalette #symbolpalette id="symbolpalette" [palettes]="palettes" [getSymbolInfo]="getSymbolInfo">
    </ejs-symbolpalette>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("symbolpalette")
    public symbolPalette?: SymbolPaletteComponent;
    public palettes?: PaletteModel[];

    getBasicShapes(): NodeModel[] {
        let basicShapes: NodeModel[] = [
            {
                id: 'Rectangle-symbol',
                shape: { type: 'Basic', shape: 'Rectangle', },
            },
            {
                id: 'Ellipse-symbol',
                shape: { type: 'Basic', shape: 'Ellipse', },
            },
            {
                id: 'Hexagon-symbol',
                shape: { type: 'Basic', shape: 'Hexagon', },
            },
        ];
        return basicShapes;
    }
    ngOnInit(): void {
        this.palettes = [{
            id: 'basic',
            symbols: this.getBasicShapes(),
            title: 'Basic Shapes',
        }];
    }
    //Sets the description of a symbol
    getSymbolInfo(symbol: Node | Connector): SymbolInfo {
        return {
            width: 50,
            height: 50,
            description: {
                //Defines the description text for the symbol
                text: (symbol as any).id,
                //Defines the text wrapping based on symbol id
                wrap:
                    (symbol as any).id === 'Rectangle-symbol' || (symbol as any).id === 'Ellipse-symbol'
                        ? 'NoWrap'
                        : 'WrapWithOverflow',
                //Defines the text overflow based on symbol id
                overflow: symbol.id === 'Rectangle-symbol' ? 'Ellipsis' : 'Clip',
            },
        };
    }
}

