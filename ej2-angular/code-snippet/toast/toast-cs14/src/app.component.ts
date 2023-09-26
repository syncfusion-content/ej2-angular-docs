



import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <button ejs-button [isPrimary]="true" (click)="btnClick($event)">Show Toast</button>
        <ejs-toast #element (created)="onCreate($event)"  [position] = 'position' >
          <ng-template #template>
             <div id="template_toast_ele">
               <ejs-datepicker></ejs-datepicker>
             </div>
            </ng-template>
           </ejs-toast>`
})

export class AppComponent {
   @ViewChild('element') public element: any;
     public position = { X: 'Right', Y: 'Bottom' };

    onCreate(args: any){
         setTimeout(
        () => {
        this.element.show();
        }, 200);
    }

    btnClick(args: any) {
      this.toastShow();
    }

    toastShow() {
      this.element.show();
    }

}


