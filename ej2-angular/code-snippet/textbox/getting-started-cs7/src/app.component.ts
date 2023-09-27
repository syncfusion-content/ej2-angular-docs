

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
                <div class="e-float-input e-input-group e-success">
                    <input type="text" (focus)="focusIn($event.target)" (blur)="focusOut($event.target)" required/>
                    <span class="e-float-line"></span>
                    <label class="e-float-text">Success</label>
                </div>
                <div class="e-float-input e-input-group e-warning">
                    <input type="text"(focus)="focusIn($event.target)" (blur)="focusOut($event.target)" required/>
                    <span class="e-float-line"></span>
                    <label class="e-float-text">Warning</label>
                </div></div>`
})

export class AppComponent {
    public focusIn(target: any): void {
        target.parentElement.classList.add('e-input-focus');
    }

    public focusOut(target: any): void {
        target.parentElement.classList.remove('e-input-focus');
    }
}



