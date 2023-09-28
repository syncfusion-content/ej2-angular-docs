

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DecoratorModel, DiagramComponent, StrokeStyleModel } from '@syncfusion/ej2-angular-diagrams';
import {
    NodeModel, ConnectorModel, DiagramTools, Diagram, DataBinding, ComplexHierarchicalTree,
    SnapConstraints, SnapSettingsModel, LayoutModel, LayoutOrientation
} from '@syncfusion/ej2-diagrams';
import { DataManager } from '@syncfusion/ej2-data';
import { ChangeEventArgs as NumericChangeEventArgs } from '@syncfusion/ej2-inputs';
Diagram.Inject(DataBinding, ComplexHierarchicalTree);

export interface DataInfo {
    [key: string]: string;
}

/**
 * Sample for Multiple parent sample
 */
@Component({
    selector: 'app-container',
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getConnectorDefaults]='connDefaults'
    [getNodeDefaults]='nodeDefaults' [tool]='tool' [layout]='layout' [dataSourceSettings]='data' [snapSettings]='snapSettings'
    (created)="created()"></ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('diagram')
    public diagram?: DiagramComponent;

    public nodeDefaults(obj: NodeModel): NodeModel {
        obj.width = 40; obj.height = 40;
        //Initialize shape
        obj.shape = { type: 'Basic', shape: 'Rectangle', cornerRadius: 7 };
        return obj;
    };
    public data: Object = {
        id: 'Name', parentId: 'ReportingPerson',
        dataSource: new DataManager([
            {"Name": "node11","fillColor": "#e7704c","border": "#c15433"},
            {"Name": "node12","ReportingPerson": ["node114"],"fillColor": "#efd46e","border": "#d6b123"},
            {"Name": "node13","ReportingPerson": ["node12"],"fillColor": "#58b087","border": "#16955e"},
            {"Name": "node14","ReportingPerson": ["node12"],"fillColor": "#58b087","border": "#16955e"},
            {"Name": "node15","ReportingPerson": ["node12"],"fillColor": "#58b087","border": "#16955e"},
            {"Name": "node16","ReportingPerson": [],"fillColor": "#14ad85"},
            {"Name": "node17","ReportingPerson": ["node13","node14","node15"],"fillColor": "#659be5","border": "#3a6eb5"},
            {"Name": "node18","ReportingPerson": [],"fillColor": "#14ad85"},
            {"Name": "node19","ReportingPerson": ["node16","node17","node18"],"fillColor": "#8dbe6c","border": "#489911"},
            {"Name": "node110","ReportingPerson": ["node16","node17","node18"],"fillColor": "#8dbe6c","border": "#489911"},
            {"Name": "node111","ReportingPerson": ["node16","node17","node18","node116"],"fillColor": "#8dbe6c","border": "#489911"},
            {"Name": "node21","fillColor": "#e7704c","border": "#c15433"},
            {"Name": "node22","ReportingPerson": ["node114"],"fillColor": "#efd46e","border": "#d6b123"},
            {"Name": "node23","ReportingPerson": ["node22"],"fillColor": "#58b087","border": "#16955e"},
            {"Name": "node24","ReportingPerson": ["node22"],"fillColor": "#58b087","border": "#16955e"},
            {"Name": "node25","ReportingPerson": ["node22"],"fillColor": "#58b087","border": "#16955e"},
            {"Name": "node26","ReportingPerson": [],"fillColor": "#14ad85"},
            {"Name": "node27","ReportingPerson": ["node23","node24","node25"],"fillColor": "#659be5","border": "#3a6eb5"},
            {"Name": "node28","ReportingPerson": [],"fillColor": "#14ad85"},
            {"Name": "node29","ReportingPerson": ["node26","node27","node28","node116"],"fillColor": "#8dbe6c","border": "#489911"},
            {"Name": "node210","ReportingPerson": ["node26","node27","node28"],"fillColor": "#8dbe6c","border": "#489911"},
            {"Name": "node211","ReportingPerson": ["node26","node27","node28"],"fillColor": "#8dbe6c","border": "#489911"},
            {"Name": "node31","fillColor": "#e7704c","border": "#c15433"},
            {"Name": "node114","ReportingPerson": ["node11","node21","node31"],"fillColor": "#f3904a","border": "#d3722e"},
            {"Name": "node116","ReportingPerson": ["node12","node22"],"fillColor": "#58b087","border": "#16955e"}
        ],),
        //binds the external data with node
        doBinding: (nodeModel: NodeModel, data: DataInfo, diagram: Diagram) => {
            /* tslint:disable:no-string-literal */
            nodeModel.style = { fill: data['fillColor'], strokeWidth: 1, strokeColor: data['border'] };
        }
    };
    public created(): void {
        (this.diagram as DiagramComponent).fitToPage();
    };
    public connDefaults(connector: ConnectorModel): void {
        connector.type = 'Orthogonal';
        connector.cornerRadius = 7;
        ((connector as ConnectorModel).targetDecorator as DecoratorModel).height = 7;
        ((connector as ConnectorModel).targetDecorator as DecoratorModel).width = 7;
        ((connector as ConnectorModel).style as StrokeStyleModel).strokeColor = '#6d6d6d';
    };

    public tool: DiagramTools = DiagramTools.ZoomPan;

    public snapSettings: SnapSettingsModel = { constraints: SnapConstraints.None };

    public layout: LayoutModel = {
        type: 'ComplexHierarchicalTree',
        horizontalSpacing: 40, verticalSpacing: 40, orientation: 'TopToBottom',
        margin: { left: 10, right: 0, top: 50, bottom: 0 }
    };
}


