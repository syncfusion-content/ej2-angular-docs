import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { Component, ViewChild, OnInit } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
  imports: [DialogModule],
  standalone: true,
  selector: 'app-root',
  template: `
      <div id="dialog-container">
        <button class="e-control e-btn" id="targetButton" (click)="onOpenDialog($event)">Open Dialog</button>
        <ejs-dialog id='dialog' #ejDialog target="#dialog-container" header='Dialog' [showCloseIcon]='true' content='This is a Dialog content'
          width='350px'">
        </ejs-dialog>
      </div>`
})

export class AppComponent implements OnInit {
  ngOnInit(): void { }
  // Reference the Dialog element
  @ViewChild('ejDialog') ejDialog: DialogComponent | any;

  // Show the Dialog when click the button
  public onOpenDialog = (event: any): void => {
    this.ejDialog.show();
  };
}