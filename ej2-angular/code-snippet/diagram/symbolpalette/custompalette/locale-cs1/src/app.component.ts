import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { NodeModel, SymbolPalette } from '@syncfusion/ej2-diagrams';
import { SymbolPaletteModule, SymbolPaletteComponent, PaletteModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [
        SymbolPaletteModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-symbolpalette #symbolpalette id="symbolpalette" [palettes]="palettes" [symbolWidth]= 80 [symbolHeight] = 80 [enableSearch]= true [enableAnimation]= false [locale]="locale">
    </ejs-symbolpalette>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("symbolpalette")
    public symbolPalette?: SymbolPaletteComponent;
    public palettes?: PaletteModel[];
    public locale?: string;
    //Initialize the basic shapes for the symbol palette
    getBasicShapes(): NodeModel[] {
        let basicShapes: NodeModel[] = [
            {
                id: 'Rectangle',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle',
                },
            },
            {
                id: 'Ellipse',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse',
                },
            },
            {
                id: 'Hexagon',
                shape: {
                    type: 'Basic',
                    shape: 'Hexagon',
                },
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
        // Override the global culture and localization value 
        this.locale = 'de-DE';

        // Set the default culture to German
        setCulture('de');

        // Load locale text for the SearchShapes
        L10n.load({
            'de-DE': {
                SymbolPalette: {
                    SearchShapes: 'Formen suchen',
                },
            },
        });
    }
}
