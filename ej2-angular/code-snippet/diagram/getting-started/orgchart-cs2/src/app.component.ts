import { ConnectorModel, DataBinding, DataSourceModel, Diagram, DiagramComponent, DiagramModule, HierarchicalTree, ImageElement, LayoutModel, NodeModel, StackPanel, TextElement } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { DataManager } from "@syncfusion/ej2-data";

export interface EmployeeInfo {
  Name: string;
  Role: string;
  color: string;
}

Diagram.Inject(HierarchicalTree, DataBinding);

@Component({
  imports: [DiagramModule],
  standalone: true,
  selector: "app-root",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [layout]='layout' [dataSourceSettings]='dataSourceSettings'
  [getConnectorDefaults]='connectorDefaults' [setNodeTemplate]='setNodeTemplate'>
</ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
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
  };

  public layout: LayoutModel = {
    type: 'OrganizationalChart'
  };

  public connectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = "Orthogonal";
    connector.cornerRadius = 7;
    return connector;
  }

  public setNodeTemplate(node: NodeModel) {
    let codes: Object = {
      Director: "rgb(0, 139,139)",
      Manager: "rgb(30, 30,113)",
      Lead: "rgb(0, 100,0)"
    };
    let content = new StackPanel();
    content.id = node.id + "_outerstack";
    content.orientation = "Horizontal";
    content.style.strokeColor = "gray";
    content.style.fill = (codes as any)[(node.data as EmployeeInfo).Role] as string;
    content.padding = { left: 5, right: 5, top: 5, bottom: 5 }
    let innerContent = new ImageElement();
    innerContent.style.strokeColor = "blue";
    innerContent.id = node.id + "_innerstack";
    innerContent.style.fill = "skyblue";
    innerContent.width = 50;
    innerContent.height = 50;
    let text = new TextElement();
    text.id = node.id + "_text";
    text.content = (node.data as EmployeeInfo).Name;
    text.margin = { left: 15, right: 5, top: 5, bottom: 5 }
    text.style.color = "black";
    content.children = [innerContent, text];
    return content;
  }

}


