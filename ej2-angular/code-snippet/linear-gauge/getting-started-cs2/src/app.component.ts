import { Component, OnInit } from '@angular/core';
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge';

@Component({
    imports: [
        LinearGaugeModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-lineargauge id="gauge-container" [title]='Title'>
    </ejs-lineargauge>`
})
export class AppComponent implements OnInit {
    public Title?: string;
    ngOnInit(): void {
        // Title for linear gauge
        this.Title = 'linear gauge';
    }
}



