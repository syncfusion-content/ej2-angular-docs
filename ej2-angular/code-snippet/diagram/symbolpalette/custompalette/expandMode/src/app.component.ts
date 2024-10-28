import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, SymbolPaletteModule, NodeModel, ConnectorModel, PaletteModel } from '@syncfusion/ej2-angular-diagrams';
import { ExpandMode } from '@syncfusion/ej2-navigations';

@Component({
    imports: [
        DiagramModule, SymbolPaletteModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-symbolpalette id="symbolpalette"width="100%" height="700px" [expandMode]="expandMode" [palettes]="palettes" [symbolHeight]=80 [symbolWidth]=80>
    </ejs-symbolpalette>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    //Expands only one palette at a time
    public expandMode: ExpandMode = 'Single';
    public palettes?: PaletteModel[];
    //Initialize the basicshapes for the symbol palette
    getBasicShapes() {
        var basicShapes: NodeModel[] = [
            {
                id: 'Rectangle',
                shape: { type: 'Basic', shape: 'Rectangle' },
                style: { strokeWidth: 2 },
            },
            {
                id: 'Ellipse',
                shape: { type: 'Basic', shape: 'RightTriangle' },
                style: { strokeWidth: 2 },
            },
            {
                id: 'Hexagon',
                shape: { type: 'Basic', shape: 'Hexagon' },
                style: { strokeWidth: 2 },
            }
        ];
        return basicShapes;
    }
    //Initialize the flowshapes for the symbol palette
    getFlowShapes() {
        var flowShapes: NodeModel[] = [
            {
                id: 'Process',
                shape: { type: 'Flow', shape: 'Process' },
                style: { strokeWidth: 2 },
            },
            {
                id: 'Document',
                shape: { type: 'Flow', shape: 'Document' },
                style: { strokeWidth: 2 },
            }
        ];
        return flowShapes;
    }
    //Initialize connectors for symbol palette
    getConnectors() {
        var connectors: ConnectorModel[] = [
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
                    shape: 'Arrow', style: { strokeColor: '#757575', fill: '#757575' },
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
            }
        ];
        return connectors;
    }
    ngOnInit(): void {
        this.palettes = [
            {
                id: 'flow',
                expanded: true,
                symbols: this.getFlowShapes(),
                title: 'Flow Shapes',
                iconCss: 'e-ddb-icons e-flow'
            },
            {
                id: 'basic',
                expanded: true,
                symbols: this.getBasicShapes(),
                title: 'Basic Shapes',
                iconCss: 'e-ddb-icons e-basic'
            },
            {
                id: 'connectors',
                expanded: true,
                symbols: this.getConnectors(),
                title: 'Connectors',
                iconCss: 'e-ddb-icons e-connector'
            }
        ]
    }
}


