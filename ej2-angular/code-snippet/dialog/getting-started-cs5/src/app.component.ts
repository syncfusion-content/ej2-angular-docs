import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DialogModule } from '@syncfusion/ej2-angular-popups'




import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
imports: [
        
		DialogModule
    ],


standalone: true,
    selector: 'app-root',
    template: `
      <div id="dialog-container">
        <button class="e-control e-btn" id="targetButton" (click)="onOpenDialog($event)">Open Dialog</button>
        <ejs-dialog id='dialog' #ejDialog target="#dialog-container" header='Dialog' [showCloseIcon]='true' content='This is a Dialog with button and primary button'
          width='350px' [buttons]='buttons'>
        </ejs-dialog>
      </div>`
})

export class AppComponent implements OnInit {
  // Reference the Dialog element
  @ViewChild('ejDialog') ejDialog: DialogComponent | any;

  // Show the Dialog when click the button
  public onOpenDialog = (event: any): void => {
    this.ejDialog.show();
  };

  // Enables the footer buttons
  public buttons: Object = [
    {
      'click': this.hideDialog.bind(this),
      // Accessing button component properties by buttonModel property
      buttonModel: {
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
  
  // Hide the Dialog when click the footer button.
  public hideDialog() {
    this.ejDialog.hide();
  }
}