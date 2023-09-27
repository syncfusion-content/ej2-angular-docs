


import { Component, Inject, ViewChild } from '@angular/core';
import { TreeViewComponent, NodeSelectEventArgs } from '@syncfusion/ej2-angular-navigations';
/**
 * Single child selection at a time
 */
@Component({
    selector: 'app-container',
    template: `<div id='treeparent'><ejs-treeview #tree id="listtree" allowMultiSelection='allowMultiSelection' [fields]='listfields' (nodeSelecting)="onNodeSelecting($event)"></ejs-treeview></div>`
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
  public allowMultiSelection: boolean = true;
  public parent?: any; public child?: any;
  public count: boolean = false;
  public childCount: boolean = false;
  // Triggers when you select any node
  public onNodeSelecting(args: NodeSelectEventArgs): void {
    console.log(args.nodeData);
    let id: any = args.nodeData['parentID'];
    if (!this.count) {
       this.parent = id;
       this.count = true;
    }
    if (!this.childCount){
       this.child = args.nodeData['id'];
       this.childCount = true
    }
    if (id != null && id === this.parent) {
      let element: HTMLElement = this.tree?.element.querySelector('[data-uid="' + id + '"]') as HTMLElement;
      let liElements: any = element.querySelectorAll('ul li');
      for (let i: number = 0; i < liElements.length; i++) {
        let nodeData: any = this.tree?.getNode(liElements[i]);
        if (nodeData.selected && args.action === "select" && this.child !== args.nodeData['id']) {
          args.cancel = true;
        }
        // For unselect the selectedNodes
        else  if (args.action === "un-select" && this.child === args.nodeData['id']) {
          this.childCount = false;
          this.child = null;
          this.parent = null;
          this.count = false;
        }
      }
    } else if (id !== this.parent && id !== null) {
        if(args.action == "select"){
          args.cancel = true
        }
    } else if (id === null){
       this.childCount = false;
          this.child = null;
          this.parent = null;
          this.count = false
    }
  }
}



