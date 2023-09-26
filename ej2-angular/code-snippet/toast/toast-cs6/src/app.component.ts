



import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div id="toast_target"></div>
        <div id=sample_container>
         <div id='container'>
            <div class='row' style="padding-top: 20px;margin:0" id= "toast_pos_target">
              <table>
                <tr>
                  <td>
                      <div style='padding:25px 0 0 0;'>
                          <ejs-radiobutton (change)="topChange($event)" label="Top" name="position" value="Top"></ejs-radiobutton>
                      </div>
                  </td>
                  <td>
                      <div style='padding:25px 0 0 0;'>
                         <ejs-radiobutton (change)="bottomChange($event)" label="Bottom" name="position" value="Bottom" checked="true"></ejs-radiobutton>
                      </div>
                  </td>
                </tr>
                <tr>
                   <td>
                     <div style='padding:25px 0 0 0;'>
                         <ejs-checkbox #checkbox label="100% Width" (change)="checkBoxChange($event)"></ejs-checkbox>
                      </div>
                   </td>
                </tr>
              </table>
            </div></div>
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
    @ViewChild('element') public toast: any;
    public position = { X: 'Center', Y: 'Bottom' };

    onCreate(args: any) {
      this.toastShow();
    }
    btnClick(args: any) {
      this.toastShow();
    }
    toastShow() {
          setTimeout(
        () => {
            this.toast.show();
        }, 700);
    }

    bottomChange(e: any) {
      let toast = this.toast;
        if (e.event.target.checked) {
      toast.position.Y = "Bottom";
      toast.hide('All');
      this.toastShow();
    }
    }

    topChange(e: any) {
      let toast = this.toast;
      if (e.event.target.checked) {
      toast.position.Y = "Top";
      toast.hide('All');
      this.toastShow();
    }
    }

    checkBoxChange(e: any) {
      let toast = this.toast;
        if (e.checked) {
            toast.hide('All');
            toast.width = "100%";
            toast.title = "";
            toast.content = "<div class='e-custom'>Take a look at our next generation <b>Javascript</b> <a href='https://ej2.syncfusion.com/home/index.html' target='_blank'>LEARN MORE</a></div>";
            this.toastShow();
        } else {
            toast.hide('All');
            toast.width = 300;
            toast.title = 'Matt sent you a friend request',
            toast.content = 'Hey, wanna dress up as wizards and ride our hoverboards?',
            this.toastShow();
        }
    }
}


