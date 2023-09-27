


import { Component} from '@angular/core';

@Component({
    selector: 'app-container',
    template: ` <ejs-toolbar>
          <e-items>
           <e-item >
            <ng-template #template>
               <ejs-numerictextbox value="10"></ejs-numerictextbox>
            </ng-template>
            </e-item>
             <e-item >
            <ng-template #template>
                <ejs-datepicker></ejs-datepicker>
            </ng-template>
            </e-item>
             <e-item text='Cut'></e-item>
             <e-item text='Copy'></e-item>
             <e-item text='Paste'></e-item>
             <e-item type='Separator'></e-item>
             <e-item text='Bold'></e-item>
             <e-item text='Italic'></e-item>
             <e-item text='Underline'></e-item>
          </e-items>
        </ejs-toolbar>`
})

export class AppComponent {
}



