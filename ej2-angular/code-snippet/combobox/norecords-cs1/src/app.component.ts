


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the ComboBox component
    template:  `<ejs-combobox id='comboelement' [dataSource]='data' placeholder='Find a item'>
                    <ng-template #noRecordsTemplate>
                        <span class='norecord'> NO DATA AVAILABLE</span>
                    </ng-template>
                 </ejs-combobox>`
})
export class AppComponent {
    // defined the empty array data
    public data: string[] = [];
}


