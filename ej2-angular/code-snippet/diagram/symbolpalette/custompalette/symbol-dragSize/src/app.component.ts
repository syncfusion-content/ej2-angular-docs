import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, SymbolPaletteModule, NodeModel, PaletteModel, SymbolDragSizeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [DiagramModule, SymbolPaletteModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-symbolpalette id="symbolpalette" [palettes]="palettes" [symbolDragSize]="symbolDragSize">
    </ejs-symbolpalette>
    <ejs-diagram id="diagram" widht="1000px" height="500px">
        </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public palettes?: PaletteModel[];
    // Defines the size of the shape while dragging it from the palette to the diagram canvas
    public symbolDragSize: SymbolDragSizeModel = { height: 30, width: 40 };
    //Initialize the basic shapes for the symbol palette
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
    ngOnInit(): void {
        this.palettes = [{
            id: 'basic',
            expanded: true,
            symbols: this.getBasicShapes(),
            title: 'Basic Shapes',
        }];
    }
}


