import { Component, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DialogComponent,PositionDataModel } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';
/**
 * Modal Dialog Component
 */
@Component({
    selector: 'app-root',
    template: `<button class="e-control e-btn" style="position: absolute;" id="targetButton" (click)="onOpenDialog($event)">Open Dialog</button>
    <div id="modalTarget" #container class='root-container'>
      <ejs-dialog id='dialog' #ejDialog [animationSettings]='animationSettings' [position]='position' content='Are you sure you want to permanently delete all of these items?' header='Delete Multiple Items' [target]='targetElement'
      width='300px' [showCloseIcon]='showCloseIcon' [buttons]='buttons'>
      </ejs-dialog> </div> `,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

   @ViewChild('ejDialog') ejDialog: DialogComponent | undefined;
    // Create element reference for dialog target element.
    @ViewChild('container', { read: ElementRef }) container: ElementRef | undefined;
    // The Dialog shows within the target element.
    public targetElement?: HTMLElement;
    public position: PositionDataModel = { X: 'center', Y: 'center' };
    //To get all element of the dialog component after component get initialized.
    ngOnInit() {
      this.initilaizeTarget();
    }
    ngAfterViewInit(): void {
      document.onclick = (args: any) : void => {
            let currentTarget = args.target.closest('ejs-dialog, button');
            if(currentTarget === null) {
                this.ejDialog!.hide();
            }
        }
    }

    // Initialize the Dialog component's target element.
    initilaizeTarget: EmitType<object> = () => {
      this.targetElement = document.getElementById("modalTarget") as any;
    }
    //Animation options
    public animationSettings: Object = { effect: 'Zoom', duration: 400, delay: 0 };

    public showCloseIcon: boolean = true;
    // Hide the Dialog when click the footer button.
    public hideDialog: EmitType<object> = () => {
        this.ejDialog!.hide();
    }
    // Enables the footer buttons
    public buttons: Object = [
        {
            'click': this.hideDialog.bind(this),
            // Accessing button component properties by buttonModel property
              buttonModel:{
              content:'Yes',
              //Enables the primary button
              isPrimary: true
            }
        },
        {
            'click': this.hideDialog.bind(this),
            // Accessing button component properties by buttonModel property
              buttonModel:{
              content:'No',
            }
        }
    ];
    // Sample level code to handle the button click action
    public onOpenDialog = (event: any): void => {
        // Call the show method to open the Dialog
        (this as any).ejDialog.show();
    }
}



