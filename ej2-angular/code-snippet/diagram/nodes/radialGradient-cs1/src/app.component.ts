

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ShapeStyleModel, RadialGradientModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [style]='style'></e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public style?: ShapeStyleModel;
    public radialGradient: RadialGradientModel = {
        //Center point of outer circle
        cx: 50,
        cy: 50,
        //Center point of inner circle
        fx: 25,
        fy: 25,
        //Radius of a radial gradient
        r: 50,
        //Sets an array of stop objects
        stops: [{
                color: 'white',
                offset: 0
            },
            {
                color: '#6BA5D7',
                offset: 100
            }
        ],
        type: 'Radial'
    };
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }
    ngOnInit(): void {
        this.style = { gradient: this.radialGradient };
    }
}


