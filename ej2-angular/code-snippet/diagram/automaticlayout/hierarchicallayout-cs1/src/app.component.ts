

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, SnapSettingsModel, LayoutModel, DataSourceModel, TextModel, DecoratorModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

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
            Name: "Steve-Ceo"
        },
        {
            Name: "Kevin-Manager",
            ReportingPerson: "Steve-Ceo"
        },
        {
            Name: "Peter-Manager",
            ReportingPerson: "Steve-Ceo"
        },
        {
            Name: "John- Manager",
            ReportingPerson: "Peter-Manager"
        },
        {
            Name: "Mary-CSE ",
            ReportingPerson: "Peter-Manager"
        },
        {
            Name: "Jim-CSE ",
            ReportingPerson: "Kevin-Manager"
        },
        {
            Name: "Martin-CSE",
            ReportingPerson: "Kevin-Manager"
        }
    ];
    //Sets the default properties for all the Nodes
    public getNodeDefaults(obj: NodeModel, diagram: Diagram): NodeModel {
        obj.shape = {
            type: 'Text',
            content: (obj.data as {Name: 'string'}).Name
        };
        obj.style = {
            fill: 'None',
            strokeColor: 'none',
            strokeWidth: 2,
            bold: true,
            color: 'white'
        };
        obj.borderColor = 'white';
        obj.width = 100;
        obj.height = 40;
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
        (((connector as ConnectorModel).targetDecorator as DecoratorModel).style as ShapeStyleModel).fill = '#6BA5D7';
        (((connector as ConnectorModel).targetDecorator as DecoratorModel).style as ShapeStyleModel).strokeColor = '#6BA5D7';
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
            type: 'HierarchicalTree'
        }
        //Configures data source for Diagram
        this.dataSourceSettings = {
            id: 'Name',
            parentId: 'ReportingPerson',
            dataSource: this.items
        }
    }
}


