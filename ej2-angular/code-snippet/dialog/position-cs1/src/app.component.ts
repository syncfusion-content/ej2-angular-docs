


import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `
      <div #container class='root-container'></div>
      <ejs-dialog id='dialog' #ejDialog [position]='position' [target]='targetElement' width='363px'
      [closeOnEscape]='closeOnEscape'>
       <ng-template #header>
            <span>Choose a Dialog Position</span>
        </ng-template>
        <ng-template #content>
          <table style="width:320px;padding:18px; padding-top:0px;">
            <tr>
              <td><input type="radio" name="xy" (click)="changePosition($event)" value="left top"
              checked="true">left top</td>
              <td><input type="radio" name="xy" (click)="changePosition($event)"
              value="center top">center top</td>
              <td><input type="radio" name="xy" (click)="changePosition($event)" value="right top">right top</td> </tr>
              <tr>
              <td><input type="radio" name="xy" (click)="changePosition($event)" value="left center">left center</td>
              <td><input type="radio" name="xy" (click)="changePosition($event)" value="center center">center center</td>
              <td><input type="radio" name="xy" (click)="changePosition($event)" value="right center">right center</td> </tr>
              <tr>
              <td><input type="radio" name="xy" (click)="changePosition($event)" value="left bottom">left bottom</td>
              <td><input type="radio" name="xy" (click)="changePosition($event)" value="center bottom">center bottom</td>
              <td><input type="radio" name="xy" (click)="changePosition($event)" value="right bottom">right bottom</td>
              </tr>
          </table>
        </ng-template>
        <ng-template #footerTemplate>
            <span id="posvalue" style="float:left; padding-left:10px;">Position: "Left", "Top"</span>
        </ng-template>
      </ejs-dialog>
        `
})

export class AppComponent implements OnInit {
    @ViewChild('ejDialog') ejDialog: DialogComponent |any;
   // Create element reference for dialog target element.
    @ViewChild('container', { read: ElementRef, static: true }) container: ElementRef | any;
    // The Dialog shows within the target element.
    public targetElement?: HTMLElement;

    //To get all element of the dialog component after component get initialized.
    ngOnInit() {
      this.initilaizeTarget();
    }

    // Initialize the Dialog component's target element.
    public initilaizeTarget: EmitType<object> = () => {
      this.targetElement = this.container.nativeElement.parentElement;
    }
    // Set Dialog position
    public position: object={ X: 'left', Y: 'top' };
    // Disable the Esc key option to hide the Dialog
    public closeOnEscape: boolean =false;

    // Sample level code to handle the button click action
    public onOpenDialog = (event: any): void => {
        // Call the show method to open the Dialog
        this.ejDialog.show();
    }
    public changePosition = (event: any): void =>{
      this.ejDialog.position = { X: event.currentTarget.value.split(" ")[0], Y: event.currentTarget.value.split(" ")[1] };
      document.getElementById("posvalue")!.innerHTML = 'Position: {X: "' + event.currentTarget.value.split(" ")[0] + '", Y: "' + event.currentTarget.value.split(" ")[1] + '"}';
    }
}



