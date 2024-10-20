import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, SymbolPaletteModule, SymbolPaletteComponent, NodeModel, NodeConstraints, PaletteModel, IDragEnterEventArgs } from '@syncfusion/ej2-angular-diagrams';


@Component({
    imports: [
        DiagramModule, SymbolPaletteModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-symbolpalette #symbolpalette id="symbolpalette" [palettes]="palettes" [symbolWidth]=80 [symbolHeight]=80>
    </ejs-symbolpalette>
    <ejs-diagram id="diagram" width="1000px" height="500px" (dragEnter) = "dragEnter($event)"></ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("symbolpalette")
    public symbolPalette?: SymbolPaletteComponent;
    public palettes: PaletteModel[] = [{
        id: 'basic',
        symbols: this.getBasicShapes(),
        title: 'Basic Shapes',
        iconCss: 'e-ddb-icons e-basic'
    }];

    //Initialize the basic shapes for the symbol palette
    getBasicShapes(): NodeModel[] {
        let nodes: NodeModel[] = [
            {
                id: 'rectangle',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle',
                },
                // Defines the tooltip for the shape
                tooltip: { content: 'Rectangle Basic shape', relativeMode: 'Object' },
                constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
            },
            {
                id: 'plus',
                shape: {
                    type: 'Basic',
                    shape: 'Plus',
                },
                // Defines the tooltip for the shape
                tooltip: { content: 'Plus Basic shape', relativeMode: 'Object' },
                constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
            },
            {
                id: 'triangle',
                shape: {
                    type: 'Basic',
                    shape: 'RightTriangle',
                },
                // Defines the tooltip for the shape
                tooltip: { content: 'RightTriangle Basic shape', relativeMode: 'Object' },
                constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
            },
        ];
        return nodes;
    }
    dragEnter(args: IDragEnterEventArgs) {
        let node: NodeModel = args.element as NodeModel;
        (node as any).tooltip.content = 'New ' + (node as any).shape.shape + ' node';
    }
}

