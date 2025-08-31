import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DialogComponent, DialogModule } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DialogModule],
  template: `
    <div #container class="root-container">
      <center>
        <button id="openBtn" class="e-control e-btn" (click)="onOpenDialog($event)">Open</button>
      </center>

      <ejs-dialog
        id="dialog"
        #ejDialog
        header="Delete Multiple Items"
        content="Are you sure you want to permanently delete all of these items?"
        [showCloseIcon]="true"
        [buttons]="buttons"
        [target]="targetElement"
        width="300px"
        height="auto"
        [animationSettings]="{ effect: 'Zoom' }"
        (beforeClose)="onBeforeClose($event)">
      </ejs-dialog>
    </div>
  `
})
export class AppComponent implements OnInit {
  @ViewChild('ejDialog') ejDialog!: DialogComponent;
  @ViewChild('container', { read: ElementRef }) container!: ElementRef;

  public targetElement?: HTMLElement;

  ngOnInit(): void {
    this.initializeTarget();
  }

  public initializeTarget: EmitType<object> = () => {
    this.targetElement = this.container.nativeElement.parentElement;
  };

  public onOpenDialog = (event: any): void => {
    this.ejDialog.show();
  };

  public onBeforeClose(args: any): void {
    args.preventFocus = true;
  }

  public hideDialog: EmitType<object> = () => {
    this.ejDialog.hide();
  };

  public buttons: Object[] = [
    {
      click: this.hideDialog.bind(this),
      buttonModel: {
        content: 'Yes',
        isPrimary: true
      }
    },
    {
      click: this.hideDialog.bind(this),
      buttonModel: {
        content: 'No'
      }
    }
  ];
}
