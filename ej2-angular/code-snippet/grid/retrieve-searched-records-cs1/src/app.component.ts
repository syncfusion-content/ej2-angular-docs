import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { GridModule, PageService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { DataManager, Query } from '@syncfusion/ej2-data';

@Component({
  imports: [GridModule],
  providers: [PageService, ToolbarService],
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.template.html'
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public pageSettings?: Object;
  public toolbar?: string[];
  public lastSearchString: string = '';
  ngOnInit(): void {
    this.data = data;
    this.pageSettings = { pageCount: 5 };
    this.toolbar = ['Search'];
  }
  public actionComplete(args: any): void {
    if (args.requestType === 'searching') {
      this.lastSearchString = args.searchString; // Store the last searched value.
    }
  }
  public getSearchedRecords(): void {
    if (this.lastSearchString) {
      const clonedData = JSON.parse(JSON.stringify(this.data)); // Clone data to avoid modifying original.
      new DataManager(clonedData).executeQuery( new Query().search(this.lastSearchString, [], undefined, true)).then((e: any) => {
        console.log('Searched Records:', e.result); // Log searched records.
      });
    }
  }
}