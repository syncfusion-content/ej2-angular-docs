


import { Component, OnInit, ViewChild } from '@angular/core';
import {PdfExportService, CircularGaugeComponent} from '@syncfusion/ej2-angular-circulargauge';
@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container" [allowPdfExport]=true #gauge>
    </ejs-circulargauge><div> <button  id='export' (click)='export()'>Export</button></div>`,
    providers: [PdfExportService]
})
export class AppComponent implements OnInit {
    @ViewChild('gauge')
    public gaugeObj?: CircularGaugeComponent;
    ngOnInit(): void {

    }
    public export() {
        this.gaugeObj!.export('PDF', 'Gauge', 0);
    };
}



