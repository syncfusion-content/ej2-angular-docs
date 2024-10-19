import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramConstraints, NodeModel, MarginModel, ShapeStyleModel, DiagramModule, FixedUserHandleEventsArgs, PointModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (onFixedUserHandleMouseDown) = "onFixedUserHandleMouseDown($event)" (onFixedUserHandleMouseEnter) = "onFixedUserHandleMouseEnter($event)" (onFixedUserHandleMouseUp) = "onFixedUserHandleMouseUp($event)" (onFixedUserHandleMouseLeave) = "onFixedUserHandleMouseLeave($event)">
        <e-nodes>
            <e-node id='node1' [offsetX]=300 [offsetY]=300 [height]=100 [width]= 100>
                <e-node-fixeduserhandles>
                    <e-node-fixeduserhandle id='color' [width]=30 [height]=30 [margin]='margin1' [offset]='offset1'
                    [handleStrokeColor]="handleStrokeColor1" [handleStrokeWidth] = 4 [iconStrokeColor]="iconStrokeColor1" [iconStrokeWidth] = 1 
                    [fill]="fill1" [cornerRadius]= 5 pathData='M31.5,13.5 C31.5,20.95,24.44,27,15.75,27 C7.059999999999999,27,0,20.95,0,13.5 C0,6.050000000000001,7.06,0,15.75,0 C24.44,0,31.5,6.05,31.5,13.5 Z M13.12,4.5 L13.12,11.25 L5.25,11.25 L5.25,15.75 L13.12,15.75 L13.12,22.5 L18.38,22.5 L18.38,15.75 L26.25,15.75 L26.25,11.25 L18.38,11.25 L18.38,4.5 Z '>
                    </e-node-fixeduserhandle>
                </e-node-fixeduserhandles>
             </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector1' [sourcePoint]='sourcePoint1' [targetPoint]='targetPoint1' >
                <e-connector-fixeduserhandles>
                    <e-connector-fixeduserhandle id='stroke' [width]=30 [height]=25 [offset] = 0.5  [handleStrokeColor]="handleStrokeColor1" [handleStrokeWidth] = 4 [iconStrokeColor]="iconStrokeColor1" [iconStrokeWidth] = 1 [fill]="fill1" [cornerRadius]= 5 pathData= 'M0,13.85 L15.62,13.85 L15.62,20 L25,9.74 L15.62,0 L15.62,6.41 L0,6.41 L0,13.85 Z '  >
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
    public constraints?: DiagramConstraints;
    ngOnInit(): void {
        this.margin1 = {left: 20, bottom: 10 };
        this.offset1 = { x: 1, y: 0 };
        this.sourcePoint1 = { x: 100, y: 100 };
        this.targetPoint1 = { x: 300, y: 200 };
    }
    public diagram?: DiagramComponent;
    public handleStrokeColor1 = 'green';
    public iconStrokeColor1 = '#64Abbb';
    public fill1 = 'yellow';

    public onFixedUserHandleMouseDown(args: FixedUserHandleEventsArgs)
    {
        if (args.element) {
            let node = (args.element as any).parentObj;
            ((node as NodeModel).style as ShapeStyleModel).strokeColor  = ((node as NodeModel).style as ShapeStyleModel).strokeColor  === '#64A6' ? '#64Abbb' : '#64A6';
            this.diagram?.dataBind();
            }
    };

    public onFixedUserHandleMouseEnter(args: FixedUserHandleEventsArgs)
    {
        if(args.element)
        {
            args.element.fill = 'red';
            args.element.handleStrokeColor = 'pink';
        }
    };

    public onFixedUserHandleMouseUp(args: FixedUserHandleEventsArgs)
    {
         //Customize
    }

    public onFixedUserHandleMouseLeave(args: FixedUserHandleEventsArgs)
    {
      if (args.element) {
        args.element.fill = 'yellow';
        args.element.handleStrokeColor = 'green';
      }
    }
}