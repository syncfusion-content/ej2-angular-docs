import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { data } from './datasource';
import { ToolbarService, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [ToolbarService],
standalone: true,
  selector: 'app-root',
  template: `<ejs-grid #grid [dataSource]='data' allowPaging="true" [pageSettings]='pageSettings' [toolbar]='toolbar' (created)="created($event)" height='273px'>
           <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
                </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: Object[];
  public pageSettings?: Object;
  public toolbar?: string[];
  @ViewChild("grid", { static: true })
  public grid?: GridComponent;

  public ngOnInit(): void {
    this.data = data;
    this.pageSettings = { pageCount: 5 };
    this.toolbar = ['Search'];
  }

  public created(args: any) {
    var gridElement = (this.grid as any).element;
    var span = document.createElement("span");
    span.className = "e-clear-icon";
    span.id = gridElement.id + "clear";
    span.onclick = this.cancelBtnClick.bind(this);
    gridElement.querySelector(".e-toolbar-item .e-input-group").appendChild(span);
  }

  public cancelBtnClick(args: any) {
    (this.grid as any).searchSettings.key = "";
    ((this.grid as any).element.querySelector(".e-input-group.e-search .e-input") as any).value = "";
  }
}


