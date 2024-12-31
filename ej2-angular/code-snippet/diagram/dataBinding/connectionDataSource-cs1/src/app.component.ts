import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, LayoutAnimation, TreeInfo, SnapSettingsModel, Node, DataBinding, HierarchicalTree, SnapConstraints, DiagramModule, DecoratorModel, ShapeStyleModel, NodeConstraints } from '@syncfusion/ej2-angular-diagrams';

Diagram.Inject(DataBinding, HierarchicalTree, LayoutAnimation);

export interface EmployeeInfo {
    Role: string;
    color: string;
}

export interface DataInfo {
    [key: string]: string;
}

export interface ConnectorInfo {
    id: string;
    sourceID: string;
    srcPortID: string;
    targetID: string;
    targetPortID: string;
}

/** 
 * Sample for Organizational Chart
 */
@Component({
    selector: 'app-container',
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="700px" [getConnectorDefaults]='getConnectorDefaults' [getNodeDefaults]='getNodeDefaults' [layout]='layout' [dataSourceSettings]='data'  >
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [DiagramModule,]
})
export class AppComponent {
    @ViewChild('diagram')
    public diagram?: DiagramComponent;

    // Define the connectors array with the appropriate type
    public connectors: ConnectorInfo[] = [];

    public dataModify = [
        {
            "id": "288192",
            "IsAssistant": false,
            "ParentId": "288200",
            "shapeType": "Electrical Analytical Bus",
            "load": "2600000 VA",
            "current": "3127 A",
            "voltage": "480 V",
            "Name": "SWGREM4-B"
        },
        {
            "id": "288193",
            "IsAssistant": false,
            "ParentId": "288192",
            "shapeType": "Electrical Analytical Transformer",
            "load": "800000 VA",
            "current": "962 A",
            "voltage": "480 V",
            "Name": "ATS-EQ-1"
        },
        {
            "id": "288198",
            "IsAssistant": false,
            "ParentId": "288192",
            "shapeType": "Electrical Analytical Transfer Switch",
            "load": "800000 VA",
            "current": "962 A",
            "voltage": "480 V",
            "Name": "ATS-EQ-2"
        },
    ];

    public snapSettings: SnapSettingsModel = { constraints: SnapConstraints.None };

    public data = {
        id: 'id',
        parentId: 'ParentId',
        dataSource: this.dataModify,
        crudAction: {
            customFields: [
                'Id',
                'Description',
                'Color',
            ],
        },
        connectionDataSource: {
            id: 'id',
            sourceID: 'sourceID',
            targetID: 'targetID',
            crudAction: {
                customFields: [
                    'srcPortID', 'targetPortID'
                ],
            },
            dataManager: this.designConnectors()
        }
    };

    public layout: Object = {
        type: 'OrganizationalChart',
        verticalSpacing: 100,
        getLayoutInfo: (node: Node, options: TreeInfo) => {
            if (!options.hasSubTree) {
                options.orientation = 'Horizontal';
            }
        }
    };

    designConnectors() {
        this.connectors = [];
        let count = 1;
        this.dataModify.forEach(node => {
            const childNodes = this.checkIfAnyChildExists(node.id);
            childNodes.forEach((child: { id: string }) => {
                this.connectors.push(
                    {
                        id: `connector-${count}`,
                        sourceID: node.id,
                        srcPortID: `portOut-${child.id}`,
                        targetID: child.id,
                        targetPortID: `portIn-${child.id}`
                    }
                );
                count++;
            });
        });
        return this.connectors;
    }

    checkIfAnyChildExists(id: string) {
        let childNotes: any = [];
        this.dataModify.forEach((data: any) => {
            if (data.ParentId == id) {
                childNotes.push(data);
            }
        });
        return childNotes;
    }

    public getNodeDefaults(node: NodeModel, diagram?: Diagram): any {
        node.width = 60;
        node.height = 100;
        node.constraints =
            NodeConstraints.Default &
            ~NodeConstraints.Rotate &
            ~NodeConstraints.Resize;
        node.shape = { type: 'Basic', shape: 'Rectangle' };
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        return node;
    }

    public getConnectorDefaults(connector: any, diagram: Diagram): ConnectorModel {
        connector.style = {
            strokeColor: 'black',
            strokeWidth: 2
        };
        (((connector as ConnectorModel).targetDecorator as DecoratorModel).style as ShapeStyleModel).fill = '#6BA5D7';
        (((connector as ConnectorModel).targetDecorator as DecoratorModel).style as ShapeStyleModel).strokeColor = '#6BA5D7';
        connector.targetDecorator.shape = 'None';
        connector.type = 'Orthogonal';
        connector.segmentThumbShape = 'Circle';
        connector.sourcePortID = connector.srcPortID;
        connector.targetPortID = connector.targetPortID;
        return connector;
    }
}
