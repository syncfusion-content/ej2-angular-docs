import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, SymbolPaletteModule, NodeModel, PaletteModel, SymbolInfo } from '@syncfusion/ej2-angular-diagrams';
import { ExpandMode } from '@syncfusion/ej2-navigations';

@Component({
    imports: [
        DiagramModule, SymbolPaletteModule
    ],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-symbolpalette id="symbolpalette"width="100%" height="700px" [symbolHeight]=80 [symbolWidth]=80
        [expandMode]="expandMode" [palettes]="palettes" [getSymbolInfo]="getSymbolInfo">
    </ejs-symbolpalette>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public expandMode: ExpandMode = 'Multiple';
    public palettes: PaletteModel[] = [{
        id: 'basic',
        expanded: true,
        symbols: this.getBasicShapes(),
        title: 'Basic Shapes',
        iconCss: 'e-ddb-icons e-basic'
    }];
    public getBasicShapes(): NodeModel[] {
        let basicShapes: NodeModel[] = [{
            id: 'Rectangle', width: 200,
            shape: {
                type: 'Basic',
                shape: 'Rectangle'
            }
        },
        {
            id: 'Ellipse', width: 200,
            shape: {
                type: 'Basic',
                shape: 'Ellipse'
            }
        },
        {
            id: 'Hexagon', width: 200,
            shape: {
                type: 'Basic',
                shape: 'Hexagon'
            }
        }
        ];
        return basicShapes;
    };
    public getSymbolInfo(): SymbolInfo {
        // Enables to fit the content into the specified palette item size
        return {
            fit: true
        };
        // When it is set as false, the element is rendered with actual node size
    };
}


