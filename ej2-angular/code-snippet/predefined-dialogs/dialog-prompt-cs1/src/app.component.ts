


import { Component, OnInit } from '@angular/core';
import { DialogUtility } from '@syncfusion/ej2-popups';

@Component({
    selector: 'app-root',
    template: `<button ejs-button [isPrimary]="true" #promptButton (click)="promptBtnClick()">Prompt</button><span id="statusText"></span>`
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    public dialogObj : any;
    public promptBtnClick = (): void => {
    document.getElementById('statusText')!.style.display = 'none';
    this.dialogObj = DialogUtility.confirm({
      title: 'Join Chat Group',
      width: '300px',
      content:'<p>Enter your name:</p> <input id= "inputEle" type="text" name="Required" class="e-input" placeholder="Type here.." />',
      okButton: { click: this.promptOkAction.bind(this) },
      cancelButton: { click: this.promptCancelAction.bind(this) },
    });
  };
  private promptOkAction(): void {
    let value: string;
    value = (document.getElementById('inputEle') as any).value;
    if (value == '') {
      this.dialogObj.hide();
      document.getElementById('statusText')!.innerHTML =
        'The user\'s input is returned as" " ';
      document.getElementById('statusText')!.style.display = 'block';
    } else {
      this.dialogObj.hide();
      document.getElementById('statusText')!.innerHTML =
        "The user's input is returned as" + ' ' + value;
      document.getElementById('statusText')!.style.display = 'block';
    }
  }
  private promptCancelAction(): void {
    this.dialogObj.hide();
    document.getElementById('statusText')!.innerHTML =
      'The user canceled the prompt dialog';
    document.getElementById('statusText')!.style.display = 'block';
  }
}



