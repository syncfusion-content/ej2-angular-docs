import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { AnnotationAlignment, DiagramModule, DiagramComponent, PointPortModel, PortVisibility, PortConstraints, PointModel, PathPortModel, IClickEventArgs, IElementDrawEventArgs, IDraggingEventArgs, IConnectionChangeEventArgs, Connector } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],
providers: [ ],
standalone: true,
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (click)="onClick($event)"
  (positionChange)="onPositionChange($event)"
  (connectionChange)="onConnectionChange($event)"
  (elementDraw)="onElementDraw($event)">
        <e-nodes>
            <e-node id='node1' [offsetX]=250 [offsetY]=250 [width]=100 [height]=100 [ports]='ports'>
                <e-node-annotations>
                    <e-node-annotation content="draw port" [offset]='offset1'>
                    </e-node-annotation>
                    <e-node-annotation content="darg port" [offset]='offset2'>
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector' type='Orthogonal' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [ports]='ports1'>
                <e-connector-annotations>
                    <e-connector-annotation content='Draw port' [alignment] ='alignment' [displacement]='displacement'>
                    </e-connector-annotation>
                    <e-connector-annotation content='Drag port' [offset]= 0.7 [displacement]='displacement' [alignment] ='alignment'>
                    </e-connector-annotation>
                </e-connector-annotations>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public sourcePoint?: PointModel;
    public targetPoint?: PointModel;
    public offset1?: PointModel;
    public offset2?: PointModel;
    public displacement?: PointModel;
    public alignment?: AnnotationAlignment;

    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 300, y: 120 };
        this.offset1 = { x: 0, y: 0.7};
        this.offset2 = { x: 1, y: 0.7};
        this.displacement={x:0,y:10};
        this.alignment = 'After';
    }

    public ports: PointPortModel[] = [
        {
            id:'p1',
            offset: {
                x: 0,
                y: 0.5
            },
            visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default | PortConstraints.Draw,
        },
        {
            id:'p2',
            offset: {
                x: 1,
                y: 0.5
            },
            visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default | PortConstraints.Drag,
        },
    ]
    public ports1: PathPortModel[] = [
        {
           id:'p1',
           offset: 0.5,
           visibility: PortVisibility.Visible,
           constraints: PortConstraints.Default | PortConstraints.Draw,
        },
        {
            id:'p2',
            offset: 0.8,
            visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default | PortConstraints.Drag,
         },
    ]
    
    public onClick(args: IClickEventArgs): void {
        console.log('clicked');
        // customize 
    }
    
    public onElementDraw(args: IElementDrawEventArgs): void {
        // customize as needed
        console.log('Element draw event');
    }
    
    public onPositionChange(args: IDraggingEventArgs): void {
        console.log('Position change');
        // customize as needed
    }
    
    public onConnectionChange(args: IConnectionChangeEventArgs): void {
        console.log('Connection change');
        // customize as needed
    }


}


