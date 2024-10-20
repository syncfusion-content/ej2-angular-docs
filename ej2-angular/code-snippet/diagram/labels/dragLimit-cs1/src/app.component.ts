import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, AnnotationConstraints, MarginModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `
    <ejs-diagram #diagram id="diagram" width="100%" height="580px">
        <e-connectors>
            <e-connector id='connector' type='Orthogonal' [sourcePoint]='{ x: 300, y: 100 }' [targetPoint]='{ x: 400, y: 300 }'>
                <e-connector-annotations>
                    <e-connector-annotation content='connector' [constraints]="constraints" [dragLimit]="dragLimit">
                    </e-connector-annotation>
                </e-connector-annotations>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public constraints?: AnnotationConstraints;
    public dragLimit?: MarginModel;
    ngOnInit(): void {
        //Enables drag constraints for a connector.
        this.constraints = AnnotationConstraints.Interaction | AnnotationConstraints.Drag;
        //Set drag limit for a connector annotation.
        this.dragLimit = {left:20,right:20,top:20,bottom:20};
    }
}