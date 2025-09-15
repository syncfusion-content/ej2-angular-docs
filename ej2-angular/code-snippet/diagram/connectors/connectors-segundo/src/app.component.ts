import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DiagramComponent,
  Diagram,
  OrthogonalSegmentModel,
  ConnectorEditing,
  ConnectorConstraints,
  DiagramModule,
  ShapeStyleModel,
  UndoRedo,
} from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(ConnectorEditing, UndoRedo);

@Component({
  imports: [DiagramModule],
  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `
    <button (click)="undo()">Undo</button>
    <button (click)="redo()">Redo</button>
    <ejs-diagram #diagram id="diagram" width="100%" height="600px">
          <e-nodes>
              <e-node id='sourcenode' [offsetX]=350 [offsetY]=50 [width]=150 [height]=50  [style]='style'>
                  <e-node-annotations>
                          <e-node-annotation content="node 1">
                          </e-node-annotation>
                  </e-node-annotations>
              </e-node>
              <e-node id='targetnode' [offsetX]=200 [offsetY]=250 [width]=150 [height]=50 [style]='style'>
                  <e-node-annotations>
                          <e-node-annotation content="node 2">
                          </e-node-annotation>
                  </e-node-annotations>
              </e-node>
          </e-nodes>
          <e-connectors>
              <e-connector id='connector' type='Orthogonal' sourceID='sourcenode' targetID='targetnode' [constraints]='constraints' [segments]='segments'>
              </e-connector>
          </e-connectors>
    </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;
  public segments?: OrthogonalSegmentModel;
  public style?: ShapeStyleModel;

  ngOnInit(): void {
    this.segments = [
      {
        type: 'Orthogonal',
        direction: 'Left',
        length: 100,
      },
      {
        type: 'Orthogonal',
        direction: 'Bottom',
        length: 100,
      },
      {
        type: 'Orthogonal',
        direction: 'Right',
        length: 100,
      },
      {
        type: 'Orthogonal',
        direction: 'Bottom',
        length: 50,
      },
    ];
    this.style = {
      fill: '#6BA5D7',
      strokeColor: 'white',
    };
  }
  constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
  undo() {
    (this.diagram as Diagram).undo();
  }
  redo() {
    (this.diagram as Diagram).redo();
  }
}
