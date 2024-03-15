
import { Component } from '@angular/core';
import { TimelineItemModel } from "@syncfusion/ej2-angular-layouts";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    public frameworks: TimelineItemModel[] = [
        { content: 'ReactJs', oppositeContent: 'Owned by Facebook' },
        { content: 'Angular', oppositeContent: 'Owned by Google' },
        { content: 'VueJs', oppositeContent: 'Owned by Evan you' },
        { content: 'Svelte', oppositeContent: 'Owned by Rich Harris' }
      ];
}


