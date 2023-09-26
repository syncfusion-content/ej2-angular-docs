

import { Component, ViewChild } from '@angular/core';
import { ItemModel, MenuEventArgs, DropDownButtonComponent  } from '@syncfusion/ej2-angular-splitbuttons';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
    selector: 'app-root',
    template: `<!-- To render Dialog. -->
               <ejs-dialog #dialog [buttons]='alertDlgButtons' [visible]='false' content='Move Items To "Web Team"' width='250px' [position]='position'>
                </ejs-dialog>
                <!-- To render DropDownButton. -->
               <button ejs-dropdownbutton #dropdownbutton [items]='items' content='Move' iconCss='ddb-icons e-folder' cssClass='e-vertical' iconPosition='Top' (select)='select($event)'></button>`
})

export class AppComponent {
  @ViewChild('dialog')
  public alertDialog?: DialogComponent;
  @ViewChild('dropdownbutton')
  public dropdownbutton?: DropDownButtonComponent;

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
   // Initialize action items.
   public items: ItemModel[] = [
    {
        text: 'Archive'
    },
    {
        text: 'Inbox'
    },
    {
        text: 'HR Portal'
    },
    {
        separator: true
    },
    {
        text: 'Other Folder...'
    },
    {
        text: 'Copy to Folder'
    }];
    // To open dialog on selecting `Other Folder...` item.
    public select (args: MenuEventArgs) {
       if (args.item.text === 'Other Folder...') {
        this.alertDialog!.show();
      }
    }

}



