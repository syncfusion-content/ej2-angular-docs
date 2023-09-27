

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DataBinding,Diagram,HierarchicalTree, NodeModel, ConnectorModel, MindMap,SnapSettingsModel, LayoutModel, DataSourceModel, TextModel, DecoratorModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';
Diagram.Inject( MindMap );

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]="getNodeDefaults" [getConnectorDefaults]="getConnectorDefaults" [snapSettings]="snapSettings" [layout]="layout" [dataSourceSettings]="dataSourceSettings">
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public snapSettings?: SnapSettingsModel;
    public items?: DataManager;
    public layout?: LayoutModel;
    public dataSourceSettings?: DataSourceModel;
    //Initializes data source
    public data: object[] = [{
            id: 1,
            Label: 'StackPanel'
        },
        {
            id: 2,
            Label: 'Label',
            parentId: 1
        },
        {
            id: 3,
            Label: 'ListBox',
            parentId: 1
        },
        {
            id: 4,
            Label: 'StackPanel',
            parentId: 2
        },
        {
            id: 5,
            Label: 'Border',
            parentId: 2
        },
        {
            id: 6,
            Label: 'Border',
            parentId: 4
        },
        {
            id: 7,
            Label: 'Button',
            parentId: 4
        },
        {
            id: 8,
            Label: 'ContentPresenter',
            parentId: 5
        },
        {
            id: 9,
            Label: 'Text Block',
            parentId: 5
        },
    ];
    //Sets the default properties for all the Nodes
    public getNodeDefaults(obj: NodeModel, diagram: Diagram): NodeModel {
        obj.shape = {
            type: 'Text',
            content: (obj.data as {
                Label: 'string'
            }).Label,
        };
        obj.style = {
            fill: '#6BA5D7',
            strokeColor: 'none',
            strokeWidth: 2
        };
        obj.borderColor = 'white';
        obj.backgroundColor = '#6BA5D7';
        obj.borderWidth = 1;
        (obj.shape as TextModel).margin = {
            left: 5,
            right: 5,
            top: 5,
            bottom: 5
        };
        return obj;
    }
    //Sets the default properties for all the connectors
    public getConnectorDefaults(connector: ConnectorModel, diagram: Diagram): ConnectorModel {
        connector.style = {
            strokeColor: '#6BA5D7',
            strokeWidth: 2
        };
        (((connector as ConnectorModel).targetDecorator as DecoratorModel).style as ShapeStyleModel).fill  =  '#6BA5D7';
        (((connector as ConnectorModel).targetDecorator as DecoratorModel).style as ShapeStyleModel).strokeColor  =  '#6BA5D7';
        ((connector as ConnectorModel).targetDecorator as DecoratorModel).shape = 'None';
        connector.type = 'Orthogonal';
        return connector;
    }
    ngOnInit(): void {
        this.snapSettings = {
            constraints: 0
        }
        this.items = new DataManager(this.data as JSON[], new Query().take(7));
        //Uses layout to auto-arrange nodes on the Diagram page
        this.layout = {
            //Sets layout type
            type: 'MindMap',
            orientation: 'Horizontal'
        }
        //Configures data source for Diagram
        this.dataSourceSettings = {
            id: 'id',
            parentId: 'parentId',
            dataSource: this.items,
            root: String(1)
        }
    }
}


