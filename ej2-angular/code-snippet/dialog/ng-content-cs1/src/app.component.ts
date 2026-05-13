import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { Component, ViewChild } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-ng-content',
  template: `<div class="dialog-content-wrapper">
      <ng-content></ng-content>
</div>`,
})
export class NgContentComponent {}

@Component({
  imports: [DialogModule, NgContentComponent],
  standalone: true,
  selector: 'app-root',
  template: `<div class="control-section" style="margin: 100px auto; width: 50%" >
  <button class="e-btn" id='dlgbtn' #ButtonInstance (click)="BtnClick()">Open</button>
     <!-- Render Button to open the Dialog -->
     <ejs-dialog #Dialog [buttons]='dlgButtons' [header]='header' [animationSettings]='animationSettings' [showCloseIcon]='showCloseIcon' [width]='width' [height]='height' (open)="dialogOpen()"
         (close)="dialogClose()">
         <app-ng-content>
         <span> 10% of battery remaining </span>
         </app-ng-content>
     </ejs-dialog>
 </div>`,
})
export class AppComponent {
  @ViewChild('Dialog')
  public Dialog?: DialogComponent;
  public showCloseIcon: Boolean = true;
  public width: string = '250px';
  public height: string = '150px';
  public animationSettings: Object = { effect: 'None' };
  public header: string = 'Low Battery';
  BtnClick() {
    this.Dialog!.show();
  }
  dialogClose() {
    document.getElementById('dlgbtn')!.style.display = 'block';
  }
  // On Dialog open, 'Open' Button will be hidden
  dialogOpen() {
    document.getElementById('dlgbtn')!.style.display = 'none';
  }
  public dlgButtons: Object[] = [
    {
      click: this.dlgBtnClick.bind(this),
      buttonModel: { content: 'OK', isPrimary: 'true' },
    },
    {
      click: this.dlgBtnClick.bind(this),
      buttonModel: { content: 'Cancel' },
    },
  ];

  dlgBtnClick() {
    this.Dialog!.hide();
  }
}
