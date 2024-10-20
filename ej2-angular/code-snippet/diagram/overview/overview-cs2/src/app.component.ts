import { DiagramComponent, SnapSettingsModel, DiagramModule, OverviewModule, DataBindingService, HierarchicalTreeService, ScrollSettingsModel, SnapConstraints } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';


@Component({
imports: [
         DiagramModule, OverviewModule
    ],

providers: [DataBindingService, HierarchicalTreeService],
standalone: true,
    selector: "app-container",
    template: ` <div id="container" style="width: 100%; display: flex">
     <div id="element" style="flex: 7"><ejs-diagram #diagram id="diagram" width="100%" height="790px" [scrollSettings]="scrollSettings" [snapSettings]="snapSettings" >
     <e-nodes>
            <e-node id='node1' [offsetX]=400 [offsetY]=400 [height]=100  [width]=200  ></e-node>
        </e-nodes>
    </ejs-diagram>
    </div>
   <div style="flex: 3;height: 250px;padding: 0px;right: 30px;bottom: 20px;border: #eeeeee;border-style: solid;box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
background: #f7f7f7;">
    <ejs-overview id="overview"  width= '300px'
  height= '150ppx' sourceID="diagram" >
        </ejs-overview>
</div>
        
</div>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public scrollSettings?: ScrollSettingsModel;
    public snapSettings?: SnapSettingsModel;
    //Initializes data 
    ngOnInit(): void {
        this.scrollSettings = {
            scrollLimit: 'Diagram',
           
        }
        this.snapSettings = {
            constraints: SnapConstraints.None
        }
    }
  
}
