import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule, SymbolPaletteModule, DiagramComponent, NodeModel, PaletteModel, SymbolPaletteComponent } from '@syncfusion/ej2-angular-diagrams';
import { ExpandMode } from '@syncfusion/ej2-navigations';


@Component({
  imports: [
    DiagramModule, SymbolPaletteModule
  ],

  providers: [],
  standalone: true,
  selector: "app-container",
  template: `<div style="display: flex;">
      <ejs-symbolpalette #symbolpalette id="symbolpalette" [expandMode]="expandMode" width="30%" [palettes]="palettes" >
      </ejs-symbolpalette>
      <ejs-diagram #diagram id="diagram" width="70%" height="645px" [nodes]='nodes' (created)='created($event)'>
      </ejs-diagram>
      </div>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("diagram")
  public diagram?: DiagramComponent;
  @ViewChild("symbolpalette")
  public symbolPalette?: SymbolPaletteComponent;
  public expandMode: ExpandMode = 'Multiple';
  public nodes: NodeModel[] = [
    {
      offsetX: 250,
      offsetY: 250,
      width: 100,
      height: 100,
      visible: true,
      style: { fill: '#6AA8D7', strokeWidth: 1 },
    }
  ];
  getSymbols(): NodeModel[] {
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
      title: 'Basic Shapes',
      symbols: this.getSymbols(),
      expanded: true,
    }
  ]
  public created(args: Object): void {
    (this.diagram as DiagramComponent).fitToPage({ mode: 'Width' });
  }
}

