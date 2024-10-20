import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DiagramComponent,SnapSettingsModel,DiagramModule,ShapeStyleModel,SnappingService,NodeModel,} from '@syncfusion/ej2-angular-diagrams';
@Component({
  imports: [DiagramModule],
  providers: [SnappingService],
  standalone: true,
  selector: 'app-container',
  // specifies the template string for the diagram component
  template: `
    <b> Update snap line color</b>
   <input type="color" id="snapLineColor" value="#14AF41" (change)="snapLineColor($event)" />
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" [snapSettings]='snapSettings' [getNodeDefaults] ='getNodeDefaults'>
    <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150></e-node>
            <e-node id='node2' [offsetX]=350 [offsetY]=150 >
            </e-node>
        </e-nodes>
  </ejs-diagram>
  `,encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;
  public snapSettings: SnapSettingsModel = {
    snapLineColor: '#14AF41',
  };
  public getNodeDefaults(node: NodeModel | any): NodeModel {
    node.height = 100;
    node.width = 100;
    ((node as NodeModel).style as ShapeStyleModel).fill = '#6BA5D7';
    ((node as NodeModel).style as ShapeStyleModel).strokeColor = 'White';
    return node;
  }
  snapLineColor(args: any): void {
    //Update snapLineColor dynamically
    (this.diagram as any).snapSettings.snapLineColor = args.target.value;
    (this.diagram as any).dataBind();
  }
}
