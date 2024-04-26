import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge'
import { GaugeTooltipService } from '@syncfusion/ej2-angular-lineargauge'



import { Component, ViewChild } from '@angular/core';
import { ImageExportService, LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
@Component({
imports: [
         LinearGaugeModule
    ],

providers: [ GaugeTooltipService ],
standalone: true,
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" [allowImageExport]=true #gauge>
    </ejs-lineargauge><div><button  id='export' (click)='export()'>Export</button></div>`,
    providers: [ImageExportService]
})
export class AppComponent {
    @ViewChild('gauge')
    public gaugeObj: LinearGaugeComponent | any;
    public export() {
      this.gaugeObj.export('PNG', 'Gauge');
    };
}


