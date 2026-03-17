import { telecastData } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FreezeService, GridComponent, GridModule, SortService } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GridModule],
  providers: [FreezeService, SortService],
  template: `
    <ejs-grid #grid [dataSource]="telecastData" gridLines="Both" [enableHover]="false" [allowSelection]="false" [allowSorting]="true" [enableRowSpan]="true" [allowTextWrap]="true" [textWrapSettings]="{ wrapMode: 'Content' }" height="335" width="auto">
      <e-columns>
        <e-column field="Channel" headerText="Channel" width="150" freeze="Left" isPrimaryKey="true"></e-column>
        <e-column field="Genre" headerText="Genre" width="120" freeze="Left"></e-column>
        <e-column field="Program12AM" headerText="12 AM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program1AM" headerText="1 AM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program2AM" headerText="2 AM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program3AM" headerText="3 AM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program4AM" headerText="4 AM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program5AM" headerText="5 AM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program6AM" headerText="6 AM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program7AM" headerText="7 AM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program8AM" headerText="8 AM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program9AM" headerText="9 AM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program10AM" headerText="10 AM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program11AM" headerText="11 AM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program12PM" headerText="12 PM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program1PM" headerText="1 PM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program2PM" headerText="2 PM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program3PM" headerText="3 PM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program4PM" headerText="4 PM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program5PM" headerText="5 PM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program6PM" headerText="6 PM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program7PM" headerText="7 PM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program8PM" headerText="8 PM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program9PM" headerText="9 PM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program10PM" headerText="10 PM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Program11PM" headerText="11 PM" width="110" textAlign="Center" [allowSorting]="false"></e-column>
      </e-columns>
    </ejs-grid>
  `
})
export class AppComponent implements OnInit {

  public telecastData?: Object[];
  @ViewChild('grid')
  public grid?: GridComponent;

  ngOnInit(): void {
    this.telecastData = telecastData;
  }
}
