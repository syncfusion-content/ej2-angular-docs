


import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { DialogUtility } from '@syncfusion/ej2-popups';

@Component({
    selector: 'app-root',
    template: `<button class="e-control e-btn" id="targetButton" (click)="onOpenDialog($event)">Open Alert Dialog</button>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    public onOpenDialog = function(event: any): void {
        DialogUtility.alert('This is an Alert Dialog!');
    }
}



