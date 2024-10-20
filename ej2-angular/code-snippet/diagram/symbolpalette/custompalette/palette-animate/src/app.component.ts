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
    template: `<label>Enable animation</label>
    <input style="margin-left: 5px" id="enableAnimation" type="checkbox" checked (click)="toggleAnimation($event)" />
    <ejs-symbolpalette #symbolpalette id="symbolpalette" [palettes]="palettes" [enableAnimation]="enableAnimation">
    </ejs-symbolpalette>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("symbolpalette")
    public symbolPalette?: SymbolPaletteComponent;
    // Enables / Disables animation
    public enableAnimation: boolean = true;
    public palettes: PaletteModel[] = [{
        id: 'basic',
        symbols: this.getBasicShapes(),
        title: 'Basic Shapes',
        iconCss: 'e-ddb-icons e-basic'
    }];
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
    toggleAnimation(args: any) {
        if (args.target.checked) {
            this.enableAnimation = true;
        } else {
            this.enableAnimation = false;
        }
        (this.symbolPalette as SymbolPaletteComponent).refresh();
    }
}

