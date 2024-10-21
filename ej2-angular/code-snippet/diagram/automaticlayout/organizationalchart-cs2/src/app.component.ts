
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, LayoutModel, HierarchicalTree, DiagramModule,
  HierarchicalTreeService, DataBindingService, DataBinding  } from '@syncfusion/ej2-angular-diagrams';

Diagram.Inject(DataBinding, HierarchicalTree);

@Component({
  imports: [ DiagramModule ],

  providers: [HierarchicalTreeService, DataBindingService],
  standalone: true,
  selector: "app-container",
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [nodes]="nodes" [connectors]="connectors"
  [getNodeDefaults]="getNodeDefaults" [getConnectorDefaults]="getConnectorDefaults" [layout]="layout"> </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild("diagram")
  public diagram?: DiagramComponent;
  public layout?: LayoutModel;

  //Initialize nodes for diagram
  public nodes: NodeModel[] = [
    { id: 'Project Management' },
    { id: 'R&D Team' },
    { id: 'Philosophy' },
    { id: 'Organization' },
    { id: 'Technology' },
    { id: 'Funding' },
    { id: 'Resource Allocation' },
    { id: 'Targeting' },
    { id: 'Evaluation' },
    { id: 'HR Team' },
    { id: 'Recruitment' },
    { id: 'Employee Relation' },
    { id: 'Production & Sales Team' },
    { id: 'Design' },
    { id: 'Operation' },
    { id: 'Support' },
    { id: 'Quality Assurance' },
    { id: 'Customer Interaction' },
    { id: 'Support and Maintenance' },
    { id: 'Task Coordination' },
  ];

  //Initialize connectors for diagram
  public connectors: ConnectorModel[] = [
    {
      id: 'Project Management-R&D Team',
      sourceID: 'Project Management',
      targetID: 'R&D Team',
    },
    {
      id: 'R&D Team-Philosophy',
      sourceID: 'R&D Team',
      targetID: 'Philosophy'
    },
    {
      id: 'R&D Team-Organization',
      sourceID: 'R&D Team',
      targetID: 'Organization',
    },
    {
      id: 'R&D Team-Technology',
      sourceID: 'R&D Team',
      targetID: 'Technology'
    },
    {
      id: 'R&D Team-Funding',
      sourceID: 'R&D Team',
      targetID: 'Funding'
    },
    {
      id: 'R&D Team-Resource Allocation',
      sourceID: 'R&D Team',
      targetID: 'Resource Allocation',
    },
    {
      id: 'R&D Team-Targeting',
      sourceID: 'R&D Team',
      targetID: 'Targeting'
    },
    {
      id: 'R&D Team-Evaluation',
      sourceID: 'R&D Team',
      targetID: 'Evaluation'
    },
    {
      id: 'Project Management-HR Team',
      sourceID: 'Project Management',
      targetID: 'HR Team',
    },
    {
      id: 'HR Team-Recruitment',
      sourceID: 'HR Team',
      targetID: 'Recruitment'
    },
    {
      id: 'HR Team-Employee Relation',
      sourceID: 'HR Team',
      targetID: 'Employee Relation',
    },
    {
      id: 'Project Management-Production & Sales Team',
      sourceID: 'Project Management',
      targetID: 'Production & Sales Team',
    },
    {
      id: 'Production & Sales Team-Design',
      sourceID: 'Production & Sales Team',
      targetID: 'Design',
    },
    {
      id: 'Production & Sales Team-Operation',
      sourceID: 'Production & Sales Team',
      targetID: 'Operation',
    },
    {
      id: 'Production & Sales Team-Support',
      sourceID: 'Production & Sales Team',
      targetID: 'Support',
    },
    {
      id: 'Production & Sales Team-Quality Assurance',
      sourceID: 'Production & Sales Team',
      targetID: 'Quality Assurance',
    },
    {
      id: 'Production & Sales Team-Customer Interaction',
      sourceID: 'Production & Sales Team',
      targetID: 'Customer Interaction',
    },
    {
      id: 'Production & Sales Team-Support and Maintenance',
      sourceID: 'Production & Sales Team',
      targetID: 'Support and Maintenance',
    },
    {
      id: 'Production & Sales Team-Task Coordination',
      sourceID: 'Production & Sales Team',
      targetID: 'Task Coordination',
    },
  ];


  //Sets the default properties for all the Nodes
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.annotations = [{ content: node.id }];
    node.width = 75;
    node.height = 40;
    return node;
  }

  //Sets the default properties for all the connectors
  public getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    return connector;
  }

  ngOnInit(): void {

    //Uses layout to auto-arrange nodes on the Diagram page
    this.layout = {
      //set layout type
      type: 'OrganizationalChart'
    }
  }
}
