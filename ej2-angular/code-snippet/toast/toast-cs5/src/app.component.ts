



import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div id="toast_target"></div>
        <button ejs-button [isPrimary]="true" (click)="btnClick($event)">Show Toast</button>
        <ejs-toast #element (created)="onCreate($event)" showCloseButton=true newestOnTop=true showProgressBar=true progressDirection="Ltr" target='#toast_target' [position] = 'position' >
            <ng-template #title>
                <div>File Downloading</div>
            </ng-template>
            <ng-template #content>
                <div class="progress"><span style="width: 80%"></span></div>
            </ng-template>
        </ejs-toast>`
})

export class AppComponent {
    @ViewChild('element') public element: any;
    public position = { X: 'Center' };

    onCreate(args: any) {
      this.element.show();
    }
    btnClick(args: any) {
      this.element.show();
    }
}


