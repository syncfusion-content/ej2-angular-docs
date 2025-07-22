import { Component, ViewChild } from '@angular/core';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { MaskedTextBoxComponent } from '@syncfusion/ej2-angular-inputs';

import {
  DataManager,
  Query,
  ReturnOption,
  Predicate,
} from '@syncfusion/ej2-data';
/**
 * Default TreeView Component
 */
@Component({
  selector: 'app-root',
  template: `<div id="treeparent">
  <ejs-maskedtextbox
    #maskObj
    id="search"
    (change)="searchNodes($event)"
  ></ejs-maskedtextbox>
  <ejs-treeview
    #treeviewObj
    id="default"
    [fields]="field"
    [loadOnDemand]="false"
  ></ejs-treeview>
  </div>`,
})
export class AppComponent {
  @ViewChild('treeviewObj') listTreeObj!: TreeViewComponent;

  @ViewChild('maskObj') maskObj!: MaskedTextBoxComponent;
  // list data source for TreeView component
  public localData: Object[] = [
    { id: 1, name: 'Australia', hasChild: true },
    { id: 2, pid: 1, name: 'New South Wales' },
    { id: 3, pid: 1, name: 'Victoria', hasChild: true },
    { id: 67, pid: 3, name: 'Melbourne' },
    { id: 4, pid: 1, name: 'South Australia' },
    { id: 6, pid: 1, name: 'Western Australia' },
    { id: 7, name: 'Brazil', hasChild: true },
    { id: 8, pid: 7, name: 'Paraná' },
    { id: 33, pid: 7, name: 'Western Australia' },
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
    { id: 25, pid: 21, name: 'Punjab' },
  ];
  public filteredList: any;
  // Mapping TreeView fields property with data source properties
  public field: Object = {
    dataSource: this.localData,
    id: 'id',
    parentID: 'pid',
    text: 'name',
    hasChildren: 'hasChild',
    expanded: 'expanded',
  };

  //Change the dataSource for TreeView
  public changeDataSource(data: any) {
    this.field = {
      dataSource: data,
      id: 'id',
      text: 'name',
      parentID: 'pid',
      hasChildren: 'hasChild',
    };
  }
  public array_value: number[] = [];
  public nodeId: number[] = [];
  //Filtering the TreeNodes
  public searchNodes(args: any) {
    let _text = (this.maskObj as any).element.value;
    let predicats = [],
      _array = [],
      _filter = [];
    if (_text == '') {
      this.changeDataSource(this.localData);
    } else {
      let predicate = new Predicate('name', 'contains', _text, true);
      this.filteredList = new DataManager(this.localData).executeLocal(
        new Query().where(predicate)
      );
      for (let j = 0; j < this.filteredList.length; j++) {
        _filter.push(this.filteredList[j]['id']);
        let filters = this.getFilterItems(this.filteredList[j], this.localData);
        for (let i = 0; i < filters.length; i++) {
          if (_array.indexOf(filters[i]) == -1 && filters[i] != null) {
            _array.push(filters[i]);
            predicats.push(new Predicate('id', 'equal', filters[i], false));
          }
        }
      }
      if (predicats.length == 0) {
        this.changeDataSource([]);
      } else {
        var query = new Query().where(Predicate.or(predicats));

        var newList = new DataManager(this.localData).executeLocal(query);

        this.changeDataSource(newList);
        let proxy = this;

        this.array_value = [];
        this.nodeId = [];

        for (let i = 0; i < this.filteredList.length; i++) {
          var id = this.filteredList[i].id;
          this.array_value.push(id);
          if (this.filteredList[i].pid != undefined) {
            this.nodeId.push(this.filteredList[i].pid);
            const nodes = (this.listTreeObj as any).getTreeData(
              this.filteredList[i].pid.toString()
            );
            if (nodes[0].pid != null) {
              this.nodeId.push(nodes[0].pid);
            }
          }
          setTimeout(function (this: any) {
            for (var k = 0; k < proxy.nodeId.length; k++) {
              (proxy.listTreeObj as any).expandAll([
                proxy.nodeId[k].toString(),
              ]);
            }
            for (var i = 0; i < proxy.array_value.length; i++) {
              const parent = document.querySelector(
                '[data-uid="' + proxy.array_value[i] + '"]'
              );

              if (parent) {
                const node = parent.querySelector('.e-list-text');

                if (node) {
                  const regEx = new RegExp(_text, 'ig');
                  node.innerHTML = (node as any).innerText.replace(
                    regEx,
                    '<b>$&</b>'
                  );
                }
              }
            }
          }, 100);
        }
      }
    }
  }

  //Find the Parent Nodes for corresponding childs
  public getFilterItems(fList: any, list: any): (number | string)[] {
    let nodes = [];
    nodes.push(fList['id']);
    let query2 = new Query().where('id', 'equal', fList['pid'], false);
    let fList1 = new DataManager(list).executeLocal(query2);
    if (fList1.length != 0) {
      let pNode = this.getFilterItems(fList1[0], list);
      for (let i = 0; i < pNode.length; i++) {
        if (nodes.indexOf(pNode[i]) == -1 && pNode[i] != null)
          nodes.push(pNode[i]);
      }
      return nodes;
    }
    return nodes;
  }
}
