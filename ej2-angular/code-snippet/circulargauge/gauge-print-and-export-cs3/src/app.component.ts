


import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageExportService, CircularGaugeComponent } from '@syncfusion/ej2-angular-circulargauge';
@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container" [allowImageExport]=true #gauge>
    </ejs-circulargauge>
    <div><button  id='export' (click)='export()'>Export</button></div>`,
    providers: [ImageExportService]
})
export class AppComponent implements OnInit {
    @ViewChild('gauge')
    public gaugeObj?: CircularGaugeComponent;
    ngOnInit(): void {

    }
    public export() {
        const promise = this.gaugeObj!.export('PNG','Gauge',undefined,false);
        promise.then((data)=> {
            document.writeln(data);
        })
    }
}



