import { DiagramComponent, DiagramModule } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import {
  FlowShapeModel,
  NodeModel,
  ConnectorModel,
} from "@syncfusion/ej2-angular-diagrams";

@Component({
  imports: [DiagramModule],
  providers: [],
  standalone: true,
  selector: "app-root",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [getNodeDefaults]='nodeDefaults' [getConnectorDefaults]='connectorDefaults'>
    <e-nodes>
        <e-node id='node1' [offsetX]=300 [offsetY]=50 [shape]='terminator'>
            <e-node-annotations>
                <e-node-annotation content='Start'></e-node-annotation>
            </e-node-annotations>
        </e-node>
        <e-node id='node2' [offsetX]=300 [offsetY]=140 [shape]='process'>
            <e-node-annotations>
                <e-node-annotation content='var i = 0;'></e-node-annotation>
            </e-node-annotations>
        </e-node>
        <e-node id='node3' [offsetX]=300 [offsetY]=230 [shape]='decision'>
            <e-node-annotations>
                <e-node-annotation content='i < 10?'></e-node-annotation>
            </e-node-annotations>
        </e-node>
    </e-nodes>
</ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class App {
  @ViewChild("diagram")
  public diagram?: DiagramComponent;
  public terminator?: FlowShapeModel;
  public process?: FlowShapeModel;
  public decision?: FlowShapeModel;
  public nodeDefaults(node: NodeModel): NodeModel {
    node.height = 50;
    node.width = 140;
    node.style = { fill: 'skyblue', strokeColor: 'skyblue' };
    return node;
  }

  public connectorDefaults(obj: ConnectorModel): ConnectorModel {
    obj.type = "Orthogonal";
    obj.targetDecorator = { shape: "Arrow", width: 10, height: 10 };
    return obj;
  }
  ngOnInit(): void {
    this.terminator = { type: 'Flow', shape: 'Terminator' };
    this.process = { type: 'Flow', shape: 'Process' };
    this.decision = { type: 'Flow', shape: 'Decision' };
  }
}