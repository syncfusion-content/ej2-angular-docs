import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeViewModule, TreeViewComponent } from '@syncfusion/ej2-angular-navigations'
import { Component, ViewChild } from '@angular/core';

// Remove the node from TreeView component
@Component({
  imports: [
          TreeViewModule
      ],
  standalone: true,
  selector: 'app-container',
  template: `<div id='treeparent'><ejs-treeview #tree id="listtree" [fields]='listfields'></ejs-treeview></div>
  <div id="btn">    
  <button id="button1" (click)="onClick1($event)">Remove Parent</button>
        <button id="button2" (click)="onClick2($event)">Remove Child</button></div>`
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
  
  //Remove single node from the TreeView component
  onClick1(event: any) {
    (this.tree as TreeViewComponent).removeNodes(['7']);
  }
  // Remove multiple nodes from the TreeView component
  onClick2(event: any) {
    (this.tree as TreeViewComponent).removeNodes(['3','4']);
  }
}