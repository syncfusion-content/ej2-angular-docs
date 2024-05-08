import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, FilterService, PageService} from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { MessageModule } from '@syncfusion/ej2-angular-notifications'

import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        ButtonModule,
        MessageModule
    ],

providers: [FilterService, PageService,],
standalone: true,
  selector: 'app-root',
  templateUrl: 'app.template.html',
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public pageOptions?: Object;
  public filteredData?: Object;

  @ViewChild('grid')
  public grid?: GridComponent;
  showRecords?: boolean;
  showWarning?: boolean;

  public ngOnInit(): void {
    this.data = data;
    this.pageOptions = { pageSize: 10, pageCount: 5 };
  }

  click(): void {
    this.filteredData = (this.grid as GridComponent).getFilteredRecords();
    if (this.filteredData) {
      this.showRecords = true;
    } else {
      this.showRecords = false;
    }
    this.showWarning = !this.showRecords;
  }
  clear(): void {
    (this.grid as GridComponent).clearFiltering();
    this.showRecords = false;
    this.showWarning = false;
  }
}
