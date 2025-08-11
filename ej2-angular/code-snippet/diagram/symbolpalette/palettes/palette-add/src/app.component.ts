import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, SymbolPaletteModule, SymbolPaletteComponent, NodeModel, ConnectorModel, PaletteModel, randomId } from '@syncfusion/ej2-angular-diagrams';


@Component({
    imports: [
        DiagramModule, SymbolPaletteModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<button id='addPalette' (click)="addPalette()">Add Palette</button>
    <ejs-symbolpalette #symbolpalette id="symbolpalette" [palettes]="palettes" [enablePersistence]="enablePersistence" >`,
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
        id: 'connectors',
        symbols: this.getConnectors(),
        title: 'Connectors',
    }];
    public enablePersistence: boolean = false;
    public getFlowShapes(): NodeModel[] {
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
    public getConnectors(): ConnectorModel[] {
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

    addPalette() {
        let newPaletteShapes: NodeModel[] = [
            {
                id: 'rectangle' + randomId(),
                shape: { type: 'Basic', shape: 'Rectangle' },
            },
            {
                id: 'plus' + randomId(),
                shape: { type: 'Basic', shape: 'Plus' },
            },
        ];
        let newPalette: PaletteModel[] = [
            {
                id: 'basic' + randomId(),
                symbols: newPaletteShapes,
                title: 'New Shapes',
            },
        ];
        /**
         * parameter - The new palette to be added in symbol palette.
         */
        (this.symbolPalette as SymbolPaletteComponent).addPalettes(newPalette);
    }
}


