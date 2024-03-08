import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  TreeGridComponent,
  DetailRowService,
} from '@syncfusion/ej2-angular-treegrid';
import { textdata } from './datasource';
import { Internationalization } from '@syncfusion/ej2-base';

let instance: Internationalization = new Internationalization();

@Component({
  selector: 'app-container',
  template: `<ejs-treegrid #treegrid [dataSource]='data' height=317 width='auto' childMapping= 'Children' >
                <e-columns>
                    <e-column field='Name' headerText='First Name' width='160'></e-column>
                    <e-column field='DOB' headerText = 'DOB' width='105' type='date' format='yMd'></e-column>
                    <e-column field='Designation' headerText = 'Designation' width='180'></e-column>
                    <e-column field='Country' headerText = 'Country' width='148'></e-column>
                </e-columns>
                <ng-template #detailTemplate let-data>
                  <div *ngIf="data.hasChildRecords">
                      <div style="position: relative; display: inline-block; float: left; font-weight: bold; width: 10%;padding:5px 4px 2px 27px;;">
                          <img src="{{data.FullName}}.png" alt="{{data.FullName}}"/>
                      </div>
                      <div style="padding-left: 10px; display: inline-block; width: 66%; text-wrap: normal;font-size:13px;font-family:'Segoe UI';">
                          <div class="e-description" style="word-wrap: break-word;">
                             <b>{{data.Name}}</b> was born on {{format(data.DOB)}}. Now lives at {{data.Address}}, {{data.Country}}. {{data.Name}} holds a position of <b>{{data.Designation}}</b> in our WA department, (Seattle USA).
                          </div>
                          <div class="e-description" style="word-wrap: break-word;margin-top:5px;">
                            <b style="margin-right:10px;">Contact:</b>{{data.Contact}}
                          </div>
                      </div>
                  </div>
                 </ng-template>
              </ejs-treegrid>`,
  providers: [DetailRowService],
})
export class AppComponent implements OnInit {
  public data?: Object[];

  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;

  ngOnInit(): void {
    this.data = textdata;
  }

  public format(value: Date): string {
    return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
  }
}
export interface DateFormat extends Window {
  format?: Function;
}
