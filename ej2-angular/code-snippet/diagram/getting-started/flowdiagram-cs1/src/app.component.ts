

import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import {
  FlowShapeModel,
  NodeModel,
  ConnectorModel,
  OrthogonalSegmentModel
} from "@syncfusion/ej2-angular-diagrams";

@Component({
  selector: "app-container",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [getNodeDefaults]='nodeDefaults' [getConnectorDefaults]='connectorDefaults'>
    <e-nodes>
        <e-node id='node1' [offsetY]=50 [shape]='terminator'>
            <e-node-annotations>
                <e-node-annotation content='Start'></e-node-annotation>
            </e-node-annotations>
        </e-node>
        <e-node id='node2' [offsetY]=140 [shape]='process'>
            <e-node-annotations>
                <e-node-annotation content='var i = 0;'></e-node-annotation>
            </e-node-annotations>
        </e-node>
        <e-node id='node3' [offsetY]=230 [shape]='decision'>
            <e-node-annotations>
                <e-node-annotation content='i < 10?'></e-node-annotation>
            </e-node-annotations>
        </e-node>
        <e-node id='node4' [offsetY]=320 [shape]='preDefinedProcess'>
            <e-node-annotations>
                <e-node-annotation content='print(\"Hello!!\");'></e-node-annotation>
            </e-node-annotations>
        </e-node>
        <e-node id='node5' [offsetY]=410 [shape]='process'>
            <e-node-annotations>
                <e-node-annotation content='i++;'></e-node-annotation>
            </e-node-annotations>
        </e-node>
        <e-node id='node6' [offsetY]=500 [shape]='terminator'>
            <e-node-annotations>
                <e-node-annotation content='End'></e-node-annotation>
            </e-node-annotations>
        </e-node>
    </e-nodes>
    <e-connectors>
        <e-connector id='connector1' sourceID='node1' targetID='node2'></e-connector>
        <e-connector id='connector2' sourceID='node2' targetID='node3'></e-connector>
        <e-connector id='connector3' sourceID='node3' targetID='node4'>
            <e-connector-annotations>
                <<e-connector-annotation content='Yes'></e-connector-annotation>
            </e-connector-annotations>
        </e-connector>
        <e-connector id='connector4' sourceID='node3' targetID='node6' [segments]='segment1'>
            <e-connector-annotations>
                <e-connector-annotation content='No'></e-connector-annotation>
            </e-connector-annotations>
        </e-connector>
        <e-connector id='connector5' sourceID='node4' targetID='node5'></e-connector>
        <e-connector id='connector6' sourceID='node5' targetID='node3' [segments]='segment2'></e-connector>
    </e-connectors>
</ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("diagram")
  public terminator?: FlowShapeModel;
  public process?: FlowShapeModel;
  public decision?: FlowShapeModel;
  public preDefinedProcess?: FlowShapeModel;
  public segment1?: OrthogonalSegmentModel;
  public segment2?: OrthogonalSegmentModel;
  public nodeDefaults(node: NodeModel): NodeModel {
    node.height = 50;
    node.width = 140;
    node.offsetX = 300;
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
    this.preDefinedProcess = { type: 'Flow', shape: 'PreDefinedProcess' };
    this.segment1 = [{ length: 30, direction: "Right" }, { length: 300, direction: "Bottom" }];
    this.segment2 = [{ length: 30, direction: "Left" }, { length: 200, direction: "Top" }];
  }
}


