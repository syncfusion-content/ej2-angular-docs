

import { Component, ViewChild, HostListener } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    styleUrls: ['./style.css'],
    template: ` <!-- Button is active in toggled state. -->
                <button #togglebtn ejs-button cssClass="e-flat" iconCss="e-btn-sb-icon e-play-icon" [isToggle]="true" content="Play"></button>`
})
// Click event handled using HostListener.
export class AppComponent {
    @ViewChild('togglebtn') togglebtn: ButtonComponent | any;
    @HostListener('click', ['togglebtn'])
    btnClick() {
        if(this.togglebtn.element.classList.contains('e-active')){
            this.togglebtn.content = 'Pause';
            this.togglebtn.iconCss = 'e-btn-sb-icon e-pause-icon';
        }
        else {
            this.togglebtn.content = 'Play';
            this.togglebtn.iconCss = 'e-btn-sb-icon e-play-icon';
        }
    }
 }


