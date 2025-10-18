import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    SymbolPaletteModule,
    NodeModel,
    PaletteModel,
    SymbolPreviewModel,
    MarginModel,
    SymbolPaletteComponent,
} from '@syncfusion/ej2-angular-diagrams';
import { ExpandMode } from '@syncfusion/ej2-navigations';

@Component({
    imports: [
        SymbolPaletteModule
    ],
    providers: [],
    standalone: true,
    selector: "app-container",
    template:
        `<ejs-symbolpalette #symbolpalette id="symbolpalette"width="700px" height="300px" [expandMode]="expandMode" 
        [palettes]="palettes" [symbolHeight]=70 [symbolWidth]=70 [symbolPreview]="symbolPreview" [symbolMargin]="symbolMargin" 
        [getSymbolInfo]="getSymbolInfo" [getNodeDefaults] ='getNodeDefaults'>
        </ejs-symbolpalette>
        <input id="showTooltip" checked type="checkbox" (click)='changeTooltip()'>Show Tooltip`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("symbolpalette")
    public symbolPalette?: SymbolPaletteComponent;
    public expandMode?: ExpandMode;
    public palettes?: PaletteModel[];
    public symbolPreview?: SymbolPreviewModel;
    public symbolMargin?: MarginModel;
    public getSymbolInfo(symbol: any) {
        return {
            showTooltip: true
        };
    }
    public getBasicShapes(): NodeModel[] {
        let basicShapes: NodeModel[] = [
            { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' } },
            { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' } },
            { id: 'Hexagon', shape: { type: 'Basic', shape: 'Triangle' } },
            { id: 'Star', shape: { type: 'Basic', shape: 'Hexagon' } },
            { id: 'Pentagon', shape: { type: 'Basic', shape: 'Parallelogram' } },
            { id: 'Diamond', shape: { type: 'Basic', shape: 'Diamond' } },
            { id: 'Pentagon', shape: { type: 'Basic', shape: 'Pentagon' } },
            { id: 'Heptagon', shape: { type: 'Basic', shape: 'Heptagon' } },
        ];
        return basicShapes;
    }
    public getFlowShapes(): NodeModel[] {
        let flowShapes: NodeModel[] = [
            { id: 'Terminator', shape: { type: 'Flow', shape: 'Terminator' } },
            { id: 'Process', shape: { type: 'Flow', shape: 'Process' } },
            { id: 'Decision', shape: { type: 'Flow', shape: 'Decision' } },
            { id: 'Document', shape: { type: 'Flow', shape: 'Document' } },
            { id: 'PreDefinedProcess', shape: { type: 'Flow', shape: 'PreDefinedProcess' } },
            { id: 'DirectData', shape: { type: 'Flow', shape: 'DirectData' } },
            { id: 'SequentialData', shape: { type: 'Flow', shape: 'Card' } },
            { id: 'Sort', shape: { type: 'Flow', shape: 'Collate' } },
        ];
        return flowShapes;
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        (node.style as any).fill = '#6495ED';
        (node.style as any).strokeColor = '#6495ED';
        return node;
    }
    changeTooltip() {
        var checkBox = document.getElementById('showTooltip');
        (this.symbolPalette as SymbolPaletteComponent).getSymbolInfo = function () {
            return { showTooltip: (checkBox as any).checked };
        }
    }
    ngOnInit(): void {
        this.expandMode = 'Multiple';
        this.palettes = [
            {
                id: 'flow',
                expanded: true,
                symbols: this.getFlowShapes(),
                title: 'Flow Shapes',
            },
            {
                id: 'basic',
                expanded: true,
                symbols: this.getBasicShapes(),
                title: 'Basic Shapes',
            },
        ];
        this.symbolPreview = {
            height: 80,
            width: 80,
        };
        this.symbolMargin = {
            left: 15,
            right: 15,
            top: 15,
            bottom: 15,
        };
    }
}


