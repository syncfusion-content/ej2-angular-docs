



import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div id="toast_target"></div>
        <div id='sample_container'>
         <div id='container'>
            <div class="e-float-input">
               <input class="e-input" id="toast_input_index" required="" value="5000">
               <span class="e-float-line"></span>
               <label class="e-float-text">Enter timeOut</label>
            </div>
        </div>
        <button ejs-button [isPrimary]="true" (click)="btnClick($event)">Show Toast</button>
        </div>
        <ejs-toast #element (created)="onCreate($event)" [position] = 'position' >
              <ng-template #title>
                  <div>Matt sent you a friend request</div>
              </ng-template>
              <ng-template #content>
                  <div>Hey, wanna dress up as wizards and ride our hoverboards?</div>
              </ng-template>
        </ejs-toast>
        `
})

export class AppComponent {
    @ViewChild('element') public element: any;
    public position = { X: 'Right', Y: 'Bottom' };

    onCreate(args: any) {
      this.element.show();
    }
    btnClick(args: any) {
      const value = parseInt((document.getElementById('toast_input_index') as HTMLInputElement).value, 10);
      this.element.show({timeOut: value});
    }
}



