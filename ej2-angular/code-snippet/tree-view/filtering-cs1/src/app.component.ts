


import {FieldsSettingsModel, TreeViewComponent} from "@syncfusion/ej2-angular-navigations"
import {MaskedTextBoxComponent} from "@syncfusion/ej2-angular-inputs"
import { Component, Inject, ViewChild } from '@angular/core';
import { DataManager, Query, ReturnOption, Predicate } from '@syncfusion/ej2-data';

/**
 * Filtering tree nodes sample
 */
@Component({
    selector: 'app-container',
    template: `<div id='treeparent'><ejs-maskedtextbox #maskObj id="search" (change)="searchNodes($event)"></ejs-maskedtextbox><ejs-treeview #treeviewObj id="default" [fields]='field'></ejs-treeview></div>`
})
export class AppComponent {

    @ViewChild("treeviewObj") listTreeObj?: TreeViewComponent;

    @ViewChild("maskObj") maskObj?: MaskedTextBoxComponent;

    // list data source for TreeView component
    public localData: Object[] = [
        { id: 1, name: "Australia", hasChild: true },
        { id: 2, pid: 1, name: "New South Wales" },
        { id: 3, pid: 1, name: "Victoria" },
        { id: 4, pid: 1, name: "South Australia" },
        { id: 6, pid: 1, name: "Western Australia" },
        { id: 7, name: "Brazil", hasChild: true },
        { id: 8, pid: 7, name: "Paraná" },
        { id: 9, pid: 7, name: "Ceará" },
        { id: 10, pid: 7, name: "Acre" },
        { id: 11, name: "China", hasChild: true },
        { id: 12, pid: 11, name: "Guangzhou" },
        { id: 13, pid: 11, name: "Shanghai" },
        { id: 14, pid: 11, name: "Beijing" },
        { id: 15, pid: 11, name: "Shantou" },
        { id: 16, name: "France", hasChild: true },
        { id: 17, pid: 16, name: "Pays de la Loire" },
        { id: 18, pid: 16, name: "Aquitaine" },
        { id: 19, pid: 16, name: "Brittany" },
        { id: 20, pid: 16, name: "Lorraine" },
        { id: 21, name: "India", hasChild: true },
        { id: 22, pid: 21, name: "Assam" },
        { id: 23, pid: 21, name: "Bihar" },
        { id: 24, pid: 21, name: "Tamil Nadu" },
        { id: 25, pid: 21, name: "Punjab" }
    ];

    // Mapping TreeView fields property with data source properties
    public field:Object = { dataSource: this.localData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild', expanded: "expanded" }

   //Change the dataSource for TreeView
    public changeDataSource(data: Object[]) {
        (this.listTreeObj as TreeViewComponent).fields = {
            dataSource: data, id: 'id', text: 'name',parentID: 'pid', hasChildren: 'hasChild'
        } as FieldsSettingsModel;
    }

    //Filtering the TreeNodes
    public searchNodes(args: any) {
        let _text = this.maskObj?.element.value;
        let predicats = [], _array = [], _filter = [];
        if (_text == "") {
            this.changeDataSource(this.localData);
        }
        else {
            let predicate = new Predicate('name', 'startswith', _text as string, true);
            let filteredList = new DataManager(this.localData).executeLocal(new Query().where(predicate));
            console.log(filteredList)
            for (let j = 0; j < filteredList.length; j++) {
                _filter.push((filteredList as any)[j]["id"]);
                let filters = this.getFilterItems(filteredList[j], this.localData);
                for (let i = 0; i < filters.length; i++) {
                    if (_array.indexOf(filters[i]) == -1 && filters[i] != null) {
                        _array.push(filters[i]);
                        predicats.push(new Predicate('id', 'equal', filters[i] as any, false));
                    }
                }
            }
            if (predicats.length == 0) {
                this.changeDataSource([]);
            } else {
                let query = new Query().where(Predicate.or(predicats));
                let newList = new DataManager(this.localData).executeLocal(query);
                this.changeDataSource(newList);
                let proxy = this;
                setTimeout(function (this: any) {
                    proxy.listTreeObj?.expandAll();
                }, 100);
            }
        }
    }

    //Find the Parent Nodes for corresponding childs
    public getFilterItems(fList: Object | any, list: Object[]): Object[] {
        let nodes = [];
        nodes.push(fList["id"] as any);
        let query2 = new Query().where('id', 'equal', fList["pid"], false);
        let fList1 = new  DataManager(list).executeLocal(query2);
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
