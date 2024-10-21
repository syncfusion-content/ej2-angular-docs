import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, Connector, PointModel, Node, IClickEventArgs } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [DiagramModule],

    providers: [],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (click)="click($event)">
       <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation content="click node">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
          </e-nodes>  
        <e-connectors>
            <e-connector id='connector1' type='Straight' sourceID='node1' [targetPoint]='targetPoint' >
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
    @ViewChild('diagram')
    public diagram?: DiagramComponent;
    public sourcePoint?: PointModel;
    public targetPoint?: PointModel;

    ngOnInit(): void {
        this.targetPoint = { x: 300, y: 200 };
    };

    public click = function (args: IClickEventArgs): void {
      let element = 'Diagram';
      if (args.actualObject instanceof Node) {
        element = 'Node';
      } else if (args.actualObject instanceof Connector) {
        element = 'Connector';
      }
      alert(element + ' Clicked');
    };
};