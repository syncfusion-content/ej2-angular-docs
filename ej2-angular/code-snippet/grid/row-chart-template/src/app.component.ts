import { employeeData, employeePerformanceData } from './datasource';
import { Component } from '@angular/core';
import { CategoryService, ChartAllModule, ChartAnnotationService, ChartModule, ColumnSeriesService, LegendService, LineSeriesService } from '@syncfusion/ej2-angular-charts';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <ejs-grid #grid [dataSource]="data" height="335">
      <e-columns>
          <e-column field="Name" headerText="Employee Name" width="150"></e-column>
          <e-column field="Designation" headerText="Designation" width="150"></e-column>
          <e-column field="Team" headerText="Team(s)" width="150"></e-column>
          <e-column headerText="Employee Performance" width="300" textAlign="Center">
              <ng-template #template let-data>
                  <ejs-chart id="chart-container-{{data.EmployeeID}}" [primaryXAxis]="primaryXAxis" [dataSource]="getChartData(data.EmployeeID)" height="150">
                      <e-series-collection>
                          <e-series type="Column" xName="month" yName="performance" name="Performance"></e-series>
                      </e-series-collection>
                  </ejs-chart>
              </ng-template>
          </e-column>
      </e-columns>
    </ejs-grid>
  </div>`,
  standalone: true,
  imports: [GridModule, ChartModule, ChartAllModule],
  providers: [CategoryService, LineSeriesService, ColumnSeriesService, ChartAnnotationService, LegendService]
})
export class AppComponent {
  public data?: Object[];
  public primaryXAxis?: Object;

  ngOnInit(): void {
    this.data = employeeData;
    this.primaryXAxis = {
      valueType: 'Category',
    };
  }
  getChartData(employeeID: number) {
    const employeePerformance = employeePerformanceData.find(emp => emp.EmployeeID === employeeID.toString());
    return employeePerformance ? employeePerformance.chartData : [];
  }
  
}
