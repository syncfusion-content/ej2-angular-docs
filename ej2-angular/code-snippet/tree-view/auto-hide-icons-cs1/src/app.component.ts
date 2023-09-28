


import { Component, Inject, ViewChild } from '@angular/core';
import { TreeViewComponent} from '@syncfusion/ej2-angular-navigations';
/**
 * TreeView Auto hide/show expand/collapse icons
 */
@Component({
    selector: 'app-container',
    template: `<div id='treeparent'><ejs-treeview id='treeElement' #treevalidate [fields]='field' (created)='onCreate($event)'></ejs-treeview></div>`
})
export class AppComponent {

   // Data source for TreeView component
   public countries: Object[] = [
    { id: 1, name: 'India', hasChild: true },
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
    ];
    public field:Object ={ dataSource: this.countries, id: 'id', text: 'name', parentID: 'pid', hasChildren: 'hasChild' };

    @ViewChild ('treevalidate') tree?: TreeViewComponent;

    public onCreate(args: any): void {
      let collapse: NodeListOf<Element> = this.tree?.element.querySelectorAll('.e-icons.e-icon-collapsible') as NodeListOf<Element>;
      let expand: NodeListOf<Element> = this.tree?.element.querySelectorAll('.e-icons.e-icon-expandable') as NodeListOf<Element>;
      this.hideIcon(expand, collapse);
      this.tree?.element.addEventListener('mouseenter', (event:any) => {
        this.showIcon(expand, collapse);
      });
      this.tree?.element.addEventListener('mouseleave', (event:any) => {
        this.hideIcon(expand, collapse);
      });
    }
    // hides expand/collapse icon on hovering the mouse
    public hideIcon(expand: NodeListOf<Element>, collapse: NodeListOf<Element>) {
      for(let i: number = 0; i < collapse.length; i++ ){
        collapse[i].setAttribute('style','visibility: hidden');
      }
      for(let j: number = 0; j < expand.length; j++ ){
        expand[j].setAttribute('style','visibility: hidden');
      }
    }

  // shows expand/collapse icon while leaving the mouse
  public showIcon(expand: NodeListOf<Element>, collapse: NodeListOf<Element>) {
    for(let i: number = 0; i < collapse.length; i++ ){
      collapse[i].setAttribute('style',"visibility");
    }
    for(let j: number = 0; j < expand.length; j++ ){
      expand[j].setAttribute('style',"visibility");
    }
  }
}



