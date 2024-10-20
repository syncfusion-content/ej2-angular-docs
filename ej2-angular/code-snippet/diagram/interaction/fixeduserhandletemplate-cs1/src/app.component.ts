import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, MarginModel, ConnectorModel,  DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { NgIf } from '@angular/common';

@Component({
  imports: [DiagramModule,NgIf],

  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [fixedUserHandleTemplate]='fixeduserhandleTemplate' >
        <e-nodes>
            <e-node id='node1' [offsetX]=250 [offsetY]=250 [height]=100 [width]= 100>
                <e-node-fixeduserhandles>
                    <e-node-fixeduserhandle id='usercon1' [margin]='margin1' [width]=50 [height]=20 [offset]="fixedUserHandleOffset1" >
                    </e-node-fixeduserhandle>
                </e-node-fixeduserhandles>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector1'  type= 'Orthogonal' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint'>
                <e-connector-fixeduserhandles>
                    <e-connector-fixeduserhandle id='usercon2'  [width]=120 [height]=20 [offset]="fixedUserHandleOffset2" >
                    </e-connector-fixeduserhandle>
                </e-connector-fixeduserhandles>
            </e-connector>
        </e-connectors>
        <ng-template #fixeduserhandleTemplate let-data>
            <ng-container *ngIf="data.id == 'usercon1'" style="width: 100%; height: 100%">
                <input id="colorPicker" type="color" (change)="onchange($event)" value="#008000"/>
            </ng-container>
            <ng-container *ngIf="data.id == 'usercon2'" style="width:100%;height:100%">
                <input type="button" value="FixedUserHandleTemplate" style="color:red; "/>
            </ng-container>
        </ng-template>
    
    </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;
  public margin1?: MarginModel;
  ngOnInit(): void {
    this.margin1 = { right: 20 };
  }
  
  public fixedUserHandleOffset1 = { x: 0, y: 0 };
  public sourcePoint = { x: 400, y: 200 };
  public targetPoint = { x: 500, y: 300 };
  public margin2 = { right: 20 };
  public fixedUserHandleOffset2 = 0.5;
  public getConnectorDefaults(obj: ConnectorModel): void {
    obj.style = {
      strokeColor: '#6BA5D7',
      fill: '#6BA5D7',
      strokeWidth: 2,
    };
    obj.targetDecorator = {
      style: {
        fill: '#6BA5D7',
        strokeColor: '#6BA5D7',
      },
    };
  }

  public onchange(args:any) {
    let currentColor = (document.getElementById('colorPicker') as HTMLSelectElement).value;
    (((this.diagram as Diagram).nodes[0] as any).style.fill) = currentColor;
    (this.diagram as Diagram).dataBind(); // Ensure the diagram is updated
    
  }
}
