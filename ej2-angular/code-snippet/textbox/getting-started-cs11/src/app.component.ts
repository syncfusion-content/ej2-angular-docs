


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
        <input class="e-input e-warning" type="text" placeholder="Input with warning"/>
        <div class="e-input-group e-error">
            <input class="e-input" type="text" (focus)="focusIn($event.target)"
            placeholder = "Input with error" (blur)="focusOut($event.target)"/>
        </div>
        <div class="e-input-group e-success">
            <input class="e-input" type="text" (focus)="focusIn($event.target)"
            placeholder = "Input with success" (blur)="focusOut($event.target)"/>
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


