


import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `
    <button class="e-control e-btn" style="position: absolute;" id="targetButton" (click)="onOpenDialog($event)">Open Dialog</button>
    <div #container class='root-container'>
      <ejs-dialog id='dialog' #ejDialog header='User details' width='400px' [buttons]='buttons' [visible]='visible1' showCloseIcon='true' [target]='targetElement' [animationSettings]='dialogAnimation' [closeOnEscape]='closeOnEscape'>
      <ng-template #content>
        <form>
            <div class='form-group'>
                <label for='name'>Name:</label>
                <input type='name' class='form-control' id='name' />
            </div>
            <div class='form-group'>
                <label for='email'>Email Id:</label>
                <input type='email' placeholder='user@syncfusion.com' class='form-control' id='email' />
            </div>
            <div class='form-group'>
                <label for='contact'>Contact Number:</label>
                <input type='contact' class='form-control' id='contact' />
            </div>
            <div class='form-group'><label for='address'>Address:</label>
                <textarea class='form-control' rows='2' id='address'></textarea>
            </div>
        </form>
      </ng-template>
      </ejs-dialog>
      <ejs-dialog id='innerDialog' #ejInnerDialog header='User details' [animationSettings]='animationSettings' [isModal]='isModal' width='400px' [visible]='visible' showCloseIcon='true' content='This is a Nested Dialog' [target]='targetElement' [animationSettings]='dialogAnimation' [closeOnEscape]='closeOnEscape'>
      </ejs-dialog> </div> `
})

export class AppComponent implements OnInit {
    @ViewChild('ejDialog') ejDialog: DialogComponent | undefined;
    @ViewChild('ejInnerDialog') ejInnerDialog: DialogComponent | undefined;
   // Create element reference for dialog target element.
    @ViewChild('container', { read: ElementRef }) container: ElementRef | undefined;
    // The Dialog shows within the target element.
    public targetElement?: HTMLElement;

    //To get all element of the dialog component after component get initialized.
    ngOnInit() {
      this.initilaizeTarget();
    }
    public isModal: boolean = true;
    public visible: boolean = false;
    public visible1: boolean = false;
    // Initialize the Dialog component target element.
    public initilaizeTarget: EmitType<object> = () => {
      this.targetElement = this.container!.nativeElement.parentElement;
    }
    // Dialog animation
    public dialogAnimation: Object= { effect: 'Zoom', duration: 400, delay: 0 };
    public animationSettings: Object = { effect: 'Zoom', duration: 400, delay: 0 };
     // Disable the Esc key option to hide the Dialog
    public closeOnEscape: boolean =false;
    // Dialog header template content
    header: string='<div title="Installation Complete" class="e-icon-settings e-icons" style="padding: 3px;">   Installation Complete</div>';
    // Dialog footer template content
    footerTemplate: string='<span style="float: left;font-size: 14px;padding-left: 15px;color: rgba(0, 0, 0, 0.54);">Click the close button to Exit</span>';
    // Sample level code to handle the button click action
    public onOpenDialog = (event: any): void => {
        this.ejDialog!.show();
    }
    public getDynamicContent: EmitType<object> = () => {
      let input: HTMLInputElement =  document.getElementById('dialog')!.querySelector('#name') as HTMLInputElement;
      let email: HTMLInputElement =  document.getElementById('dialog')!.querySelector('#email') as HTMLInputElement;
      let contact: HTMLInputElement =  document.getElementById('dialog')!.querySelector('#contact') as HTMLInputElement;
      let address: HTMLTextAreaElement =  document.getElementById('dialog')!.querySelector('#address') as HTMLTextAreaElement;
      let template: string = "<div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><b>Confirm your details</b></div>" +
      "</div><div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='name'> Name: </span>" +
      "</div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='nameValue'>"+ input.value + "</span> </div></div>" +
      "<div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='email'> Email: </span>" +
      "</div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='emailValue'>" + email.value +
      "</span></div></div><div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'>"+
      "<span id='Contact'> Contact number: </span></div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'>"+
      "<span id='contactValue'>"+ contact.value +" </span></div></div><div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'>"+
      "<span id='Address'> Address: </span> </div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='AddressValue'>" + address.value +"</span></div></div>"
      return template;
    }
    public nestedbuttonClick: EmitType<object> = () =>  {
        this.ejInnerDialog!.hide();
        this.ejDialog!.show();
    }
    public footerbuttonclick: EmitType<object> = () => {
        this.ejInnerDialog!.hide();
    }
    public onOpenInnerDialog: EmitType<object> = () => {
        this.ejDialog!.hide();
        this.ejInnerDialog!.content = this.getDynamicContent();
        this.ejInnerDialog!.buttons = [{click: this.footerbuttonclick.bind(this), buttonModel: { content: 'Yes', isPrimary: true }},
        {click: this.nestedbuttonClick.bind(this), buttonModel: { content: 'No', isPrimary: true }}];
        this.ejInnerDialog!.show();
    }
    // Enables the footer buttons
    public buttons: Object = [
        {
            'click': this.onOpenInnerDialog.bind(this),
            // Accessing button component properties by buttonModel property
              buttonModel:{
              content:'Submit',
              //Enables the primary button
              isPrimary: true
            }
        }
    ];
}



