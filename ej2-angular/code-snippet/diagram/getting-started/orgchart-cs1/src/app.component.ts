import { ConnectorModel, DataBinding, DataSourceModel, Diagram, DiagramComponent, DiagramModule, HierarchicalTree, LayoutModel, NodeModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { DataManager } from "@syncfusion/ej2-data";
export interface EmployeeInfo {
  Name: string;
  Role: string;
  color: string;
}
Diagram.Inject(DataBinding, HierarchicalTree);
@Component({
  imports: [DiagramModule],
  standalone: true,
  selector: "app-root",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [layout]='layout' [dataSourceSettings]='dataSourceSettings' [getNodeDefaults]='nodeDefaults' [getConnectorDefaults]='connectorDefaults'>
</ejs-diagram>`
})
export class App {
  @ViewChild("diagram")
  public diagram?: DiagramComponent;
  public data: Object[] = [
    {
      Name: "Elizabeth",
      Role: "Director",
      ReportingPerson: null
    },
    {
      Name: "Christina",
      ReportingPerson: "Elizabeth",
      Role: "Manager"
    },
    {
      Name: "Yoshi",
      ReportingPerson: "Christina",
      Role: "Lead"
    },
    {
      Name: "Philip",
      ReportingPerson: "Christina",
      Role: "Lead"
    },
    {
      Name: "Yang",
      ReportingPerson: "Elizabeth",
      Role: "Manager"
    },
    {
      Name: "Roland",
      ReportingPerson: "Yang",
      Role: "Lead"
    },
    {
      Name: "Yvonne",
      ReportingPerson: "Yang",
      Role: "Lead"
    }
  ];
  public dataSourceSettings?: DataSourceModel = {
    id: "Name",
    parentId: "ReportingPerson",
    dataManager: new DataManager(this.data as JSON[]),
    doBinding: (nodeModel: NodeModel, data: object) => {
      nodeModel.annotations = [
        { content: (data as EmployeeInfo).Name, style: { color: "white" } }
      ];
    }
  };

  public layout: LayoutModel = {
    type: 'OrganizationalChart'
  };
  public nodeDefaults(node: NodeModel): NodeModel {
    let codes: Object = {
      Director: "rgb(0, 139,139)",
      Manager: "rgb(30, 30,113)",
      Lead: "rgb(0, 100,0)"
    };
    node.width = 70;
    node.height = 30;
    node.annotations = [
      { content: (node.data as EmployeeInfo).Name, style: { color: "white" } }
    ];
    ((node as NodeModel).style as ShapeStyleModel).fill = (codes as any)[(node.data as EmployeeInfo).Role] as string;
    return node;
  }

  public connectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = "Orthogonal";
    connector.cornerRadius = 7;
    return connector;
  }

}
