


import { Component} from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { datasource } from './datasource';
import { DataManager, Query, JsonAdaptor } from '@syncfusion/ej2-data';
import { Pager } from "@syncfusion/ej2-angular-grids";
@Component({
    selector: 'my-app',
    template: `<div class="control-section">
  <ejs-listview id='listview' [dataSource]='data' [query]='query' showHeader='true' >
    <ng-template #headerTemplate let-data="">
      <table class="w-100"> <tr><td class="w-25">Order ID</td><td class="w-45">Ship       Name</td><td class="w-25">Ship City</td></tr></table>
    </ng-template>
    <ng-template #template let-data="">
      <table class="w-100"> <tr><td class="w-25">{{data.OrderID}}</td><td class="w-45">{{data.ShipName}}</td><td class="w-25" >{{data.ShipCity}}</td></tr></table>
    </ng-template>
  </ejs-listview>
  <ejs-pager [pageSize]= 'pagesize' [totalRecordsCount]='totalrec' [pageCount]='pageCount' (click)='clickevent($event)'>
  </ejs-pager>
</div>`
})

export class AppComponent {
public totalrec: number = datasource.length;
public pagesize: number = 10;
public pageCount: number = 2;
//Define an array of JSON data
public data: Object = new DataManager({
    json: datasource,
    adaptor: new JsonAdaptor
});
public query = new Query().range(0,this.pagesize);
  templatecheck: boolean;
public clickevent(args: any) {
  this.query = new Query().range((args.currentPage - 1) * this.pagesize, (args.currentPage * this.pagesize));
}
constructor(){
    this.templatecheck = Browser.isDevice;
}
}



