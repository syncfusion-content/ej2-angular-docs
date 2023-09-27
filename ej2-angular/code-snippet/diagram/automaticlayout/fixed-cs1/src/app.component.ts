

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, SnapSettingsModel, LayoutModel, DataSourceModel, DecoratorModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';
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
            Name: "Steve-Ceo",
            //set the offsetX and offsetY for the parent node
            offsetX: 250,
            offsetY: 50
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
            content: (obj.data as {
                Name: 'string'
            }).Name
        };
        obj.style = {
            fill: 'None',
            strokeColor: 'none',
            strokeWidth: 2,
            bold: true,
            color: 'white'
        };
        obj.width = 100;
        obj.height = 40;
        obj.borderColor = 'white';
        obj.backgroundColor = '#6BA5D7';
        obj.borderWidth = 1;
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
            type: 'HierarchicalTree',
            //bounds: new Rect(0, 0, 500, 500),
            horizontalSpacing: 25,
            verticalSpacing: 30,
            horizontalAlignment: 'Left',
            verticalAlignment: 'Top'
        }
        //Configures data source for Diagram
        this.dataSourceSettings = {
            id: 'Name',
            parentId: 'ReportingPerson',
            dataSource: this.items
        }
    }
}


