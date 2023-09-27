

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
                <label> Normal Input </label>
                <div class="e-input-group">
                    <input class="e-input" type="text" (focus)="focusIn($event.target)"
                    placeholder = "Enter numeric values" (blur)="focusOut($event.target)" (keyup)="onKeyup($event)"/>
                </div>
                 <label> Floating Input </label>
                <div class="e-float-input">
                    <input type="text"(focus)="focusIn($event.target)" (blur)="focusOut($event.target)" (keyup)="onKeyup($event)" required/>
                    <span class="e-float-line"></span>
                    <label class="e-float-text">Enter numeric values</label>
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
    public onKeyup(event: any): void {
    let str = event.target.value.match(/^[0-9]+$/);
    if (!((str && str.length > 0)) && event.target.value.length) {
       event.target.parentElement.classList.add('e-error');
    } else {
      event.target.parentElement.classList.remove('e-error');
    }
  }
}



