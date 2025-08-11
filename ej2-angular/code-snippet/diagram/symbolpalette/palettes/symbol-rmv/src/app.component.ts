import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SymbolPaletteComponent, DiagramModule, SymbolPaletteModule, NodeModel, PaletteModel } from '@syncfusion/ej2-angular-diagrams';
import { ExpandMode } from '@syncfusion/ej2-navigations';

@Component({
    imports: [
        DiagramModule, SymbolPaletteModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<button id='rmvBasicShape' (click)="removeBasicShape()">removeBasicShape</button>
    <button id='rmvFlowShape' (click)="removeFlowShape()">removeFlowShape</button>
    <ejs-symbolpalette #symbolpalette id="symbolpalette"width="100%" height="100%" [expandMode]="expandMode" [palettes]="palettes" [symbolHeight]=50 [symbolWidth]=50>
    </ejs-symbolpalette>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("symbolpalette")
    public symbolPalette?: SymbolPaletteComponent
    public expandMode?: ExpandMode;
    public palettes?: PaletteModel[];
    public getBasicShapes(): NodeModel[] {
        let basicShapes: NodeModel[] = [
            {
                id: 'Rectangle',
                shape: { type: 'Basic', shape: 'Rectangle' },
                style: { strokeWidth: 2 },
              },
              {
                id: 'Ellipse',
                shape: { type: 'Basic', shape: 'Ellipse' },
                style: { strokeWidth: 2 },
              },
        ];
        return basicShapes;
    };
    public getFlowShapes(): NodeModel[] {
        let flowShapes: NodeModel[] = [
            {
                id: 'Decision',
                shape: { type: 'Flow', shape: 'Decision' },
                style: { strokeWidth: 2 },
              },
              {
                id: 'Document',
                shape: { type: 'Flow', shape: 'Document' },
                style: { strokeWidth: 2 },
              },
        ];
        return flowShapes;
    };

    ngOnInit(): void {
        this.expandMode = 'Multiple'
        this.palettes = [
            {
                id: 'basic',
                expanded: true,
                symbols: this.getBasicShapes(),
                title: 'Basic Shapes',
            },
            {
                id: 'flow',
                expanded: true,
                symbols: this.getFlowShapes(),
                title: 'Flow Shapes',
            },
        ];
    }
    removeBasicShape() {
            /**
     * parameter 1 - The ID of the palette where the shape to be removed.
     * parameter 2 - ID of the shape to be removed
     */
        let id = ((this.symbolPalette as SymbolPaletteComponent).palettes[0] as any).symbols[0]?.id;
        (this.symbolPalette as SymbolPaletteComponent).removePaletteItem('basic', id);
    }

    removeFlowShape() {
        let id = ((this.symbolPalette as SymbolPaletteComponent).palettes[1] as any).symbols[0]?.id;
        /**
         * parameter 1 - The ID of the palette where the shape to be removed.
         * parameter 2 - ID of the shape to be removed
         */
        (this.symbolPalette as SymbolPaletteComponent).removePaletteItem('flow', id);
    }
}


