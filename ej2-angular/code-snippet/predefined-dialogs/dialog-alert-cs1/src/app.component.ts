


import { Component, OnInit } from '@angular/core';
import { DialogUtility } from '@syncfusion/ej2-popups';

@Component({
    selector: 'app-root',
    template: `<button ejs-button cssClass="e-danger" #alertButton (click)="alertBtnClick()">Alert</button><span id="statusText"></span>`,
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public dialogObj : any;
  public alertBtnClick = (): void => {
    document.getElementById('statusText')!.style.display = 'none';
    this.dialogObj = DialogUtility.alert({
      title: 'Low Battery',
      content: '10% of battery remaining',
      width : '250px',
      okButton: { click: this.alertOkAction.bind(this) },
    });
  };
  private alertOkAction(): void {
    this.dialogObj.hide();
    document.getElementById('statusText')!.innerHTML =
      'The user closed the Alert dialog.';
    document.getElementById('statusText')!.style.display = 'block';
  }
}



