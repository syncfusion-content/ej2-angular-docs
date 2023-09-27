

import { Component, ViewEncapsulation } from '@angular/core';
import { Diagram, NodeModel, ConnectorModel, SnapConstraints, SnapSettingsModel, DiagramTools } from '@syncfusion/ej2-diagrams';
import { DataManager } from '@syncfusion/ej2-data';
import { DecoratorModel, StrokeStyleModel } from '@syncfusion/ej2-angular-diagrams';
let species: object[] = [
    { 'Name': 'Species', 'fillColor': '#3DD94A' },
    { 'Name': 'Plants', 'Category': 'Species' },
    { 'Name': 'Fungi', 'Category': 'Species' },
    { 'Name': 'Lichens', 'Category': 'Species' },
    { 'Name': 'Animals', 'Category': 'Species' },
    { 'Name': 'Mosses', 'Category': 'Plants' },
    { 'Name': 'Ferns', 'Category': 'Plants' },
    { 'Name': 'Gymnosperms', 'Category': 'Plants' },
    { 'Name': 'Dicotyledens', 'Category': 'Plants' },
    { 'Name': 'Monocotyledens', 'Category': 'Plants' },
    { 'Name': 'Invertebrates', 'Category': 'Animals' },
    { 'Name': 'Vertebrates', 'Category': 'Animals' },
    { 'Name': 'Insects', 'Category': 'Invertebrates' },
    { 'Name': 'Molluscs', 'Category': 'Invertebrates' },
    { 'Name': 'Crustaceans', 'Category': 'Invertebrates' },
    { 'Name': 'Others', 'Category': 'Invertebrates' },
    { 'Name': 'Fish', 'Category': 'Vertebrates' },
    { 'Name': 'Amphibians', 'Category': 'Vertebrates' },
    { 'Name': 'Reptiles', 'Category': 'Vertebrates' },
    { 'Name': 'Birds', 'Category': 'Vertebrates' },
    { 'Name': 'Mammals', 'Category': 'Vertebrates' }
];
@Component({
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="490px" [getConnectorDefaults]='connDefaults' [getNodeDefaults]='nodeDefaults' [tool]='tool' [layout]='layout' [dataSourceSettings]='data' [snapSettings]='snapSettings'>
  </ejs-diagram>`
})
export class AppComponent {
    public node?: NodeModel;
    public nodeDefaults(node: NodeModel): NodeModel {
        let obj: NodeModel = {};
        obj.shape = { type: 'Basic', shape: 'Rectangle' };
        obj.style = { strokeWidth: 1 };
        obj.width = 95;
        obj.height = 30;
        return obj;
    };
    public data: Object = {
        id: 'Name', parentId: 'Category', dataManager: new DataManager(species),
        //binds the external data with node
        doBinding: (nodeModel: NodeModel, data: DataInfo, diagram: Diagram) => {
            nodeModel.annotations = [{
                /* tslint:disable:no-string-literal */
                content: data['Name'], margin: { top: 10, left: 10, right: 10, bottom: 0 },
                style: { color: 'black' }
            }];
            /* tslint:disable:no-string-literal */
            nodeModel.style = { fill: '#ffeec7', strokeColor: '#f5d897', strokeWidth: 1 };
        }
    };

    public connDefaults(connector: ConnectorModel): void {
        connector.type = 'Orthogonal';
        ((connector as ConnectorModel).style as StrokeStyleModel).strokeColor = '#4d4d4d';
        ((connector as ConnectorModel).targetDecorator as DecoratorModel).shape = 'None';
    };

    public tool: DiagramTools = DiagramTools.ZoomPan;
    public snapSettings: SnapSettingsModel = { constraints: SnapConstraints.None };
    public layout: Object = {
        type: 'HierarchicalTree', horizontalSpacing: 40, verticalSpacing: 40,
        margin: { top: 10, left: 10, right: 10, bottom: 0 }
    };
}
export interface DataInfo {
    [key: string]: string;
}


