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
        // Define the Constraints for gridlines and snapping
        constraints: SnapConstraints.ShowLines,
        // Defines the horizontalGridlines for SnapSettings
        horizontalGridlines: {
            // Sets the line color of gridlines
            lineColor: 'blue',
            // Defines the lineDashArray of gridlines
            lineDashArray: '2 2'
        },
        // Defines the verticalGridlines for SnapSettings
        verticalGridlines: {
            lineColor: 'blue',
            lineDashArray: '2 2'
        }
    };
}


