

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
            Id: "parent",
            Role: "Project Management"
        },
        {
            Id: 1,
            Role: "R&D Team",
            Team: "parent"
        },
        {
            Id: 3,
            Role: "Philosophy",
            Team: "1"
        },
        {
            Id: 4,
            Role: "Organization",
            Team: "1"
        },
        {
            Id: 5,
            Role: "Technology",
            Team: "1"
        },
        {
            Id: 7,
            Role: "Funding",
            Team: "1"
        },
        {
            Id: 8,
            Role: "Resource Allocation",
            Team: "1"
        },
        {
            Id: 9,
            Role: "Targeting",
            Team: "1"
        },
        {
            Id: 11,
            Role: "Evaluation",
            Team: "1"
        },
        {
            Id: 156,
            Role: "HR Team",
            Team: "parent"
        },
        {
            Id: 13,
            Role: "Recruitment",
            Team: "156"
        },
        {
            Id: 113,
            Role: "Training",
            Team: "12"
        },
        {
            Id: 112,
            Role: "Employee Relation",
            Team: "156"
        },
        {
            Id: 14,
            Role: "Record Keeping",
            Team: "12"
        },
        {
            Id: 15,
            Role: "Compensations & Benefits",
            Team: "12"
        },
        {
            Id: 16,
            Role: "Compliances",
            Team: "12"
        },
        {
            Id: 17,
            Role: "Production & Sales Team",
            Team: "parent"
        },
        {
            Id: 119,
            Role: "Design",
            Team: "17"
        },
        {
            Id: 19,
            Role: "Operation",
            Team: "17"
        },
        {
            Id: 20,
            Role: "Support",
            Team: "17"
        },
        {
            Id: 21,
            Role: "Quality Assurance",
            Team: "17"
        },
        {
            Id: 23,
            Role: "Customer Interaction",
            Team: "17"
        },
        {
            Id: 24,
            Role: "Support and Maintenance",
            Team: "17"
        },
        {
            Id: 25,
            Role: "Task Coordination",
            Team: "17"
        }
    ];
    //Sets the default properties for all the Nodes
    public getNodeDefaults(obj: NodeModel, diagram: Diagram): NodeModel {
        obj.shape = {
            type: 'Text',
            content: (obj.data as {
                Role: 'string'
            }).Role
        };
        obj.style = {
            fill: 'None',
            strokeColor: 'none',
            strokeWidth: 2,
            bold: true,
            color: 'white'
        };
        obj.borderColor = 'white';
        obj.backgroundColor = '#6BA5D7';
        obj.borderWidth = 1;
        obj.width = 75;
        obj.height = 40;
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
        connector.type = 'Orthogonal';
        return connector;
    }
    ngOnInit(): void {
        this.snapSettings = {
            constraints: 0
        }
        this.items = new DataManager(this.data as JSON[], new Query().take(5));
        //Uses layout to auto-arrange nodes on the Diagram page
        this.layout = {
            //set the type as Organizational Chart
            type: 'OrganizationalChart'
        }
        //Configures data source for Diagram
        this.dataSourceSettings = {
            id: 'Id',
            parentId: 'Team',
            dataSource: this.items
        }
    }
}


