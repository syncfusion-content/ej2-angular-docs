import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams'



import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram,MarginModel, NodeModel, ConnectorModel,ConnectorConstraints, OrthogonalSegmentModel, PointModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [
             DiagramModule
        ],
    
    providers: [ ],
    standalone: true,
        selector: "app-container",
        template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' [fixedUserHandleTemplate]='fixeduserhandleTemplate'>
            <e-nodes>
                <e-node id='node1' [offsetX]=250 [offsetY]=250>
                           <e-node-fixeduserhandles>
                                    <e-node-fixeduserhandle  id='usercon1' [margin]='margin1' [width]=50 [height]=20 [offset]="fixedUserHandleOffset1">
                                    </e-node-fixeduserhandle>
                            </e-node-fixeduserhandles>
            </e-node>
            </e-nodes>
            <e-connectors>
                <e-connector id='connector1'  type= 'Orthogonal' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint'>
                <e-connector-fixeduserhandles>
                        <e-connector-fixeduserhandle
                        id =  'usercon2'  [width]=120 [height]=20 [offset]="fixedUserHandleOffset2" >
                        </e-connector-fixeduserhandle>
                    </e-connector-fixeduserhandles>
                </e-connector>
            </e-connectors>
            <ng-template #fixedUserHandleTemplate let-id="id" let-width="width">
      <div *ngIf="id === 'usercon1'" style="width:100%;height:100%">
        <input id="colorPicker" (change)="onchange()" type="color" value="#008000" style="width:{{width}}"/>
      </div>
      <div *ngIf="id === 'usercon2'" style="width:100%;height:100%">
        <input type="button" value="FixedUserHandleTemplate" style="width:{{width}};color:red;"/>
      </div>
    </ng-template>
    
        </ejs-diagram>`,
        encapsulation: ViewEncapsulation.None
    })
export class AppComponent {
    @ViewChild("diagram")
    public margin1?: MarginModel;
    ngOnInit(): void {
        this.margin1 = { right: 20 };
    }
    public diagram!: DiagramComponent;
    public currentColor: any;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        return node;
    }
    public fixedUserHandleOffset1 = {x : 0, y : 0 };
    public sourcePoint = { x: 400, y: 200 };
    public targetPoint = { x: 500, y: 300 };
    public margin2 = { right : 20};
    public fixedUserHandleOffset2 = 0.5;
    public getConnectorDefaults(obj: ConnectorModel): void {
        obj.style = {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        }
        obj.targetDecorator = {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        }
    }

    public onchange():void {
        this.currentColor =  (document.getElementById('colorPicker') as HTMLSelectElement).value;
        if (this.diagram.nodes && this.diagram.nodes.length > 0) {
            ((this.diagram.nodes[0]) as any).style.fill = this.currentColor;
            this.diagram.dataBind(); // Ensure the diagram is updated
        }
    }

}


