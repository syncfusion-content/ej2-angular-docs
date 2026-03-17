import { DiagramComponent, DiagramModule, FlowShapeModel } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
  selector: "app-container",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" mode="SVG">
    <e-nodes>
        <e-node id='node1' [height]=60 [width]=100 [offsetX]=300 [offsetY]=80 [shape]='shape' [style]='style' [borderColor]='borderColor' [borderWidth]='borderWidth'>
            <e-node-annotations>
                <e-node-annotation content='Start'></e-node-annotation>
            </e-node-annotations>
        </e-node>
    </e-nodes>
  </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("diagram")
  public Diagram?: DiagramComponent;
  public shape:FlowShapeModel =  { type: 'Flow', shape: 'Terminator'};
  public borderColor = 'orange';
  public borderWidth = 10;
  public style = {fill:'red',strokeColor:'green',strokeWidth:5,strokeDashArray:'2 2'};
  ngOnInit(): void {
  }
}