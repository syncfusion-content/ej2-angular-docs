import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataManager, ODataV4Adaptor, Query, ReturnOption } from '@syncfusion/ej2-data';

const SERVICE_URI =
  'https://services.odata.org/V4/Northwind/Northwind.svc/Orders';

class CustomAdaptor extends ODataV4Adaptor {
  public override beforeSend(dm: DataManager, request: Request, settings?: any) {
    request.headers.set('Accept-Language', 'Syncfusion');
    super.beforeSend(dm, request, settings);
  }
}

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .e-table {
      border: solid 1px #e0e0e0;
      border-collapse: collapse;
      font-family: Roboto;
    }

    .e-table td, .e-table th {
      border-style: solid;
      border-width: 1px 0 0;
      border-color: #e0e0e0;
      display: table-cell;
      font-size: 14px;
      line-height: 20px;
      overflow: hidden;
      padding: 8px 21px;
      vertical-align: middle;
      white-space: nowrap;
      width: auto;
    }
    `],
})
export class AppComponent implements OnInit {
  public items?: object[] | any;

  public ngOnInit(): void {
    new DataManager({ url: SERVICE_URI, adaptor: new CustomAdaptor() })
      .executeQuery(new Query().take(8))
      .then((e: ReturnOption) => {
        console.log('Fetched Data:', e.result);
        this.items = e.result as object[];
     })
     .catch((e) => true);
  }
}