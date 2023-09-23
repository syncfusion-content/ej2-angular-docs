

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<ejs-pager [pageSize]= '1' [totalRecordsCount]='20'>
                </ejs-pager>`
})
export class AppComponent implements OnInit{

    ngOnInit(): void {
    }
}



