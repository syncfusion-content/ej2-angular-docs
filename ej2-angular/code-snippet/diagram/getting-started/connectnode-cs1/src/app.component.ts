import { DiagramComponent, DiagramModule } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";

@Component({
  imports: [DiagramModule],
  providers: [],
  standalone: true,
  selector: "app-root",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" mode="SVG">
    <e-nodes>
        <e-node id='node1' [height]=60 [width]=100 [offsetX]=300 [offsetY]=80 >
            <e-node-annotations>
                <e-node-annotation content='Start'></e-node-annotation>
            </e-node-annotations>
        </e-node>
    </e-nodes>
  </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class App {
  @ViewChild("diagram")
  public diagram?: DiagramComponent;
  ngOnInit(): void {
  }
}

