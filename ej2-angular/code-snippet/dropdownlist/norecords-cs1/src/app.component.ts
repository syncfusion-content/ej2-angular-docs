


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the DropDownList component
    template:  `<ejs-dropdownlist id='ddlelement' [dataSource]='data' placeholder='Find a item'>
                    <ng-template #noRecordsTemplate>
                        <span class='norecord'> NO DATA AVAILABLE</span>
                    </ng-template>
                 </ejs-dropdownlist>`
})
export class AppComponent {
    // defined the empty array data
    public data: string[] = [];
}


