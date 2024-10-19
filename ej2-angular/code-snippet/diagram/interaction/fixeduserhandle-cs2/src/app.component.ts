import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, NodeModel, ShapeStyleModel, MarginModel, DiagramModule, FixedUserHandleClickEventArgs, PointModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (onFixedUserHandleMouseDown) = "onFixedUserHandleMouseDown($event)">
        <e-nodes>
            <e-node id='node1' [height]=100 [width]= 100 [offsetX]=300 [offsetY]=300 [style]="style1">
                       <e-node-fixeduserhandles>
                                <e-node-fixeduserhandle  id='color' [offset] = 'offset1' [margin]='margin1' [width] = 20 [height] = 20 pathData= 'M31.5,13.5 C31.5,20.95,24.44,27,15.75,27 C7.059999999999999,27,0,20.95,0,13.5 C0,6.050000000000001,7.06,0,15.75,0 C24.44,0,31.5,6.05,31.5,13.5 Z M13.12,4.5 L13.12,11.25 L5.25,11.25 L5.25,15.75 L13.12,15.75 L13.12,22.5 L18.38,22.5 L18.38,15.75 L26.25,15.75 L26.25,11.25 L18.38,11.25 L18.38,4.5 Z '>
                                </e-node-fixeduserhandle>
                        </e-node-fixeduserhandles>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector1' [sourcePoint]='sourcePoint1' [targetPoint]='targetPoint1' [style]="style2">
                <e-connector-fixeduserhandles>
                        <e-connector-fixeduserhandle
                        id='stroke'  [width]=20 [height]=10 pathData = 'M0,13.85 L15.62,13.85 L15.62,20 L25,9.74 L15.62,0 L15.62,6.41 L0,6.41 L0,13.85 Z ' >
                        </e-connector-fixeduserhandle>
                    </e-connector-fixeduserhandles>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public margin1?: MarginModel;
    public offset1?: PointModel;
    public sourcePoint1?: PointModel;
    public targetPoint1?: PointModel;
    ngOnInit(): void {
        this.margin1 = { left: 20, bottom: 10 };
        this.offset1 = { x: 1, y: 0 };
        this.sourcePoint1 = { x: 100, y: 100 };
        this.targetPoint1 = { x: 300, y: 200 };
    }
    public diagram?: DiagramComponent;
    public style1 = {fill: '#64a6', strokeColor: '#64Abbb', strokeWidth: 3 };
    public style2 = {strokeColor: '#64Abbb', fill: '#64A6', strokeWidth: 3 };
    public onFixedUserHandleMouseDown(args: FixedUserHandleClickEventArgs)
    {
      if (args.element) {
        let node = (args.element as any).parentObj;
        ((node as NodeModel).style as ShapeStyleModel).strokeColor  = ((node as NodeModel).style as ShapeStyleModel).strokeColor  === '#64A6' ? '#64Abbb' : '#64A6';
        this.diagram?.dataBind();
        }
    };
}



