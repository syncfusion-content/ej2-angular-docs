

import { Component,ViewChild } from '@angular/core';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    // specifies the template string for the TreeView component with CheckBox
    template: `<div id='treeparent'><ejs-treeview #treeview="" id='treeelement' [fields]='field' [showCheckBox]='showCheckBox' (nodeChecked)='nodeChecked($event)'></ejs-treeview></div>`
})
export class AppComponent {
    constructor() {
    }
    @ViewChild('treeview')
    public tree?: TreeViewComponent;
    // defined the array of data
    public countries: Object[] = [
        { id: 1, name: 'Australia', hasChild: true, expanded: true },
        { id: 2, pid: 1, name: 'New South Wales', isChecked: true },
        { id: 3, pid: 1, name: 'Victoria' },
        { id: 4, pid: 1, name: 'South Australia' },
        { id: 6, pid: 1, name: 'Western Australia', isChecked: true },
        { id: 7, name: 'Brazil', hasChild: true },
        { id: 8, pid: 7, name: 'Paraná' },
        { id: 9, pid: 7, name: 'Ceará' },
        { id: 10, pid: 7, name: 'Acre' },
        { id: 11, name: 'China', hasChild: true },
        { id: 12, pid: 11, name: 'Guangzhou' },
        { id: 13, pid: 11, name: 'Shanghai' },
        { id: 14, pid: 11, name: 'Beijing' },
        { id: 15, pid: 11, name: 'Shantou' },
        { id: 16, name: 'France', hasChild: true },
        { id: 17, pid: 16, name: 'Pays de la Loire' },
        { id: 18, pid: 16, name: 'Aquitaine' },
        { id: 19, pid: 16, name: 'Brittany' },
        { id: 20, pid: 16, name: 'Lorraine' },
        { id: 21, name: 'India', hasChild: true },
        { id: 22, pid: 21, name: 'Assam' },
        { id: 23, pid: 21, name: 'Bihar' },
        { id: 24, pid: 21, name: 'Tamil Nadu' },
        { id: 25, pid: 21, name: 'Punjab' }
    ];
    // maps the appropriate column to fields property
    public field: Object = { dataSource: this.countries, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
    // set the CheckBox to the TreeView
    public showCheckBox: boolean = true;
    //set the checknodes to the TreeView
    public checkedNodes: string[] = ['2','6'];
    public nodeChecked(args: any): void{
      alert("The checked node's id is: "+this.tree?.checkedNodes);

    }


}


