import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations'
import { DialogModule } from '@syncfusion/ej2-angular-popups'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component, ViewChild } from '@angular/core';
import { MenuItemModel, MenuEventArgs } from '@syncfusion/ej2-navigations';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
imports: [
        
        DialogModule,
        ContextMenuModule
    ],


standalone: true,
  selector: 'app-root',
  template: `<div class="e-section-control">
  <div id="target">Right click / Touch hold to open the ContextMenu</div>
  <ejs-dialog #dialog [buttons]='alertDlgButtons' [visible]='visible' content='This file can be saved as PDF' width='200px' height='110px' [position]='position'>
  </ejs-dialog>
  <ejs-contextmenu target="#target" [items]="data" (select)="itemSelect($event)"></ejs-contextmenu></div>`
})

export class AppComponent {
  @ViewChild('dialog')
  public alertDialog?: DialogComponent;

  name = 'Angular';
  data= [
  {
    text: 'Back'
  },
  {
    text: 'Forward'
  },
  {
    text: 'Reload'
  },
  {
    separator: true
  },
  {
    text: 'Save As...'
  },
  {
    text: 'Print'
  },
  {
    text: 'Cast'
  }
  ];

  public visible: Boolean = false;

  public position: any = {X: 100, Y: 100};

  public alertDlgButtons: Object[] = [{
      buttonModel: {
        isPrimary: true,
        content: 'Submit',
        cssClass: 'e-flat',
        },
        click: function () {
          (this as any).hide();
        }
    }];

  public itemSelect(args: MenuEventArgs): void {
    if (args.item.text === "Save As...") {
      (this.alertDialog as DialogComponent).show();
    }
  }
}



