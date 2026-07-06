
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Diagram, DiagramComponent, DiagramModule, ConnectorModel, ErConnectorShapeModel, ErDiagrams } from '@syncfusion/ej2-angular-diagrams';

Diagram.Inject(ErDiagrams);

@Component({
  selector: 'app-container',

  template: `
    <ejs-diagram #diagram id="diagram" width="100%" height="600px" [connectors]="connectors"></ejs-diagram> `,

  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [DiagramModule],
})

export class AppComponent {
  @ViewChild('diagram')
  public diagram!: DiagramComponent;

// Define ER connectors with different multiplicities
  public connectors: ConnectorModel[] = [
    // One
    {
      id: 'er_one',
      sourcePoint: { x: 100, y: 100 },
      targetPoint: { x: 300, y: 100 },
      shape: {
        type: 'Er',
        sourceMultiplicity: { type: 'One' },
        targetMultiplicity: { type: 'One' }
      } as ErConnectorShapeModel
    },
    // Many
    {
      id: 'er_many',
      sourcePoint: { x: 100, y: 140 },
      targetPoint: { x: 300, y: 140 },
      shape: {
        type: 'Er',
        sourceMultiplicity: { type: 'Many' },
        targetMultiplicity: { type: 'Many' }
      } as ErConnectorShapeModel
    },
    // One and only one
    {
      id: 'er_one_or_one',
      sourcePoint: { x: 100, y: 180 },
      targetPoint: { x: 300, y: 180 },
      shape: {
        type: 'Er',
        sourceMultiplicity: { type: 'OneAndOnlyOne' },
        targetMultiplicity: { type: 'OneAndOnlyOne' }
      } as ErConnectorShapeModel
    },
    // One or many
    {
      id: 'er_one_or_many',
      sourcePoint: { x: 100, y: 220 },
      targetPoint: { x: 300, y: 220 },
      shape: {
        type: 'Er',
        sourceMultiplicity: { type: 'OneOrMany' },
        targetMultiplicity: { type: 'OneOrMany' }
      } as ErConnectorShapeModel
    },
    // Zero or one
    {
      id: 'er_zero_or_one',
      sourcePoint: { x: 100, y: 260 },
      targetPoint: { x: 300, y: 260 },
      shape: {
        type: 'Er',
        sourceMultiplicity: { type: 'ZeroOrOne' },
        targetMultiplicity: { type: 'ZeroOrOne' }
      } as ErConnectorShapeModel
    },
    // Zero or many
    {
      id: 'er_zero_or_many',
      sourcePoint: { x: 100, y: 300 },
      targetPoint: { x: 300, y: 300 },
      shape: {
        type: 'Er',
        sourceMultiplicity: { type: 'ZeroOrMany' },
        targetMultiplicity: { type: 'ZeroOrMany' }
      } as ErConnectorShapeModel
    }
  ];
}