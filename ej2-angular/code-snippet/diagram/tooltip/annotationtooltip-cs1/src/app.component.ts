import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams'



import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, NodeConstraints, DiagramTooltipModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="900px" height="500px" [getNodeDefaults]  ='getNodeDefaults' >
          <e-nodes>
            <e-node id='node1' [offsetX]=250 [offsetY]=250 >
            <e-node-annotations>
                    <e-node-annotation
                    id= 'label1' content="Annotation"
                    tooltip = "tooltip1"
                    constraints = "constraints1"
                    >
                    </e-node-annotation>
            </e-node-annotations>
         </e-node>
        </e-nodes>
      
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public sourcePoint?: PointModel;
    public targetPoint?: PointModel;
    public segments?: OrthogonalSegmentModel;
    ngOnInit(): void {
        
      }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        return node;
    }
    public tooltip1 = {
        content: 'Rectangle',
        position: 'TopRight',
        relativeMode: 'Object',
    }
    public constraints1 = AnnotationConstraints.Tooltip
    
}


