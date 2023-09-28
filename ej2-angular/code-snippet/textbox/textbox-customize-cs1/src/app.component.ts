

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
                <label> Normal Input </label>
                <div class="e-input-group">
                    <input (focus)="focusIn($event.target)" (blur)="focusOut($event.target)" class="e-input" type="text" placeholder="First Name">
                </div>
                 <label> Floating Input </label>
                <div class="e-float-input">
                    <input (focus)="focusIn($event.target)" (blur)="focusOut($event.target)" type="text" required>
                    <span class="e-float-line"></span>
                    <label class="e-float-text">Last Name</label>
                </div>
              </div>`
})

export class AppComponent {
    public focusIn(target: any): void {
        target.parentElement.classList.add('e-input-focus');
    }

    public focusOut(target: any): void {
        target.parentElement.classList.remove('e-input-focus');
    }
}



