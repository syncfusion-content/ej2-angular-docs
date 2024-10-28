import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, SymbolPaletteModule,  NodeModel, MarginModel, PaletteModel } from '@syncfusion/ej2-angular-diagrams';
import { ExpandMode } from '@syncfusion/ej2-navigations';

@Component({
imports: [
         DiagramModule, SymbolPaletteModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-symbolpalette id="symbolpalette" width="100%" height="700px" [symbolHeight]=80 [symbolWidth]=80 [expandMode]="expandMode" [palettes]="palettes" [symbolMargin]="symbolMargin">
    </ejs-symbolpalette>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public expandMode?: ExpandMode;
    public palettes?: PaletteModel[];
    public symbolMargin?: MarginModel;
    public getBasicShapes(): NodeModel[] {
        let basicShapes: NodeModel[] = [{
                id: 'Rectangle',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                }
            },
            {
                id: 'Ellipse',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                }
            },
            {
                id: 'Hexagon',
                shape: {
                    type: 'Basic',
                    shape: 'Hexagon'
                }
            }
        ];
        return basicShapes;
    };
    ngOnInit(): void {
        this.expandMode = 'Multiple'
        this.palettes = [{
            id: 'basic',
            expanded: true,
            symbols: this.getBasicShapes(),
            title: 'Basic Shapes',
            iconCss: 'e-ddb-icons e-basic'
        }]
        //Sets the space to be left around a symbol
        this.symbolMargin = {
            left: 15,
            right: 15,
            top: 15,
            bottom: 15
        }
    }
}


