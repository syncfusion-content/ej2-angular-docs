import { shiftPlanData } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FreezeService, GridComponent, GridModule, SortService } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GridModule],
  providers: [FreezeService, SortService],
  template: `
    <ng-template #doctorTemplate let-data>
      <div class="doctor-name">{{ data.Name }}</div>
      <div class="doctor-designation">{{ data.Designation }}</div>
    </ng-template>

    <ejs-grid #grid [dataSource]="shiftPlanData" gridLines="Both" [allowSorting]="true" [enableColumnSpan]="true" [allowTextWrap]="true" [textWrapSettings]="{ wrapMode: 'Content' }" height="315" width="auto">
      <e-columns>
        <e-column field="Name" headerText="Doctor Name" width="170" textAlign="Center" freeze="Left" [template]="doctorTemplate"></e-column>
        <e-column field="Time9AM" headerText="9:00 AM" width="120" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Time10AM" headerText="10:00 AM" width="120" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Time11AM" headerText="11:00 AM" width="120" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Time12PM" headerText="12:00 PM" width="120" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Time1PM" headerText="1:00 PM" width="120" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Time2PM" headerText="2:00 PM" width="120" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Time3PM" headerText="3:00 PM" width="120" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Time4PM" headerText="4:00 PM" width="120" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Time5PM" headerText="5:00 PM" width="120" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Time6PM" headerText="6:00 PM" width="120" textAlign="Center" [allowSorting]="false"></e-column>
        <e-column field="Time7PM" headerText="7:00 PM" width="120" textAlign="Center" [allowSorting]="false"></e-column>
      </e-columns>
    </ejs-grid>
  `,
  styles: [`
    .doctor-name {
      margin-bottom: 5px;
    }
    .doctor-designation {
      font-size: 12px;
      color: #7f8c8d;
      font-weight: normal;
    }
  `]
})
export class AppComponent implements OnInit {

  public shiftPlanData?: Object[];
  @ViewChild('grid') 
  public grid?: GridComponent;

  ngOnInit(): void {
    this.shiftPlanData = shiftPlanData;
  }
}