import { data } from './datasource';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { FilterService, GridComponent, GridModule, PageService } from '@syncfusion/ej2-angular-grids';
import { MessageModule } from '@syncfusion/ej2-angular-notifications';

@Component({
  imports: [
      CommonModule,
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
  @ViewChild('grid')
  public grid?: GridComponent;
  public data?: Object[];
  public pageOptions?: Object;
  public filteredData?: Object;
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