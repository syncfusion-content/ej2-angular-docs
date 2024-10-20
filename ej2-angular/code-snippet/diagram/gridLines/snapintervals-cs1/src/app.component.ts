import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, SnappingService, DiagramComponent, SnapSettingsModel, SnapConstraints, NodeModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [SnappingService],
standalone: true,
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [snapSettings]='snapSettings' [getNodeDefaults]='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150></e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public snapSettings: SnapSettingsModel = {
        horizontalGridlines: {
            // Defines the snap interval for object
            snapIntervals: [20]
        },
        verticalGridlines: {
            snapIntervals: [20]
        },
        constraints: SnapConstraints.All
    };
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        return node;
    }
}


