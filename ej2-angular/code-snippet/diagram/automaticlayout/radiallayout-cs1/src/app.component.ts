

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
            "Id": 1,
            "Name": "Ana Trujillo",
            "Designation": "Project Manager",
            "RatingColor": "#68C2DE"
        },
        {
            "Id": 2,
            "Name": "Lino Rodri",
            "Designation": "Project Manager",
            "RatingColor": "#68C2DE",
            "ReportingPerson": 1
        },
        {
            "Id": 3,
            "Name": "Philip Cramer",
            "Designation": "Project Manager",
            "RatingColor": "#68C2DE",
            "ReportingPerson": 1
        },
        {
            "Id": 4,
            "Name": "Pedro Afonso",
            "Designation": "Project Manager",
            "RatingColor": "#68C2DE",
            "ReportingPerson": 1
        },
        {
            "Id": 5,
            "Name": "Anto Moreno",
            "Designation": "Project Lead",
            "RatingColor": "#93B85A",
            "ReportingPerson": 1
        },
        {
            "Id": 6,
            "Name": "Elizabeth Roel",
            "Designation": "Project Lead",
            "RatingColor": "#93B85A",
            "ReportingPerson": 1
        },
        {
            "Id": 7,
            "Name": "Aria Cruz",
            "Designation": "Project Lead",
            "RatingColor": "#93B85A",
            "ReportingPerson": 1
        },
        {
            "Id": 8,
            "Name": "Eduardo Roel",
            "Designation": "Project Lead",
            "RatingColor": "#93B85A",
            "ReportingPerson": 1
        },
        {
            "Id": 9,
            "Name": "Howard Snyd",
            "Designation": "Project Lead",
            "RatingColor": "#68C2DE",
            "ReportingPerson": 1
        },
        {
            "Id": 10,
            "Name": "Daniel Tonini",
            "Designation": "Project Lead",
            "RatingColor": "#93B85A",
            "ReportingPerson": 1
        },
        {
            "Id": 11,
            "Name": "Nardo Batista",
            "Designation": "Project Lead",
            "RatingColor": "#68C2DE",
            "ReportingPerson": 1
        }
    ];
    public getNodeDefaults(obj: NodeModel): NodeModel {
        obj.height = 15;
        obj.width = 15;
        obj.borderWidth = 1;
        obj.style = {
            fill: '#6BA5D7',
            strokeWidth: 2,
            strokeColor: '#6BA5D7'
        };
        return obj;
    }
    //Sets the default properties for and connectors
    public getConnectorDefaults(connector: ConnectorModel, diagram: Diagram): ConnectorModel {
        connector.style = {
            strokeColor: '#6BA5D7',
            strokeWidth: 2
        };
        (((connector as ConnectorModel).targetDecorator as DecoratorModel).style as ShapeStyleModel).fill  =  '#6BA5D7';
        (((connector as ConnectorModel).targetDecorator as DecoratorModel).style as ShapeStyleModel).strokeColor  =  '#6BA5D7';
        ((connector as ConnectorModel).targetDecorator as DecoratorModel).shape = 'None';
        connector.type = 'Straight';
        return connector;
    }
    ngOnInit(): void {
        this.snapSettings = {
            constraints: 0
        }
        this.items = new DataManager(this.data as JSON[], new Query().take(7));
        //Uses layout to auto-arrange nodes on the Diagram page
        this.layout = {
            //set the type as Radial Tree
            type: 'RadialTree',
            root: 'parent'
        }
        //Configures data source for Diagram
        this.dataSourceSettings = {
            id: 'Id',
            parentId: 'ReportingPerson',
            dataSource: this.items
        }
    }
}


