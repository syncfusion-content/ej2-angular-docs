

import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { FlowShapeModel  } from "@syncfusion/ej2-angular-diagrams";

@Component({
  selector: "app-container",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" mode="SVG">
    <e-nodes>
        <e-node id='node1' [height]=60 [width]=100 [offsetX]=300 [offsetY]=80 [shape]='shape'>
            <e-node-annotations>
                <e-node-annotation content='Start'></e-node-annotation>
            </e-node-annotations>
        </e-node>
    </e-nodes>
  </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  public shape?: FlowShapeModel ;
  ngOnInit(): void {
    this.shape = { type: "Flow", shape: "Terminator" };
  }
}


