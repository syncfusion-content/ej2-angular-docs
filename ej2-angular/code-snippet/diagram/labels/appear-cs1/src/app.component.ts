import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, TextStyleModel, PointModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" >
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [width]=100 [height]=100>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Annotation visibility true" [style]="style" [visibility]=true>
                    </e-node-annotation>
                    <e-node-annotation id="label2" content="Annotation visibility false" [offset]="offset" [style]="style" [visibility]=false>
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
    public style?: TextStyleModel;
    public offset?: PointModel;
    ngOnInit(): void {
        this.style= {
            color: 'blue',
            bold: true,
            italic: true,
            fontSize: 15,
            fontFamily: 'TimesNewRoman',
            fill: 'orange',
            opacity: 0.6,
        }
        this.offset = { x: 0.5, y: 1 }
    }
}


