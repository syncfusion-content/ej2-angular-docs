import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule, SymbolPaletteModule, PaletteModel, NodeModel } from '@syncfusion/ej2-angular-diagrams'

@Component({
    imports: [
        DiagramModule, SymbolPaletteModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-symbolpalette id="symbolpalette" width="100%" height="100%" [palettes]="palettes" [symbolWidth] = 60 [symbolHeight] = 60 [enableSearch]="enableSearch">
        </ejs-symbolpalette>
        <ejs-diagram id="diagram" width="1000px" height="500px" >
        </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public enableSearch: boolean = true;
    public flowShapes: NodeModel[] = [
        { id: 'terminator', shape: { type: 'Flow', shape: 'Terminator' } },
        { id: 'process', shape: { type: 'Flow', shape: 'Process' } },
        { id: 'decision', shape: { type: 'Flow', shape: 'Decision' } },
        { id: 'document', shape: { type: 'Flow', shape: 'Document' } },
        {
            id: 'preDefinedProcess',
            shape: { type: 'Flow', shape: 'PreDefinedProcess' },
        },
        { id: 'paperTap', shape: { type: 'Flow', shape: 'PaperTap' } },
        { id: 'directData', shape: { type: 'Flow', shape: 'DirectData' } },
        { id: 'sequentialData', shape: { type: 'Flow', shape: 'SequentialData' } },
        { id: 'sort', shape: { type: 'Flow', shape: 'Sort' } },
    ];
    public palettes: PaletteModel[] = [
        {
            id: 'basic',
            symbols: this.flowShapes,
            title: 'Basic Shapes',
        },
    ];
}