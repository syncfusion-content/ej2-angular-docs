import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, DecoratorModel, PointModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [DiagramModule],

    providers: [],
    standalone: true,
    selector: 'app-container',
    template: `
    <input type="button" id="sourcepoint" value="SourcePoint" (click)="sourcePointDrag()" />
    <input type="button" id="targetpoint" value="TargetPoint" (click)="targetPointDrag()" />
    <input type="button" id="dragTargetEnd" value="dragTargetEnd" (click)="dragTargetEnd()" />
    <input type="button" id="dragSourceEnd" value="dragSourceEnd" (click)="dragSourceEnd()" />
 
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" >
            <e-connectors>
                <e-connector id='connector' type='Straight' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [targetDecorator]='targetDecorator'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>

    `,
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    @ViewChild('diagram')
    public diagram?: DiagramComponent;
    public sourcePoint?: PointModel;
    public targetPoint?: PointModel;
    public targetDecorator?: DecoratorModel;

    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 200, y: 200 };
    };

    public sourcePointDrag(): void {
        if (this.diagram) {
            let connector = this.diagram.connectors[0];
            connector.sourcePoint = { x: 300, y: 100 };
        };
    };

    public targetPointDrag(): void {
        if (this.diagram) {
            let connector = this.diagram.connectors[0];
            connector.targetPoint = { x: 300, y: 200 };
        };
    };
    public dragSourceEnd():void{
            /**
     * parameter 1 - connector whose source point needs to be moved.
     * parameter 2 - A number representing the horizontal distance by which the source point should be moved.
     * parameter 3 - A number representing the vertical distance by which the source point should be moved.
     */
      (this.diagram as any).dragSourceEnd((this.diagram as any).connectors[0], 50, 50);
    }
    public dragTargetEnd():void{
          /**
     * parameter 1 - connector whose target point needs to be moved.
     * parameter 2 - A number representing the horizontal distance by which the target point should be moved.
     * parameter 3 - A number representing the vertical distance by which the target point should be moved.
     */
           (this.diagram as any).dragTargetEnd( (this.diagram as any).connectors[0], 50, 50);
    }
};
