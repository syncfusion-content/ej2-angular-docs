import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, ConnectorModel, DiagramTools,DiagramModule} from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" 
    [drawingObject]="drawingObject" [tool]="tool">
</ejs-diagram>`,
encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    @ViewChild('diagram', { static: true })
  public diagram?: DiagramComponent;
  public tool?: DiagramTools = DiagramTools.ContinuousDraw;
  public drawingObject: ConnectorModel = {
    type: 'Orthogonal',
  };
}


