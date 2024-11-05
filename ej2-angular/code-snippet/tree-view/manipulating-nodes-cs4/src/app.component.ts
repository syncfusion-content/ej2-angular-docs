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
    template: `<div id='treeparent'><ejs-treeview #tree id="listtree" [fields]='listfields'"></ejs-treeview>
        <button id="button" (click)="onClick($event)">Refresh Node</button></div>`
})
export class AppComponent {

  @ViewChild('tree')
  public tree?: TreeViewComponent;
  // Self-referential list data source for TreeView component
  public localData: Object[] = [
    { id: 1, name: 'Parent 1', hasChild: true, expanded: true },
    { id: 2, pid: 1, name: 'Child 1' },
    { id: 3, pid: 1, name: 'Child 2' },
    { id: 4, pid: 1, name: 'Child 3' },
    { id: 7, name: 'Parent 2', hasChild: true, expanded: true },
    { id: 8, pid: 7, name: 'Child 1' },
    { id: 9, pid: 7, name: 'Child 2' },
    { id: 10, pid: 7, name: 'Child 3' },
  ];
  public listfields: Object = { dataSource: this.localData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
  onClick(event: any) {
    // Refresh the node having id 4 in the TreeView component.
    var nodeData = this.tree.getTreeData('4');
    nodeData[0].name = 'Node refreshed';
    this.tree?.refreshNode('4', nodeData); // Refresh the node with new data.
  }
}