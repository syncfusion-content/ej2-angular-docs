


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./index.css'],
    template: `<ejs-daterangepicker placeholder='Select a range'>
            <e-presets>
                <e-preset label="This Week" [start]='weekStart' [end]='weekEnd'></e-preset>
                <e-preset label="This Month" [start]='monthStart' [end]='monthEnd'></e-preset>
                <e-preset label="Last Month" [start]='lastStart' [end]='lastEnd'></e-preset>
                <e-preset label="Last Year" [start]='yearStart' [end]='yearEnd'></e-preset>
            </e-presets>
        </ejs-daterangepicker>`
})
export class AppComponent {
public today: Date = new Date(new Date().toDateString());
    public weekStart: Date = new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 7) % 7)).toDateString());
    public weekEnd: Date = new Date(new Date(new Date().setDate(new Date(new Date().setDate((new Date().getDate()
        - (new Date().getDay() + 7) % 7))).getDate() + 6)).toDateString())
        ;
    public monthStart: Date = new Date(new Date(new Date().setDate(1)).toDateString());
    public monthEnd: Date = this.today;
    public lastStart: Date = new Date(new Date(new Date(new Date().setMonth(new Date().getMonth() - 1)).setDate(1)).toDateString());
    public lastEnd: Date = this.today;
    public yearStart: Date = new Date(new Date(new Date().setDate(new Date().getDate() - 365)).toDateString());
    public yearEnd: Date = this.today;

    constructor() {
    }
}



