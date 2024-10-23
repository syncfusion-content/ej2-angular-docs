import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DiagramModule,
  DiagramComponent,
  Diagram,
  ConnectorModel,
  DiagramTools,
} from '@syncfusion/ej2-angular-diagrams';

@Component({
  imports: [DiagramModule],

  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (created)='created($event)'>
    </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;
  public connectors?: ConnectorModel;
  public created(args: Object): void {
    //JSON to create a path
    (this.diagram as Diagram).drawingObject = { shape: { type: 'Basic', shape: 'Rectangle' } };
    //To draw an object once, activate draw once
    (this.diagram as Diagram).tool = DiagramTools.ContinuousDraw;
    (this.diagram as Diagram).dataBind();
  }
}
