import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { TreeViewModule, TreeViewComponent } from '@syncfusion/ej2-angular-navigations'
import { Component, Inject, ViewChild } from '@angular/core';
/**
 * Treeview sample for getting child details via parent ID
 */
@Component({
    imports: [
        FormsModule, TreeViewModule
    ],
    standalone: true,
    selector: 'app-container',
    template: `<div id='treeparent'><ejs-treeview id='treeElement' #treevalidate [fields]='field'  [loadOnDemand]=false></ejs-treeview></div>
    <input type="text" class="e-input" [(ngModel)]="parentId" style="margin-left: 10px; margin-top:10px; width: 175px;" placeholder="Enter the parent ID (Ex: AS)" />
        <button class="btn btn-primary" (click)="onSubmit()">Submit</button>`
})
export class AppComponent {
    
    public parentId: string = '';

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
                {
                    code: "IND", name: "India", countries: [
                        { code: "TN", name: "TamilNadu" }
                    ]
                },
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

    public field: Object = { dataSource: this.data, id: 'code', text: 'name', child: 'countries' };

    @ViewChild('treevalidate') tree?: TreeViewComponent;

    onSubmit() {
        if (this.tree) {
            const element = this.tree.element.querySelector(`[data-uid="${this.parentId}"]`);
            if (element) {
                const liElements = element.querySelectorAll('ul li');
                const childNodes = Array.from(liElements).map(li => this.tree?.getNode(li));
                alert(JSON.stringify(childNodes));
            }
        }
    }
}


