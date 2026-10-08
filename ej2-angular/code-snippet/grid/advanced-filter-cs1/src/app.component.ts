import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AdvancedFilterService,
  GridComponent,
  GridModule,
  SortService,
  ToolbarService,
  VirtualScrollService,
  LoadEventArgs,
} from '@syncfusion/ej2-angular-grids';
import { ticketdata } from './datasource';

@Component({
  selector: 'app-root',
  template: `<div class="control-section">
    <div>
      <ejs-grid #grid id='AdvancedFilter' [dataSource]='data' [allowAdvancedFiltering]='true' [allowSorting]='true'
        [enableVirtualization]='true' [pageSettings]='pageSettings' [advancedFilterSettings]='advancedFilterSettings'
        height='400' rowHeight='45' [toolbar]='toolbar' (load)='onLoad($event)'>
        <e-columns>
          <e-column field='TicketID' headerText='Ticket ID' textAlign='Right' width='120' isPrimaryKey='true'></e-column>
          <e-column field='Title' headerText='Title' width='260'></e-column>
          <e-column field='TypeofRequest' headerText='Type' width='150'></e-column>
          <e-column field='Assignee' headerText='Assignee' width='150'></e-column>
          <e-column field='Priority' headerText='Priority' width='130'></e-column>
          <e-column field='Status' headerText='Status' width='130'></e-column>
          <e-column field='CreatedDate' headerText='Created Date' width='140' textAlign='Right' type='date' format='yMd'></e-column>
          <e-column field='DueDate' headerText='Due Date' width='140' textAlign='Right' type='date' format='yMd'></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>`,
  providers: [ToolbarService, AdvancedFilterService, SortService, VirtualScrollService],
  standalone: true,
  imports: [GridModule],
})
export class AppComponent implements OnInit {
  public data: Object[];
  public toolbar: string[];
  public pageSettings: Object;
  public advancedFilterSettings: Object;

  @ViewChild('grid') public grid?: GridComponent;

  public ngOnInit(): void {
    this.data = ticketdata;
    this.pageSettings = { pageSize: 50 };
    this.toolbar = ['AdvancedFilter'];
    this.advancedFilterSettings = {};
  }

  public onLoad(args: LoadEventArgs): void {
    if (args) {
      args.enableSeamlessScrolling = true;
    }
  }
}
