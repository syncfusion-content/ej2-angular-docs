


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
                <div class="e-input-group e-corner">
                    <input class="e-input" type="text" (focus)="focusIn($event.target)"
                    placeholder = "Enter Date" (blur)="focusOut($event.target)"/>
                    <span class="e-input-group-icon e-input-popup-date" ></span>
                </div>
                <div class="e-float-input e-input-group e-corner">
                    <input type='text' required />
                    <span class="e-float-line"></span>
                    <label class="e-float-text">Enter Date</label>
                    <span class="e-input-group-icon e-input-popup-date" ></span>
                </div>
               </div>`,
    styleUrls:['./index.css']
})

export class AppComponent {
    public focusIn(target: any): void {
        target.parentElement.classList.add('e-input-focus');
    }

    public focusOut(target: any): void {
        target.parentElement.classList.remove('e-input-focus');
    }
}


