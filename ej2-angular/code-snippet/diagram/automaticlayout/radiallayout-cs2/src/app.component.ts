
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, SnapSettingsModel, LayoutModel, DiagramModule,
  RadialTreeService, DataBindingService, DataBinding, RadialTree, DecoratorModel} from '@syncfusion/ej2-angular-diagrams';

Diagram.Inject(DataBinding, RadialTree);

@Component({
  imports: [DiagramModule],

  providers: [RadialTreeService, DataBindingService],
  standalone: true,
  selector: "app-container",
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="590px" [nodes]="nodes" [connectors]="connectors"
  [getNodeDefaults]="getNodeDefaults" [getConnectorDefaults]="getConnectorDefaults" [snapSettings]="snapSettings" [layout]="layout"> </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild("diagram")
  public diagram?: DiagramComponent;
  public snapSettings?: SnapSettingsModel;
  public layout?: LayoutModel;

  //Initializes Nodes for diagram
  public nodes: NodeModel[] = [
    { id: 'Maria Anders' },
    { id: 'Ana Trujillo' },
    { id: 'Lino Rodri' },
    { id: 'Philip Cramer' },
    { id: 'Pedro Afonso' },
    { id: 'Paul Henriot' },
    { id: 'Laura Callahan' },
    { id: 'Anto Moreno' },
    { id: 'Elizabeth Roel' },
    { id: 'Aria Cruz' },
    { id: 'Eduardo Roel' },
    { id: 'Howard Snyd' },
    { id: 'Daniel Tonini' },
    { id: 'Nardo Batista' },
    { id: 'Michael Holz' },
    { id: 'Kloss Perrier' },
    { id: 'Liz Nixon' },
    { id: 'Paula Parente' },
    { id: 'Matti Kenna' },
  ];

  //Initializes Connectors for diagram
  public connectors: ConnectorModel[] = [
    {
      id: 'Maria Anders-Ana Trujillo',
      sourceID: 'Maria Anders',
      targetID: 'Ana Trujillo',
    },
    {
      id: 'Maria Anders-Lino Rodri',
      sourceID: 'Maria Anders',
      targetID: 'Lino Rodri',
    },
    {
      id: 'Maria Anders-Philip Cramer',
      sourceID: 'Maria Anders',
      targetID: 'Philip Cramer',
    },
    {
      id: 'Maria Anders-Pedro Afonso',
      sourceID: 'Maria Anders',
      targetID: 'Pedro Afonso',
    },
    {
      id: 'Maria Anders-Paul Henriot',
      sourceID: 'Maria Anders',
      targetID: 'Paul Henriot',
    },
    {
      id: 'Maria Anders-Laura Callahan',
      sourceID: 'Maria Anders',
      targetID: 'Laura Callahan',
    },
    {
      id: 'Ana Trujillo-Anto Moreno',
      sourceID: 'Ana Trujillo',
      targetID: 'Anto Moreno',
    },
    {
      id: 'Ana Trujillo-Elizabeth Roel',
      sourceID: 'Ana Trujillo',
      targetID: 'Elizabeth Roel',
    },
    {
      id: 'Laura Callahan-Aria Cruz',
      sourceID: 'Laura Callahan',
      targetID: 'Aria Cruz',
    },
    {
      id: 'Laura Callahan-Eduardo Roel',
      sourceID: 'Laura Callahan',
      targetID: 'Eduardo Roel',
    },
    {
      id: 'Lino Rodri-Howard Snyd',
      sourceID: 'Lino Rodri',
      targetID: 'Howard Snyd',
    },
    {
      id: 'Lino Rodri-Daniel Tonini',
      sourceID: 'Lino Rodri',
      targetID: 'Daniel Tonini',
    },
    {
      id: 'Philip Cramer-Nardo Batista',
      sourceID: 'Philip Cramer',
      targetID: 'Nardo Batista',
    },
    {
      id: 'Philip Cramer-Michael Holz',
      sourceID: 'Philip Cramer',
      targetID: 'Michael Holz',
    },
    {
      id: 'Pedro Afonso-Kloss Perrier',
      sourceID: 'Pedro Afonso',
      targetID: 'Kloss Perrier',
    },
    {
      id: 'Pedro Afonso-Liz Nixon',
      sourceID: 'Pedro Afonso',
      targetID: 'Liz Nixon',
    },
    {
      id: 'Paul Henriot-Paula Parente',
      sourceID: 'Paul Henriot',
      targetID: 'Paula Parente',
    },
    {
      id: 'Paul Henriot-Matti Kenna',
      sourceID: 'Paul Henriot',
      targetID: 'Matti Kenna',
    }
  ];

  //Sets the default properties for nodes
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 20;
    node.width = 20;
    return node;
  }

    //Sets the default properties for connectors
    public getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
      (connector.targetDecorator as DecoratorModel).shape = 'None';
      connector.type = 'Straight';
      return connector;
    }

  ngOnInit(): void {
    this.snapSettings = { constraints: 0 }

    //Uses layout to auto-arrange nodes on the Diagram page
    this.layout = {
      //set the type as Radial Tree
      type: 'RadialTree',
      root: 'parent'
    }
  }
}
