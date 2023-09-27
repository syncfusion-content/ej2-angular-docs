

import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { BasicShapeModel } from "@syncfusion/ej2-angular-diagrams";

@Component({
  selector: "app-container",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" mode="SVG">
    <e-nodes>
        <e-node id='node1' [height]=60 [width]=100 [offsetX]=300 [offsetY]=80 [shape]='shape'>
            <e-node-annotations>
                <e-node-annotation content='Start'></e-node-annotation>
            </e-node-annotations>
        </e-node>
        <e-node id='node2' [height]=60 [width]=100 [offsetX]=300 [offsetY]=160 [shape]='shape'>
            <e-node-annotations>
                <e-node-annotation content='var i = 0;'></e-node-annotation>
            </e-node-annotations>
        </e-node>
    </e-nodes>
    <e-connectors>
        <e-connector id='connector1' sourceID='node1' targetID='node2'></e-connector>
    </e-connectors>
  </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("diagram")
  public shape?: BasicShapeModel;
  ngOnInit(): void {
    this.shape = { type: "Basic", shape: "Rectangle" };
  }
}


