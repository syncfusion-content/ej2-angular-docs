import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SymbolPaletteModule, NodeModel, PaletteModel, IPaletteExpandArgs } from '@syncfusion/ej2-angular-diagrams'

@Component({
    imports: [
        SymbolPaletteModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-symbolpalette id="symbolpalette" [palettes]="palettes" [symbolHeight]=50 [symbolWidth]=70 (paletteExpanding)="paletteExpanding($event)">
    </ejs-symbolpalette>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public palettes: PaletteModel[] = [
        {
            id: 'basic',
            symbols: this.getBasicShapes(),
            title: 'Basic Shapes',
        },
    ];
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
    paletteExpanding(args: IPaletteExpandArgs) {
        if (args.isExpanded) {
            alert('Palette expanded');
        } else {
            alert('Palette collapsed');
        }
    }
}


