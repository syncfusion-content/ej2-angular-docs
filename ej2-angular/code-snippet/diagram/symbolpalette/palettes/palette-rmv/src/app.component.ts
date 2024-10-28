import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, SymbolPaletteModule, SymbolPaletteComponent, NodeModel, ConnectorModel, PaletteModel } from '@syncfusion/ej2-angular-diagrams';


@Component({
    imports: [
        DiagramModule, SymbolPaletteModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<button id='removePalette' (click)="removePalette()">removePalette</button>
    <button id='removePalettes' (click)="removePalettes()">removePalettes</button>
    <ejs-symbolpalette #symbolpalette id="symbolpalette" [palettes]="palettes">`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("symbolpalette")
    public symbolPalette?: SymbolPaletteComponent;
    public palettes: PaletteModel[] = [{
        id: 'flow',
        symbols: this.getFlowShapes(),
        title: 'Flow Shapes',
    },
    {
        id: 'basic',
        symbols: this.getBasicShapes(),
        title: 'Basic Shapes',
    },
    {
        id: 'connectors',
        symbols: this.getConnectors(),
        title: 'Connectors',
    },
    ];
    //Initialize the flowshapes for the symbol palette
    getFlowShapes(): NodeModel[] {
        let flowShapes: NodeModel[] = [
            {
                id: 'process',
                shape: {
                    type: 'Flow',
                    shape: 'Process',
                },
            },
            {
                id: 'document',
                shape: {
                    type: 'Flow',
                    shape: 'Document',
                },
            },
            {
                id: 'predefinedprocess',
                shape: {
                    type: 'Flow',
                    shape: 'PreDefinedProcess',
                },
            },
        ];
        return flowShapes;
    }
    //Initialize the basic shapes for the symbol palette
    getBasicShapes(): NodeModel[] {
        let nodes: NodeModel[] = [
            {
                id: 'rectangle',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle',
                },
            },
            {
                id: 'plus',
                shape: {
                    type: 'Basic',
                    shape: 'Plus',
                },
            },
            {
                id: 'triangle',
                shape: {
                    type: 'Basic',
                    shape: 'RightTriangle',
                },
            },
        ];
        return nodes;
    }
    //Initialize the connectors for the symbol palette
    getConnectors(): ConnectorModel[] {
        let connectors: ConnectorModel[] = [
            {
                id: 'Link1',
                type: 'Orthogonal',
                sourcePoint: { x: 0, y: 0 },
                targetPoint: { x: 60, y: 60 },
                style: { strokeWidth: 1, strokeColor: '#757575' },
                targetDecorator: {
                    shape: 'Arrow',
                    style: { strokeColor: '#757575', fill: '#757575' },
                },
            },
            {
                id: 'link3',
                type: 'Orthogonal',
                sourcePoint: { x: 0, y: 0 },
                targetPoint: { x: 60, y: 60 },
                targetDecorator: { shape: 'None' },
                style: { strokeWidth: 1, strokeColor: '#757575' },
            },
            {
                id: 'Link21',
                type: 'Straight',
                sourcePoint: { x: 0, y: 0 },
                targetPoint: { x: 60, y: 60 },
                style: { strokeWidth: 1, strokeColor: '#757575' },
                targetDecorator: {
                    shape: 'Arrow',
                    style: { strokeColor: '#757575', fill: '#757575' },
                },
            },
            {
                id: 'link23',
                type: 'Straight',
                sourcePoint: { x: 0, y: 0 },
                targetPoint: { x: 60, y: 60 },
                targetDecorator: { shape: 'None' },
                style: { strokeWidth: 1, strokeColor: '#757575' },
            },
            {
                id: 'link33',
                type: 'Bezier',
                sourcePoint: { x: 0, y: 0 },
                targetPoint: { x: 60, y: 60 },
                targetDecorator: { shape: 'None' },
                style: { strokeWidth: 1, strokeColor: '#757575' },
            },
        ];
        return connectors;
    }
  
    removePalette() {
        /**
         * parameter - The ID of palette to be removed in symbol palette.
         */
        (this.symbolPalette as SymbolPaletteComponent).removePalette('basic');
        (this.symbolPalette as SymbolPaletteComponent).refresh();
    };

    removePalettes() {
        let palettes: string[] = ['flow', 'connectors'];
        /**
         * parameter - The ID array of palettes to be removed in symbol palette.
         */
        (this.symbolPalette as SymbolPaletteComponent).removePalettes(palettes);
        (this.symbolPalette as SymbolPaletteComponent).refresh();
    }
}

