

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { DropDownList, DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { DashboardLayoutComponent } from '@syncfusion/ej2-angular-layouts';

@Component({
    selector: 'app-root',
    styleUrls: ['./default-style.css'],
    template: `
        <div class="control-section">
        <div class="inline" id="control">
            <ejs-dashboardlayout id='defaultLayout' #defaultLayout [columns]='columns' [cellSpacing]='cellSpacing'
                [panels]='panels'>
            </ejs-dashboardlayout>
        </div>
        <div class="inline" id="properties">
            <table>
                <tr>
                    <td>SizeX</td>
                    <td>
                        <ejs-numerictextbox id="sizex" #sizex placeholder="Ex: 1" floatLabelType="Never" value= 1 min=1 max=5></ejs-numerictextbox>
                    </td>
                </tr>
                <tr>
                    <td>SizeY</td>
                    <td>
                        <ejs-numerictextbox id="sizey" #sizey placeholder="Ex: 1" floatLabelType="Never" value= 1 min=1 max=5></ejs-numerictextbox>
                    </td>
                </tr>
                <tr>
                    <td>Row</td>
                    <td>
                        <ejs-numerictextbox id="row" #row placeholder="Ex: 1" floatLabelType="Never" value=0 min=0 max=5></ejs-numerictextbox>
                    </td>
                </tr>
                <tr>
                    <td>Column</td>
                    <td>
                        <ejs-numerictextbox id="column" #column placeholder="Ex: 1" floatLabelType="Never" value=0 min=0 max=4></ejs-numerictextbox>
                    </td>
                </tr>
                <tr>
                    <td> </td>
                    <td>
                        <button ejs-button id="add" #add cssClass="e-btn e-flat" (click)="addClick()">Add</button>
                    </td>
                </tr>
            </table>
            <table>
                <tr>
                    <td>Id</td>
                    <td> <ejs-dropdownlist id='dropdown' #dropdown [dataSource]='data' placeholder='Select a id value'
                        ></ejs-dropdownlist></td>
                </tr>
                <tr>
                    <td> </td>
                    <td>
                        <button ejs-button id="remove" cssClass="e-btn e-flat e-danger" (click)="removeClick()">Remove</button>
                    </td>
                </tr>
            </table>
            
        </div>
    </div>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('defaultLayout') dashboard?: DashboardLayoutComponent;
    @ViewChild('sizex') sizeX?: NumericTextBoxComponent;
    @ViewChild('sizey') sizeY?: NumericTextBoxComponent;
    @ViewChild('row') row?: NumericTextBoxComponent;
    @ViewChild('column') column?: NumericTextBoxComponent;
    @ViewChild('add') addBtn?: ButtonComponent;
    @ViewChild('dropdown') dropDownListObject?: DropDownListComponent;

    public data: string[] = ['Panel0', 'Panel1', 'Panel2', 'Panel3', 'Panel4', 'Panel5', 'Panel6'];
    public cellSpacing: number[] = [20, 20];
    public columns: number = 5;
    public count: number = 7;
    public panel?: any;
    public panels: any = [{'id':'Panel0', 'sizeX': 1, 'sizeY': 1,'row': 0, 'col': 0, content:'<div class="content">0</div>'},
    {'id':'Panel1', 'sizeX': 3, 'sizeY': 2,'row': 0, 'col': 1, content:'<div class="content">1</div>'},
    {'id':'Panel2', 'sizeX': 1, 'sizeY': 3,'row': 0, 'col': 4, content:'<div class="content">2</div>'},
    {'id':'Panel3', 'sizeX': 1, 'sizeY': 1,'row': 1, 'col': 0, content:'<div class="content">3</div>'},
    {'id':'Panel4', 'sizeX': 2, 'sizeY': 1,'row': 2, 'col': 0, content:'<div class="content">4</div>'},
    {'id':'Panel5', 'sizeX': 1, 'sizeY': 1,'row': 2, 'col': 2, content:'<div class="content">5</div>'},
    {'id':'Panel6','sizeX': 1, 'sizeY': 1,'row': 2, 'col': 3, content:'<div class="content">6</div>'}
    ];
    addClick() {
        this.panel = {
        id: "Panel"+ this.count.toString(),
        sizeX: this.sizeX?.value,
        sizeY: this.sizeY?.value,
        row: this.row?.value,
        col: this.column?.value,
        content: "<div class='content'>"+ this.count +"</div>"
        }
        this.dashboard?.addPanel(this.panel);
        this.count = this.count + 1;
        (<any>this.dropDownListObject?.dataSource).push(this.panel.id);
        this.dropDownListObject?.refresh();
    };
    removeClick() {
        this.dashboard?.removePanel(<any>this.dropDownListObject?.value);
        (<any>this.dropDownListObject?.dataSource).splice((<any>this.dropDownListObject?.dataSource).indexOf(this.dropDownListObject?.value), 1);
        this.dropDownListObject?.refresh();
        (this.dropDownListObject as DropDownListComponent).value = null as any;
    };
}


