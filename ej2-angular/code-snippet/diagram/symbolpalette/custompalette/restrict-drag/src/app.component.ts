import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule, SymbolPaletteModule, PaletteModel, NodeModel } from '@syncfusion/ej2-angular-diagrams'

@Component({
  imports: [
    DiagramModule, SymbolPaletteModule
  ],

  providers: [],
  standalone: true,
  selector: "app-container",
  template: `<ejs-symbolpalette id="symbolpalette" width="100%" height="100%" [symbolWidth]=80  [symbolHeight]=80 [palettes]="palettes" [allowDrag]="allowDrag">
        </ejs-symbolpalette>
        <ejs-diagram id="diagram" width="1000px" height="500px" >
        </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public allowDrag: boolean = false;
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
  public palettes: PaletteModel[] = [
    {
      id: 'basic',
      symbols: this.getBasicShapes(),
      title: 'Basic Shapes',
    },
  ];
}