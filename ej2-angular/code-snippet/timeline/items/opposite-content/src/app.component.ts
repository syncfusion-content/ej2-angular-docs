
import { Component } from '@angular/core';
import { TimelineItemModel } from "@syncfusion/ej2-angular-layouts";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {

    public mealTimes: TimelineItemModel[] = [
        { content: 'Breakfast', oppositeContent: '8:00 AM'},
        { content: 'Lunch', oppositeContent: '1:00 PM'},
        { content: 'Dinner', oppositeContent: '8:00 PM'},
    ];

}


