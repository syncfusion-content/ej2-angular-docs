import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations'
import { Component, ViewChild } from '@angular/core';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';

// Refresh the node in TreeView component
@Component({
    imports: [
            TreeViewModule
        ],
    standalone: true,
    selector: 'app-container',
    template: `<div id='treeparent'><ejs-treeview #tree id="listtree" [fields]='listfields'">
    <ng-template #nodeTemplate="" let-data="">
          <div>
            <div class="treeviewdiv">
              <div class="nodetext">
                <span class="treeName">{{ data.name }} : {{data.value}}</span>
              </div>
            </div>
          </div>
        </ng-template></ejs-treeview>
        <button id="button" (click)="onClick($event)">Refresh Node</button></div>`
})
export class AppComponent {

  @ViewChild('tree')
  public tree?: TreeViewComponent;
  // Self-referential list data source for TreeView component
  public localData: Object[] = [
    { id: 1, name: 'Parent 1', value: 10, hasChild: true, expanded: true },
    { id: 2, pid: 1, name: 'Child 1', value: 10 },
    { id: 3, pid: 1, name: 'Child 2', value: 10 },
    { id: 4, pid: 1, name: 'Child 3', value: 10 },
    { id: 7, name: 'Parent 2',value: 10, hasChild: true, expanded: true },
    { id: 8, pid: 7, name: 'Child 1', value: 10 },
    { id: 9, pid: 7, name: 'Child 2', value: 10 },
    { id: 10, pid: 7, name: 'Child 3',value:10 },
  ];
  public listfields: Object = { dataSource: this.localData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
  onClick(event: any) {
    // Refresh the node having id 4 in the TreeView component.
    var nodeData = this.tree.getTreeData('4');
    nodeData[0].value = 400;
    nodeData[0].name = 'Node refreshed';
    this.tree.refreshNode('4', nodeData); // Refresh the node with new data.
  }
}