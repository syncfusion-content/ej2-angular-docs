


import { Component, Inject, ViewChild } from '@angular/core';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
/**
 * Treeview sample for getting child details via parent ID
 */
@Component({
    selector: 'app-container',
    template: `<div id='treeparent'><ejs-treeview id='treeElement' #treevalidate [fields]='field' (created)='onCreate($event)' [loadOnDemand]=false></ejs-treeview></div><input type="text" class="e-input" id="Nodes" style="margin-left: 10px;margin-top:10px; width: 175px;" placeholder="Enter the parent ID( Ex: AS)" />
        <input type="button" class="btn btn-primary" value="Submit"id="btn" />`
})
export class AppComponent {

   // Data source for TreeView component
   public data: Object[] = [
        {
            code: "AF", name: "Africa", countries: [
                { code: "NGA", name: "Nigeria" },
                { code: "EGY", name: "Egypt" },
                { code: "ZAF", name: "South Africa" }
            ]
        },
        {
            code: "AS", name: "Asia", countries: [
                { code: "CHN", name: "China" },
                { code: "IND", name: "India" , countries: [
                    { code: "TN", name: "TamilNadu" }
                ]},
                { code: "JPN", name: "Japan" }
            ]
        },
        {
            code: "EU", name: "Europe", countries: [
                { code: "DNK", name: "Denmark" },
                { code: "FIN", name: "Finland" },
                { code: "AUT", name: "Austria" }
            ]
        },
        {
            code: "NA", name: "North America", countries: [
                { code: "USA", name: "United States of America" },
                { code: "CUB", name: "Cuba" },
                { code: "MEX", name: "Mexico" }
            ]
        },
        {
            code: "SA", name: "South America", countries: [
                { code: "BR", name: "Brazil" },
                { code: "COL", name: "Colombia" },
                { code: "ARG", name: "Argentina" }
            ]
        },
    ];

    public field:Object ={  dataSource: this.data, id: 'code', text: 'name', child: 'countries' };

    @ViewChild ('treevalidate') tree?: TreeViewComponent;

    public onCreate(args: any): void {
        let proxy = this.tree;
        (document.getElementById("btn") as HTMLElement).addEventListener("click",(event)=>{
            let id = (document.getElementById('Nodes') as HTMLElement | any).value
            let element= proxy?.element.querySelector('[data-uid="' + id + '"]');
            // Gets the child Element
            let liElements = element?.querySelectorAll('ul li');
            let arr= [];
            for (let i = 0; i < (liElements as NodeListOf<Element>).length; i++) {
                let nodeData= proxy?.getNode((liElements as NodeListOf<Element>)[i]);
                arr.push(nodeData);
            }
            alert(JSON.stringify(arr));
        });
    }
}



