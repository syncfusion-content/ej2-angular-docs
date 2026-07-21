import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
@Component({
    imports: [

        GridModule
    ],

    providers: [PageService,
        SortService,
        FilterService,
        GroupService],
    standalone: true,
    selector: 'app-root',

    templateUrl: './app.html'
})
export class App implements OnInit {
    public data?: object[];
    public pageSettings?: PageSettingsModel;
    ngOnInit(): void {
        this.data = data;
        this.pageSettings = { pageSize: 6 };
    }
}


