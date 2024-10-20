import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, IEditSegmentOptions,DiagramComponent, Diagram, ConnectorModel, StraightSegmentModel, PointModel, ConnectorConstraints, ConnectorEditing } from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(ConnectorEditing);

@Component({
  imports: [ DiagramModule ],
  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `
  <button (click)="segmentEdit()"> segmentEdit </button> 
  <ejs-diagram #diagram id="diagram" width="100%" height="580px" [getConnectorDefaults] ='getConnectorDefaults' (created)="created()">
  <e-connectors>
      <e-connector id='connector' type='Straight' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [segments]='segments' >
      </e-connector>
  </e-connectors>
</ejs-diagram>

`,
encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public sourcePoint?: PointModel;
    public targetPoint?: PointModel;
    public segments?: StraightSegmentModel;
    ngOnInit(): void {
        this.sourcePoint = { x: 150, y: 100 };
        this.targetPoint = { x: 340, y: 200 };
        this.segments = [{
            // Defines the segment type of the connector
            type: 'Straight',
            point: { x: 100, y: 150 }
        }] as StraightSegmentModel;
    }
    public getConnectorDefaults(connector: ConnectorModel): void {
        connector.style = {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        }
        connector.targetDecorator = {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        }
        connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb
    }
    public created(): void {
        (this.diagram as any).select([(this.diagram as any).connectors[0]]);
    }
    segmentEdit ()
    {
        let options: IEditSegmentOptions = {};
        options.SegmentEditing = 'Toggle';
        options.point = { x: 220, y: 150 };
        options.connector =  (this.diagram as Diagram).connectors[0];
        options.hitPadding =  (this.diagram as Diagram).connectors[0].hitPadding;

        (this.diagram as Diagram).editSegment(options);
    }
 
}