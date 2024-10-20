import { Component, ViewEncapsulation } from '@angular/core';
import { Diagram, NodeModel, DiagramTools, SnapSettingsModel, SnapConstraints } from '@syncfusion/ej2-diagrams';
import { DataManager } from '@syncfusion/ej2-data';
import { DataBindingService, DiagramComponent, DiagramModule, HierarchicalTreeService } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [
        DiagramModule
    ],
    providers: [HierarchicalTreeService, DataBindingService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [snapSettings]='snapSettings' [getConnectorDefaults]='connDefaults' [getNodeDefaults]='nodeDefaults' [tool]='tool' [layout]='layout' [dataSourceSettings]='data1' >
</ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

    public diagram?: DiagramComponent;

    public nodeDefaults(obj: NodeModel): NodeModel {
        obj.width = 80;
        obj.height = 40;
        obj.shape = { type: 'Basic', shape: 'Rectangle' };
        obj.style = { fill: '#048785', strokeColor: 'Transparent' };
        return obj;
    };

    public data1: Object = {
        id: 'Id', parentId: 'ParentId',
        dataSource: new DataManager(
            { url: 'https://services.syncfusion.com/js/production/api/RemoteData', crossDomain: true },

        ),
        //binds the external data with node
        doBinding: (nodeModel: NodeModel, data: DataInfo, diagram: Diagram) => {
            nodeModel.annotations = [{
                /* tslint:disable:no-string-literal */
                content: data['Label'],
                style: { color: 'white' }
            }];
        }
    };

    public connDefaults(connector: any): void {
        connector.type = 'Orthogonal';
        connector.style.strokeColor = '#048785';
        connector.targetDecorator.shape = 'None';
    };

    public tool: DiagramTools = DiagramTools.ZoomPan;
    public snapSettings: SnapSettingsModel = { constraints: SnapConstraints.None };

    public layout: Object = {
        type: 'HierarchicalTree', margin: { left: 0, right: 0, top: 100, bottom: 0 },
        verticalSpacing: 40,
    };
}
export interface DataInfo {
    [key: string]: string;
}