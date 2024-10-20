import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, SymbolPaletteModule, NodeModel, ConnectorModel, PaletteModel } from '@syncfusion/ej2-angular-diagrams';


@Component({
    imports: [
        DiagramModule, SymbolPaletteModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-symbolpalette id="symbolpalette" [palettes]="palettes" [getNodeDefaults]="getNodeDefaults" [getConnectorDefaults]="getConnectorDefaults">
    </ejs-symbolpalette>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public palettes?: PaletteModel[];
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
    //Returns the default properties of node
    getNodeDefaults(node: NodeModel): NodeModel {
        (node as any).style.fill = 'yellow';
        return node;
    }
    //Returns the default properties of connector
    getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
        (connector as any).targetDecorator.shape = 'DoubleArrow';
        return connector;
    }
    ngOnInit(): void {
        this.palettes = [{
            id: 'flow',
            symbols: this.getFlowShapes(),
            title: 'Flow Shapes',
            iconCss: 'e-ddb-icons e-flow'
        },
        {
            id: 'connectors',
            symbols: this.getConnectors(),
            title: 'Connectors',
            iconCss: 'e-ddb-icons e-connector'
        }];
    }

}


