


import { Component, OnInit } from '@angular/core';
import { DialogUtility } from '@syncfusion/ej2-popups';

@Component({
    selector: 'app-root',
    template: `<button ejs-button cssClass="e-success" #confirmButton (click)="confirmBtnClick()">Confirm</button><span id="statusText"></span>`
})

export class AppComponent implements OnInit {
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
    public dialogObj :any;
    public confirmBtnClick = (): void => {
    document.getElementById('statusText')!.style.display = 'none';
    this.dialogObj = DialogUtility.confirm({
      title: 'Delete Multiple Items',
      content: 'Are you sure you want to permanently delete these items?',
      width: '300px',
      okButton: { click: this.confirmOkAction.bind(this) },
      cancelButton: { click: this.confirmCancelAction.bind(this) }
    });
  };
  private confirmOkAction(): void {
    this.dialogObj.hide();
    document.getElementById('statusText')!.innerHTML =
      'The user confirmed the dialog box';
    document.getElementById('statusText')!.style.display = 'block';
  }
  private confirmCancelAction(): void {
    this.dialogObj.hide();
    document.getElementById('statusText')!.innerHTML =
      'The user canceled the dialog box.';
    document.getElementById('statusText')!.style.display = 'block';
  }
}



