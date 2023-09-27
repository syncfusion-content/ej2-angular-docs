


import { Component, Inject, ViewChild } from '@angular/core';
import { NodeCheckEventArgs, TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
/**
 * Icon css sample
 */
@Component({
    selector: 'app-container',
    template: `<div id='treeparent'><ejs-treeview id='treeElement' #treevalidate [fields]='field'  (nodeChecking)='onNodeCheck($event)' [showCheckBox]=true [autoCheck]=false></ejs-treeview></div>`
})
export class AppComponent {

   // Data source for TreeView component
   public treeData: Object[] = [
        {
        "nodeId": "01", "nodeText": "Music", "icon": "folder", "expanded": true, "nodeChild": [
            { "nodeId": "01-01", "nodeText": "Gouttes.mp3", "icon": "audio" }
          ]
        },
        {
          "nodeId": "02", "nodeText": "Videos", "icon": "folder", "expanded": true, "nodeChild": [
            { "nodeId": "02-01", "nodeText": "Naturals.mp4", "icon": "video" },
            { "nodeId": "02-02", "nodeText": "Wild.mpeg", "icon": "video" }
          ]
        }
    ];

    public field:Object ={  dataSource: this.treeData, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', expanded: 'expanded' };

    @ViewChild ('treevalidate') tree?: TreeViewComponent;

    public onNodeCheck(args: NodeCheckEventArgs): void {
      let nodeId: any = args.data[0]['id'];
      // To get the iconCss
      let iconClass = this.tree?.getTreeData(nodeId)[0]['icon'];
      alert('Icon class is ' + iconClass);
    }
}



