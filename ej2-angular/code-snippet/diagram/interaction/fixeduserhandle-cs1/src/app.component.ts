import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, NodeModel, ShapeStyleModel, MarginModel, DiagramModule, FixedUserHandleClickEventArgs } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (fixedUserHandleClick) = "fixedUserHandleClick($event)">
        <e-nodes>
            <e-node id='node1' [height]=100 [width]= 100 [offsetX]=250 [offsetY]=250 >
                       <e-node-fixeduserhandles>
                                <e-node-fixeduserhandle  id = 'color'[margin]='margin1' [width] = 20 [height] = 20 pathData= 'M31.5,13.5 C31.5,20.95,24.44,27,15.75,27 C7.059999999999999,27,0,20.95,0,13.5 C0,6.050000000000001,7.06,0,15.75,0 C24.44,0,31.5,6.05,31.5,13.5 Z M13.12,4.5 L13.12,11.25 L5.25,11.25 L5.25,15.75 L13.12,15.75 L13.12,22.5 L18.38,22.5 L18.38,15.75 L26.25,15.75 L26.25,11.25 L18.38,11.25 L18.38,4.5 Z '>
                                </e-node-fixeduserhandle>
                        </e-node-fixeduserhandles>
        </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public margin1?: MarginModel;
    ngOnInit(): void {
        this.margin1 = { right: 20 };
    }
    public diagram?: DiagramComponent;
    public fixedUserHandleClick(args: FixedUserHandleClickEventArgs)
    {
      if (args.element) {
        let node = args.element;
        ((node as NodeModel).style as ShapeStyleModel).fill = ((node as NodeModel).style as ShapeStyleModel).fill === '#64A6' ? '#64Abbb' : '#64A6';
        this.diagram?.dataBind();
        }
    };
}