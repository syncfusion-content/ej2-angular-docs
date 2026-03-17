import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Pager, PagerDropDown, PagerModule } from '@syncfusion/ej2-angular-grids';

Pager.Inject(PagerDropDown);

@Component({
    imports: [
        PagerModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-pager [pageSize]= '10' [totalRecordsCount]='200' [pageSizes]="pageSizes">
                </ejs-pager>`
})
export class AppComponent implements OnInit {

    public pageSizes= [10, 20, 50, 100];

    ngOnInit(): void {
    }
}
