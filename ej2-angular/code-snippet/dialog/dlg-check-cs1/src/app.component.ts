


import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `
    <div class="login-form">
          <div class="wrap">
            <div id="heading">Sign in</div>
              <div class="e-float-input e-input-group">
                <input id="textvalue" type="text" required (focus)="focusIn($event.target)" (blur)="focusOut($event.target)"/>
                <span class="e-float-line"></span>
                <label class="e-float-text">Username</label>
              </div>
              <div class="e-float-input e-input-group">
                <input id="textvalue2" type="password" required (focus)="focusIn($event.target)" (blur)="focusOut($event.target)"/>
                <span class="e-float-line"></span>
                <label class="e-float-text">Password</label>
              </div>
              <div class="button-contain">
                <button class="e-control e-btn e-info" id="targetButton" (click)="onOpenDialog($event)">Log in</button>
              </div>
          </div>
        </div>
    <div #container class='root-container'>
      <ejs-dialog id='dialog' #ejDialog isModal='true' content='Congratulations! Login Success' [visible]='visible' header='Success' (beforeOpen)="validation($event)"[buttons]='buttons' [target]='targetElement' width='280px'>
      </ejs-dialog>
    </div> `
})

export class AppComponent {
    @ViewChild('ejDialog') ejDialog: DialogComponent | undefined;
   // The Dialog shows within the target element.
    @ViewChild('container', { read: ElementRef }) container: ElementRef | undefined;
    // The Dialog shows within the target element.
    public targetElement?: HTMLElement;

    //To get all element of the dialog component after component get initialized.
    ngOnInit() {
      this.initilaizeTarget();
    }

    public focusIn(target: HTMLElement| any): void {
        let parent: HTMLElement = target.parentElement;
        if (parent.classList.contains('e-input-in-wrap')) {
            parent.parentElement!.classList.add('e-input-focus');
        } else {
            parent.classList.add('e-input-focus');
        }
    }

    public focusOut(target: HTMLElement |any): void {
        let parent: HTMLElement = target.parentElement;
        if (parent.classList.contains('e-input-in-wrap')) {
            parent.parentElement!.classList.remove('e-input-focus');
        } else {
            parent.classList.remove('e-input-focus');
        }
    }
    public visible: Boolean = false;
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
              content:'Dismiss',
              //Enables the primary button
              isPrimary: true
            }
        }
    ];

    // Initialize the Dialog component target element.
    public initilaizeTarget: EmitType<object> = () => {
      this.targetElement = this.container!.nativeElement.parentElement;
    }
    public validation (event: any): void {
        let text = document.getElementById('textvalue');
        let text1 = document.getElementById('textvalue2');
        if ((text as any).value === "" && (text1 as any).value === "") {
            event.cancel= true;
            alert("Enter the username and password")
        } else if ((text as any).value === "") {
            event.cancel= true;
            alert("Enter the username")
        } else if ((text1 as any).value === "") {
            event.cancel= true;
            alert("Enter the password")
        } else if ((text as any).value.length < 4) {
            event.cancel= true;
            alert("Username must be minimum 4 characters")
        } else {
            event.cancel= false;
            (document.getElementById("textvalue")! as any).value = "";
            (document.getElementById("textvalue2")! as any).value = "";
        }
    }
    // Sample level code to handle the button click action
    public onOpenDialog = (event: any): void => {
        // Call the show method to open the Dialog
        this.ejDialog!.show();
    }
}



