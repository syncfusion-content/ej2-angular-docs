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
        <ejs-dialog id='dialog' #ejDialog target="#dialog-container" [position]='position' header='Dialog' [showCloseIcon]='true'
          content='This is a Dialog with drag enabled' width='350px'>
          <ng-template #header>
            <span>Choose a Dialog Position</span>
          </ng-template>
          <ng-template #content>
            <table style="width:320px;padding:18px; padding-top:0px;">
              <tr>
                <td><input type="radio" name="xy" (click)="changePosition($event)" value="left top" checked="true">left top
                </td>
                <td><input type="radio" name="xy" (click)="changePosition($event)" value="center top">center top</td>
                <td><input type="radio" name="xy" (click)="changePosition($event)" value="right top">right top</td>
              </tr>
              <tr>
                <td><input type="radio" name="xy" (click)="changePosition($event)" value="left center">left center</td>
                <td><input type="radio" name="xy" (click)="changePosition($event)" value="center center">center center</td>
                <td><input type="radio" name="xy" (click)="changePosition($event)" value="right center">right center</td>
              </tr>
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
      </div>
        `
})

export class AppComponent implements OnInit {
  // Reference the Dialog element
  @ViewChild('ejDialog') ejDialog: DialogComponent | any;

  // Set Dialog position
  public position: object = { X: 'left', Y: 'top' };

  // Show the Dialog when click the button
  public onOpenDialog = (event: any): void => {
    this.ejDialog.show();
  };

  public changePosition = (event: any): void => {
    this.ejDialog.position = { X: event.currentTarget.value.split(" ")[0], Y: event.currentTarget.value.split(" ")[1] };
    document.getElementById("posvalue")!.innerHTML = 'Position: {X: "' + event.currentTarget.value.split(" ")[0] + '", Y: "' + event.currentTarget.value.split(" ")[1] + '"}';
  }
}