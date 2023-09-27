

import { Component, ViewChild } from '@angular/core';
import { PdfExportService, LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" [allowPdfExport]=true #gauge>
    </ejs-lineargauge><div> <button  id='export' (click)='export()'>Export</button></div>`,
    providers: [PdfExportService]
})
export class AppComponent {
  @ViewChild('gauge')
  public gaugeObj: LinearGaugeComponent | any;
  public export(){
    this.gaugeObj.export('PDF', 'Gauge', 0);
  };
}


