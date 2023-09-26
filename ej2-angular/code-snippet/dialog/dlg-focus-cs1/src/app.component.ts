


import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `
    <button class="e-control e-btn" style="position: absolute;" id="targetButton" (click)="onOpenDialog($event)">Open Dialog</button>
    <div #container class='root-container'></div>
    <ejs-dialog id='dialog' #ejDialog header='Sign In' [buttons]='buttons' [target]='targetElement' width='300px' (open)="onOpen($event)">
        <ng-template #content>
            <div class='form-group'><label for='email'>Email:</label>
                <input type='email' class='form-control' id='email'>
            </div>
            <div class='form-group'>
                <label for='comment'>Password:</label>
                <input type='password' class='form-control' id='password'>
            </div>
        </ng-template>
    </ejs-dialog>`
})

export class AppComponent implements OnInit {
  @ViewChild('ejDialog') ejDialog: DialogComponent | undefined;
  // Create element reference for dialog target element.
  @ViewChild('container', { read: ElementRef }) container: ElementRef | undefined;
  // The Dialog shows within the target element.
  public targetElement?: HTMLElement;

  // To get all element of the dialog component after component get initialized.
  ngOnInit() {
    this.initilaizeTarget();
  }

  // Initialize the Dialog component target element.
  public initilaizeTarget: EmitType<object> = () => {
    this.targetElement = this.container!.nativeElement.parentElement;
  }
  // Sample level code to handle the button click action
  public onOpenDialog = (event: any): void => {
    // Call the show method to open the Dialog
    this.ejDialog!.show();
  };

  public onOpen(args: any): void {
    //Preventing the default dialog focus
    args.preventFocus = true;
  }
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
        content: 'OK',
        // Enables the primary button
        isPrimary: true
      }
    },
    {
      'click': this.hideDialog.bind(this),
      buttonModel: {
        content: 'Cancel'
      }
    }
  ];


}



