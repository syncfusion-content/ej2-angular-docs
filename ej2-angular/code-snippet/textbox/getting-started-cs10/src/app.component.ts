


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
      <h4> Normal Size </h4>
      <input class="e-input" type="text"  placeholder="Enter Name"/>
      <div class="e-float-input">
        <input type='text' required />
        <span class="e-float-line"></span>
        <label class="e-float-text">Enter Name</label>
      </div>
      <div class="e-input-group">
        <input class="e-input" type="text" (focus)="focusIn($event.target)"
        placeholder = "Enter Date" (blur)="focusOut($event.target)"/>
        <span class="e-input-group-icon e-input-popup-date" (mouseup)="onMouseUp($event.target)" (mousedown)="onMouseDown($event.target)"></span>
      </div>
      <h4> Small Size </h4>
      <input class="e-input e-small" type="text"  placeholder="Enter Name"/>
      <div class="e-float-input e-small">
        <input type='text' required />
        <span class="e-float-line"></span>
        <label class="e-float-text">Enter Name</label>
      </div>
      <div class="e-input-group e-small">
        <input class="e-input" type="text" (focus)="focusIn($event.target)"
        placeholder = "Enter Date" (blur)="focusOut($event.target)"/>
        <span class="e-input-group-icon e-input-popup-date" (mouseup)="onMouseUp($event.target)" (mousedown)="onMouseDown($event.target)"></span>
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

    public onMouseDown(target: any): void {
      target.classList.add('e-input-btn-ripple');
    }

    public onMouseUp(target: any): void {
      let ele: HTMLElement = target;
      setTimeout(
        () => {ele.classList.remove('e-input-btn-ripple');
      }, 500);
    }
}


