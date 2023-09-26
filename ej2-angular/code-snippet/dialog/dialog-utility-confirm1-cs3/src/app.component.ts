


import { Component, ViewChild, OnInit } from '@angular/core';
import { DialogUtility } from '@syncfusion/ej2-popups';

@Component({
    selector: 'app-root',
    template: `<button class="e-control e-btn" id="targetButton" (click)="onOpenDialog($event)">Open Confirm Dialog</button>`
})

export class AppComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    public DialogObj: any;
    public onOpenDialog = (event: any): void => {
        this.DialogObj = DialogUtility.confirm({
        title: 'Confirmation Dialog',
        content: "This is a Confirmation Dialog!",
        okButton: {  text: 'OK', click: this.okClick.bind(this) },
        cancelButton: {  text: 'Cancel', click: this.cancelClick.bind(this) },
        showCloseIcon: true,
        closeOnEscape: true,
        animationSettings: { effect: 'Zoom' }
    });
    }
    private okClick(): void {
        alert('you clicked OK button');
    }

    private cancelClick(): void {
        //Hide the dialog
        this.DialogObj.hide();
    }
}



