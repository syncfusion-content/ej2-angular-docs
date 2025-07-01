import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SymbolPaletteModule, SymbolPaletteComponent, DiagramModule, randomId, NodeModel, PaletteModel } from '@syncfusion/ej2-angular-diagrams';
import { ExpandMode } from '@syncfusion/ej2-navigations';

@Component({
    imports: [DiagramModule, SymbolPaletteModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<button id='addBasicShape' (click)="addBasicShape()">Add BasicShape</button>
    <button id='addFlowShape' (click)="addFlowShape()">Add FlowShape</button>
    <ejs-symbolpalette #symbolpalette id="symbolpalette"width="100%" height="100%" [expandMode]="expandMode"
        [palettes]="palettes" [symbolHeight]=50 [symbolWidth]=50>
    </ejs-symbolpalette>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("symbolpalette")
    public symbolPalette?: SymbolPaletteComponent;
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
    addBasicShape() {
        let node: NodeModel = {
            id: 'Plus' + randomId(),
            shape: { type: 'Basic', shape: 'Plus' },
            style: { strokeWidth: 2 },
        };
        /**
         * parameter 1 - The ID of the palette where the new shape is to be added.
         * parameter 2 - node/connector to be added
         */
        (this.symbolPalette as SymbolPaletteComponent).addPaletteItem('basic', node);
    }

    addFlowShape() {
        let node: NodeModel = {
            id: 'Decision' + randomId(),
            shape: { type: 'Flow', shape: 'Decision' },
            style: { strokeWidth: 2 },
        };
        /**
         * parameter 1 - The ID of the palette where the new shape is to be added.
         * parameter 2 - node/connector to be added
         */
        (this.symbolPalette as SymbolPaletteComponent).addPaletteItem('flow', node);
    }
}


