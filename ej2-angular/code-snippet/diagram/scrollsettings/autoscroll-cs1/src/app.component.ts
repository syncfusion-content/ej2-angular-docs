import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, PointModel, RulerSettingsModel, ScrollSettingsModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [rulerSettings]="rulerSettings" [scrollSettings]="scrollSettings">
        <e-nodes>
            <e-node id='node1' [offsetX]=200 [offsetY]=300 [width]=100 [height]=100>
                <e-node-annotations>
                    <e-node-annotation content="Drag or resize the node to activate autoscroll">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector' type='Orthogonal' [sourcePoint]='sourcePoint1' [targetPoint]='targetPoint1'>
                <e-connector-annotations>
                    <e-connector-annotation content='Adjust control point or end point to autoScroll' alignment='After'>
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
    public rulerSettings: RulerSettingsModel = { showRulers: true}
    public scrollSettings?: ScrollSettingsModel;
    public sourcePoint1?: PointModel;
    public targetPoint1?: PointModel;
    ngOnInit(): void {
        this.sourcePoint1 = { x: 100, y: 100 };
        this.targetPoint1 = { x: 300, y: 100 };
        this.scrollSettings = {
            scrollLimit: 'Infinity',
            canAutoScroll: true,
            autoScrollBorder: { left: 100, right: 100, top: 100, bottom: 100 },
        } as ScrollSettingsModel;
    }
}


