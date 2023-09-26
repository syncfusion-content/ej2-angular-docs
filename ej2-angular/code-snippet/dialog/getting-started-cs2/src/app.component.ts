

import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `
    <button class="e-control e-btn" style="position: absolute;" id="targetButton" (click)="onOpenDialog($event)">Open Dialog</button>
    <div #container class='root-container'></div>
      <ejs-dialog id='dialog' #ejDialog content='This is a Dialog with content' [target]='targetElement' width='250px'>
      </ejs-dialog>
        `
})

export class AppComponent implements OnInit {
  @ViewChild('ejDialog') ejDialog: DialogComponent | any;
  // Create element reference for dialog target element.
  @ViewChild('container', { read: ElementRef, static: true }) container: ElementRef | any;
  // The Dialog shows within the target element.
  public targetElement?: HTMLElement;

  // To get all element of the dialog component after component get initialized.
  ngOnInit() {
    this.initilaizeTarget();
  }

  // Initialize the Dialog component target element.
  public initilaizeTarget: EmitType<object> = () => {
    this.targetElement = this.container.nativeElement.parentElement;
  }
  // Sample level code to handle the button click action
  public onOpenDialog = (event: any): void => {
      // Call the show method to open the Dialog
      this.ejDialog.show();
  };
}


