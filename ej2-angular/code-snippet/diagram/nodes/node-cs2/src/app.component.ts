import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DiagramComponent,
  DiagramModule,
  ShapeStyleModel,
  SymbolPaletteModule,
  NodeModel,
  PaletteModel,
} from '@syncfusion/ej2-angular-diagrams';
@Component({
  imports: [DiagramModule, SymbolPaletteModule],
  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `
      <ejs-symbolpalette id="symbolpalette"width="20%" height="700px" [palettes]="palettes" [symbolHeight]=80 [symbolWidth]=80 >
      </ejs-symbolpalette>
      <ejs-diagram #diagram id="diagram" width="80%" height="700px" [getNodeDefaults] ='getNodeDefaults'>
          <e-nodes>
              <e-node id='node1' [offsetX]=150 [offsetY]=150></e-node>
          </e-nodes>
      </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      ejs-symbolpalette {
      float: left;
    }
  `,
  ],
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 100;
    node.width = 100;
    return node;
  }
  public palettes?: PaletteModel[];
  public getBasicShapes(): NodeModel[] {
    let basicShapes: NodeModel[] = [
      {
        id: 'Rectangle',
        shape: {
          type: 'Basic',
          shape: 'Rectangle',
        },
        style: { fill: '#6BA5D7' },
      },
    ];
    return basicShapes;
  }

  ngOnInit(): void {
    this.palettes = [
      {
        id: 'basic',
        expanded: true,
        symbols: this.getBasicShapes(),
        title: 'Basic Shapes',
        iconCss: 'e-ddb-icons e-basic',
      },
    ];
  }
}
