


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the AutoComplete component
    template:  `<ejs-autocomplete id='atcelement' [dataSource]='data' placeholder='Find a item'>
                    <ng-template #noRecordsTemplate>
                        <span class='norecord'> NO DATA AVAILABLE</span>
                    </ng-template>
                 </ejs-autocomplete>`
})
export class AppComponent {
    // defined the empty array data
    public data: string[] = [];
}


