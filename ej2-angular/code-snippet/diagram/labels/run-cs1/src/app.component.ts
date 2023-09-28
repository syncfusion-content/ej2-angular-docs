

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ShapeAnnotationModel, ConnectorModel, PathAnnotationModel, PointModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' (created)='created($event)'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector1' type='Orthogonal' [sourcePoint]='sourcePoint1' [targetPoint]='targetPoint1'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public annotation?: ShapeAnnotationModel[];
    public pathannotations?: PathAnnotationModel[];
    public connectors?: ConnectorModel[];
    public sourcePoint1?: PointModel;
    public targetPoint1?: PointModel;
    ngOnInit(): void {
        this.sourcePoint1 = { x: 300, y: 100 };
        this.targetPoint1 = { x: 400, y: 300 };
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        return node;
    }
    public created(args: Object): void {
        this.annotation = [{
            id: 'label1',
            content: 'Annotation'
        }];
        this.pathannotations = [{
        content: 'New Connector'
        }];
        //Method to add labels at run time
        (this.diagram as Diagram).addLabels((this.diagram as Diagram).nodes[0], this.annotation);
        (this.diagram as Diagram).addLabels((this.diagram as Diagram).getObject('connector1'), this.pathannotations);
        (this.diagram as Diagram).dataBind();
    }
}


