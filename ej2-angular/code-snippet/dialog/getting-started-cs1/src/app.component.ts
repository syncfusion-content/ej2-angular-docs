


import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `
    <button class="e-control e-btn" style="position: absolute;" id="targetButton" (click)="onOpenDialog($event)">Open Dialog</button>
    <div #container class='root-container'></div>
      <ejs-dialog id='dialog' #ejDialog header='Dialog' content='Dialog enabled with Zoom effect' [target]='targetElement'
      [animationSettings]='animationSettings' width='250px' [buttons]='buttons'>
      </ejs-dialog>
        `
})

export class AppComponent implements OnInit {
    @ViewChild('ejDialog') ejDialog: DialogComponent | any;
    // Create element reference for dialog target element.
    @ViewChild('container', { read: ElementRef }) container: ElementRef | any;
    // The Dialog shows within the target element.
    public targetElement?: HTMLElement;

    //To get all element of the dialog component after component get initialized.
    ngOnInit() {
      this.initilaizeTarget();
    }

    // Initialize the Dialog component target element.
    public initilaizeTarget: EmitType<object> = () => {
      this.targetElement = this.container.nativeElement.parentElement;
    }

    // Hide the Dialog when click the footer button.
    public hideDialog: EmitType<object> = () => {
        this.ejDialog.hide();
    }
    // Sample level code to handle the button click action
    public onOpenDialog = (event:any): void => {
        // Call the show method to open the Dialog
        this.ejDialog.show();
    }
    //Animation options
    public animationSettings: Object = { effect: 'Zoom', duration: 400, delay: 0 };
    // Enables the footer buttons
    public buttons: Object = [
        {
            'click': this.hideDialog.bind(this),buttonModel:{ content:'OK', isPrimary: true }
        },
        {
            'click': this.hideDialog.bind(this),buttonModel:{ content:'Cancel' }
        }
    ];
}



