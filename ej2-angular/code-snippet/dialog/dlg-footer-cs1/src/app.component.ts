


import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `<button class="e-control e-btn" style="position: absolute;" id="targetButton" (click)="onOpenDialog($event)">Open Dialog</button>
    <div #container class='root-container'></div>
      <ejs-dialog id='dialog' #ejDialog [animationSettings]='animationSettings' (close)='dialogClose()' content='Are you sure you want to permanently delete all of these items?' header='Delete Multiple Items' [target]='targetElement'
      width='300px' [showCloseIcon]='showCloseIcon'>
      <ng-template #footerTemplate>
          <div>
            <button id="Button1" class="e-control e-btn e-primary e-flat" (click)="btnclick()" data-ripple="true">
            <span class="e-btn-icon e-icons e-ok-icon e-icon-left"></span>Yes</button>
            <button id="Button2" class="e-control e-btn e-flat" (click)="btnclick()" data-ripple="true">
            <span class="e-btn-icon e-icons e-close-icon e-icon-left"></span>No</button>
          </div>
      </ng-template>
      </ejs-dialog>
        `
})

export class AppComponent implements OnInit {
dialogClose() {
throw new Error('Method not implemented.');
}
    @ViewChild('ejDialog') ejDialog: DialogComponent | undefined;
    // Create element reference for dialog target element.
    @ViewChild('container', { read: ElementRef }) container: ElementRef | undefined;
    // The Dialog shows within the target element.
    public targetElement?: HTMLElement;

    //To get all element of the dialog component after component get initialized.
    ngOnInit() {
      this.initilaizeTarget();
    }

    // Initialize the Dialog component's target element.
    initilaizeTarget: EmitType<object> = () => {
      this.targetElement = this.container!.nativeElement.parentElement;
    }

    //Animation options
    public animationSettings: Object = { effect: 'Zoom', duration: 400, delay: 0 };

    public showCloseIcon: boolean = true;
    // Hide the Dialog when click the footer button.
    public hideDialog: EmitType<object> = () => {
        this.ejDialog!.hide();
    }

    public btnclick = (): void => {
        this.ejDialog!.hide();
    }

    // Sample level code to handle the button click action
    public onOpenDialog = (event: any): void => {
        // Call the show method to open the Dialog
        this.ejDialog!.show();
    }
}



