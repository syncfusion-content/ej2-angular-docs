

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'default.html',
    styleUrls: ['./index.css']
})
export class AppComponent {

    public path: Object = {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    };

}


