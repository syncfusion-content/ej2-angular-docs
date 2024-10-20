import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SymbolPaletteModule, ConnectorModel, PaletteModel } from '@syncfusion/ej2-angular-diagrams';
import { ExpandMode } from '@syncfusion/ej2-navigations';

@Component({
    imports: [
        SymbolPaletteModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-symbolpalette id="symbolpalette"width="100%" height="100%" [expandMode]="expandMode" [palettes]="palettes" [symbolHeight]=80 [symbolWidth]=80>
    </ejs-symbolpalette>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public expandMode?: ExpandMode;
    public palettes?: PaletteModel[];

    public getConnectors(): ConnectorModel[] {
        let connectors: ConnectorModel[] = [
            {
                id: 'Straight',
                type: 'Straight',
                sourcePoint: { x: 0, y: 0 },
                targetPoint: { x: 60, y: 60 },
                targetDecorator: {
                    shape: 'Arrow',
                    style: { strokeColor: '#757575', fill: '#757575' },
                },
                style: { strokeWidth: 1, strokeColor: '#757575' },
            },
            {
                id: 'Orthogonal',
                type: 'Orthogonal',
                sourcePoint: { x: 0, y: 0 },
                targetPoint: { x: 60, y: 60 },
                targetDecorator: {
                    shape: 'Arrow',
                    style: { strokeColor: '#757575', fill: '#757575' },
                },
                style: { strokeWidth: 1, strokeColor: '#757575' },
            },
            {
                id: 'Bezier',
                type: 'Bezier',
                sourcePoint: { x: 0, y: 0 },
                targetPoint: { x: 60, y: 60 },
                targetDecorator: {
                    shape: 'Arrow',
                    style: { strokeColor: '#757575', fill: '#757575' },
                },
                style: { strokeWidth: 1, strokeColor: '#757575' },
            },
        ];

        return connectors;
    }

    ngOnInit(): void {
        //Expands only one palette at a time
        this.expandMode = 'Single'
        this.palettes = [
            {
                id: 'connectors',
                expanded: true,
                symbols: this.getConnectors(),
                title: 'Connectors',
                iconCss: 'e-ddb-icons e-connector'
            }
        ];
    }
}


