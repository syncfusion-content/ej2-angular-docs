import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { TreeViewModule, TreeViewComponent } from '@syncfusion/ej2-angular-navigations'
import { Component, ViewChild } from '@angular/core';

// Move the node to the target node
@Component({
  imports: [
          TreeViewModule
      ],
  standalone: true,
  selector: 'app-container',
  template: `<div id='treeparent'><ejs-treeview #tree id="listtree" [fields]='listfields'></ejs-treeview>
  </div><div id="btn">
  <button id="button" (click)="onClick($event)">Move Node</button></div>`
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
    // Move the node with id 2 to the target node with id 3 to the index of 1.
    (this.tree as TreeViewComponent).moveNodes(['2'], '3', 1); 
  }
}