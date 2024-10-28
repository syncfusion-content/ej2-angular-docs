import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, SymbolPaletteModule, NodeModel, PaletteModel, IDragLeaveEventArgs } from '@syncfusion/ej2-angular-diagrams'

@Component({
    imports: [
        DiagramModule, SymbolPaletteModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-symbolpalette id="symbolpalette" [palettes]="palettes" [symbolHeight]=50 [symbolWidth]=70>
    </ejs-symbolpalette>
    <ejs-diagram #diagram id="diagram" width="1000" height="500px" (dragLeave)="dragLeave($event)"></ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
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

    dragLeave(args: IDragLeaveEventArgs) {
        //drag leaved symbol
        console.log((args.element as any).id);
        //customize
    }
}


