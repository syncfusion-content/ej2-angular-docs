
import { Component } from '@angular/core';
import { TimelineItemModel } from "@syncfusion/ej2-angular-layouts";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {

    public templateContents = [
        { title: 'Shipped', description: 'Package details received', info: '- Awaiting dispatch' },
        { title: 'Departed', description: 'In-transit', info: '(International warehouse)' },
        { title: 'Arrived', description: 'Package arrived at nearest hub', info: '(New york - US)' }
    ];

}


