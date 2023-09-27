


import { Component, Inject, ViewChild } from '@angular/core';
import { TreeViewComponent, DrawNodeEventArgs } from '@syncfusion/ej2-angular-navigations';
/**
 * Treeview Disable check box of parent nodes sample
 */
@Component({
    selector: 'app-container',
    template: `<div id='treeparent'><ejs-treeview id='treeElement' #treevalidate [fields]='field'  (drawNode)='drawNode($event)' [showCheckBox]=true></ejs-treeview></div>`
})
export class AppComponent {

   // Data source for TreeView component
   public Countries: Object[] = [
    { id: 1, name: 'India', hasChild: true, expanded: true },
    { id: 2, pid: 1, name: 'Assam' },
    { id: 3, pid: 1, name: 'Bihar' },
    { id: 4, pid: 1, name: 'Tamil Nadu' },
    { id: 6, pid: 1, name: 'Punjab' },
    { id: 7, name: 'Brazil', hasChild: true },
    { id: 8, pid: 7, name: 'Paraná' },
    { id: 9, pid: 7, name: 'Ceará' },
    { id: 10, pid: 7, name: 'Acre' },
    { id: 11, name: 'France', hasChild: true },
    { id: 12, pid: 11, name: 'Pays de la Loire' },
    { id: 13, pid: 11, name: 'Aquitaine' },
    { id: 14, pid: 11, name: 'Brittany' },
    { id: 15, pid: 11, name: 'Lorraine' },
    { id: 16, name: 'Australia', hasChild: true },
    { id: 17, pid: 16, name: 'New South Wales' },
    { id: 18, pid: 16, name: 'Victoria' },
    { id: 19, pid: 16, name: 'South Australia' },
    { id: 20, pid: 16, name: 'Western Australia' },
    { id: 21, name: 'China', hasChild: true },
    { id: 22, pid: 21, name: 'Guangzhou' },
    { id: 23, pid: 21, name: 'Shanghai' },
    { id: 24, pid: 21, name: 'Beijing' },
    { id: 25, pid: 21, name: 'Shantou' }
   ]

    public field:Object ={  dataSource: this.Countries, id: 'id', text: 'name', parentID: 'pid', hasChildren: 'hasChild' };

    @ViewChild ('treevalidate') tree?: TreeViewComponent;

    // Disables the checkbox alone in treeview
    public drawNode(args: DrawNodeEventArgs): void {
      let ele: HTMLElement = args.node.querySelector('.e-checkbox-wrapper') as HTMLElement;
      ele.classList.add('e-checkbox-disabled');
    }
}



