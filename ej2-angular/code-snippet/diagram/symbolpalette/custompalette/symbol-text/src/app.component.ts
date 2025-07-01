import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, SymbolPaletteModule, SymbolPaletteComponent, NodeModel, Connector, SymbolInfo, PaletteModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [DiagramModule, SymbolPaletteModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-symbolpalette #symbolpalette id="symbolpalette" [palettes]="palettes"
        [getSymbolInfo]="getSymbolInfo" enableSearch=true>
    </ejs-symbolpalette>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("symbolpalette")
    public symbolPalette?: SymbolPaletteComponent;
    public palettes?: PaletteModel[];
    //Initialize the basic shapes for the symbol palette
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
    //Initialize the flow shapes for the symbol palette
    getFlowShapes(): NodeModel[] {
        let flowShapes: NodeModel[] = [
            {
                id: 'Process',
                shape: { type: 'Flow', shape: 'Process' },
                style: { strokeWidth: 2 },
            },
            {
                id: 'Document',
                shape: { type: 'Flow', shape: 'Document' },
                style: { strokeWidth: 2 },
            },
        ];
        return flowShapes;
    }
    ngOnInit(): void {
        this.palettes = [{
            id: 'basic',
            symbols: this.getBasicShapes(),
            title: 'Basic Shapes',
        }, {
            id: 'flow',
            symbols: this.getFlowShapes(),
            title: 'Flow Shapes',
        },];
    }
    //Description appearance customization of a symbol
    getSymbolInfo(symbol: Node | Connector): SymbolInfo {
        return {
            width: 100,
            height: 50,
            description: {
                // Defines the description text for the symbol
                text: (symbol as any).id,
                // Defines the margin between the symbol and text
                margin: { top: 20, bottom: 10 },
                // Defines the background color of the text
                fill: 'green',
                // Defines the font family of the text
                fontFamily: 'Calibri',
                // Defines the font size of the text
                fontSize: 15,
                // Defines if the text is bold
                bold: true,
                // Defines if the text is italic
                italic: true,
                // Defines the text decoration
                textDecoration: 'Underline',
                // Defines the color of the text
                color: 'white',
            },
        };
    }
}

