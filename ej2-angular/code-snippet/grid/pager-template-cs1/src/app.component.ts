

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-inputs';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    templateUrl: 'app.template.html'
})
export class AppComponent implements OnInit {
    public data?: object[];
    public initialPage?: PageSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.initialPage = { pageSize: 5 };
    }

    change(args: ChangeEventArgs) {
        this.initialPage = { currentPage: (args as any).value };
    }
}



