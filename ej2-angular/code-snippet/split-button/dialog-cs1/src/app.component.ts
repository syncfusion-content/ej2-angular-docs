

import { Component, ViewChild } from '@angular/core';
import { ItemModel, MenuEventArgs  } from '@syncfusion/ej2-angular-splitbuttons';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
    selector: 'app-root',
    template: `<!-- To render Dialog. -->
               <ejs-dialog #dialog [buttons]='alertDlgButtons' [visible]='false' content='Are you sure want to update?' width='250px' header='Software Update'>
               </ejs-dialog>
               <!-- To Render splitbutton. -->
               <ejs-splitbutton content="Help" [items]='items' (select)='select($event)'></ejs-splitbutton>`
})

export class AppComponent {
    @ViewChild('dialog')
    public alertDialog?: DialogComponent;

    public items: ItemModel[] = [
    {
        text: 'Help'
    },
    {
        text: 'About'
    },
    {
        text: 'Update...'
    }];

    public alertDlgButtons: Object[] = [{
        buttonModel: {
            isPrimary: true,
            content: 'Ok',
        },
        click: function () {
            (this as any).hide();
        }
    },
    {
        buttonModel: {
            isPrimary: true,
            content: 'Cancel',
        },
        click: function () {
            (this as any).hide();
        }
    }];

    public select (args: MenuEventArgs) {
        if (args.item.text === 'Update...') {
            this.alertDialog!.show();
        }
    }
}


