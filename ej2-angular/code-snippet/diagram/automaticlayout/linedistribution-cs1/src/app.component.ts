


import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DecoratorModel, DiagramComponent, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';
import {
    NodeModel, ConnectorModel, Diagram, DataBinding, ComplexHierarchicalTree,
    SnapConstraints, SnapSettingsModel, LayoutModel, LayoutOrientation, LineDistribution, ConnectionPointOrigin
} from '@syncfusion/ej2-diagrams';
import { DataManager } from '@syncfusion/ej2-data';
Diagram.Inject(DataBinding, ComplexHierarchicalTree, LineDistribution);

@Component({
    selector: 'app-container',
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="590px" [getConnectorDefaults]='connDefaults'
    [getNodeDefaults]='nodeDefaults' [layout]='layout' [dataSourceSettings]='data' [snapSettings]='snapSettings'
    (created)="created()"></ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('diagram')
    public diagram?: DiagramComponent;

    public nodeDefaults(obj: NodeModel): NodeModel {
        obj.width = 40; obj.height = 40;
        obj.shape = { type: 'Basic', shape: 'Rectangle' };
        obj.style = { fill: '#6BA5D7', strokeColor: 'none', strokeWidth: 2 };
        obj.borderWidth = 1;
        obj.backgroundColor = '#6BA5D7';
        return obj;
    };
    public data: Object = {
        id: 'Name', parentId: 'ReportingPerson',
        dataSource: new DataManager([
            { "Name": "node11" },
            { "Name": "node12", "ReportingPerson": ["node114"] },
            { "Name": "node13", "ReportingPerson": ["node12"] },
            { "Name": "node14", "ReportingPerson": ["node12"] },
            { "Name": "node15", "ReportingPerson": ["node12"] },
            { "Name": "node116", "ReportingPerson": ["node22","node12"] },
            { "Name": "node16", "ReportingPerson": [] },
            { "Name": "node18", "ReportingPerson": [] },
            { "Name": "node21" },
            { "Name": "node22", "ReportingPerson": ["node114"] },
            { "Name": "node23", "ReportingPerson": ["node22"] },
            { "Name": "node24", "ReportingPerson": ["node22"] },
            { "Name": "node25", "ReportingPerson": ["node22"] },
            { "Name": "node26", "ReportingPerson": [] },
            { "Name": "node28", "ReportingPerson": [] },
            { "Name": "node31" },
            { "Name": "node114", "ReportingPerson": ["node11", "node21", "node31"]}
        ],),
    };
    public created(): void {
        (this.diagram as DiagramComponent).fitToPage();
    };
    public connDefaults(connector: ConnectorModel) {
        connector.type = 'Orthogonal';
        connector.cornerRadius = 7;
        ((connector as ConnectorModel).targetDecorator as DecoratorModel).height = 7;
        ((connector as ConnectorModel).targetDecorator as DecoratorModel).width = 7;
        connector.style = { strokeColor: '#6BA5D7', strokeWidth: 1 };
        (((connector as ConnectorModel).targetDecorator as DecoratorModel).style as ShapeStyleModel).fill  =  '#6BA5D7';
        (((connector as ConnectorModel).targetDecorator as DecoratorModel).style as ShapeStyleModel).strokeColor  =  '#6BA5D7';
        return connector;
    };
    public snapSettings: SnapSettingsModel = { constraints: SnapConstraints.None };
    public layout: LayoutModel = {
        type: 'ComplexHierarchicalTree',
        connectionPointOrigin: ConnectionPointOrigin.DifferentPoint,
        horizontalSpacing: 40, verticalSpacing: 40, horizontalAlignment: "Left", verticalAlignment: "Top",
        margin: { left: 0, right: 0, top: 0, bottom: 0 },
        orientation: 'TopToBottom'
    };
}



