

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent,OverviewComponent, Diagram, NodeModel, ConnectorModel,OverviewModel, SnapSettingsModel, LayoutModel, DataSourceModel, RulerSettingsModel,  } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

@Component({
    selector: "app-container",
    template: `<div><ejs-diagram #diagram id="diagram" width="100%" height="600px" [rulerSettings]='rulerSettings'></ejs-diagram></div>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
     @ViewChild('diagram')
    public diagram?: DiagramComponent;
    public rulerSettings: RulerSettingsModel = { showRulers: true}
}


