import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule, SymbolPaletteModule, PaletteModel, NodeModel } from '@syncfusion/ej2-angular-diagrams'

@Component({
    imports: [DiagramModule, SymbolPaletteModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-symbolpalette id="symbolpalette" width="100%" height="100%" [palettes]="palettes"
            [symbolWidth] = 60 [symbolHeight] = 60 [enableSearch]="enableSearch" [ignoreSymbolsOnSearch]="ignoreSymbolsOnSearch">
        </ejs-symbolpalette>
        <ejs-diagram id="diagram" width="1000px" height="500px" >
        </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public enableSearch: boolean = true;
    // collection of shapes to be ignored on search
    public ignoreSymbolsOnSearch: string[] = ['plus'];
    getBasicShapes(): NodeModel[] {
        let nodes: NodeModel[] = [
            {
                id: 'rectangle',
                shape: { type: 'Basic', shape: 'Rectangle', },
            },
            {
                id: 'plus',
                shape: { type: 'Basic', shape: 'Plus', },
            },
            {
                id: 'triangle',
                shape: { type: 'Basic', shape: 'RightTriangle', },
            },
        ];
        return nodes;
    }
    public palettes: PaletteModel[] = [
        {
            id: 'basic',
            symbols: this.getBasicShapes(),
            title: 'Basic Shapes',
        },
    ];
}