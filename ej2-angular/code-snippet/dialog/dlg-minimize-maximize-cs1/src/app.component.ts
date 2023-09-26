


import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `
    <button class="e-control e-btn" style="position: absolute;" id="targetButton" (click)="onOpenDialog($event)">Open Dialog</button>
    <div #container class='root-container'></div>
      <ejs-dialog id='dialog' #Dialog showCloseIcon='true' [visible]='visible' content='This is a dialog with minimize and maximize buttons' [target]='targetElement'
      width='250px' [buttons]='buttons'>
      <ng-template #header>
          <span class='title'>Dialog</span>
          <span class='e-icons sf-icon-Maximize' id='max-btn' title='Maximize' (click)='maximize()'></span>
          <span class='e-icons sf-icon-Minimize' id='min-btn' title='Minimize' (click)='minimize()'></span>
      </ng-template>
      </ejs-dialog> `
})

export class AppComponent implements OnInit {
    @ViewChild('Dialog') dialogObj: DialogComponent | undefined;
    // Create element reference for dialog target element.
    @ViewChild('container', { read: ElementRef }) container: ElementRef | undefined;
    // The Dialog shows within the target element.
    public targetElement?: HTMLElement;
    public width: string = '350px';
    public hide?: any;
    public isFullScreen?: Boolean;
    public dialogOldPositions?: any;
    //To get all the elements of the dialog component after the component is initialized.
    ngOnInit() {
      this.initilaizeTarget();
    }
    // Initialize the Dialog component's target element.
    public initilaizeTarget: EmitType<object> = () => {
      this.targetElement = this.container!.nativeElement.parentElement;
    }
    public visible: Boolean = false;
    // Hide the Dialog when click the footer button.
    public hideDialog: EmitType<object> = () => {
        this.dialogObj!.hide();
    }
    // Enables the footer buttons
    public buttons: Object = [
        {
            'click': this.hideDialog.bind(this),
            // Accessing button component properties by using the buttonModel property
              buttonModel:{
              content:'OK',
              //Enables the primary button
              isPrimary: true
            }
        },
        {
            'click': this.hideDialog.bind(this),
            buttonModel:{
              content:'Cancel'
            }
        }
    ];
    public onOpenDialog = (event: any): void => {
        // Call the show method to open the Dialog
        this.dialogObj!.show();
    }
    public maximize(): void {
    var maximizeIcon;
    if (this.dialogObj!.element.classList.contains('dialog-minimized')) {
      this.dialogObj!.element.querySelector('#min-btn')!.classList.add('sf-icon-Minimize');
      this.dialogObj!.element.querySelector('#min-btn')!.classList.remove('sf-icon-Restore');
      this.dialogObj!.element.querySelector('#min-btn')!.setAttribute('title', 'Minimize');
    }
    if (!this.dialogObj!.element.classList.contains('dialog-maximized') && !this.isFullScreen) {
      maximizeIcon = this.dialogObj!.element.querySelector(".e-dlg-header-content .sf-icon-Maximize");
    } else {
      maximizeIcon = this.dialogObj!.element.querySelector(".e-dlg-header-content .sf-icon-Restore");
    }
    if (!this.dialogObj!.element.classList.contains('dialog-maximized')) {
      this.dialogObj!.element.classList.add('dialog-maximized');
      this.dialogObj!.show(true);
      maximizeIcon!.classList.add('sf-icon-Restore');
      maximizeIcon!.setAttribute('title', 'Restore');
      maximizeIcon!.classList.remove('sf-icon-Maximize');
      this.dialogObj!.element.querySelector('.e-dlg-content')!.classList.remove('hide-content');
      this.isFullScreen = true;
    } else {
      this.dialogObj!.element.classList.remove('dialog-maximized');
      this.dialogObj!.show(false);
      maximizeIcon!.classList.remove('sf-icon-Restore');
      maximizeIcon!.classList.add('sf-icon-Maximize');
      maximizeIcon!.setAttribute('title', 'Maximize');
      this.dialogObj!.element.querySelector('.e-dlg-content')!.classList.remove('hide-content');
      this.dialogObj!.position = this.dialogOldPositions;
      this.dialogObj!.dataBind();
      this.isFullScreen = false;
    }
  }

  public minimize(): void {
    var minimizeIcon = this.dialogObj!.element.querySelector(".e-dlg-header-content .sf-icon-Minimize");
    if (!this.dialogObj!.element.classList.contains('e-dlg-fullscreen')) {
      if (!this.dialogObj!.element.classList.contains('dialog-minimized')) {
        this.dialogOldPositions = { X: this.dialogObj!.position.X, Y: this.dialogObj!.position.Y }
        this.dialogObj!.element.classList.add('dialog-minimized');
        this.dialogObj!.element.classList.remove('dialog-maximized');
        this.dialogObj!.element.querySelector('.e-dlg-content')!.classList.add('hide-content');
        this.dialogObj!.position = { X: 'center', Y: 'bottom' };
        this.dialogObj!.dataBind();
        minimizeIcon!.classList.add('sf-icon-Restore');
        minimizeIcon!.setAttribute('title', 'Restore');
      } else {
        this.dialogObj!.element.classList.remove('dialog-minimized');
        this.dialogObj!.element.querySelector('.e-dlg-content')!.classList.remove('hide-content');
        minimizeIcon!.classList.add('sf-icon-Minimize');
        minimizeIcon!.setAttribute('title', 'Minimize');
        minimizeIcon!.classList.remove('sf-icon-Restore');
        this.dialogObj!.position = this.dialogOldPositions;
        this.dialogObj!.dataBind();
      }
    } else {
      this.dialogObj!.show(false);
      this.dialogObj!.element.classList.remove('dialog-maximized');
      this.dialogObj!.element.classList.add('dialog-minimized');
      this.dialogObj!.element.querySelector('.e-dlg-content')!.classList.add('hide-content');
      minimizeIcon!.classList.remove('sf-icon-Minimize');
      minimizeIcon!.removeAttribute('title');
      this.dialogObj!.position = { X: 'center', Y: 'bottom' };
      this.dialogObj!.dataBind();
      this.isFullScreen = true;
    }
  }
}



