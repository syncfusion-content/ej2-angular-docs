import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge'




import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageExportService, CircularGaugeComponent } from '@syncfusion/ej2-angular-circulargauge';
@Component({
imports: [
         CircularGaugeModule
    ],

standalone: true,
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container" [allowImageExport]=true #gauge>
    </ejs-circulargauge><div> <button  id='export' (click)='export()'>Export</button></div>`,
    providers: [ImageExportService]
})
export class AppComponent implements OnInit {
    @ViewChild('gauge')
    public gaugeObj?: CircularGaugeComponent;
    ngOnInit(): void {
        // ngOnInit code here
      }

      public export(): void {
        this.gaugeObj!.print();
      }
}



