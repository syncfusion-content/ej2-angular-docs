

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, SnapSettingsModel, LayoutModel, DataSourceModel, DecoratorModel, ShapeStyleModel, TreeInfo } from '@syncfusion/ej2-angular-diagrams';
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
            Role: "Board"
        },
        {
            Id: "1",
            Role: "General Manager",
            Manager: "parent"
        },
        {
            Id: "2",
            Role: "Human Resource Manager",
            Manager: "1"
        },
        {
            Id: "3",
            Role: "Trainers",
            Manager: "2"
        },
        {
            Id: "4",
            Role: "Recruiting Team",
            Manager: "2"
        },
        {
            Id: "6",
            Role: "Design Manager",
            Manager: "1"
        },
        {
            Id: "7",
            Role: "Design Supervisor",
            Manager: "6"
        },
        {
            Id: "8",
            Role: "Development Supervisor",
            Manager: "6"
        },
        {
            Id: "9",
            Role: "Drafting Supervisor",
            Manager: "6"
        },
        {
            Id: "10",
            Role: "Marketing Manager",
            Manager: "1"
        },
        {
            Id: "11",
            Role: "Oversea sales Manager",
            Manager: "10"
        },
        {
            Id: "12",
            Role: "Petroleum Manager",
            Manager: "10"
        },
        {
            Id: "13",
            Role: "Service Dept. Manager",
            Manager: "10"
        },
    ];
    //Sets the default properties for all the Nodes
    public getNodeDefaults(obj: NodeModel | any, diagram: Diagram): NodeModel {
        obj.width = 150;
        obj.height = 50;
        obj.borderColor = 'white';
        obj.style.fill = '#6BA5D7';
        obj.borderWidth = 1;
        obj.annotations = [{
            content: obj.data['Role'],
            style: {
                color: 'white'
            }
        }];
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
        type: 'OrganizationalChart',
        //Defines getLayoutInfo
        getLayoutInfo: (node: Node | any, options: TreeInfo) => {
            if (node.data['Role'] === 'General Manager') {
                ((options as TreeInfo).assistants as string[]).push(((options as TreeInfo).children as string[])[0]);
                ((options as TreeInfo).children as string[]).splice(0, 1);
            }
            if (!options.hasSubTree) {
                options.type = 'Right';
                options.orientation = 'Vertical';
            }
        }
        }
        //Configures data source for Diagram
        this.dataSourceSettings = {
            id: 'Id',
            parentId: 'Manager',
            dataSource: this.items
        }
    }
}


