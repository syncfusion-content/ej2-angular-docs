

import { Component, ViewEncapsulation, ViewChild, Inject } from '@angular/core';
import {ConnectorModel,Diagram,ConnectorEditing, ConnectorConstraints,PointModel,DiagramComponent
} from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(ConnectorEditing)

/**
 * Sample for DrawingTool
 */
@Component({
    selector: 'app-container',
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="540px" [connectors]="connectors">
</ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('diagram')
    public diagram?: DiagramComponent;
    ngOnInit(): void {}
        public sourcePoint: PointModel = { x: 100, y: 100 };
        public targetPoint: PointModel = { x: 200, y: 200 }
        public connectors: ConnectorModel[] = [{
      id: 'connector1', type: 'Orthogonal', sourcePoint:this.sourcePoint, targetPoint:this.targetPoint,
      constraints:ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb
    }];
}


