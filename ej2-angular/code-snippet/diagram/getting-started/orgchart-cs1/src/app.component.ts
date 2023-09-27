

import { Component, OnInit, ViewChild } from "@angular/core";
import {
  NodeModel,
  ConnectorModel,
  LayoutModel,
  Diagram,
  DataSourceModel
} from "@syncfusion/ej2-diagrams";
import { DataManager } from "@syncfusion/ej2-data";
import { ShapeStyleModel } from "@syncfusion/ej2-angular-diagrams";
export interface EmployeeInfo {
  Name: string;
  Role: string;
  color: string;
}

@Component({
  selector: "app-container",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [layout]='layout' [dataSourceSettings]='dataSourceSettings' [getNodeDefaults]='nodeDefaults' [getConnectorDefaults]='connectorDefaults'>
</ejs-diagram>`
})
export class AppComponent {
  @ViewChild("diagram") public layout?: LayoutModel;
  public dataSourceSettings?: DataSourceModel;
  public data: Object[] = [
    {
      Name: "Elizabeth",
      Role: "Director"
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
  ngOnInit(): void {
    this.layout = {
      type: "OrganizationalChart"
    };
    this.dataSourceSettings = {
      id: "Name",
      parentId: "ReportingPerson",
      dataManager: new DataManager(this.data as JSON[])
    };
  }
}


