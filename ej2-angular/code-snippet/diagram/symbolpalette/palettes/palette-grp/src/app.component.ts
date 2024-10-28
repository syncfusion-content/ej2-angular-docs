import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule, SymbolPaletteModule, PaletteModel, NodeModel } from '@syncfusion/ej2-angular-diagrams'
import { ExpandMode } from '@syncfusion/ej2-navigations';

@Component({
    imports: [
        DiagramModule, SymbolPaletteModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-symbolpalette id="symbolpalette" width="100%" height="100%" [palettes]="palettes" [expandMode]="expandMode">
        </ejs-symbolpalette>
        <ejs-diagram id="diagram" width="1000px" height="500px">
        </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public expandMode: ExpandMode = 'Single';
    getGroupNodes(): NodeModel[] {
        let shapes: NodeModel[] = [
            {
                id: 'n1',
                height: 50,
                width: 50,
                offsetX: 50,
                offsetY: 50,
                style: { fill: 'green' },
            },
            {
                id: 'n2',
                height: 50,
                width: 50,
                offsetX: 100,
                offsetY: 100,
                style: { fill: 'yellow' },
            },
            {
                id: 'group1',
                children: ['n1', 'n2'],
                padding: { left: 10, right: 10, top: 10, bottom: 10 },
            },
            {
                id: 'n3',
                height: 50,
                width: 50,
                offsetX: 100,
                offsetY: 100,
                style: { fill: 'pink' },
            },
            {
                id: 'n4',
                height: 50,
                width: 50,
                offsetX: 100,
                offsetY: 170,
                style: { fill: 'orange' },
            },
            {
                id: 'group2',
                children: ['n3', 'n4'],
                padding: { left: 10, right: 10, top: 10, bottom: 10 },
            },
        ];
        return shapes;
    }
    public palettes: PaletteModel[] = [
        {
            id: 'palette1',
            title: 'Group Nodes',
            symbols: this.getGroupNodes(),
            expanded: true,
        }
    ];
}