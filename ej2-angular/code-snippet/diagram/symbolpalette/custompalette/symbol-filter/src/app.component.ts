import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule, SymbolPaletteModule, PaletteModel, NodeModel } from '@syncfusion/ej2-angular-diagrams'

@Component({
  imports: [DiagramModule, SymbolPaletteModule],
  providers: [],
  standalone: true,
  selector: "app-container",
  template: `<ejs-symbolpalette id="symbolpalette" width="100%" height="100%" [palettes]="palettes" [symbolWidth] = 60 [symbolHeight] = 60
          [enableSearch]="enableSearch" [filterSymbols]="filterSymbols">
        </ejs-symbolpalette>
        <ejs-diagram id="diagram" width="1000px" height="500px" >
        </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public enableSearch: boolean = true;
  getBasicShapes(): NodeModel[] {
    let nodes: NodeModel[] = [
      {
        id: 'rectangle',
        shape: { type: 'Basic', shape: 'Rectangle', },
      },
      {
        id: 'plus',
        shape: { type: 'Basic', shape: 'Plus', },
      },
      {
        id: 'triangle',
        shape: { type: 'Basic', shape: 'RightTriangle', },
      },
    ];
    return nodes;
  }
  //Initialize the flow shapes for the symbol palette
  getFlowShapes(): NodeModel[] {
    let nodes: NodeModel[] = [
      {
        id: 'process',
        shape: { type: 'Flow', shape: 'Process', },
      },
      {
        id: 'terminator',
        shape: { type: 'Flow', shape: 'Terminator', },
      },
      {
        id: 'decision',
        shape: { type: 'Flow', shape: 'Decision', },
      },
      {
        id: 'document',
        shape: { type: 'Flow', shape: 'Document', },
      },
      {
        id: 'data',
        shape: { type: 'Flow', shape: 'Data', },
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
    {
      id: 'flow',
      symbols: this.getFlowShapes(),
      title: 'Flow Shapes',
    },
  ];
  filterSymbols(symbols: NodeModel[]): NodeModel[] {
    let symbolGroup: NodeModel[] = [];
    for (let i: number = 0; i < symbols.length; i++) {
      let symbol = symbols[i];
      //Filters symbol based on type
      if ((symbol as any).shape.type === 'Flow') {
        symbolGroup.push(symbol);
      }
    }
    return symbolGroup;
  }

}