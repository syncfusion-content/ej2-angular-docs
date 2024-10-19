import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DataSourceModel,
  DiagramComponent,
  DiagramModule,
  Diagram,
  NodeModel,
  DataBinding,
} from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

Diagram.Inject(DataBinding);

@Component({
  imports: [DiagramModule],

  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="1000px" [getNodeDefaults] ='getNodeDefaults' [dataSourceSettings]="dataSourceSettings">
      </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;
  public dataSourceSettings?: DataSourceModel;
  public items?: DataManager;
  public data: Object[] = [
    {
      id: 'Steve-Ceo',
      parent: null,
    },
  ];
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 100;
    node.width = 100;
    node.offsetX = 300;
    node.offsetY = 200;
    node.style = { fill: 'yellow', strokeColor: 'yellow' };
    return node;
  }
  ngOnInit(): void {
    this.items = new DataManager(this.data as JSON[], new Query().take(7));
    this.dataSourceSettings = {
      id: 'id',
      parentId: 'parent',
      dataSource: this.items,
    };
  }
}