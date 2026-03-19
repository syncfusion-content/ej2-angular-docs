import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { AggregateService, GridModule, GroupService, GroupSettingsModel, PageService, PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule ],
    providers: [AggregateService, GroupService, PageService],
    standalone: true,
    selector: 'app-root',
    templateUrl: 'app.template.html'
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public groupOptions: GroupSettingsModel = { showDropArea: false, columns: ['ShipCountry'], disablePageWiseAggregates: true, };
    public pageOptions: PageSettingsModel = { pageSize: 5 };
    ngOnInit(): void {
        this.data = data;
    }
}