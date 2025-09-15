import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, SymbolPaletteModule, SymbolPreviewModel, NodeModel, PaletteModel, MarginModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [DiagramModule, SymbolPaletteModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `
    <ejs-symbolpalette id="symbolpalette" [palettes]="palettes" [getSymbolInfo]="getSymbolInfo"></ejs-symbolpalette>
    <ejs-diagram id="diagram" width="1000px" height="500px"></ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public palettes?: PaletteModel[];
    public getShapes(): NodeModel[] {
        let basicShapes: NodeModel[] = [{
            id: 'node1',
            width: 100,
            height: 100,
            shape: {
                type: 'HTML',
                content: this.template('node1')
            }
        },
        {
            id: 'node2',
            width: 100,
            height: 100,
            shape: {
                type: 'Native',
                scale: 'Stretch',
                content: this.template('node2')
            }
        }
        ];
        return basicShapes;
    };

    // Template function for HTML and SVG nodes.
    public template(obj: any): string {
        if (obj === 'node1') {
            return '<div style="height:100%; background:#e3daf1;font-family:Arial;padding-left:13px;"><div style="font-size:12px;font-weight:bold;margin-left:3px;padding-top: 16px;">📅Meeting</div><div style="font-size:10px;margin-left:5px;">Team Sync @4PM</div><div style="font-size:8px; color:#666;margin-left:5px;">Room 30</div></div>';
        }
        else {
            return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="#007BFF"/><path d="M6.5 7.5L17.5 16.5L12 21V3L17.5 7.5L6.5 16.5" fill="none" stroke="white" stroke-width="2"/></svg>';
        };
    };

    public getSymbolInfo() {
        return {
            fit: true
        };
    };

    ngOnInit(): void {
        this.palettes = [{
            id: 'palette',
            expanded: true,
            symbols: this.getShapes(),
            title: 'HTML and SVG Nodes'
        }];
    };
}