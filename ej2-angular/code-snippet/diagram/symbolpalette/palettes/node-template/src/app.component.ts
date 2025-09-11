import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, SymbolPaletteModule, SymbolPreviewModel, NodeModel, PaletteModel, MarginModel } from '@syncfusion/ej2-angular-diagrams';
import { CommonModule } from '@angular/common';


@Component({
    imports: [DiagramModule, SymbolPaletteModule, CommonModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `
    <ejs-symbolpalette id="symbolpalette" [palettes]="palettes" [getSymbolInfo]="getSymbolInfo" >
        <ng-template #nodeTemplate let-data >
                <div style="height:100%; background:#e0f7fa;font-family:Arial;padding-left:10px;">
                    <div style="font-size:12px;font-weight:bold;margin-left:5px;padding-top: 25px;">🌤 28°C</div>
                    <div style="font-size:10px;margin-left:5px;">Puducherry</div>
                    <div style="font-size:8px; color:#666;margin-left:5px;">Humidity: 60%</div>
                </div>
        </ng-template>
    </ejs-symbolpalette>
    <ejs-diagram id="diagram" width="2000px" height="500px" >
        <ng-template #nodeTemplate let-data >
            <div *ngIf="data.id.includes('node1')" style="height:100%; background:#e0f7fa;font-family:Arial;padding-left:10px;">
                <div style="font-size:12px;font-weight:bold;margin-left:5px;padding-top: 25px;">🌤 28°C</div>
                <div style="font-size:10px;margin-left:5px;">Puducherry</div>
                <div style="font-size:8px; color:#666;margin-left:5px;">Humidity: 60%</div>
            </div>
        </ng-template>
    </ejs-diagram>`,
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
                type: 'HTML'
            }
        }
        ];
        return basicShapes;
    };

    public getSymbolInfo() {
        return {
            fit: true
        };
    };

    ngOnInit(): void {
        //this.expandMode = 'Multiple'
        this.palettes = [{
            id: 'basic',
            expanded: true,
            symbols: this.getShapes(),
            title: 'HTML Node'
        }];
    };
};