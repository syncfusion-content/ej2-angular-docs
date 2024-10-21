import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, SnapSettingsModel, SnapConstraints, DiagramModule, SnappingService } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],
providers: [SnappingService],
standalone: true,
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [snapSettings]='snapSettings'></ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public snapSettings: SnapSettingsModel = {
        constraints: SnapConstraints.ShowLines,
        gridType: 'Dots',
        // Defines the horizontalGridlines for SnapSettings
        horizontalGridlines: {
          // Sets the line color of gridlines
          lineColor: 'blue',
          // Defines the dot intervals of gridlines
          dotIntervals: [3, 20, 1, 20, 1, 20, 1, 20, 1, 20],
        },
        // Defines the verticalGridlines for SnapSettings
        verticalGridlines: {
          // Defines the dot intervals of gridlines
          dotIntervals: [3, 20, 1, 20, 1, 20],
          // Sets the line color of gridlines
          lineColor: 'blue',
        },
    };
}


