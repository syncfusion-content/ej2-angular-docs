import { Component } from '@angular/core';
import { AggregateService, GridModule } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
  imports: [GridModule],
  providers: [AggregateService],
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.template.html'
})
export class AppComponent {
  public data?: Object[] = data;

  public aggregates = [
    {
      columns: [{
        field: 'Freight',
        type: 'Sum',
        footerTemplate: 'Total Freight: ${Sum}'
      }]
    }
  ];
}
