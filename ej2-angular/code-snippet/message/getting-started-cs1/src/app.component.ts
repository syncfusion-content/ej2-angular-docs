import { MessageModule } from '@syncfusion/ej2-angular-notifications';
import { Component } from '@angular/core';

@Component({
    imports: [MessageModule],
    standalone: true,
    selector: 'app-root',
    template: '<ejs-message content="Please read the comments carefully"></ejs-message>'
})

export class AppComponent { }
