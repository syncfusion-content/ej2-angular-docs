import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService, FilterService, ToolbarService, SortService, EditService, } from '@syncfusion/ej2-angular-grids'
import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from "@angular/core";
import { data } from "./datasource";
import {
  GroupService,
  SortService,
  GridComponent,
  EditService,
  ToolbarService,
} from "@syncfusion/ej2-angular-grids";

@Component({
imports: [
        
        GridModule,
        ButtonAllModule
    ],

providers: [GroupService, ToolbarService, SortService, EditService, FilterService,],
standalone: true,
  selector: "app-root",
  templateUrl: "app.component.html",
  providers: [GroupService, ToolbarService, SortService, EditService],
})
export class AppComponent {
  public data?: Object[];
  public groupOptions?: Object;
  public pageSettings?: Object;
  public editSettings?: Object;
  public filterOptions?: Object;
  public toolbar?: string[];
  public orderidrules?: Object;
  public customeridrules?: Object;
  public freightrules?: Object;
  public editparams?: Object;
  public formatoptions?: Object;
  @ViewChild("Orders")
  public grid?: GridComponent;
  public state?: GridComponent;
  public message?: string;

  ngOnInit(): void {
    this.data = data;
    this.groupOptions = { showGroupedColumn: false, columns: ["ShipCountry"] };
    this.filterOptions = { type: "Menu" };
    this.pageSettings = { pageCount: 5 };
    this.editSettings = { allowEditing: true };
    this.toolbar = ["Edit", "Update", "Cancel"];
    this.orderidrules = { required: true, number: true };
    this.customeridrules = { required: true };
    this.freightrules = { required: true };
    this.editparams = { params: { popupHeight: "300px" } };
    this.formatoptions = { type: "dateTime", format: "M/d/y hh:mm a" };
  }
  actionBegin() {
    this.message = "";
  }
  // Save grid state to local storage
  save() {
    var persistData = (this.grid as GridComponent).getPersistData(); // Grid persistData
    window.localStorage.setItem("gridOrders", persistData);
    this.message = "Grid state saved.";
  }
  // Restore grid state from local storage
  restore() {
    let value: string = window.localStorage.getItem("gridOrders") as string; //"gridOrders" is component name + component id.
    this.state = JSON.parse(value);
    if (this.state) {
      (this.grid as GridComponent).setProperties(this.state);
      this.message = "Previous grid state restored.";
    } else {
      this.message = "No saved state found.";
    }
  }
}